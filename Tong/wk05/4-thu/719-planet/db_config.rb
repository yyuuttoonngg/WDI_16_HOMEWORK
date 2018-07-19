require 'active_record'

options ={
    adapter: 'postgresql',
    database: 'planet_db'
}

ActiveRecord::Base.establish_connection(options)