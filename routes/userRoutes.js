const express = require("express");
const router = express.Router();

//import controllers
const {
  userRegistration,
  userLogin,
} = require("../controllers/userController");

//create routes
router.post("/register", userRegistration);
router.post("/login", userLogin);

module.exports = router;
