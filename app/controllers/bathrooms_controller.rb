class BathroomsController < ApplicationController
  skip_before_action :authenticate_user!, except: :update

  def index
  	@bathrooms = Bathroom.geocoded
    @bathrooms = @bathrooms.where(enabled: true)              #returns flats with coordinates
    @markers = @bathrooms.map do |bathroom|
      {
        lat: bathroom.latitude,
        lng: bathroom.longitude,
        bathroom_id: bathroom.id,
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

  def create
    @bathroom = Bathroom.new(bathroom_params)
    @bathroom.save
    redirect_to users_path
  end

  def update
    @bathroom = Bathroom.find(params[:id])
    @bathroom.enabled = !@bathroom.enabled
    @bathroom.save
    redirect_to users_path
  end

  private

  def bathroom_params
    params.require(:bathroom).permit(:longitude, :latitude)
  end
end
