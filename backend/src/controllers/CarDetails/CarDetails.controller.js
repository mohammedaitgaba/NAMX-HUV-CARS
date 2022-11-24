const CarDetails = require("../../models/CarDetails.model");

const getAllCarDetails = async (req, res) => {
  const Details = await CarDetails.find({}).populate('Car');
  res.json({ Details });
};

const setCarDetails = async (req, res) => {
  const { Car,Key, Value } = req.body;
  if (Object.values(req.body).some((v) => !v)) {
    return res.sendStatus(400, {
      message: "Please fill all required fields",
    });
  }
  const Details = await CarDetails.create({
    Car,
    Key,
    Value,
  });
  if (!Details) {
    res.status(500).send({ message: "Error data" });
  }
  return res.json({ message: "CarDetails Created successfuly" });
};

module.exports = {
  getAllCarDetails,
  setCarDetails,
};
