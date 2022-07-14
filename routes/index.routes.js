const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  let admin = false
  if(req.session?.user?.role === "admin"){
    admin = true
  }
  res.render("index", {admin});
});

router.get("/aboutUs", (req, res, next) => {
  res.render("aboutUs");
});

module.exports = router;
