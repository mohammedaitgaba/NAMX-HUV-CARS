const express = require("express");
const router = express.Router();
const { authJwt } = require("../middlewares");
const controller = require("../controllers/Client/ProfileController");

module.exports = function (app, url) {
  app.use(url, router);
  router.put("/user", [authJwt.verifyToken], controller.UpdateProfile);
  router.get("/user/:id", [authJwt.verifyToken], controller.GetProfile);
};
