from flask import request, jsonify
from flask_restful import Resource, Api
from flask_jwt import jwt_required, current_identity
from .errors import JsonRequiredError, JsonInvalidError, BadInput
from .errors import ResourceNotFoundError, UserExistedError
from database import db, User, Relationship, Post

class UserInfo (Resource):
	decorators = [jwt_required()]
	def get(self):
		try:
			result = User.query.filter_by(userName = request.args['name']).first()

			if not result:
				raise ResourceNotFoundError()

			json = {}
			json['id'] = result.id
			json['name'] = result.userName
			json['birthday'] = result.birthday
			json['image'] = result.image

			query = text('select u.userName from user u, relationship r where r.following_id = u.id and u.userName = ' + result.userName)
			json['following_id'] = db.engine.execute(query)
			post = []

			result = Relationship.query.filter_by(follower_id = result.id, following_id = current_identity.id)
			if result:
				result = Post.query.filter_by(owner = result.userName).order_by(Post.date.desc())
				for p in result:
					tmp = {}
					tmp['postID'] = p.postID
					tmp['like'] = p.like
					tmp['content'] = p.content
					tmp['date'] = p.date
					posts.append(tmp)
			json['posts'] = posts
			return json, 200
		except:
			raise BadInput()

class UserReg (Resource):
	def post(self):
		reqs = request.get_json(force=True)
		if not reqs:
			raise JsonRequiredError()

		try:
			result = User.query.filter_by(userName = reqs['userName']).first()
			if result:
				raise UserExistedError()

			new_user = User(**reqs)
			db.session.add(new_user)
			db.session.commit()

			new_user_id = User.query.filter_by(userName = reqs['userName']).first().id
			self_rel = Relationship(new_user_id, new_user_id)
			db.session.add(self_rel)
			db.session.commit()

			return {}, 201
		except KeyError:
			raise JsonInvalidError()

class UserFlw (Resource):
	decorators = [jwt_required()]

	def post (self):
		reqs = request.get_json(force=True)
		if not reqs:
			raise JsonRequiredError()

		try:
			u = User.query.filter_by(userName = reqs['follower']).first()
			if not u:
				raise ResourceNotFoundError()

			result = Relationship.query.filter_by(follower_id = u.id, following_id = current_identity.id).first()
			if not result:
				new_rel = Relationship(u.id, current_identity.id)
				db.session.add(new_rel)
				db.session.commit()
			return {}, 201
		except KeyError:
			raise JsonInvalidError()
