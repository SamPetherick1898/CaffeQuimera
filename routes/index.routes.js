const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/aboutUs", (req, res, next) => {
  res.render("aboutUs");
});

module.exports = router;
