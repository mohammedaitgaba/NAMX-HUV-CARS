const express = require("express");
const router = express.Router();
const { authJwt } = require("../../middlewares");
const controller = require("../../controllers/Cars/Cars.controller");

module.exports = function (app, url) {
  app.use(url, router);
  router.get("/Cars", controller.getAllCars);
  router.post("/Cars", controller.setCar);
  router.delete("/Cars/:id", controller.deleteCar);
  router.put("/Cars/:id", controller.UpdateCar);
  router.get("/Cars/:id", controller.getCarById);
};
