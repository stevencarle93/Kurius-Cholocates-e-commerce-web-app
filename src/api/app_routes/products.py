import tempfile
from api.models import db, Product
from api.utils import generate_sitemap, APIException
from flask import Flask, Blueprint, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

apiProduct = Blueprint('apiProduct', __name__)

@apiProduct.route('/products', methods = ['GET'])
def get_products():

    products = Product.query.all()
    products = list(map(lambda product: product.serialize(), products))

    return jsonify(products), 200

@apiProduct.route('/product/<product_id>', methods = ['GET'])
def get_product(product_id):

    product = Product.query.get(product_id)

    if isinstance(product, Product):
        return jsonify(product.serialize()), 200
    else:
        return jsonify({"messsage":"product not found"})

@apiProduct.route('/product', methods=['POST'])
def register_product():

    product = Product()
    body = request.json
    
    product.product_type = body["product_type"]
    product.name = body["name"]
    product.percentage = body["percentage"]
    product.description = body["description"]
    product.curva_temperatura = body["curva_temperatura"]
    product.uso = body["uso"]
    product.perfil_organoleptico = body["perfil_organoleptico"]
    product.fluidez = body["fluidez"]
    product.presentation = body["presentation"]
    product.price = body["price"]
    product.quantity = body["quantity"]

    try:        
        db.session.add(product)
        db.session.commit()
        return jsonify(product.serialize()), 201
    except Exception as error:
        print(error)
        db.session.rollback()
        return jsonify({"message":"something went wrong registering a new product"}), 400

@apiProduct.route('/product/<product_id>', methods=['PUT'])
def update_product(product_id):

    body = request.json
    product = Product.query.get(product_id)
    
    product.product_type = body["product_type"]
    product.name = body["name"]
    product.percentage = body["percentage"]
    product.description = body["description"]
    product.curva_temperatura = body["curva_temperatura"]
    product.uso = body["uso"]
    product.perfil_organoleptico = body["perfil_organoleptico"]
    product.fluidez = body["fluidez"]
    product.presentation = body["presentation"]
    product.price = body["price"]
    product.quantity = body["quantity"]

    try:        
        db.session.add(product)
        db.session.commit()
        return jsonify(product.serialize()), 201
    except Exception as error:
        print(error)
        db.session.rollback()
        return jsonify({"message":"something went wrong updating this product"}), 400

@apiProduct.route('/product/<product_id>', methods=['DELETE'])
def delete_product(product_id):

    product = Product.query.get(product_id)

    if product:
        db.session.delete(product)
        try:
            db.session.commit()
            return jsonify({"message": "Product deleted successfully"}), 200
        except Exception as error:
            print(error)
            db.session.rollback()
            return jsonify({"message": "Product doesn't exist"}), 400