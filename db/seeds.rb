# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

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

b8 = Bathroom.create!(location: "R. Iguatu", rating: 5, enabled: true)
b8 = b8.update(latitude: -22.952842, longitude: -43.169873)

b9 = Bathroom.create!(location: "R. Do Fialho", rating: 5, enabled: true)
b9 = b9.update(latitude: -22.921451, longitude: -43.180283)

b10 = Bathroom.create!(location: "R. Hermenegildo de Barros", rating: 4, enabled: true)
b10 = b10.update(latitude: -22.919133, longitude: -43.179689)

b11 = Bathroom.create!(location: "Largo do Machado", rating: 5, enabled: true)
b11 = b11.update(latitude: -22.930489, longitude: -43.178785)

b12 = Bathroom.create!(location: "R. Da Lapa", rating: 1, enabled: true)
b12 = b12.update(latitude: -22.916775, longitude: -43.177272)

b13 = Bathroom.create!(location: "R. Conda de Lages", rating: 3, enabled: true)
b13 = b13.update(latitude: -22.916395, longitude: -43.178007)

b14 = Bathroom.create!(location: "R. Santa Amaro", rating: 5, enabled: true)
b14 = b14.update(latitude: -22.922057, longitude: -43.179218)

b15 = Bathroom.create!(location: "R. 5 de Julho", rating: 2, enabled: true)
b15 = b15.update(latitude: -22.971019, longitude: -43.190210)

b16 = Bathroom.create!(location: "R. Miguel Lemos", rating: 5, enabled: true)
b16 = b16.update(latitude: -22.977535, longitude: -43.192403)

b17 = Bathroom.create!(location: "R. Xavier da Silveira", rating: 5, enabled: true)
b17 = b17.update(latitude: -22.976481, longitude: -43.192277)

b18 = Bathroom.create!(location: "R. Bolívar", rating: 3, enabled: true)
b18 = b18.update(latitude: -22.975684, longitude: -43.192769)

b19 = Bathroom.create!(location: "R. Santa Clara", rating: 4, enabled: true)
b19 = b19.update(latitude: -22.970897, longitude: -43.187747)

b20 = Bathroom.create!(location: "R. Do Senado", rating: 4, enabled: true)
b20 = b20.update(latitude: -22.908544, longitude: -43.182073)

b21 = Bathroom.create!(location: "Av. Carlos Peixoto", rating: 4, enabled: true)
b21 = b21.update(latitude: -22.960359, longitude: -43.178446)

b22 = Bathroom.create!(location: "R. Sorocaba", rating: 5, enabled: true)
b22 = b22.update(latitude: -22.950862, longitude: -43.190739)

b23 = Bathroom.create!(location: "Av. Atlântica", rating: 5, enabled: true)
b23 = b23.update(latitude: -22.979487, longitude: -43.189164)

b24 = Bathroom.create!(location: "Av. Vieira Souto", rating: 4, enabled: true)
b24 = b24.update(latitude: -22.986742, longitude: -43.201747)

b25 = Bathroom.create!(location: "Praia de Botafogo", rating: 3, enabled: true)
b25 = b25.update(latitude: -22.945806, longitude: -43.182246)

b26 = Bathroom.create!(location: "Av. Portugal", rating: 4, enabled: true)
b26 = b26.update(latitude: -22.951971, longitude: -43.169497)

b27 = Bathroom.create!(location: "Av. Beira Mar", rating: 2, enabled: true)
b27 = b27.update(latitude: -22.918599, longitude: -43.175132)

b28 = Bathroom.create!(location: "Av. Rui Barbosa", rating: 4, enabled: true)
b28 = b28.update(latitude: -22.941719, longitude: -43.173140)

User.create(email: "ipipi.contato@gmail.com", password: "capivara", password_confirmation: "capivara")

puts "Ending process..."
