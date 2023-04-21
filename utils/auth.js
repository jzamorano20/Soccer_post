const withAuth = (req, res, next) => {
    //will redirct to login 
    if (!req.session.logged_in) {
        res.redirect("/login");
    } else {
        // will conintue if logged in 
        next();
    }
};


module.exports = withAuth;