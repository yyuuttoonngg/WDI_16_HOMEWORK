Rails.application.routes.draw do
  # resources :cats
  get '/cats/:id/edit', to: 'cats#edit'
  put '/cats/:id', to: 'cats#update'

  get '/about', to:'pages#about'  #controller name and method
  get '/', to: 'cats#index'
end
