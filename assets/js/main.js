
// This is for the map on the about page
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



// This is for the map on the graves page
// document.addEventListener('DOMContentLoaded', () => {
//   const mapAreas = document.querySelectorAll('area');
//   const shadedAreas = document.querySelectorAll('.shade');
//   const infoBox = document.getElementById('info-box');

//   const showInfoBox = (event, info) => {
//     const rect = event.target.getBoundingClientRect();
//     infoBox.textContent = info;
//     infoBox.style.left = `${rect.left + window.scrollX}px`;
//     infoBox.style.top = `${rect.top + window.scrollY - infoBox.offsetHeight}px`;
//     infoBox.style.display = 'block';
//   };

//   const hideInfoBox = () => {
//     infoBox.style.display = 'none';
//   };

//   mapAreas.forEach(area => {
//     area.addEventListener('mouseover', (event) => {
//       showInfoBox(event, event.target.getAttribute('data-info'));
//     });

//     area.addEventListener('mouseout', hideInfoBox);
//   });

//   shadedAreas.forEach(shade => {
//     shade.addEventListener('mouseover', (event) => {
//       showInfoBox(event, event.target.getAttribute('data-info'));
//     });

//     shade.addEventListener('mouseout', hideInfoBox);
//   });
// });


document.querySelectorAll('.shade').forEach(function(shade) {
  shade.addEventListener('mouseover', function() {
    showInfoBox(shade);
  });

  shade.addEventListener('mouseout', function() {
    hideInfoBox();
  });

  shade.addEventListener('click', function() {
    showInfoBox(shade);
  });
});

function showInfoBox(shade) {
  const infoBox = document.getElementById('info-box');
  infoBox.style.display = 'block';
  infoBox.innerHTML = shade.getAttribute('data-info');
  infoBox.style.top = (shade.offsetTop + shade.offsetHeight) + 'px';
  infoBox.style.left = shade.offsetLeft + 'px';
}

function hideInfoBox() {
  const infoBox = document.getElementById('info-box');
  infoBox.style.display = 'none';
}


