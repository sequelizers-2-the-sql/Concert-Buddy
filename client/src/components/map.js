function initMap() {
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var directionsService = new google.maps.DirectionsService;
    var home =new google.maps.LatLng(37.77, -122.447)
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      styles:
      [
{
"elementType": "geometry",
"stylers": [
  {
    "color": "#1d2c4d"
  }
]
},
{
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#8ec3b9"
  }
]
},
{
"elementType": "labels.text.stroke",
"stylers": [
  {
    "color": "#1a3646"
  }
]
},
{
"featureType": "administrative.country",
"elementType": "geometry.stroke",
"stylers": [
  {
    "color": "#4b6878"
  }
]
},
{
"featureType": "administrative.land_parcel",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#64779e"
  }
]
},
{
"featureType": "administrative.province",
"elementType": "geometry.stroke",
"stylers": [
  {
    "color": "#4b6878"
  }
]
},
{
"featureType": "landscape.man_made",
"elementType": "geometry.stroke",
"stylers": [
  {
    "color": "#334e87"
  }
]
},
{
"featureType": "landscape.natural",
"elementType": "geometry",
"stylers": [
  {
    "color": "#023e58"
  }
]
},
{
"featureType": "poi",
"elementType": "geometry",
"stylers": [
  {
    "color": "#283d6a"
  }
]
},
{
"featureType": "poi",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#6f9ba5"
  }
]
},
{
"featureType": "poi",
"elementType": "labels.text.stroke",
"stylers": [
  {
    "color": "#1d2c4d"
  }
]
},
{
"featureType": "poi.park",
"elementType": "geometry.fill",
"stylers": [
  {
    "color": "#023e58"
  }
]
},
{
"featureType": "poi.park",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#3C7680"
  }
]
},
{
"featureType": "road",
"elementType": "geometry",
"stylers": [
  {
    "color": "#304a7d"
  }
]
},
{
"featureType": "road",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#98a5be"
  }
]
},
{
"featureType": "road",
"elementType": "labels.text.stroke",
"stylers": [
  {
    "color": "#1d2c4d"
  }
]
},
{
"featureType": "road.highway",
"elementType": "geometry",
"stylers": [
  {
    "color": "#2c6675"
  }
]
},
{
"featureType": "road.highway",
"elementType": "geometry.stroke",
"stylers": [
  {
    "color": "#255763"
  }
]
},
{
"featureType": "road.highway",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#b0d5ce"
  }
]
},
{
"featureType": "road.highway",
"elementType": "labels.text.stroke",
"stylers": [
  {
    "color": "#023e58"
  }
]
},
{
"featureType": "transit",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#98a5be"
  }
]
},
{
"featureType": "transit",
"elementType": "labels.text.stroke",
"stylers": [
  {
    "color": "#1d2c4d"
  }
]
},
{
"featureType": "transit.line",
"elementType": "geometry.fill",
"stylers": [
  {
    "color": "#283d6a"
  }
]
},
{
"featureType": "transit.station",
"elementType": "geometry",
"stylers": [
  {
    "color": "#3a4762"
  }
]
},
{
"featureType": "water",
"elementType": "geometry",
"stylers": [
  {
    "color": "#0e1626"
  }
]
},
{
"featureType": "water",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#4e6d70"
  }
]
}
],
      center: home
    });
    directionsDisplay.setMap(map);

    calculateAndDisplayRoute(directionsService, directionsDisplay);
    document.getElementById('mode').addEventListener('change', function() {
      calculateAndDisplayRoute(directionsService, directionsDisplay);
    });
  }

  function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    var selectedMode = document.getElementById('mode').value;
    directionsService.route({
      origin: {lat: 37.77, lng: -122.447},  // Haight.
      destination: "Chicago, IL",  // Ocean Beach.
      // Note that Javascript allows us to access the constant
      // using square brackets and a string value as its
      // "property."
      travelMode: "DRIVING"
    }, function(response, status) {
      if (status == 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }