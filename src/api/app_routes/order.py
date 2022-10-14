import tempfile
from api.models import db, Order, OrderDetail
from api.utils import generate_sitemap, APIException
from flask import Flask, Blueprint, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager, jwt_required, get_jwt_identity

app = Flask(__name__)
jwt = JWTManager(app)

apiOrder = Blueprint('apiOrder', __name__)

@apiOrder.route('/orders', methods = ['GET'])
def get_orders():

    orders = Order.query.all()
    orders = list(map(lambda order: order.serialize(), orders))

    return jsonify(orders), 200

@apiOrder.route('/order/<order_id>', methods = ['GET'])
def get_order(order_id):

    order = Order.query.get(order_id)

    if isinstance(order, Order):
        return jsonify(order.serialize()), 200
    else:
        return jsonify({"messsage":"order not found"})

@apiOrder.route('/order', methods=['POST'])
@jwt_required()
def register_order():

    user = get_jwt_identity()
    order = Order()
    order_body = request.json[1]
    order_detail_body = request.json[0]
    
    order.shipping_address = order_body["shipping_address"]
    order.order_state = order_body["order_state"]
    order.user_id = user
    
    try:        
        db.session.add(order)
        db.session.commit()

        for i in order_detail_body:
            order_detail = OrderDetail()

            order_detail.price = i["price"]
            order_detail.quantity = i["quantity"]
            order_detail.product_id = i["id"]
            order_detail.order_id = order.id
            
            try:
                db.session.add(order_detail)
                db.session.commit()
                print(jsonify(order_detail.serialize()))
            except Exception as error:
                print(error)
                db.session.rollback()
                return jsonify({"message":"something went wrong registering a new order detail"}), 400

        return jsonify(order.serialize(), order_detail.serialize()), 201
        
    except Exception as error:
        print(error)
        db.session.rollback()
        return jsonify({"message":"something went wrong registering a new order"}), 400

@apiOrder.route('/order/<order_id>', methods=['PUT'])
def update_order(order_id):

    body = request.json
    order = Order.query.get(order_id)
    
    order.shipping_address = body["shipping_address"]
    order.order_state = body["order_state"]

    try:        
        db.session.add(order)
        db.session.commit()
        return jsonify(order.serialize()), 201
    except Exception as error:
        print(error)
        db.session.rollback()
        return jsonify({"message":"something went wrong updating this order"}), 400

@apiOrder.route('/order/<order_id>', methods=['DELETE'])
def delete_order(order_id):

    order = Order.query.get(order_id)

    if order:
        db.session.delete(order)
        try:
            db.session.commit()
            return jsonify({"message": "order deleted successfully"}), 200
        except Exception as error:
            print(error)
            db.session.rollback()
            return jsonify({"message": "order doesn't exist"}), 400