const nodemailer = require("nodemailer");
require("dotenv").config();
const Mailgen = require("mailgen");
// const SMTPTransport = require("nodemailer/lib/smtp-transport");

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

const sendEmail = async (req, res) => {
  const { userEmail } = req.body;

  let config = {
    service: "gmail",
    auth: {
      user: email,
      pass: password,
    },
  };
  let transporter = nodemailer.createTransport(config);

  let MailGenerator = new Mailgen({
    theme: "default",
    product: {
      // Appears in header & footer of e-mails
      name: "Welcome",
      link: "https://mailgen.js/",
      // Optional product logo
      // logo: 'https://mailgen.js/img/logo.png'
    },
  });

  let response = {
    body: {
      name: "Hi there",
      intro: "This is test mail",
    },
  };

  let mail = MailGenerator.generate(response);

  let message = {
    from: email,
    to: userEmail,
    subject: "Place Order",
    html: mail,
  };

  transporter
    .sendMail(message)
    .then(() => {
      return res.status(201).json({
        msg: "You should recieve an email",
      });
    })
    .catch((error) => {
      return res.status(500).json({ error });
    });
};

module.exports = {
  sendEmail,
};
