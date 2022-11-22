const express = require("express");
const { verifySignUp, authJwt } = require("../middlewares");
const controller = require("../controllers/Client/ProfileController");
const router = express.Router();

module.exports = function (app, url) {
  app.use(url, router);
  router.put(
    "/User",
    [
      verifySignUp.checkRolesExisted,
      authJwt.verifyToken,
    ],
    controller.UpdateProfile
  );
};
