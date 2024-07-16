document.addEventListener('DOMContentLoaded', function() {
    var mapContainer = document.getElementById('map');
    if (mapContainer) {
      if (typeof L !== 'undefined') {
        var map = L.map('map').setView([51.897, -8.173], 16); // Center the map roughly around the given coordinates
  
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
  
        // Define the bounding box with adjusted coordinates
        var bounds = [
          [51.898150, -8.175348], // top left
          [51.898193, -8.172392], // top right
          [51.896041, -8.171990], // bottom right
          [51.896042, -8.175601]  // bottom left
        ];
  
        // Create a polygon from the bounds and add it to the map
        L.polygon(bounds, {color: 'red'}).addTo(map);
      } else {
        console.error('Leaflet.js library not found.');
      }
    }
  });
  