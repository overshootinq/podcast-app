Rails.application.routes.draw do
  resources :user_podcasts
  resources :podcasts
  resources :users

  post '/login', to: 'sessions#create'

  delete '/logout', to: 'sessions#destroy'

  get '/search', to: 'podcasts#search_form', as: 'search'

end