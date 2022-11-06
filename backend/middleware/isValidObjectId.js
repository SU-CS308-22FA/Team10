const mongoose = require('mongoose');

module.exports = (req,res,next) => {
    console.log(req.params.id)
    if(!mongoose.isValidObjectId(req.params.id)){
        return res.status(404).send("Invalid ID");
    }
    next();
}