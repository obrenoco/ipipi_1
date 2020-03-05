# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Bathroom.destroy_all

Bathroom.create!(location: "R. Marquês de Abrantes", rating: 4, enabled: true, latitude: -22.937145, longitude: -43.177541)

Bathroom.create!(location: "R. Barão de Icaraí", rating: 1, enabled: false, latitude: -22.938796, longitude: -43.175551)

Bathroom.create!(location: "R. Corrêa Dutra", rating: 5, enabled: true, latitude: -22.926973, longitude: -43.178753 )

Bathroom.create!(location: "Av. Nossa Sra. de Copabacana", rating: 5, enabled: true, latitude: -22.968544, longitude: -43.183602)

Bathroom.create!(location: "R. Prudente de Morais", rating: 3, enabled: true, latitude:-22.985519, longitude: -43.201219 )
