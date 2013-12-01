require 'koala'

api_key = 178334599020182
app_secret = "5a0810e5ed729cb84bd7c55bb589d816"
callback_url = "http://madtreebrewing.com"

@graph = Koala::Facebook::API.new
@oauth = Koala::Facebook::OAuth.new(api_key, app_secret, callback_url)

data = @graph.get_object("madtree")

puts data
