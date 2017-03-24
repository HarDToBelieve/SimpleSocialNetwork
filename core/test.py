from flask import *
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://tuanit96:mianvatu@localhost/ssn'
db = SQLAlchemy(app)

class User(db.Model):
    userID = db.Column(db.Integer, primary_key=True)
    userName = db.Column(db.String(80), unique=True)
    email = db.Column(db.String(80))

    def __init__ (self, userName, email):
        self.userName = userName
        self.email = email

@app.route('/user', methods=['GET'])
def get_user():
    email = request.args.get('email')
    result = User.query.filter_by(email = email)
    if not result:
        abort(400)
    print result[0].userName
    print result[1].userName
    return jsonify({}), 200

@app.route('/user', methods=['POST'])
def post_user():
    if not request.json or not 'name' in request.json:
        abort(400)
    existed_user = User.query.filter_by(userName = request.json['name'])
    if existed_user.first() != None:
        abort (409)
    new_user = User(request.json['name'], request.json['email'])
    db.session.add (new_user)
    db.session.commit ()
    return jsonify({
                'user': new_user.userName,
                'email': new_user.email
                }), 201

if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)
