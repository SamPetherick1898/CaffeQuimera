const router = require("express").Router();

const mapbox_key = "pk.eyJ1Ijoic2FtcGV0aGVyaWNrMTg5OCIsImEiOiJjbDVoZHNqbW8wOGY4M2hwa3E4dmJpdHhyIn0.3X_0Y5vyl5tDZmTauAe0dQ"

router.get("/branch", (req, res, next) => {
    res.render("branch");
  });

  module.exports = router;