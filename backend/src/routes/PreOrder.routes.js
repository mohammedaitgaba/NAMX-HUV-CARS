const express = require("express");
const router = express.Router();
const { authJwt } = require("../middlewares");
const controller = require("../controllers/PreOrders/PreOrder.controller");

module.exports = function (app, url) {
  app.use(url, router);
  router
    .route("/PreOrder")
    .get(controller.getAllPreOrders)
    .post(controller.setPreOrders);
  router
    .route("/PreOrder/:id")
    .get(controller.getPreOrderById)
    .put(controller.updatePreOrder)
    .delete(controller.deletePreOrder)
};
