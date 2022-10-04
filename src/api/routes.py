from flask import Flask, request, jsonify, url_for, Blueprint
from api.utils import generate_sitemap, APIException
from api.models import db, User, Order, OrderDetail, Product, TokenBlockedList
from api.app_routes import apiAuthUser, apiProduct, apiOrder, apiOrderDetail
from flask_sqlalchemy import SQLAlchemy

api = Blueprint('api', __name__)
app = Flask(__name__)

api.register_blueprint(apiAuthUser)
api.register_blueprint(apiProduct)
api.register_blueprint(apiOrder)
api.register_blueprint(apiOrderDetail)

@api.route('/main_page', methods=['POST', 'GET'])
def landing_page():
    response_body = {
        "message": "Kurius chocolate landingpage"
    }

    return jsonify(response_body), 200
