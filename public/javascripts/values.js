var HTML;

if (localStorage.getItem("currentFav")) {
  if (JSON.parse(localStorage.getItem("currentFav")).difficulty === "") {
    document.getElementById("warnLabel").innerHTML +=
      "Your searched favourite has a blank difficulty, recommended tracks may not have simmilar features.";
  }
}

if (document.getElementById("radius").value > 150) {
  document.getElementById("warnLabel").innerHTML +=
    "\nThe maximum search radius is 150km!!";
}
