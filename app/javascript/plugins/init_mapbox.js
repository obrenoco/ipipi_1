import mapboxgl from 'mapbox-gl';
// import MapboxGeocoder from @mapbox

const initMapbox = () => {
  const mapElement = document.getElementById('map');

  if (mapElement) { // only build a map if there's a div#map to inject into
    mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
    // MAP STYLE
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v10'
    });
    //
        // ADD MARKERS
    const markers = JSON.parse(mapElement.dataset.markers);
      markers.forEach((marker) => {
        const popup = new mapboxgl.Popup().setHTML(marker.infoWindow); // added this
        new mapboxgl.Marker()
          .setLngLat([ marker.lng, marker.lat ])
          .setPopup(popup) // added this
          .addTo(map);
    });
    // ZOOM
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
    //

    // GEOLOCATE
    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
          enableHighAccuracy: true, minZoom: 22
      },
      trackUserLocation: true
    }), 'bottom-right');
    //

    // SEARCH BAR
            var geocoder = new MapboxGeocoder({ // Initialize the geocoder
      accessToken: mapboxgl.accessToken,
      countries: 'br',
      bbox: [-43.346419534882216,-23.033872959289127,-43.14634834051273,-22.879032876887223], // Set the access token
      mapboxgl: mapboxgl, // Set the mapbox-gl instance
      marker: true, // Do not use the default marker style
    });
    //
    // Add the geocoder to the map
    map.addControl(geocoder);
      // CURRENT POSITION
    const bounds = new mapboxgl.LngLatBounds();
    markers.forEach(marker => bounds.extend([ marker.lng, marker.lat ]));
    map.fitBounds(bounds, { padding: 10, minZoom: 20,  minZoom: 22, duration: 500 });
    navigator.geolocation.getCurrentPosition(function(position){});
    }
           // Click when page loaded
    window.addEventListener('load', () => {
      document.querySelector(".mapboxgl-ctrl-geolocate").click()
    })
  };
      //

export { initMapbox };
