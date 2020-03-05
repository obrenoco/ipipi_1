class Bathroom < ApplicationRecord
  has_many :bathroom_tags
  has_many :tags, through: :bathroom_tags
end
