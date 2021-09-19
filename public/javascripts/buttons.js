document.getElementById("searchButton").onclick = function () {
  var lat = document.getElementById("lat").value;
  var lon = document.getElementById("lon").value;
  var radius = document.getElementById("radius").value;

  goTo();
};
document.getElementById("findSim").onclick = function () {
  var value = document.getElementById("simNum").value;

  trail = JSON.parse(localStorage.getItem(localStorage.key(value)));

  document.getElementById("lat").value = trail.lat;
  document.getElementById("lon").value = trail.lon;
  localStorage.setItem("currentFav", JSON.stringify(trail));
  goTo();
};
document.getElementById("favClear").onclick = function () {
  localStorage.clear();
  window.location.reload();
};
if (localStorage.getItem("currentFav")) {
  document.getElementById("clearSelected").onclick = function () {
    localStorage.removeItem("currentFav");
    window.location.reload();
  };
}
