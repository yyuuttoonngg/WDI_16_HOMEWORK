     
require 'sinatra'

get "/" do
  redirect to "/beer/99"
end

get "/beer/:num" do
  @num_bottle = params["num"].to_i
  erb:index
end
