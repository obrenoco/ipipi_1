# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Bathroom.destroy_all
User.destroy_all

puts "Starting seed process..."
b1 = Bathroom.create!(location: "R. Barão de Icaraí", rating: 1, enabled: true)
b1.update(latitude: -22.938796, longitude: -43.175551)

b2 = Bathroom.create!(location: "R. Corrêa Dutra", rating: 5, enabled: true)
b2.update(latitude: -22.926973, longitude: -43.178753)

b3 = Bathroom.create!(location: "Av. Nossa Sra. de Copabacana", rating: 5,enabled: true)
b3.update(latitude: -22.968544, longitude: -43.183602)

b4 = Bathroom.create!(location: "R. Tobias do Amaral", rating: 1, enabled: true)
b4.update(latitude: -22.940538, longitude: -43.200519)

b5 = Bathroom.create!(location: "R. Pinheiro Machado", rating: 4, enabled: true)
b5.update(latitude: -22.938942, longitude: -43.183093)

b6 = Bathroom.create!(location: "R. Mena Barreto", rating: 3, enabled: true)
b6.update(latitude: -22.955184, longitude: -43.188565)

b7 = Bathroom.create!(location: "R. Leblon", rating: 4, enabled: true)
b7 = b7.update(latitude: -22.985653, longitude: -43.218053)

#Did not manage to display correctly new seeds, so set them to enabled: false.

User.create(email: "ipipi.contato@gmail.com", password: "capivara", password_confirmation: "capivara")

puts "Ending process..."
