import requests

url = 'http://127.0.0.1:5000'
token = None
headers = None

def addUser (userName, password, birthday, image):
	data = {
  		"userName": userName,
  		"password": password,
  		"birthday": birthday,
  		"image": image
	}
	r = requests.post(url + '/user/reg', json=data)

def getUser (name):
	return requests.get(url + '/user?name=' + name, headers=headers).text

def login (name, password):
	data = {
		"username" : name,
		"password" : password
	}
	r = requests.post(url + '/auth', json=data)
	return r.json()['access_token']

def flwUser (flwer):
	data = {
		"follower" : flwer
	}
	r = requests.post(url + '/user/flw', headers=headers, json=data)

def getPost (name):
	return requests.get(url + '/post?name=' + name, headers=headers).text

def addPost (content, owner, date, like):
	data = {
		"content" : content,
		"owner" : owner,
		"date" : date,
		"like" : like
	}
	r = requests.post(url + '/post', headers=headers, json=data)

def likePost (postID):
	data = {
		"postID" : postID
	}
	r = requests.post(url + '/post/like', headers=headers, json=data)

def getCmt (postID):
	return requests.get(url + '/post/cmt?postID=' + postID, headers=headers).text

def addCmt (content, owner, date, postID):
	data = {
		"content" : content,
		"owner" : owner,
		"date" : date,
		"postID" : postID
	}
	r = requests.post(url + '/post/cmt', headers=headers, json=data)

#addUser ("minhanh", "minhanh123", "1-2-2012", "YWJj")
#addUser ("tuan", "tuan1234", "1-2-2012", "YWJj")

#token = login("tuan", "tuan1234")
token = login("tuan", "tuan1234")
headers = {'Authorization' : 'JWT ' + token}

#addPost ("Good luck!", "tuan", "1-2-2017", "0")
#flwUser ("tuan")
#addCmt (':)', "minhanh", "1-2-2017", "1")
print getUser ("tuan")
#likePost ("1")