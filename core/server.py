from flask import Flask
from flask_jwt import JWT
from flask_cors import CORS
from apis import api
from database import db, authenticate, identity
from datetime import timedelta

user = 'projects'
host = 'localhost'
password = 'matkhaune'
database = 'ssn'

app = Flask(__name__)
jwt = JWT(authentication_handler=authenticate, identity_handler=identity)
cors = CORS(send_wildcard=True)

app.config['SECRET_KEY'] = 'ce1e355f-77e1-4ddb-828b-76a2f759ce50'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://' + user + ':' + password + '@' + host + '/' + database
#app.config['JWT_AUTH_URL_RULE'] = '/auth'
#app.config['JWT_AUTH_USERNAME_KEY'] = 'userID'
app.config['JWT_EXPIRATION_DELTA'] = timedelta(days=1)

@app.before_first_request
def create_database():
	db.create_all()

cors.init_app(app)
db.init_app(app)
jwt.init_app(app)
api.init_app(app)

if __name__ == '__main__':
	app.run('0.0.0.0', 5000, debug=False)
