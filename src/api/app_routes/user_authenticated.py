import os
from datetime import date, time, datetime, timezone, timedelta
from api.models import db, User, TokenBlockedList
from api.utils import generate_sitemap, APIException
from flask import Flask, Blueprint, request, jsonify
#from firebase_admin import storage
import tempfile, random, string

from flask_jwt_extended import JWTManager, create_access_token, create_refresh_token, jwt_required, get_jwt_identity, get_jwt, get_jti
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_mail import Mail, Message

app = Flask(__name__)
bcrypt = Bcrypt(app)
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

    user = User.query.filter_by(email = email).first()

    if user is None:
        try:
            password = bcrypt.generate_password_hash(password, rounds = None).decode("utf-8")
            user = User(name = name, last_name = last_name, email = email, password = password, is_active = True)
            db.session.add(user)
            db.session.commit()
            return jsonify({"message": "Usuario registrado"}), 201
        except Exception as error:
            db.session.rollback()
            print(error) 
            return jsonify({"message": "UPS! something went wrong... please, come back later"}), 500
    
    return jsonify({"message": "Email already registered, please login"}), 401

@apiAuthUser.route('/login', methods = ['POST'])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user = User.query.filter_by(email = email).first()
    
    if user is None:
        return jsonify({"message": "Login fallido, usuario no encontrado"}), 401
    
    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"message": "Login fallido, clave incorrecta"}), 401

    access_token = create_access_token(identity = user.id)
    access_token_jti = get_jti(access_token)
    refresh_token = create_refresh_token(identity = user.id, additional_claims={"access_token":access_token_jti})
    return jsonify({"token": access_token, "refresh_token": refresh_token })

@apiAuthUser.route('/restore', methods = ['POST'])
def restore_request():
    email = request.json.get("email", None)
    user = User.query.filter_by(email = email).first()

    if user is None:
        return jsonify({"message": "El correo electrónico no está registrado"}), 400
    
    access_token = create_access_token(identity = user.id)
    #access_token = timedelta(minutes = int(2))
    temp_URL = "".join(random.choice(string.ascii_uppercase + string.digits)for x in range(10))
    hashed_URL = bcrypt.generate_password_hash(temp_URL, rounds = None).decode("utf-8")
    setattr(user, "password", hashed_URL)
    db.session.add(user)
    db.session.commit()

    mail = Mail() 
    body = "Haz click en el siguiente link para reestablecer tu contraseña."
    msg = Message('Reestablecimiento de contraseña', sender = 'Kurius chocolate', recipients = [email])
    msg.html = """
    <h2> Hola """ + user.name + """, </h2>
    <p>""" + body + """</p> 
    <a href=" """+ os.getenv("FRONTEND_URL") +"""/restorepassword/"""+ temp_URL +""" ">Click aquí</p> 
    """ 
    mail.send(msg)

    response_body = {
        "email": email,
        "message": "User found",
        "restore_URL": temp_URL
    }
    return jsonify(response_body), 201

@apiAuthUser.route('/restore/<authorization>', methods = ['PATCH'])
def restore_password(authorization):
    password = request.json.get("authorization", None)
    new_password = request.json.get("password", None)
    email = request.json.get("email", None)
    user = User.query.filter_by(email = email).first()

    print(user.password)
    
    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"message": "Login fallido, clave incorrecta"}), 401

    try:
        password = bcrypt.generate_password_hash(new_password, rounds = None).decode("utf-8")
        setattr(user, "password", password)
        db.session.add(user)
        db.session.commit()
        response_body = {
            "message": "Contraseña reestablecida con éxito"
        }
        return jsonify(response_body), 200
    except Exception as error:
        print(error)
        db.session.rollback()
        return jsonify({"message": error}), 400

@apiAuthUser.route('/refresh', methods=['POST'])
@jwt_required(refresh = True)
def refresh ():
    claims = get_jwt()
    refresh_token = claims["jti"]
    access_token = claims["access_token"]
    now = datetime.now(timezone.utc)
    id = get_jwt_identity()
    accessTokenBlocked = TokenBlockedList(token = access_token, created_at = now, email = get_jwt_identity())
    refreshTokenBlocked = TokenBlockedList(token = refresh_token, created_at = now, email = get_jwt_identity())
    db.session.add(accessTokenBlocked)
    db.session.add(refreshTokenBlocked)
    db.session.commit()

    access_token = create_access_token(identity = id)
    access_token_jti = get_jti(access_token)
    refresh_token = create_refresh_token(identity = id, additional_claims = {"access_token":access_token_jti})
    return jsonify({"token":access_token, "refresh_token":refresh_token})

@apiAuthUser.route('/logout', methods = ['POST'])
@jwt_required(verify_type = False)
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