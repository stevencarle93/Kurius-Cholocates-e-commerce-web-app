import tempfile
from api.models import db, Product
from api.utils import generate_sitemap, APIException
from flask import Flask, Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from firebase_admin import storage
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
db = SQLAlchemy(app)

apiProduct = Blueprint('apiProduct', __name__)

@apiProduct.route('/uploadPhoto', methods = ['POST'])
@jwt_required()
def uploadPhoto():
    # Se recibe un archivo en la peticion
    file = request.files['productPicture']
    product_name = request.form['name']
    # Extraemos la extension del archivo
    extension = file.filename.split(".")[1]
    # Se genera el nombre de archivo con el id de la imagen y la extension
    filename = "product/" + str(get_jwt_identity()) + "." + extension
    # Guardar el archivo recibido en un archivo temporal
    temp = tempfile.NamedTemporaryFile(delete=False)
    file.save(temp.name)
    # Subir el archivo a firebase
    ## Se llama al bucket
    bucket = storage.bucket(name="gs://kuriuschocolate.appspot.com")
    ## Se hace referencia al espacio dentro del bucket
    blob = bucket.blob(filename)
    ## Se sube el archivo temporal al espacio designado en el bucket
    # Se debe especificar el tipo de contenido en base a la extension
    blob.upload_from_filename(temp.name,content_type="image/"+extension)
    
    #Buscamos el usuario en la BD partiendo del id del token
    user = User.query.get(get_jwt_identity())
    if user is None:
        return "Usuario no encontrado", 403
    # Actualizar el campo de la foto
    user.picture=filename
    # Se crear el registro en la base de datos 
    db.session.add(user)
    db.session.commit()
    
    return "Ok", 200