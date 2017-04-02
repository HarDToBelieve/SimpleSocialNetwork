from flask import request, jsonify
from flask_restful import Resource, Api
from flask_jwt import jwt_required, current_identity
from .errors import JsonRequiredError, JsonInvalidError, BadInput
from .errors import ResourceNotFoundError, UserExistedError
from database import db, User, Relationship, Post
from base64 import b64decode, b64encode
from sqlalchemy import text

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

			with open(result.image, 'r') as f:
				tmp = f.read()
				json['image'] = b64encode(tmp)
				f.close()

			posts = []
			rel = []

			if request.args['name'] == current_identity.userName:
				query = text('select u.userName, u.id from user u, relationship r where r.following_id = ' + str(current_identity.id) + ' and u.id = r.follower_id')
				rel_res = db.engine.execute(query).first()
				for r in rel_res:
					if type(r) is long:
						tmp = unicode(r)
					else:
						tmp = r
					rel.append(tmp)
			else:
				query = text('select * from relationship r, user u where r.following_id = ' + str(current_identity.id) + ' and u.userName = \'' + request.args['name'] + '\' and r.follower_id = u.id')
				result1 = db.engine.execute(query).first()
				if result1:
					rel.append(request.args['name'])

			for r in rel:
				query = text('select * from post where owner = \'' + r + '\' order by date desc')
				result3 = db.engine.execute(query)
				for p in result3:
					tmp = {}
					tmp['postID'] = p.postID
					tmp['like'] = p.like
					tmp['owner'] = r
					tmp['content'] = p.content
					tmp['date'] = p.date
					posts.append(tmp)
			json['posts'] = posts
			json['following_name'] = rel
			return json, 200
		except Exception, e:
			print 'DEBUG', e
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

			directory = '../imgs/' + reqs['userName']
			with open(directory, 'w') as f:
				f.write(b64decode(reqs['image']))
				f.close()

			reqs['image'] = directory
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

class ListUser (Resource):
	def get(self):
		query = text('select userName, id from user')
		result = db.engine.execute(query)
		json = {}
		for r in result:
			json[r.id] = r.userName
		return json, 200