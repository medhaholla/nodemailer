const router = require("express").Router();

const { sendEmail } = require("../appController/appController");

router.post("/user/sendEmail", sendEmail);

module.exports = router;
