class Bathroom < ApplicationRecord
  has_many :bathroom_tags
  has_many :tags, through: :bathroom_tags
  geocoded_by :address
  after_validation :geocode, if: :will_save_change_to_address?
end
