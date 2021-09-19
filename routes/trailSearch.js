var express = require("express");
const router = express.Router();
const axios = require("axios");

const IP = process.env.IP;

var options = {
  method: "GET",
  url: "https://trailapi-trailapi.p.rapidapi.com/trails/map/%7Bid%7D/gpx/",
  headers: {
    "x-rapidapi-host": "trailapi-trailapi.p.rapidapi.com",
    "x-rapidapi-key": "db70d59026msh9b3ecb201a7f137p1d57f7jsn03e88d751f3b",
  },
};

function createOptions(lat, lon, radius) {
  const options = {
    method: "GET",
    url: "https://trailapi-trailapi.p.rapidapi.com/trails/explore/",
    params: {
      lon: lon,
      lat: lat,
      radius: radius,
      per_page: "20",
    },
    headers: {
      "x-rapidapi-host": "trailapi-trailapi.p.rapidapi.com",
      "x-rapidapi-key": "db70d59026msh9b3ecb201a7f137p1d57f7jsn03e88d751f3b",
    },
  };
  return options;
}

router.get("/", function (req, res, next) {
  const query = req.query;
  let radius = query["radius"] / 1.609344; //km to miles conversion
  const options = createOptions(query["lat"], query["lon"], radius);

  axios
    .request(options)
    .then(function (response) {
      const data = response.data;
      return data;
    })
    .then(function (data) {
      res.render("search", {
        data: data,
        query: query,
        ip: IP,
      });
    })
    .catch(function (e) {
      console.error(e);
    });
});

module.exports = router;
