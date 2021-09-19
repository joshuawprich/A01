var mymap = L.map("mapid").setView([40, 0], 2);

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

//Function for grabbing the latitude and longitude of the click
function onMapClick(e) {
  let lat = e.latlng.lat;
  let lon = e.latlng.lng;
  document.getElementById("lat").value = lat;
  document.getElementById("lon").value = lon;
  goTo();
}

mymap.on("click", onMapClick);
