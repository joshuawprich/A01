var mymap = L.map("mapid").setView([query.lat, query.lon], 10);

var markerList = [];

var difficulty = {
  0: "",
  1: "Easiest",
  2: "Beginner",
  3: "Intermediate",
  4: "Advanced",
};

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1IjoiandwaHVudGVyIiwiYSI6ImNrdGU4bXRqeDJubDkydXBneG1hZW53NDUifQ.oVzsYyWCq24IGg1g9YvhGA",
  }
).addTo(mymap);

var circle = L.circle([query.lat, query.lon], {
  color: "red",
  radius: query.radius * 1000 + 500, //km to metres conversion
}).addTo(mymap);

/* Function for creating the popups on the map */
function createPopup(data, marker) {
  marker.bindPopup(
    "<h1>" +
      data.name +
      "</h1>" +
      "<body>" +
      data.description +
      "</body><ul id='list'><li>Difficulty: " +
      data.difficulty +
      "</li><li>Rating: " +
      data.rating +
      "</li><li><a href=" +
      data.url +
      ">" +
      data.url +
      "</a></li></ul><button id='favButton' onClick='addFav()'>Add to Favorites</button>"
  );
  marker.title = data.name;
  marker.trackData = {
    id: data.id,
    name: data.name,
    lat: data.lat,
    lon: data.lon,
    difficulty: data.difficulty,
    rating: data.rating,
    url: data.url,
  };
  marker.id = data.id;
  marker.bindTooltip(data.name);
  marker.riseOnHover = true;
  markerList.push(marker);
}

//Initiatlise data as the reference for the response data.
if (data.results > 0) {
  //Map the data to show the points of interest on the map.

  let keys = Object.keys(data.data);

  var data = data.data;

  function checkDifficulty(value) {
    var favlevel = Object.keys(difficulty).find(
      (key) =>
        difficulty[key] ===
        JSON.parse(localStorage.getItem("currentFav")).difficulty
    );
    var trackLevel = Object.keys(difficulty).find(
      (key) => difficulty[key] === value
    );
    if (favlevel == trackLevel) {
      return true;
    }
    if (favlevel + 1 == value) {
      return true;
    } else return false;
  }

  keys.map((row, index) => {
    if (localStorage.getItem("currentFav")) {
      if (checkDifficulty(data[row].difficulty)) {
        var lat = data[row].lat;
        var lon = data[row].lon;
        var marker = L.marker([lat, lon]).addTo(mymap);
        createPopup(data[row], marker);
      }
    } else {
      var lat = data[row].lat;
      var lon = data[row].lon;
      var marker = L.marker([lat, lon]).addTo(mymap);
      createPopup(data[row], marker);
    }
  });
}

//Function for grabbing the latitude and longitude of the click
function onMapClick(e) {
  //alert("You clicked the map at " + e.latlng);
  localStorage.removeItem("currentFav");
  console.log(e.latlng);
  let lat = e.latlng.lat;
  let lon = e.latlng.lng;
  goTo(lat, lon, 20);
}

mymap.on("click", onMapClick);
