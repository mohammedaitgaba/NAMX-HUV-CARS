const asyncHnadler = require('express-async-handler')
const Car = require('../../models/car.model')


const getAllCars = asyncHnadler(async(req,res)=>{
    // const car =  await Car.find({})
    res.json({message:"getAllCars"})
    
})

module.exports={
    getAllCars,
}