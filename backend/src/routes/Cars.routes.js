const express = require("express");
const router = express.Router();
const {authJwt } = require("../middlewares");
const controller = require("../controllers/Cars/Cars.controller");

module.exports = function (app, url) {
  app.use(url, router);
  router.get("/Cars", controller.getAllCars);
  router.post("/Cars", controller.setCar);
};

