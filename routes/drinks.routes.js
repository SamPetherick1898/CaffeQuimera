const router = require("express").Router();
const { findById } = require("../models/Drinks.model");
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


  router.get("/delete/:id", async (req, res, next) =>{
    try{
      const { id } = req.params
      if(await Drink.findById(id)){
      await Drink.findByIdAndRemove(id)
      res.redirect("/drinks")} 
      else if(await Pastry.findById(id)){
        await Pastry.findByIdAndRemove(id)
        res.redirect("/pastries")
      }
    } catch { console.log }
  })


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

//Edit
router.get("/edit/:id", async (req, res, next) =>{
  const details = await Drink.findById(req.params.id)
  const details2 = await Pastry.findById(req.params.id)
  let oc
  if(details){
    oc = { ...details._doc}
  } else if (details2){
    oc = { ...details2._doc}
  }
  res.render("id", oc)
})

router.post("/update/:id", async (req, res) =>{
  const updateD = req.body
  let type = req.body.type;
  const paramsId = req.params.id
  if(type === "pastel" || type === "nieve"){
    await Pastry.findByIdAndUpdate(paramsId, updateD)
    res.redirect("/pastries")
  } else{
    await Drink.findByIdAndUpdate(paramsId, updateD)
    res.redirect("/drinks")
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