const nodemailer = require("nodemailer");
require("dotenv").config();

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

const sendEmail = (req, res) => {
  const { userEmail } = req.body;

  let confif = {
    service: "gmail",
    auth: {
      user: email,
      pass: password,
    },
  };

  res.status(201).json("GetEmail sucessful");
};

module.exports = {
  sendEmail,
};
