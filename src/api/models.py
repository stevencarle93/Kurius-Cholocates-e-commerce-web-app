from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    
    __tablename__ = 'user'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), unique=True, nullable=False)
    last_name = db.Column(db.String(20), unique=True, nullable=False)
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
    
    """     cover_chocolate_id = db.Column(db.Integer, db.ForeignKey('cover_chocolate.id'))
    cover_chocolate = db.relationship(CoverChocolate)

    bar_chocolate_id = db.Column(db.Integer, db.ForeignKey('bar_chocolate.id'))
    bar_chocolate = db.relationship(BarChocolate)

    bombon_id = db.Column(db.Integer, db.ForeignKey('bombon.id'))
    bombon = db.relationship(Bombon) """

class CoverChocolate(db.Model):
    
    __tablename__ = 'cover_chocolate'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), unique=True, nullable=False)
    percentage = db.Column(db.Integer, nullable=False)
    description = db.Column(db.String(200), nullable=False)
    presentation = db.Column(db.Float, nullable=False)
    price = db.Column(db.Float(10), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship(User)

    def __repr__(self):
        return f'<CoverChocolate {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "percentage": self.percentage,
            "description": self.description,
            "presentation": self.presentation,
            "price": self.price,
            "quantity": self.quantity
        }

class BarChocolate(db.Model):
    
    __tablename__ = 'bar_chocolate'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), unique=True, nullable=False)
    percentage = db.Column(db.Integer, nullable=False)
    description = db.Column(db.String(200), nullable=False)
    price = db.Column(db.Float, nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship(User)

    def __repr__(self):
        return f'<BarChocolate {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "percentage": self.percentage,
            "description": self.description,
            "price": self.price,
            "quantity": self.quantity
        }

class Bombon(db.Model):
    
    __tablename__ = 'bombon'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), unique=True, nullable=False)
    percentage = db.Column(db.Integer, nullable=False)
    description = db.Column(db.String(200), nullable=False)
    presentation = db.Column(db.String(200), nullable=False)
    price = db.Column(db.Float, nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship(User)

    def __repr__(self):
        return f'<Bombon {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "percentage": self.percentage,
            "description": self.description,
            "presentation": self.presentation,
            "price": self.price,
            "quantity": self.quantity
        }

class TokenBlockedList(db.Model):

    id = db.Column(db.Integer, primary_key = True)
    token = db.Column(db.String(200), unique = True, nullable = False)
    email = db.Column(db.String(200), nullable = False, index = True)
    created_at = db.Column(db.DateTime, nullable = False)

    def serialize(self):
        return {
            "id": self.id,
            "token": self.token,
            "email": self.email,
            "created_at": self.created_at
        } 