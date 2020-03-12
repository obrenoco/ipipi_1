Rails.application.routes.draw do
  devise_for :users
  root to: 'bathrooms#index'
  resources :bathrooms, only: [:index, :show, :create] do
    member do
      get 'done'
    end
  end
  resources :users, only: [:index]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
