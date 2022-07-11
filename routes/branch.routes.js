const router = require("express").Router();

router.get("/branch", (req, res, next) => {
    res.render("branch");
  });
  
  module.exports = router;