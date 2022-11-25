const PreOrder = require("../../models/PreOrder.model");
const AppError = require("../../middlewares/appErrorMiddleware");
const Error = require("../../middlewares/errorMiddleware");

const getAllPreOrders = async (req, res) => {
  const preOrder = await PreOrder.find({
    Deleted: false
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
  const { id_car,Maker, Details } = req.body;

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

const confirmPreOrder = async (req,res)=>{
  const PreOrderConfirmation = await PreOrder.findByIdAndUpdate(req.params.id,{
    $set: {
      Confirmed: true,
    },
  })
  PreOrderConfirmation
  ? res.json({
      message: "preOrder confirmaed successfuly",
    })
  : res.json({
      message: "error",
    });
}

module.exports = {
  getAllPreOrders,
  setPreOrders,
  getPreOrderById,
  updatePreOrder,
  deletePreOrder,
  confirmPreOrder
};
