const express = require("express");
const router = express.Router();
const { verifySignUp } = require("../../middlewares");
const controller = require("../../controllers/Auth/auth.controller");

module.exports = function (app, url) {
  app.post(
    `${url}/signup`,
    [verifySignUp.checkDuplicateEmail, verifySignUp.checkRolesExisted],
    controller.signup
  );
  app.post(`${url}/signin`, controller.signin);
  app.post(`${url}/verifyisAdmin`, controller.verifyisAdmin);
};
