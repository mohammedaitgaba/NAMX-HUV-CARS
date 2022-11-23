module.exports = function (app, url) {
  require("./auth.routes")(app, url);
  require("./Cars.routes")(app, url);
  require("./CarDetails.routes")(app, url);
  require("./PreOrder.routes")(app, url);
  require("./Profile.routes")(app, url);
};
