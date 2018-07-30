require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require_relative 'db_config'
require_relative 'models/planet'

get '/' do 
    @planets = Planet.all.order('id')
    erb :index
end 

get '/planets/add' do
    erb :add
end

post '/planets' do
    planet = Planet.new
    planet.name = params[:name]
    planet.image_url = params[:image_url]
    planet.facts = params[:facts]
    planet.link = params[:link]
    planet.save
    redirect '/'
end 

get '/planets/:id' do
    @planet = Planet.find(params[:id]) 
    erb :details
end

get '/planets/:id/edit' do 
    @planet = Planet.find(params[:id]) 
    erb :edit
end

put '/planets/:id' do
    planet = Planet.find(params[:id])
    planet.name = params[:name]
    planet.image_url = params[:image_url]
    planet.facts = params[:facts]
    planet.link = params[:link]
    planet.save
    redirect '/'
  end
  
get '/planets/:id/delete' do 
    @planet = Planet.find(params[:id]) 
    erb :confirm
end

  delete '/planets/:id' do
    planet = Planet.find(params[:id])
    planet.destroy
    redirect '/'
  end