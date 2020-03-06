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

  def show
    @bathroom = Bathroom.find(params[:id])
  end

  def done
    @bathroom = Bathroom.find(params[:id])
  end

  def create
    @bathroom = Bathroom.new(bathroom_params)
    @bathroom.save
    redirect_to users_path
  end


  private

  def bathroom_params
    params.require(:bathroom).permit(:longitude, :latitude)
  end
end
