class BathroomsController < ApplicationController
  skip_before_action :authenticate_user!

  def index
  	@bathrooms = Bathroom.geocoded #returns flats with coordinates
    @markers = @bathrooms.map do |bathroom|
      {
        lat: bathroom.latitude,
        lng: bathroom.longitude
      }
    end
    @bathrooms = Bathroom.all
  end
end
