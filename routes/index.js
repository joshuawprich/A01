var express = require("express");
var router = express.Router();
var trailSearch = require("./trailSearch");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

router.use("/search?", trailSearch);

module.exports = router;
