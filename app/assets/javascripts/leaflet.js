$(document).ready(function() {

  var map = L.map('map').setView([37.7272, -122.3226], 12);

  var layer = L.tileLayer('http://{s}.tiles.mapbox.com/v4/irinatag.29e71c77/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiaXJpbmF0YWciLCJhIjoiVktramt0OCJ9.ZQ9EtKOUUae2fVSGehSnBQ', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
  });

  layer.addTo(map);

  var data = {
    "results": [
      {
        "rsvp_limit": 45,
        "status": "upcoming",
        "visibility": "public",
        "maybe_rsvp_count": 0,
        "venue": {
          "id": 23583739,
          "lon": -122.39978,
          "repinned": false,
          "name": "Minted",
          "state": "CA",
          "address_1": "747 Front Street #200",
          "lat": 37.798138,
          "city": "San Francisco",
          "country": "us"
        },
        "id": "219881802",
        "utc_offset": -28800000,
        "duration": 9000000,
        "time": 1422930600000,
        "waitlist_count": 0,
        "updated": 1422909733000,
        "yes_rsvp_count": 42,
        "created": 1421440101000,
        "event_url": "http://www.meetup.com/Women-Who-Code-SF/events/219881802/",
        "description": "<p>Welcome to Women Who Code Mobile - San Francisco!",
        "how_to_find_us": "Yes, there is bike parking.",
        "name": "Mobile Study Group: iOS & Android (Objective-C & Java)",
        "headcount": 0,
        "group": {
          "id": 2252591,
          "created": 1311875189000,
          "group_lat": 37.77000045776367,
          "name": "Women Who Code SF",
          "group_lon": -122.41000366210938,
          "join_mode": "open",
          "urlname": "Women-Who-Code-SF",
          "who": "Coders"
        }
      },
      {
        "rsvp_limit": 25,
        "status": "upcoming",
        "visibility": "public",
        "maybe_rsvp_count": 0,
        "venue": {
          "id": 23611852,
          "lon": -122.400833,
          "repinned": false,
          "name": "Boatbond",
          "state": "CA",
          "address_1": "435 Harriet Street",
          "lat": 37.774044,
          "city": "San Francisco",
          "country": "us"
        },
        "id": "hnpjdlytdbdb",
        "utc_offset": -28800000,
        "duration": 7200000,
        "time": 1422932400000,
        "waitlist_count": 0,
        "updated": 1422924998000,
        "yes_rsvp_count": 6,
        "created": 1419911913000,
        "event_url": "http://www.meetup.com/Girl-Develop-It-San-Francisco/events/219706378/",
        "description": "<p>Join us every Monday for this self-paced HTML/CSS/JavaScript/AngularJS/d3.js/Three.js study group where we come together to eat snacks, study and help each other out. TAs will be there to help you get unstuck when you can't figure out how to get those pesky error messages to go away.</p> <p><br/>If you don't already have something you're working on, here are places to practice:</p>",
        "how_to_find_us": "Check in on the 8th floor",
        "name": "GDI Study Group",
        "headcount": 0,
        "group": {
          "id": 3286622,
          "created": 1329147725000,
          "group_lat": 37.77000045776367,
          "name": "Girl Develop It San Francisco",
          "group_lon": -122.4000015258789,
          "join_mode": "open",
          "urlname": "Girl-Develop-It-San-Francisco",
          "who": "Nerdettes"
        }
      },
    ],
    "meta": {
      "lon": "",
      "count": 17,
      "signed_url": "https://api.meetup.com/2/events?status=upcoming&order=time&limited_events=False&member_id=10653533&format=json&page=20&desc=false&photo-host=public&offset=0&fields=&time=1422901447865%2C+1423418400000&sig_id=10653533&sig=01cb0a997f539e3943faa5e32f2e066b6fb993b3",
      "link": "https://api.meetup.com/2/events",
      "next": "",
      "total_count": 17,
      "url": "https://api.meetup.com/2/events?status=upcoming&order=time&limited_events=False&member_id=10653533&format=json&page=20&desc=false&photo-host=public&offset=0&fields=&time=1422901447865%2C+1423418400000&sign=True",
      "id": "",
      "title": "Meetup Events v2",
      "updated": 1422924998000,
      "description": "Access Meetup events using a group, member, or event id. Events in private groups are available only to authenticated members of those groups. To search events by topic or location, see [Open Events](/meetup_api/docs/2/open_events).",
      "method": "Events",
      "lat": ""
    }
  };

  console.log(data["results"][0]["venue"]["lon"]);



});
