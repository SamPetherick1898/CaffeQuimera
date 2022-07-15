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

//Route to order
router.post("/orders", async (req, res) => {
  const orders = JSON.parse(req.body.drinks)

  //Find drink by ID and send to order
  const products = await Drink.find({ '_id': { $in: orders } })
  const pastries = await Pastry.find({ '_id': { $in: orders } })
  pastries.forEach(pastry =>{
    products.push(pastry)
  })
      res.render("order", {products})

})

router.post("/send-orders", async (req, res) => {
res.render("sent")

})
  module.exports = router