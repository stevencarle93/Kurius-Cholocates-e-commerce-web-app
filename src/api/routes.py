from flask import Flask, request, jsonify, url_for, Blueprint
from api.utils import generate_sitemap, APIException
from api.models import db, User, Order, OrderDetail, Product, TokenBlockedList
from api.app_routes import apiAuthUser

#from flask_jwt_extended import JWTManager, create_access_token, create_refresh_token, jwt_required, get_jwt_identity, get_jwt
from flask_sqlalchemy import SQLAlchemy
#from flask_bcrypt import Bcrypt
#from datetime import date, time, datetime, timezone

api = Blueprint('api', __name__)

app = Flask(__name__)
#bcrypt = Bcrypt(app)
db = SQLAlchemy(app)
#jwt = JWTManager(app)

api.register_blueprint(apiAuthUser)

@api.route('/main_page', methods=['POST', 'GET'])
def landing_page():
    response_body = {
        "message": "Kurius chocolate landingpage"
    }

    return jsonify(response_body), 200
