module.exports = function (app, url) {
  require("./auth.routes")(app, url);
  require("./Cars.routes")(app, url);
};
