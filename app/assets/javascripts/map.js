$(document).ready(function() {

  var map = L.map('map').setView([37.7272, -122.3226], 12);

  var layer = L.tileLayer('http://{s}.tiles.mapbox.com/v4/irinatag.29e71c77/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiaXJpbmF0YWciLCJhIjoiVktramt0OCJ9.ZQ9EtKOUUae2fVSGehSnBQ', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
  });

  layer.addTo(map);

  var userLatitude
  var userLongitude

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

  // get data from controller via gon
  console.log(gon.uber_cars)
  var cars_hash = gon.uber_cars
  var cars_json = JSON.parse(cars_hash)

  console.log(cars_json)

  console.log(cars_json["prices"][0]["display_name"])
  console.log(cars_json["prices"][0]["product_id"])

  for(var i=0; i < cars_json["prices"].length; i++) {
    var name = cars_json["prices"][i]["display_name"];
    var distance = cars_json["prices"][i]["distance"];
    var estimate = cars_json["prices"][i]["estimate"];
    var popup = '<b>' + name + '</b><br>' + distance + ' miles away <br> Cost Estimate: ' + estimate;

    var CarIcon = L.Icon.Default.extend({
           options: {
                 iconUrl: 'assets/mono-uberx.png'
           }
        });

    var carIcon = new CarIcon();

    var marker = L.marker([37.777570, -122.429927], {icon: carIcon}).addTo(map);

    marker.bindPopup(popup);
  }

});
