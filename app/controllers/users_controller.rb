class UsersController < ApplicationController
  def index
  	@bathrooms = Bathroom.geocoded #returns flats with coordinates
    @markers = @bathrooms.map do |bathroom|
      {
        lat: bathroom.latitude,
        lng: bathroom.longitude
      }
    end
    @users = User.all
    @bathroom = Bathroom.new
  end
end
