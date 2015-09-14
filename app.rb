require 'sinatra'
require 'sinatra/reloader' if development?
require 'json'

set :public_folder, File.dirname(__FILE__) + '/public'

set :port, 4567

get '/' do
    erb :index
end

# 不跨域
get '/get' do
    r = {a:1, b:2, succ:0}
    JSON.pretty_generate(r)
end


