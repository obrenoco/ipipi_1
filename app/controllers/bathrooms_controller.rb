class BathroomsController < ApplicationController
  skip_before_action :authenticate_user!
  def index
    @bathrooms = Bathroom.all
  end
end
