Rails.application.routes.draw do

  root 'pages#index'

  # post '/login',    to: 'sessions#create'
  # post '/logout',   to: 'sessions#destroy'
  # get '/logged_in', to: 'sessions#is_logged_in?'

  namespace :api do
    namespace :v1 do
      resources :users, only: [:create, :show, :index] do
        resources :items, only: [:create, :show, :index, :destroy]
      end
      resources :lists
      resources :cards
      resources :tags
    end
  end

  get '*path', to: 'pages#index', via :all

end
  
  # post '/users',         to: 'users#create'
  # get '/users/:user_id', to: 'users#show'
  # get '/users',          to: 'users#index'


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
