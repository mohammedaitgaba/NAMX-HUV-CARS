const express = require("express");
const router = express.Router();
const { authJwt } = require("../middlewares");
const controller = require("../controllers/PreOrders/PreOrder.controller");

module.exports = function (app, url) {
  app.use(url, router);
  router
    .route("/PreOrder")
    .get([authJwt.verifyToken],controller.getAllPreOrders)
    .post([authJwt.verifyToken],controller.setPreOrders);
  router
    .route("/PreOrder/:id")
    .get([authJwt.verifyToken],controller.getPreOrderById)
    .put([authJwt.verifyToken],controller.updatePreOrder)
    .delete([authJwt.verifyToken],controller.deletePreOrder)
  router.put("/ConfirmPreOrder/:id",[authJwt.verifyToken],controller.confirmPreOrder)
};
