class CreateBathrooms < ActiveRecord::Migration[5.2]
  def change
    create_table :bathrooms do |t|
      t.string :location
      t.integer :rating
      t.boolean :enabled, null: false, default: true
      t.float :latitude
      t.float :longitude

      t.timestamps
    end
  end
end
