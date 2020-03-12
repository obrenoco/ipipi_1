class UsersController < ApplicationController
  def index
  	@bathrooms = Bathroom.geocoded #returns flats with coordinates
    @markers = @bathrooms.map do |bathroom|
      {
        lat: bathroom.latitude,
        lng: bathroom.longitude,
        infoWindow: render_to_string(partial: "info_window", locals: { bathroom: bathroom })

      }
    end
    @users = User.all
    @bathroom = Bathroom.new
  end
end
