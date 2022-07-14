const router = require("express").Router();
const Drink = require("../models/Drinks.model")
const Pastry = require("../models/Pastries.model")

router.get("/personalize/:id", async (req, res, next) => {
  console.log("id", req.params)
  //Find drink by ID
  const drink = await Drink.findById(req.params.id)
  console.log(drink)

  res.render("personalize", drink);
});

  module.exports = router