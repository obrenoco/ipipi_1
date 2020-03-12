import mapboxgl from 'mapbox-gl';
// import MapboxGeocoder from @mapbox

const initMapbox = () => {
  const mapElement = document.getElementById('map');

  if ((mapElement) && ("geolocation" in navigator)) { // only build a map if there's a div#map to inject into
    mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;

      // POSITION SAVING
    const positionArray = navigator.geolocation.getCurrentPosition(position => {
      document.getElementById("lat").innerText = position.coords.latitude;
      document.getElementById("lng").innerText = position.coords.longitude;
    });

      // MAP STYLE
    const map = new mapboxgl.Map({
          // container id specified in the HTML
      container: 'map',
        // style URL
      style: 'mapbox://styles/chausb/ck7kq4rh70q0g1io0jk2oekjb',
        // initial position in [lon, lat] format
      center: [document.getElementById("lat").innerText, document.getElementById("lng").innerText],
        // initial zoom
      zoom: 14
    });
    const markers = JSON.parse(mapElement.dataset.markers);

      // ADD MARKERS
    addMarkers(map, markers);

      // ZOOM AND GEOLOCATE
    var canvas = map.getCanvasContainer();
    zoomAndGeolocate(map);

      // SEARCH BAR
    document.getElementById('geocoder').appendChild(generateGeocoder(mapboxgl).onAdd(map));   //#NEW CODE

      // CURRENT POSITION
    const bounds = new mapboxgl.LngLatBounds();
    markers.forEach(marker => bounds.extend([ marker.lng, marker.lat ]));
    map.fitBounds(bounds, { padding: 10, minZoom: 20,  minZoom: 22, duration: 500 });
    navigator.geolocation.getCurrentPosition(function(position){});

    map.on('load', function() {
      // make an initial directions request that
      // starts and ends at the same location
      var start = [document.getElementById("lng").innerText, document.getElementById("lat").innerText];
      getRoute(start, map);

      if (document.getElementById("bathroom-lat").innerText != "") {
        var coordsObj = {
          lng: parseFloat(document.getElementById("bathroom-lng").innerText),
          lat: parseFloat(document.getElementById("bathroom-lat").innerText)
        }
        canvas.style.cursor = '';
        var coords = Object.keys(coordsObj).map(function(key) {
          return coordsObj[key];
        });
        var end = {
          type: 'FeatureCollection',
          features: [{
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Point',
              coordinates: coords
            }
          }
          ]
        };
        if (map.getLayer('end')) {
          map.getSource('end').setData(end);
          // } else {
          map.addLayer({
            id: 'end',
            type: 'circle',
            source: {
              type: 'geojson',
              data: {
                type: 'FeatureCollection',
                features: [{
                  type: 'Feature',
                  properties: {},
                  geometry: {
                    type: 'Point',
                    coordinates: coords
                  }
                }]
              }
            },
            paint: {
              'circle-radius': 10,
              'circle-color': '#f30'
            }
          });
        }
        getRoute(coords, map);
      }
      map.on('click', function(e) {
        var coordsObj = e.lngLat;
        canvas.style.cursor = '';
        var coords = Object.keys(coordsObj).map(function(key) {
          return coordsObj[key];
        });
        var end = {
          type: 'FeatureCollection',
          features: [{
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Point',
              coordinates: coords
            }
          }
          ]
        };
        // if (map.getLayer('end')) {
        //   map.getSource('end').setData(end);
        // } else {
        //   map.addLayer({
        //     id: 'end',
        //     type: 'circle',
        //     source: {
        //       type: 'geojson',
        //       data: {
        //         type: 'FeatureCollection',
        //         features: [{
        //           type: 'Feature',
        //           properties: {},
        //           geometry: {
        //             type: 'Point',
        //             coordinates: coords
        //           }
        //         }]
        //       }
        //     },
        //     paint: {
        //       'circle-radius': 10,
        //       'circle-color': '#f30'
        //     }
        //   });
        // }
        // getRoute(coords, map);
        // this is where the code from the next step will go
      });
    });
        // Click when page loaded
    window.addEventListener('load', () => {
      document.querySelector(".mapboxgl-ctrl-geolocate").click();
    });
  }
}

const addMarkers = (map, markers) => {
  // ADD MARKERS
  markers.forEach((marker) => {
    const popup = new mapboxgl.Popup().setHTML(marker.infoWindow); // added this
    new mapboxgl.Marker()
      .setLngLat([ marker.lng, marker.lat ])
      .setPopup(popup) // added this
      .addTo(map);
  });
}

const zoomAndGeolocate = (map) => {
    // ZOOM
  map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
  // var canvas = map.getCanvasContainer();

    // GEOLOCATE
  map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true, minZoom: 22
    },
    trackUserLocation: true
  }), 'bottom-right');
}

const generateGeocoder = (mapboxgl) => {
  const geocoder = new MapboxGeocoder({ // Initialize the geocoder
    accessToken: mapboxgl.accessToken,
    countries: 'br',
    bbox: [-43.58198103399252,-23.082406097938403,-43.15107111695235,-22.86001883519016], // Set the access token
    mapboxgl: mapboxgl, // Set the mapbox-gl instance
    marker: true, // Do not use the default marker style
  });
  return geocoder;
}

// an arbitrary start will always be the same
// only the end or destination will change
// this is where the code for the next step will go

// create a function to make a directions request
let getRoute = (end_point, map) => {
  // make a directions request using cycling profile
  // an arbitrary start will always be the same
  // only the end or destination will change
  var start = [document.getElementById("lng").innerText, document.getElementById("lat").innerText];
  var url = 'https://api.mapbox.com/directions/v5/mapbox/cycling/' + start[0] + ',' + start[1] + ';' + end_point[0] + ',' + end_point[1] + '?geometries=geojson&access_token=pk.eyJ1Ijoicm9iaW4tdGVjaC13ZWIiLCJhIjoiY2s3ZjJhenlnMGhsdzNnbzRiNTJuNHc3NCJ9.MGMVxNrl3m8hf_PczKV56A';

  // make an XHR request https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
  var req = new XMLHttpRequest();
  req.open('GET', url, true);
  req.onload = function() {
    var json = JSON.parse(req.response);
    var data = json.routes[0];
    var route = data.geometry.coordinates;
    var geojson = {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'LineString',
        coordinates: route
      }
    };
    // if the route already exists on the map, reset it using setData
    if (map.getSource('route')) {
      map.getSource('route').setData(geojson);
    } else { // otherwise, make a new request
      console.log("Rota nao existe, criando rota...");
      map.addLayer({
        id: 'route',
        type: 'line',
        source: {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: geojson
            }
          }
        },
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': '#3887be',
          'line-width': 5,
          'line-opacity': 0.75
        }
      });
    }
    // add turn instructions here at the end
  };
  console.log(req);
  req.send();
}

export { initMapbox };
