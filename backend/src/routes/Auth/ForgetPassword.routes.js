const express = require("express");
const router = express.Router();
const { verifySignUp } = require("../../middlewares");
const controller = require("../../controllers/Auth/ForgetPassword");

module.exports = function (app, url) {
  app.use(url, router);
  router.post("/resetPassword", controller.resetPassword);
  router.post("/checkCode", controller.checkCode);
};