from flask import request, jsonify
from flask_restful import Resource, Api
from flask_jwt import jwt_required, current_identity
from .errors import JsonRequiredError, JsonInvalidError, BadInput
from .errors import InsufficientPermissionError, ResourceNotFoundError
from database import db, Post, User, Relationship, Comment
from sqlalchemy import text

class PostInfo (Resource):
	decorators = [jwt_required()]
	def get (self):
		try:
			query = text('select p.owner, p.postID, p.like, p.content, p.date from post p, relationship r, user u where p.owner = u.userName and r.follower_id = u.id and r.following_id = ' + str(current_identity.id) + ' order by p.date desc')
			result = db.engine.execute(query)

			json = {}
			posts = []
			for p in result:
				tmp = {}
				tmp['owner'] = p.owner
				tmp['postID'] = p.postID
				tmp['like'] = p.like
				tmp['content'] = p.content
				tmp['date'] = p.date
				posts.append(tmp)
			json['posts'] = posts
			return json, 200
		except KeyError:
			raise BadInput()

	def post (self):
		reqs = request.get_json(force=True)
		if not reqs:
			raise JsonRequiredError()

		try:
			if reqs['owner'] != current_identity.userName:
				raise InsufficientPermissionError()

			new_post = Post(**reqs)
			db.session.add(new_post)
			db.session.commit()
			return {}, 201
		except KeyError:
			raise JsonInvalidError()

class PostLike (Resource):
	decorators = [jwt_required()]

	def post (self):
		reqs = request.get_json(force=True)
		if not reqs:
			raise JsonRequiredError()

		try:
			result = Post.query.filter_by(postID = reqs['postID']).first()
			if not result:
				raise ResourceNotFoundError()
			result.like += 1
			db.session.commit()
			return {}, 201
		except KeyError:
			raise JsonInvalidError()


class PostComment (Resource):
	decorators = [jwt_required()]

	def get (self):
		try:
			query = text('select c.content, c.owner, c.date from comment c, relationship r, user u where c.postID=' + str(request.args['postID']) + ' and c.owner=u.userName and r.follower_id=u.id and r.following_id=' + str(current_identity.id))
			result = db.engine.execute(query)
			cmts = []
			
			for c in result:
				tmp = {}
				tmp['content'] = c.content
				tmp['owner'] = c.owner
				tmp['date'] = c.date
				cmts.append(tmp)
			res = {}
			res['Comment'] = cmts
			return res, 200
		except KeyError:
			raise BadInput()

	def post (self):
		reqs = request.get_json(force=True)
		if not reqs:
			raise JsonRequiredError()

		try:
			query = text('select p.postID from relationship r, user u, post p where p.postID=' + str(reqs['postID']) + ' and p.owner=u.userName and r.follower_id=u.id and r.following_id=' + str(current_identity.id))
			result = db.engine.execute(query).first()

			if result:
				new_cmt = Comment(**reqs)
				db.session.add(new_cmt)
				db.session.commit()
			return {}, 201
		except KeyError:
			raise JsonInvalidError()