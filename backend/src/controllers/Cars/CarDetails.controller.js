const CarDetails = require("../../models/Car/CarDetails.model");

const getAllCarDetails = async (req, res) => {
  const Details = await CarDetails.find({}).populate("Car");
  res.json({ Details });
};

const setCarDetails = async (req, res) => {
  const { Car, Key, Value } = req.body;
  if (Object.values(req.body).some((v) => !v)) {
    return res.sendStatus(401, {
      message: "Please fill all required fields",
    });
  }

  const Details = await CarDetails.create({
    Car,
    Key,
    Value,
  });
  if (!Details) {
    res.status(401).send({ message: "Error data" });
  }
  return res.json({ message: "CarDetails Created successfuly" });
};

const UpdateCarDetail = async (req, res) => {
  const Details = await CarDetails.findById(req.params.id);

  if (!Details) {
    res.status(401).send({ message: "Invalide Params" });
  }

  if (Object.values(req.body).some((e) => !e)) {
    return res.sendStatus(401, {
      message: "Please fill all required fields",
    });
  }

  const UpdateDetail = await CarDetails.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.send(UpdateDetail);
  console.log(UpdateDetail);

  res.status(201).json(UpdateDetail);
};

const DeleteCarDetail = async (req, res) => {
  const Delete = await CarDetails.findById(req.params.id);

  if (!Delete) {
    res.status(401).send({ message: "Invalide Params" });
  }

  const Deleted = await CarDetails.findByIdAndUpdate(req.params.id, {
    $set: { isDeleted: true },
  });

  res.status(201).json(Deleted);
};

module.exports = {
  getAllCarDetails,
  setCarDetails,
  UpdateCarDetail,
  DeleteCarDetail,
};
