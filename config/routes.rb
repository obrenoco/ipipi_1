Rails.application.routes.draw do
  devise_for :users

  root to: 'pages#home'
  resources :bathrooms, only: [:index, :show, :done, :create, :update]

  resources :users, only: [:index]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
