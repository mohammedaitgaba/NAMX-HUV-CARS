const PreOrder = require("../../models/PreOrder.model");
const CarDetails = require("../../models/CarDetails.model")
const getAllPreOrders = async (req, res) => {
  const preOrder = await PreOrder.find({});
  res.json({ preOrder });
};
const setPreOrders = async (req, res) => {
  const { id_car, details  } = req.body;

  if (Object.values(req.body).some((v) => !v)) {
    return res.sendStatus(400, {
      message: "Please fill all required fields",
    });
  }

//   get the value of the key in CarDetails so it will be the key of preOrder
// const detail = await CarDetails.findById(id_detail);

  const preOrder = await PreOrder.create({
    id_car,
    details

  });
  if (!preOrder) {
    res.status(500).send({ message: "Error data" });
  }
  return res.json({ message: "preOrder Created successfuly" });
};

module.exports = {
  getAllPreOrders,
  setPreOrders,
};
