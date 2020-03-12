class AddTimesRatedToBathrooms < ActiveRecord::Migration[5.2]
  def change
    add_column :bathrooms, :times_rated, :integer
    change_column :bathrooms, :rating, :float
  end
end
