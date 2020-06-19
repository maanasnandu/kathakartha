//Setting up routes
const express = require("express");
const passport = require("passport");
const router = express.Router();

// @desc Google Auth
// @route GET /auth/google

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

// @route GET/auth/google/callback

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/dashboard");
  }
);

//Logout user
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
