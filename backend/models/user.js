const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  img:
    {
        data: Buffer,
        contentType: String
    },
  role: {type: Boolean, default: false}, // if admin then 1, else 0
  team: { type: String},
  file: {type: String, required: false},
  email: { type: String, required: true },
  password: { type: String, required: true },
  verified: {type: Boolean, default: false, required:false},
  

});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "30d",
  });
  return token;
};

const User = mongoose.model("user", userSchema);

const validator = (data) => {
  const schema = Joi.object({
    
    firstName: Joi.string().required().label("First Name"),
    lastName: Joi.string().required().label("Last Name"),
    email: Joi.string().email().required().label("Email"),
    password: passwordComplexity().required().label("Password"),
  })
  return schema.validate(data);
};

module.exports = { User, validator };
