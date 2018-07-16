require 'sinatra'
require 'httparty'

get '/' do
  erb :index
end

get '/movie' do
  @t = params[:t]
  if @t ==''
    redirect '/'
  else
    url = 'http://omdbapi.com/?t='+@t+'&apikey=2f6435d9'
    result = HTTParty.get(url)
    html = result.parsed_response.to_s
    html = result.parsed_response
    @title = html['Title']
    @year = html['Year']
    @poster = html['Poster']
  end
  erb :movie
end

get '/about' do
  erb :about
end


