const CarDetails = require("../../models/Car/CarDetails.model")

const liveSearch = async (req, res) => {
    const Search = await CarDetails.find({ Key: req.params.key})
    if(!Search) {
        res.status(401).send({ message: 'error'})
    }
    res.status(201).json(Search)
};

module.exports = {
    liveSearch,
}