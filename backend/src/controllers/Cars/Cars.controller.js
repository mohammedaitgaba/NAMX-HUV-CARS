const Car = require("../../models/Car.model");

const getAllCars = async (req, res) => {
  const car = await Car.find({});
  res.json({ car });
};
const setCar = async (req, res) => {
  const { Name, Price } = req.body;
  const car = await Car.create({
    Name,
    Price,
  });
  if (!car) {
    res.status(500).send({ message: "Error data" });
  }
  return res.json({ message: "Car Created successfuly" });
};

module.exports = {
  getAllCars,
  setCar,
};
