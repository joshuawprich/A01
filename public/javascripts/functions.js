const host = window.location.hostname;

const port = "3000";

//Go to a specific latitude, longitude.
function goTo() {
  let lat = document.getElementById("lat").value;
  let lon = document.getElementById("lon").value;
  let radius = document.getElementById("radius").value;

  if (!radius) {
    radius = 20;
  }

  if (lat < -90 || lat > 90 || lon < -180 || lon > 180) {
    document.getElementById("warnLabel").innerHTML = "Invalid co-ordinates!";
  } else {
    location.href =
      "http://" +
      host +
      ":" +
      port +
      "/search?lat=" +
      lat +
      "&lon=" +
      lon +
      "&radius=" +
      radius;
  }
}

function addFav() {
  markerList.forEach((marker) => {
    if (marker.getPopup().isOpen()) {
      localStorage.setItem(
        marker.trackData.id,
        JSON.stringify(marker.trackData)
      );
    }
  });
  window.location.reload();
}
