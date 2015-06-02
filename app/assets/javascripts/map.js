$(document).ready(function() {

  var map = L.map('map').setView([37.7272, -122.3226], 12);

  var layer = L.tileLayer('http://{s}.tiles.mapbox.com/v4/irinatag.29e71c77/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiaXJpbmF0YWciLCJhIjoiVktramt0OCJ9.ZQ9EtKOUUae2fVSGehSnBQ', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
  });

  layer.addTo(map);

  function placeIcon(iconUrl, name, lat, lon) {
    var Icon = L.Icon.Default.extend({
      options: {
        iconUrl: iconUrl
      }
    });

    name = new Icon();

    var marker = L.marker([lat, lon], {icon: name}).addTo(map);

    var popup = 'Your destination coordinates: <br>' + '<b> Latitude: </b>' + lat + '<br><b> Longitude </b>' + lon ;

    marker.bindPopup(popup).openPopup();
  }

  var userLatitude
  var userLongitude

  // show current coordinates on map

  navigator.geolocation.watchPosition(function(position) {

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
    var popup = 'Your current coordinates: <br>' + '<b> Latitude: </b>' + userLatitude + '<br><b> Longitude </b>' + userLongitude ;

    marker.bindPopup(popup).openPopup();

  })

  // show destination coordinates on map & post coordinates to the db

  var end_lat
  var end_lat
  var blackIcon

  $("input[type='submit']").on('click', function(event) {

    end_lat = $("#car_end_lat").val();
    end_lon = $("#car_end_lon").val();

    console.log(end_lat);
    console.log(end_lon);

    event.preventDefault();

    $.ajax("/cars", {
      type: 'post',
      data: {
        car: {
          end_lat: end_lat,
          end_lon: end_lon,
          start_lat: userLatitude,
          start_lon: userLongitude,
        }
      }
    }).done(function(data) {

      $("#car_end_lat").val('');
      $("#car_end_lon").val('');
      placeIcon('assets/marker-icon-black.png', blackIcon, end_lat, end_lon);

    }).fail(function(data) {
      console.log(data.responseText);
    });
  });

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
    var high_estimate = cars_json["prices"][i]["high_estimate"];
    var low_estimate = cars_json["prices"][i]["low_estimate"];
    var duration_seconds = cars_json["prices"][i]["duration"];
    var dur_minutes = Math.floor(duration_seconds / 60);
    var dur_remainsec = duration_seconds - dur_minutes * 60;
    var currency = cars_json["prices"][i]["currency_code"];
    // var popup = '<b>' + name + '</b><br>' + distance + ' miles away <br> Cost Estimate: ' + estimate;

    $('#accordion').append('<div class="active title"><h2>' + name + '</h2><div class="ui secondary button">Get an Uber</div></div>' +
    '<div class="active content"><h5>' + distance + ' miles away</h5><br>' +
    '<p>Cost range: ' + estimate + '<br> Trip Duration: ' + dur_minutes + ' minutes</p></div>');


  }

});
