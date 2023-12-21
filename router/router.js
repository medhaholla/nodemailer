const router = require("express").Router();

const { sendEmail } = require("../appController/appController.js");

router.post("/user/sendmail", sendEmail);

module.exports = router;
