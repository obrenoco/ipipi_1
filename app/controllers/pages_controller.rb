class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home]

  def home
  end

  def index
    @bathrooms = Bathroom.geocoded #returns flats with coordinates

    @markers = @bathrooms.map do |flat|
      {
        lat: bathroom.latitude,
        lng: bathroom.longitude
      }
    end
  end
end
