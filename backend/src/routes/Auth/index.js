module.exports = function (app, url) {
  require("./auth.routes")(app, url);
  require("./ForgetPassword.routes")(app, url);
};
