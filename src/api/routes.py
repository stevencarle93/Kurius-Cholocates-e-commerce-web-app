"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.utils import generate_sitemap, APIException
from api.models import db, User, CoverChocolate, BarChocolate, Bombon,TokenBlockedList
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity, get_jwt
from datetime import date, time, datetime, timezone
from flask_bcrypt import Bcrypt

api = Blueprint('api', __name__)
app = Flask(__name__)
bcrypt = Bcrypt(app)

"""
Landing page access from a registered User
"""
@api.route('/registered_welcome', methods = ['GET'])
@jwt_required()
def registered_welcome():
    user = User.query.get(get_jwt_identity())
    TokenBlocked = TokenBlockedList.query.filter_by(token=get_jwt()['jti']).first()
    
    if isinstance(TokenBlocked, TokenBlockedList):
        return jsonify(msg="Acceso revocado")

    return jsonify(user.serialize()), 200

"""
JWT configuration
"""
@api.route('/signup', methods = ['POST'])
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

@api.route('/login', methods = ['POST'])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user = User.query.filter_by(email = email).first()
    
    if user is None:
        return jsonify({"message": "Login failed, user not found"}), 401
    
    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"message": "Wrong password, please try again"}), 401
    
    access_token = create_access_token(identity = user.id)
    return jsonify({"token": access_token})

@api.route('/logout', methods = ['POST'])
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
