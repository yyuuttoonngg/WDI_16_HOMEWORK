require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'
require 'pg'

def run_sql(sql)
  conn = PG.connect(dbname:'movies')
  result = conn.exec(sql)
  conn.close
  return result
end

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
      id = @movies_arr["Search"][0]["imdbID"]
      redirect "/movie?id=#{id}"
    else
      @titles_arr = @movies_arr["Search"]      
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
  @exist_id = run_sql("select id from movies where imdbID = '#{@id}';")
  if @exist_id.ntuples == 0
    url = 'http://omdbapi.com/?i=' + @id + '&apikey=2f6435d9'
    result = HTTParty.get(url)
    @movie = result.parsed_response
    dbresult = run_sql("insert into movies (imdbID,Title,Year,Poster) values ('#{@movie['imdbID']}','#{@movie['Title']}',#{@movie['Year'].to_i},'#{@movie['Poster']}');")
    @title = @movie['Title']
    @year = @movie['Year']
    @poster =@movie['Poster']
  else
    @movie = run_sql("select * from movies where imdbID = '#{@id}';")[0]
    @title = @movie['title']
    @year = @movie['year']
    @poster =@movie['poster']
  end
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




