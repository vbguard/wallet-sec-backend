const passport = require("passport");

module.exports.passportCheckLoginedUser = (req, res, next) => {
  passport.authenticate("local", {
    // successRedirect: "/dashboard",
    // failureRedirect: "/login",
    failureFlash: true
  })(req, res, next);
};
