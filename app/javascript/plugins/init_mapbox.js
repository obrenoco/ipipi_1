import mapboxgl from 'mapbox-gl';

const initMapbox = () => {
  const mapElement = document.getElementById('map');

  if (mapElement) { // only build a map if there's a div#map to inject into
    mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v10'
    });
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
          enableHighAccuracy: true
      },
      trackUserLocation: true
    }), 'bottom-right');
    const markers = JSON.parse(mapElement.dataset.markers);
  		markers.forEach((marker) => {
        const popup = new mapboxgl.Popup().setHTML(marker.infoWindow); // added this
    		new mapboxgl.Marker()
      		.setLngLat([ marker.lng, marker.lat ])
          .setPopup(popup) // added this
      		.addTo(map);
    });

    const bounds = new mapboxgl.LngLatBounds();
    markers.forEach(marker => bounds.extend([ marker.lng, marker.lat ]));
    map.fitBounds(bounds, { padding: 70, maxZoom: 15, duration: 500 });
    navigator.geolocation.getCurrentPosition(function(position){});
  }
};

export { initMapbox };
