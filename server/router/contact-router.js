const express = require("express");
const router  = express.Router();
const contactForm = require("../controllers/contact-controler");
const {contactSchema} = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware")

router.route("/contact").post(validate(contactSchema), contactForm);

module.exports = router;