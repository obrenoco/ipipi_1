class CreateBathroomTags < ActiveRecord::Migration[5.2]
  def change
    create_table :bathroom_tags do |t|
      t.references :bathroom, foreign_key: true
      t.references :tag, foreign_key: true

      t.timestamps
    end
  end
end
