//Go to a specific latitude, longitude.
function goTo(lat, lon, radius) {
  location.href =
    "http://localhost:3000/search?lat=" +
    lat +
    "&lon=" +
    lon +
    "&radius=" +
    radius;
}

function addFav() {
  markerList.forEach((marker) => {
    if (marker.getPopup().isOpen()) {
      console.log(marker.trackData);
      localStorage.setItem(
        marker.trackData.id,
        JSON.stringify(marker.trackData)
      );
      console.log(JSON.parse(localStorage.getItem(marker.trackData.id)));
    }
  });
  window.location.reload();
}
