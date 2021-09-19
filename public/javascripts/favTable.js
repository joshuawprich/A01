function createTable() {
  var HTML = "<ul>";
  for (var i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i) !== "currentFav") {
      fav = JSON.parse(localStorage.getItem(localStorage.key(i)));
      HTML += "<li>" + i + ": " + fav.name + "</li>";
    }
  }

  return HTML;
}

function infoText() {
  var HTML;
  if (localStorage.length < 1) {
    HTML =
      "<p>Click on a popup and add it to your favourites to see it here!</p>";
  } else {
    HTML = "<p>Enter the number of your favourite to find simmilar tracks!</p>";
  }
  return HTML;
}

function clearBut() {
  if (localStorage.getItem("currentFav")) {
    return "<button id='clearSelected'>Clear Selected</button>";
  } else {
    return "";
  }
}

document.getElementById("trailList").innerHTML =
  "<h1>Favourites List</h1>" +
  infoText() +
  "<button id='findSim'>Find Simmilar</button> <input id='simNum' placeholder='Enter Number'></input><button id='favClear'>Clear Favorites</button>" +
  createTable() +
  clearBut();
