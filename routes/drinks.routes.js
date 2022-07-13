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
  router.get("/order", (req, res, next) => {
    res.render("order");
  });

  module.exports = router