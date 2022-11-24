const express = require("express");
const router = express.Router();
const { authJwt } = require("../../middlewares");
const controller = require("../../controllers/CarColors");

module.exports = function (app, url) {
  app.use(url, router);
  router.get("/CarColor", controller.getAllCarColors);
  router.post("/setCarColors", controller.setCarColors);
  router.delete("/deleteCarColors/:id", controller.deleteCarColors);
  router.put("/UpdateCarColors/:id", controller.UpdateCarColors);
};
