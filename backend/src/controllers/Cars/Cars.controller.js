const Car = require("../../models/Car/Car.model");

const getAllCars = async (req, res) => {
  const cars = await Car.find({
    Deleted: false,

  }).select({Deleted:0,__v:0})
  if (!cars) {
    res.status(500).send({ message: "Error data" });
  }
  return res.json(cars);
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

const deleteCar = (req, res) => {
  const id = req.params.id;
  console.log(id);
  Car.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          status: 404,
          message: `Cannot delete car with id=${id}. cause it doesn't exist!`,
        });
      } else {
        res.send({
          status: 200,
          message: "car was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        status: 500,
        message: "Could not delete car with id=" + id,
      });
    });
};

const UpdateCar = (req, res) => {
  const id = req.params.id;
  Car.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update car with id=${id}. Maybe car was not found!`,
        });
      } else res.send({ message: "car was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating car with id=" + id,
      });
    });
};
const getCarById = async (req, res) => {
  const id = req.params.id;
  Car.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found car with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving car with id=" + id });
    });
};
module.exports = {
  getAllCars,
  setCar,
  deleteCar,
  UpdateCar,
  getCarById,
};
