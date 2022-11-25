const User = require("../../models/auth/user.model");
const nodemailer = require("nodemailer");
const Code = require("../../models/auth/Code");

function sendCodeReset(email, code) {
  let mailTransporter = nodemailer.createTransport({
    service: "outlook",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  let mailDetails = {
    from: process.env.EMAIL,
    to: email,
    subject: "Verification Code",
    text:
      "You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n" +
      "Your code verifcation is : " +
      code,
  };

  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log("Error Occurs", err);
    } else {
      console.log("Email sent successfully");
    }
  });
}

exports.resetPassword = async function (req, res) {
  const userEmail = req.body.email;
  try {
    const user = await User.find({ email: userEmail });
    if (user.length != 0) {
      let code = generateCode();
      const email = await Code.find({ email: userEmail });
      if (email.length != 0) {
        try {
          await Code.updateOne({ email: userEmail }, { $set: { code: code } });
        } catch (err) {
          res.json({ message: err });
        }
      } else {
        let data = new Code({
          email: userEmail,
          code: code,
        });
        data.save();
      }
      sendCodeReset(userEmail, code);
      res.json("send");
    } else {
      res.json("please enter a valid email");
    }
  } catch (err) {
    res.json({ message: err });
  }
};

function generateCode() {
  var result = [];
  var characters = "0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < 5; i++) {
    result.push(
      characters.charAt(Math.floor(Math.random() * charactersLength))
    );
  }
  return result.join("");
}

exports.checkCode = async function (req, res) {
  const userEmail = req.body.email;
  const code = req.body.code;
  const pass = req.body.password;

  console.log({ userEmail, code, pass });
  try {
    const verification = await Code.find({ email: userEmail, code: code });
    if (verification.length != 0) {
      await User.updateOne({ email: userEmail }, { $set: { password: pass } });
      res.json(true);
    } else {
      res.json(false);
    }
  } catch (err) {
    res.json({ message: "err" });
  }
};
