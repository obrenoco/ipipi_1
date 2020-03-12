import "bootstrap";
import 'mapbox-gl/dist/mapbox-gl.css'; // <-- you need to uncomment the stylesheet_pack_tag in the layout!

import { initMapbox } from '../plugins/init_mapbox';
import { adminMap } from '../plugins/init_admin_mapbox.js.erb';

initMapbox();
adminMap();

const bathroomElement = document.getElementById("bathroom-id");
if (bathroomElement) {
  document.querySelectorAll(".fa-star").forEach((element) => {
    element.addEventListener("click", (event) => {
      Rails.ajax({
        url: `/bathrooms/${bathroomElement.dataset.id}/add_rating`,
        type: "POST",
        data: `rating=${element.dataset.id}`,
        success: function(data) {
          document.querySelectorAll(".fa-star").forEach((starElement) => {
            if (starElement.dataset.id <= element.dataset.id) {
              starElement.classList.remove("far");
              starElement.classList.add("fas");

            } else  {
              starElement.classList.remove("fas");
              starElement.classList.add("far");
            }
          });
        }
      });
    });
  });
}

