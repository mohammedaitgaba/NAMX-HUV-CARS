const PreOrder = require("../../models/PreOrder/PreOrder.model");
const AppError = require("../../middlewares/appErrorMiddleware");
const Error = require("../../middlewares/errorMiddleware");
const nodemailer = require("nodemailer");

const getAllPreOrders = async (req, res) => {
  const preOrder = await PreOrder.find({
    Deleted: false,
  });
  res.json({ preOrder });
};

const getPreOrderById = async (req, res) => {
  const preOrder = await PreOrder.findById(req.params.id);
  if (!preOrder) {
    return res.json({ message: "Oups! PreOrder Not found" });
  }
  res.json({ preOrder });
};

const setPreOrders = async (req, res, err) => {
  const { id_car, Maker, Details } = req.body;

  if (Object.values(req.body).some((v) => !v)) {
    return res.sendStatus(400, {
      message: "Please fill all required fields",
    });
  }
  const preOrder = await PreOrder.create({
    id_car,
    Maker,
    Details,
  });
  if (!preOrder) {
    return res.status(500).send({ message: "Error data" });
  }
  res.json({ message: "preOrder Created successfuly" });
};

const updatePreOrder = async (req, res) => {
  const preOrder = await PreOrder.findById(req.params.id);
  if (!preOrder) {
    return res.json("preOrder Not found");
  }
  const updatePreOrder = await PreOrder.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  if (!updatePreOrder) {
    return res.json({ message: "Data Error" });
  }
  return res.json({ message: "preOrder Updated successfuly" });
};

const deletePreOrder = async (req, res) => {
  const checkPreOrderExistance = await PreOrder.findById(req.params.id);
  if (!checkPreOrderExistance) {
    return res.json({ message: "PreOrder Not found" });
  }
  const deletePreOrder = await PreOrder.findByIdAndUpdate(req.params.id, {
    $set: {
      Deleted: true,
    },
  });
  deletePreOrder
    ? res.json({
        message: "preOrder deleted successfuly",
      })
    : res.json({
        message: "error",
      });
};

const confirmPreOrder = async (req, res) => {
  const PreOrderConfirmation = await PreOrder.findByIdAndUpdate(req.params.id, {
    $set: {
      Confirmed: true,
    },
  });
  if (PreOrderConfirmation) {
    // send Confirmation message to user email

    let mailTransporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      secure : false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const msg = {
      from: process.env.EMAIL, // sender address
      to: `med010kn@gmail.com`, // list of receivers
      subject: "preOrder NAMX confirmation", // Subject line
      text: "Hello Dear Your preOrder confirmed sucessfully ✔ ", // plain text body
    };

    mailTransporter.sendMail(msg, function (err, data) {
      if (err) {
        console.log("Error Occurs", err);
      } else {
        console.log("Email sent successfully");
      }
    });
    res.json({
      message: "preOrder confirmaed successfuly",
    });
  } else {
    res.json({
      message: "error",
    });
  }
};

module.exports = {
  getAllPreOrders,
  setPreOrders,
  getPreOrderById,
  updatePreOrder,
  deletePreOrder,
  confirmPreOrder,
};
