import "bootstrap";
import 'mapbox-gl/dist/mapbox-gl.css'; // <-- you need to uncomment the stylesheet_pack_tag in the layout!

import { initMapbox } from '../plugins/init_mapbox';
import { adminMap } from '../plugins/init_admin_mapbox.js.erb';

initMapbox();
adminMap();

// Handling rating of user

let ratingVote = 2.5;
const bathroomElement = document.getElementById("bathroom-id");
if (bathroomElement) {
  document.querySelectorAll(".fa-star").forEach((element) => {
    element.addEventListener("click", (event) => {
      ratingVote = element.dataset.id;
      document.querySelectorAll(".fa-star").forEach((starElement) => {
        if (starElement.dataset.id <= element.dataset.id) {
          starElement.classList.remove("far");
          starElement.classList.add("fas");
        } else {
          starElement.classList.remove("fas");
          starElement.classList.add("far");
        }
      });
    });
  });
}

if (bathroomElement) {
  document.getElementById("finish").addEventListener("click", (event) => {
    Rails.ajax({
      url: `/bathrooms/${bathroomElement.dataset.id}/add_rating`,
      type: "POST",
      data: `rating=${ratingVote}`,
    });
  });
}

// Computing the distance between 2 points

document.querySelectorAll(".mapboxgl-marker").forEach((element) => {
  console.log(element);
  element.addEventListener("click", (event) => {
    let originLat = 0;
    let originLng = 0;
    navigator.geolocation.getCurrentPosition(position => {
      originLat = position.coords.latitude;
      originLng = position.coords.longitude;
      console.log(originLng);
      console.log(originLng);
      const bathroomLat = parseFloat(document.getElementById("bathroom-lat").innerText);
      const bathroomLng = parseFloat(document.getElementById("bathroom-lng").innerText);
      const distanceDisplay = getElementById("distance-to");
      let from = turf.point([originLat,originLng]);
      let to = turf.point([bathroomLat,bathroomLng]);
      let options = {units: 'kilometers'};
      let distance = turf.distance(from, to, options);
      console.log(distance);
      distanceDisplay.innerHTML = distance;
    });
  });
});

// let originLat = 0;
// let originLng = 0;
// console.log(originLng);
// navigator.geolocation.getCurrentPosition(position => {
//   originLat = position.coords.latitude;
//   originLng = position.coords.longitude;
//   const bathroomLat = parseFloat(document.getElementById("bathroom-lat").innerText);
//   console.log.(bathroomLat);
//   const bathroomLng = parseFloat(document.getElementById("bathroom-lng").innerText);
//   let from = turf.point([originLat,originLng]);
//   console.log.(from);
//   let to = turf.point([bathroomLat,bathroomLng]);
//   let options = {units: 'kilometers'};
//   let distance = turf.distance(from, to, options);
//   console.log.(distance);
// });
