import mapboxgl from 'mapbox-gl';

const adminMap = () => {
  const mapElement = document.getElementById('admin-map');

  if (mapElement) { // only build a map if there's a div#map to inject into
    mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
    const map = new mapboxgl.Map({
      container: 'admin-map',
      style: 'mapbox://styles/mapbox/streets-v10'
    });
    const markers = JSON.parse(mapElement.dataset.markers);
      markers.forEach((marker) => {
        new mapboxgl.Marker()
          .setLngLat([ marker.lng, marker.lat ])
          .addTo(map);
    });
    const bounds = new mapboxgl.LngLatBounds();
    markers.forEach(marker => bounds.extend([ marker.lng, marker.lat ]));
    map.fitBounds(bounds, { padding: 70, maxZoom: 15, duration: 500 });
    navigator.geolocation.getCurrentPosition(function(position){
      new mapboxgl.Marker()
          .setLngLat([ position.coords.longitude, position.coords.latitude ])
          .addTo(map);
    });
   map.on('click', function(e) {
    document.getElementById('info').innerHTML =
    // e.point is the x, y coordinates of the mousemove event relative
    // to the top-left corner of the map
    JSON.stringify(e.point) +
    '<br />' +
    // e.lngLat is the longitude, latitude geographical position of the event
    JSON.stringify(e.lngLat.wrap());
    // lat und lgn in variablen speichern
   // eventlistener für create button erstellen und darin ein neues banheiro erstellen
    console.log(e.lngLat.lng)
    let longitude = e.lngLat.lng
    let latitude = e.lngLat.lat
    console.log(longitude)
    console.log(latitude)
   });
   
  }
};

export { adminMap };