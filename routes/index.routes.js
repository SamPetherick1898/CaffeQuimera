const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/acercade", (req, res, next) => {
  res.render("acercade");
});

module.exports = router;
