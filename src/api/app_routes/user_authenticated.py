from datetime import date, time, datetime, timezone, timedelta
from api.models import db, User, TokenBlockedList
from api.utils import generate_sitemap, APIException
from flask import Flask, Blueprint, request, jsonify
#from firebase_admin import storage
import tempfile

from flask_jwt_extended import JWTManager, create_access_token, create_refresh_token, jwt_required, get_jwt_identity, get_jwt
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from datetime import date, time, datetime, timezone

app = Flask(__name__)
bcrypt = Bcrypt(app)
db = SQLAlchemy(app)
jwt = JWTManager(app)

apiAuthUser = Blueprint('apiAuthUser', __name__)

"""
Checkout page access from registered User
"""
@apiAuthUser.route('/checkout', methods = ['GET'])
@jwt_required()
def registered_welcome():
    user = User.query.get(get_jwt_identity())
    TokenBlocked = TokenBlockedList.query.filter_by(token=get_jwt()['jti']).first()
    
    if isinstance(TokenBlocked, TokenBlockedList):
        return jsonify(msg = "Access revoked. Please, you must login again")

    return jsonify(user.serialize()), 200

"""
JWT authentication
"""
@apiAuthUser.route('/signup', methods = ['POST'])
def signup():
    name = request.json.get("name", None)
    last_name = request.json.get("last_name", None)
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    
    try:
        password = bcrypt.generate_password_hash(password, rounds = None).decode("utf-8")
        user = User(name = name, last_name = last_name, email = email, password = password, is_active = True)
        db.session.add(user)
        db.session.commit()
        return jsonify({"message": "User registered"}), 201
    except Exception as error:
        db.session.rollback()
        print(error) 
        return jsonify({"message": "UPS! something went wrong... please, comeback later"}), 500

@apiAuthUser.route('/login', methods = ['POST'])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user = User.query.filter_by(email = email).first()
    
    if user is None:
        return jsonify({"message": "Login failed, user not found"}), 401
    
    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"message": "Wrong password, please try again"}), 401
    

    refresh_token = create_refresh_token(identity = user.id)
    access_token = create_access_token(identity = user.id)
    return jsonify({"token": access_token, "refresh_token": refresh_token })

@apiAuthUser.route('/refresh', methods=['POST'])
@jwt_required(refresh=True)
def refresh ():
    identity = get_jwt_identity()
    access_token = create_access_token(identity=identity)
    return jsonify(access_token=access_token)

@apiAuthUser.route('/logout', methods = ['POST'])
@jwt_required()
def logout():
    jwt = get_jwt()["jti"]
    now = datetime.now(timezone.utc)

    try:
        tokenBlocked = TokenBlockedList(token = jwt, created_at = now, email = get_jwt_identity())
        db.session.add(tokenBlocked)
        db.session.commit()
        return jsonify( msg = "Access revoked. Please, you must login again") 
    except Exception as error:
        db.session.rollback()
        print(error) 
        return jsonify({"message": "UPS! something went wrong... please, comeback later"}), 500

@jwt.token_in_blocklist_loader
def check_if_token_revoked(jwt_header, jwt_payload: dict) -> bool:
    jti = jwt_payload["jti"]
    token = db.session.query(TokenBlockedList.id).filter_by(jti = jti).scalar()
    return token is not None