Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  resources :bathrooms, only: [:index, :show, :create, :update] do
    member do
      post 'add_rating'
      get 'done'
    end
  end

  resources :users, only: [:index]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
