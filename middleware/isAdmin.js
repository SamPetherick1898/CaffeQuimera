module.exports = (req, res, next) => {
    // checks if the user is logged in when trying to access a specific page
    if (!req.session.user) {
        res.send('<script>alert("You must be logged in as amin")</script>')
        return res.redirect("/");

    }
  
    req.user = req.session.user;
    if(req.user.role === "admin"){
        next();
        return 
    }
    res.redirect("/")
  };
  