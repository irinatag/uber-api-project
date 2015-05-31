$(document).ready(function() {

  var map = L.map('map').setView([37.7272, -122.3226], 12);

  var layer = L.tileLayer('http://{s}.tiles.mapbox.com/v4/irinatag.29e71c77/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiaXJpbmF0YWciLCJhIjoiVktramt0OCJ9.ZQ9EtKOUUae2fVSGehSnBQ', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
  });

  layer.addTo(map);

  var userLatitude
  , userLongitude

  navigator.geolocation.watchPosition(function(position) {
    // Update latitude and longitude
    userLatitude = position.coords.latitude;
    userLongitude = position.coords.longitude;

    console.log(userLatitude)
    console.log(userLongitude)

    var RedIcon = L.Icon.Default.extend({
      options: {
        iconUrl: 'assets/marker-icon-red.png'
      }
    });
    var redIcon = new RedIcon();

    var marker = L.marker([userLatitude, userLongitude], {icon: redIcon}).addTo(map);
    var popup = 'Your current coordinates: <br>' + '<b>' + userLatitude + '</b><br><b>' + userLongitude + '</b>';
    marker.bindPopup(popup).openPopup();

  })
});
