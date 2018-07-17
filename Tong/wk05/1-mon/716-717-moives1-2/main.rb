require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

get '/' do
  erb :index
end

get '/search' do
  @input = params[:s]
  File.open('history.txt',"a") do |line|
    line.puts "#{Time.now} search key word: " + params[:s]
  end
  if @input ==''
    redirect '/'
  else
    url = 'http://omdbapi.com/?s='+@input+'&apikey=2f6435d9'
    results = HTTParty.get(url)
    @movies_arr = results.parsed_response    
    if @movies_arr["Response"]=="False"
      redirect '/error'
    elsif @movies_arr["Search"].length == 1
      p 'hjhdhdhdhd'
      id = @movies_arr["Search"][0]["imdbID"]
      p id
      redirect "/movie?id=#{id}"
    else
      @titles_arr = @movies_arr["Search"].map { |movie| "<a href='/movie?id=#{movie['imdbID']}'>#{movie['Title']}</a>" }
      @titles = @titles_arr.join'<br>'
    end
  end
  erb :search
end



get '/about' do
  erb :about
end

get '/error' do
  erb :error
end

get '/movie' do
  @id = params[:id]
  url = 'http://omdbapi.com/?i=' + @id + '&apikey=2f6435d9'
  result = HTTParty.get(url)
  @movie = result.parsed_response
  p @movie
  erb :movie
end

get '/history' do
  @arr = []
  File.open("history.txt", "r") do |f|
    f.each_line do |line|
      @arr.push("<p>#{line.chomp}</p>")
    end
  end
  erb :history
end


# is there a way to pass @movies_arr to the next get do method?????
# get '/moive/:title' do
#   p @movies_arr ---cant !! 
  # @title=params[:title]
  # i = @movies_arr.index{|movie|movie["Title"]==@title}
  # @year = @movies_arr[i]["Year"]
  # @poster = @movies_arr[i]["Poster"]

  # erb :movie
# end


