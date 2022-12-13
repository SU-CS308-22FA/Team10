const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const verifiedSchema = new mongoose.Schema({
   
user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
 },
file: {
    type: String
},
date:{
    type:Date,
    default: Date.now()
},
name:{
    type:String,
    required: true
}

});
verifiedSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
      expiresIn: "7d",
    });
    return token;
  };
  
  const verifyRequest = mongoose.model("verifyRequests", verifiedSchema);
  
  const validator = (data) => {
    const schema = Joi.object({
      user: Joi.user().required().label("User"),
      date: Joi.Date().required().label("Date"),
      file: Joi.file().required().label("File"),
      name: Joi.name().required().label("Name")
      
    })
    return schema.validate(data);
  };
  
  module.exports = {verifyRequest, validator };