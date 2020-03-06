class BathroomsController < ApplicationController
  skip_before_action :authenticate_user!

  def index
  	@bathrooms = Bathroom.geocoded
    @bathrooms = @bathrooms.where(enabled: true)              #returns flats with coordinates
    @markers = @bathrooms.map do |bathroom|
      {
        lat: bathroom.latitude,
        lng: bathroom.longitude,
        infoWindow: render_to_string(partial: "info_window", locals: { bathroom: bathroom })
      }
    end
  end

  def show
    @bathroom = Bathroom.find(params[:id])
  end

  def done
    @bathroom = Bathroom.find(params[:id])
  end

end
