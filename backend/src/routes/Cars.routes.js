const express = require('express')
const router = express.Router()
const controller = require('../controllers/Cars/Cars.controller')

module.exports = function(app,url){
    app.post(`${url}/Cars`,controller.getAllCars)
}