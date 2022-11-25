module.exports = function (app, url) {
  require("./auth.routes")(app, url);
  require("./Car/Cars.routes")(app, url);
  require("./Car/CarDetails.routes")(app, url);
  require("./PreOrder.routes")(app, url);
  require("./Profile.routes")(app, url);
  require("./Car/CarColor.routes")(app, url);
};
