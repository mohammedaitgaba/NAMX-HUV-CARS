"use strict";
const db = require("../../../models/auth");
const AppError = require("../../../middlewares/appErrorMiddleware");
const User = db.user;
const bcrypt = require("bcryptjs");

exports.UpdateProfile = (req, res) => {
  User.updateOne(
    { _id: req.body._id },
    {
      full_name: req.body.full_name,
      password: bcrypt.hashSync(req.body.password, 8),
    },
    (err, user) => {
      err
        ? AppError(err)
        : res.send({ message: "User was updated successfully." });
    }
  );
};
exports.GetProfile = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    err ? AppError(err) : res.send(user);
  });
};
