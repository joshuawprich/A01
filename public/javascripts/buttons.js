document.getElementById("searchButton").onclick = function () {
  var lat = document.getElementById("lat").value;
  var lon = document.getElementById("lon").value;
  var radius = document.getElementById("radius").value;

  goTo(lat, lon, radius);
};
document.getElementById("findSim").onclick = function () {
  var value = document.getElementById("simNum").value;

  trail = JSON.parse(localStorage.getItem(localStorage.key(value)));

  var lat = trail.lat;
  var lon = trail.lon;
  localStorage.setItem("currentFav", JSON.stringify(trail));
  goTo(lat, lon, 20);
};
document.getElementById("favClear").onclick = function () {
  localStorage.clear();
  window.location.reload();
};
