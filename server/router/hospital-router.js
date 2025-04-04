const express = require("express");
const router  = express.Router();
const {hospitalForm, hospitalInfo, getUniqueCities} = require("../controllers/hospital-controller");

router.route("/formHospitalDetail").post(hospitalForm);
router.route("/fetchHostitalInfo").get(hospitalInfo);
router.get('/cities/unique', getUniqueCities);

module.exports = router;