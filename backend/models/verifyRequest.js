const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const { required } = require("joi");

const verifiedSchema = new mongoose.Schema({
   
user: {
    type: String,
    required: true
 },
file: {
  type:String,
  required: true
},
date:{
    type:Date,
    default: Date.now(),
    required: false
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
      user: Joi.string().required().label("User"),
      file: Joi.required().label("File"),
      name: Joi.string().required().label("Name")
      
    })
    return schema.validate(data);
  };
  
  module.exports = {verifyRequest, validator };