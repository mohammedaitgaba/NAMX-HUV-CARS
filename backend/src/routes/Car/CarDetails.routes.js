const express = require("express");
const router = express.Router();
// const {authJwt } = require("../middlewares");
const controller = require("../../controllers/Cars/CarDetails.controller");

module.exports = function (app, url) {
  app.use(url, router);
  router.get("/CarDetails", controller.getAllCarDetails);
  router.post("/CarDetails", controller.setCarDetails);
  router.put("/UpdateCarDetails/:id", controller.UpdateCarDetail);
  router.delete("/DeleteCarDetails/:id", controller.DeleteCarDetail);
};
