const express = require("express");
const router  = express.Router();
const authController = require("../controllers/auth-controller");

router.route("/").get(authController.home);
router.route("/register").post(authController.register);
router.route("/login").get(authController.login);
// router.route("/about").get(authController.register);
// router.route("/contact").get(authController.register);

module.exports = router;