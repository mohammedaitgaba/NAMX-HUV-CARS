const express = require("express");
const router = express.Router();
const controller = require("../controllers/LiveSearch/LiveSearch.controller")


module.exports = function (app, url) {
    app.use(url, router);
    router.get("/LiveSearch/:key", controller.liveSearch);
};