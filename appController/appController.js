const nodemailer = require("nodemailer");
require("dotenv").config();
const Mailgen = require("mailgen");

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

const sendEmail = (req, res) => {
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
      name: "Mailgen",
      link: "https://mailgen.js/",
      // Optional product logo
      // logo: 'https://mailgen.js/img/logo.png'
    },
  });

  let response = {
    body: {
      name: "Daily t",
      intro: "Your bill has arrived",
      table: {
        data: [
          {
            item: "NodeMailer stack book",
            description: "A Backend application",
            price: "$10",
          },
        ],
      },
      outro: "Looking forward to do more buisness",
    },
  };

  let email = MailGenerator.generate(response);

  res.status(201).json("GetEmail sucessful");
};

module.exports = {
  sendEmail,
};
