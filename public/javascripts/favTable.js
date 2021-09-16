for (var i = 0; i < localStorage.length; i++) {
  console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
}

function createTable() {
  var HTML = "<ul>";
  for (var i = 0; i < localStorage.length; i++) {
    fav = JSON.parse(localStorage.getItem(localStorage.key(i)));
    HTML += "<li>" + i + ": " + fav.name + "</li>";
  }

  return HTML;
}

document.getElementById("trailList").innerHTML =
  "<h1>Favourites List</h1><button id='findSim'>Find Simmilar</button> <input id='simNum'></input><p1>(enter favorite number)</p1><button id='favClear'>Clear Favorites</button>" +
  createTable();
