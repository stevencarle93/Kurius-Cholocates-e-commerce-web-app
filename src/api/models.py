from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    
    __tablename__ = 'user'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), unique=False, nullable=False)
    last_name = db.Column(db.String(20), unique=False, nullable=False)
    email = db.Column(db.String(20), unique=True, nullable=False)
    password = db.Column(db.String(200), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "last_name": self.last_name,
            "email": self.email
        }

class Order(db.Model):
    
    __tablename__ = 'order'

    id = db.Column(db.Integer, primary_key=True)
    amount = db.Column(db.Integer, unique=True, nullable=False)
    shipping_address = db.Column(db.String(80), nullable=False)
    order_state = db.Column(db.String(80), nullable=False)
    
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship(User)

    def __repr__(self):
        return f'<Order {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "amount": self.amount,
            "shipping_address": self.shipping_address,
            "order_state": self.order_state
        }

class Product(db.Model):
    
    __tablename__ = 'product'

    id = db.Column(db.Integer, primary_key=True)
    product_type = db.Column(db.String(20), unique=True, nullable=False)
    picture = db.Column(db.String(80), unique=False, nullable=True)
    name = db.Column(db.String(20), unique=True, nullable=False)
    product_type = db.Column(db.String(20), unique=True, nullable=False)
    percentage = db.Column(db.Integer, nullable=False)
    description = db.Column(db.String(200), nullable=False)
    presentation = db.Column(db.Float, nullable=False)
    price = db.Column(db.Float(10), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        return f'<Product {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "product_type": self.product_type,
            "name": self.name,
            "percentage": self.percentage,
            "description": self.description,
            "presentation": self.presentation,
            "price": self.price,
            "quantity": self.quantity
        }

class OrderDetail(db.Model):
    
    __tablename__ = 'order_detail'

    id = db.Column(db.Integer, primary_key=True)
    price = db.Column(db.Float(10), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    
    order_id = db.Column(db.Integer, db.ForeignKey('order.id'))
    order = db.relationship(Order)

    product_id = db.Column(db.Integer, db.ForeignKey('product.id'))
    product = db.relationship(Product)

    def __repr__(self):
        return f'<OrderDetail {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "price": self.price,
            "quantity": self.quantity
        }

#List of bloked tokens from authenticated users
class TokenBlockedList(db.Model):

    id = db.Column(db.Integer, primary_key = True)
    token = db.Column(db.String(1000), unique = True, nullable = False)
    email = db.Column(db.String(200), nullable = False, index = True)
    created_at = db.Column(db.DateTime, nullable = False)

    def serialize(self):
        return {
            "id": self.id,
            "token": self.token,
            "email": self.email,
            "created_at": self.created_at
        }