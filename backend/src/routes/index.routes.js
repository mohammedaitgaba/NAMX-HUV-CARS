module.exports = function (app, url) {
  require("./auth.routes")(app, url);
  require("./Profile.routes")(app, url);
};