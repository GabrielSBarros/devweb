var express = require("express");
var router = express.Router();

var spells = require("./spells");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.use("/spells", spells);

module.exports = router;
