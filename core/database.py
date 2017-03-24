from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()

class User(db.Model):
	__tablename__ = 'user'
	id = db.Column(db.Integer, primary_key=True)
	userName = db.Column(db.String(100), unique=True)
	password = db.Column(db.String(100))
	birthday = db.Column(db.String(100))
	image = db.Column(db.String(100))

	def __init__ (self, userName, password, birthday, image):
		self.userName = userName
		self.password = generate_password_hash(password, 'pbkdf2:sha1')
		self.birthday = birthday
		self.image = image

class Relationship(db.Model):
	__tablename__ = 'relationship'
	relID = db.Column(db.Integer, primary_key=True)
	follower_id = db.Column(db.Integer)
	following_id = db.Column(db.Integer)

	def __init__ (self, follower_id, following_id):
		self.follower_id = follower_id
		self.following_id = following_id

class Post(db.Model):
	__tablename__ = 'post'
	postID = db.Column(db.Integer, primary_key=True)
	content = db.Column(db.String(100))
	owner = db.Column(db.String(100))
	date = db.Column(db.String(100))
	like = db.Column(db.Integer)

	def __init__ (self, content, owner, date, like):
		self.content = content
		self.owner = owner
		self.date = date
		self.like = like

class Comment(db.Model):
	__tablename__ = 'comment'
	cmtID = db.Column(db.Integer, primary_key=True)
	content = db.Column(db.String(100))
	owner = db.Column(db.String(100))
	date = db.Column(db.String(100))
	postID = db.Column(db.Integer)

	def __init__ (self, content, owner, date, postID):
		self.content = content
		self.owner = owner
		self.date = date
		self.postID = postID

def authenticate(username, password):
	result = User.query.filter_by(userName = username).first()
	if result and check_password_hash(result.password, password):
		return result

def identity(payload):
	ID = payload['identity']
	return User.query.filter_by(id = ID).first()
