const router = require("express").Router();
const { findById } = require("../models/Drinks.model");
const Drink = require("../models/Drinks.model")
const Pastry = require("../models/Pastries.model")
const isAdmin = require("../middleware/isAdmin");

router.get("/drinks", (req, res, next) => {
  let admin = false
  if(req.session?.user?.role === "admin"){
    admin = true
  }
  Drink.find().sort({type: 1})
  .then(drinks => {
    res.render("drinks", {drinks, admin});
  })

});

router.get("/pastries", (req, res, next) => {
  let admin = false
  if(req.session?.user?.role === "admin"){
    admin = true
  }
  Pastry.find()
  .then(pastries => {
    res.render("pastries", {pastries, admin});
})

});
router.get("/new-product", isAdmin, (req, res, next) => {
    res.render("newproduct");
  });

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


  module.exports = router