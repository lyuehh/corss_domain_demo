require 'sinatra'
require 'sinatra/reloader' if development?
require 'sinatra/cross_origin'
require "sinatra/jsonp"
require 'json'

configure do
  enable :cross_origin
end

options "*" do
    response.headers["Allow"] = "HEAD,GET,PUT,POST,DELETE,OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Cache-Control, Accept"
    200
end

set :port, 1234

set :public_folder, File.dirname(__FILE__) + '/public'

# cors 跨域
get '/cors' do
    content_type :json
    r = {succ:0, msg:"cors ok"}
    JSON.pretty_generate(r)
end

# image跨域
get '/img' do
    puts request.query_string
    # send_file 'cat.jpg'
end

# jsonp 跨域
get '/jsonp' do
    data = ["hello","hi","hallo"]
    jsonp data, 'cb'
end

# 获取post 数据
post '/postjson' do
    content_type :json
    a = JSON.parse(request.body.read)
    JSON.pretty_generate(a)
end
