const router = require("express").Router();
const Drink = require("../models/Drinks.model")
const Pastry = require("../models/Pastries.model")

router.get("/drinks", (req, res, next) => {
  Drink.find().sort({type: 1})
  .then(drinks => {
    res.render("drinks", {drinks});
  })

});

router.get("/new-product", (req, res, next) => {
    res.render("newproduct");
  });

//Middleware helper to select drink type

router.post("/new-product", (req, res) => {
    console.log(req.body)

    //Store in mongo db
    let type = req.body.type;
    if(type === "pastel" || type === "nieve"){
        Pastry.create(req.body)
        .then(newPastry => {
        console.log(newPastry)
        res.redirect("/pastries")
        }).catch(console.log("Error creating new pastry"))
    } else {
        Drink.create(req.body)
        .then(newDrink => {
          console.log(newDrink)
          res.redirect("/drinks")
        }).catch(console.log("Error creating new drink"))
    }
})

//Route to order
  router.post("/orders", async (req, res) => {
    console.log(req.body)
    const drinks = JSON.parse(req.body.drinks)

    //Find drink by ID and send to order
    const orders = await Drink.find({ '_id': { $in: drinks } })
    
        console.log(orders)
        res.render("order", {orders})

})
  module.exports = router