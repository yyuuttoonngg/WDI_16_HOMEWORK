# https://gist.github.com/epoch/54a95fe5c4d595a3285bfb29490923f2#file-stocks-md

require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'

get '/' do
  if params[:stock_symbol]
    @stock = StockQuote::Stock.quote(params[:stock_symbol])
  end
  erb :index
end
