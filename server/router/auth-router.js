const express = require("express");
const router  = express.Router();
const authController = require("../controllers/auth-controller");
const validate = require("../middlewares/validate-middleware");
const {userSignupSchema, userSigninSchema, driverSignupSchema, driverSigninSchema} = require("../validators/auth-validator");
const authMiddleware = require("../middlewares/auth-middleware");

router.route("/").get(authController.home);
router.route("/register/userRegistration").post(validate(userSignupSchema), authController.registerUser);
router.route("/register/driverRegistration").post(validate(driverSignupSchema), authController.registerDriver);
router.route("/login/userLogin").post(validate(userSigninSchema), authController.loginUser);
router.route("/login/driverLogin").post(validate(driverSigninSchema), authController.loginDriver);
// router.route("/about").get(authController.register);
router.route('/user').get(authMiddleware, authController.user);

module.exports = router;