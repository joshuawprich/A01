var express = require("express");
var router = express.Router();
var trailSearch = require("./trailSearch");

const IP = process.env.IP;

console.log(IP);

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { ip: IP });
});

router.use("/search?", trailSearch);

module.exports = router;
