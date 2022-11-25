const CarColors = require("../../models/Car/CarColors.model");

const getAllCarColors = (req, res) => {
  CarColors.find({}, (err, carColors) => {
    err ? res.status(500).send({ message: err }) : res.json(carColors);
  });
};

const setCarColors = (req, res) => {
  const carColors = new CarColors({
    Key: req.body.Key,
    Value: req.body.Value,
  });
  if (Object.values(req.body).some((v) => !v)) {
    return res.sendStatus(400, {
      message: "Please fill all required fields",
    });
  }
  carColors.save((err, carColors) => {
    err
      ? res.json({
          message:
            err.message || "Some error occurred while deleting the carColors.",
          error: err,
          Status: err.status || 500,
        })
      : res.json({ message: "CarColors Created successfuly" });
  });
};

const deleteCarColors = (req, res) => {
  const id = req.params.id;
  CarColors.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          status: 404,
          message: `Cannot delete trip with id=${id}. cause it doesn't exist!`,
        });
      } else {
        res.send({
          status: 200,
          message: "Trip was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        status: 500,
        message: "Could not delete trip with id=" + id,
      });
    });
};
const UpdateCarColors = (req, res) => {
  const id = req.params.id;
  CarColors.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update trip with id=${id}. Maybe trip was not found!`,
        });
      } else res.send({ message: "Trip was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating trip with id=" + id,
      });
    });
};
module.exports = {
  getAllCarColors,
  setCarColors,
  deleteCarColors,
  UpdateCarColors,
};
