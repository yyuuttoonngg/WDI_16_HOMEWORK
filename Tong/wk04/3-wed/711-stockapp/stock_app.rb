# https://gist.github.com/epoch/54a95fe5c4d595a3285bfb29490923f2#file-stocks-md

require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'

get '/' do
    stock = StockQuote::Stock.quote(params['stock'])
    @name = stock.company_name
    @price = stock.latest_price 
    erb(:index)
end