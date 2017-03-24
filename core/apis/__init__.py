from flask_restful import abort, Api, Resource
from users import UserInfo, UserFlw, UserReg, ListUser
from posts import PostInfo, PostLike, PostComment

errors = {
	'UserExistedError': {
		'message': "The specified account already exists.",
		'status': 409,
	},
	'ResourceNotFoundError': {
		'message': "The specified resource does not exist.",
		'status': 404,
	},
	'InsufficientPermissionError': {
		'message': "Read operations are currently disabled.",
		'status': 403,
	},
	'JsonInvalidError': {
		'message': "One of the request inputs is not valid.",
		'status': 400,
	},
	'JsonRequiredError': {
		'message': "This method requires JSON as input; please set Content-Type header to 'application/json'.",
		'status': 400,
	},
	'JWTError': {
		'message': "Login failed.",
		'status': 401,
	},
	'BadInput': {
		'message': "Bad parameters.",
		'status': 400
	}
}

api = Api(errors=errors, catch_all_404s=True)

api.add_resource(UserInfo, '/user')
api.add_resource(UserReg, '/user/reg')
api.add_resource(UserFlw, '/user/flw')
api.add_resource(PostInfo, '/post')
api.add_resource(PostLike, '/post/like')
api.add_resource(PostComment, '/post/cmt')
api.add_resource(ListUser, '/user/list')