const router = require("express").Router();
const Pastry = require("../models/Pastries.model")

router.get("/pastries", (req, res, next) => {
  Pastry.find()
  .then(pastries => {
    res.render("pastries", {pastries});
  })

});

  module.exports = router