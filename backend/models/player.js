const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  team: { type: String, required: true },
  age: { type: String, required: true },
  position: { type: String, required: true },
  market_value: { type: String },
  nationality: { type: String, required: true },
  icon: { type: String, required: true },
  image: { type: String, required: true },
  desc: { type: String },
  dateOB: { type: String},
  height: { type: String},
  penalty:  { type: String},
  goals:  { type: String},
  fouls:  { type: String},
  birthDate:  { type: String},
  birthPlace:  { type: String},
  league:  { type: String},
  cards:  { type: String},
  weight: {type: String},
  placeOB: { type: String},
  youthCareer: { type: Array},
  transferHist: { type: Array},
  joined: { type: String },
  number: { type: String },
  ratings: [
    {
      star: Number,
      postedby: {type:mongoose.Schema.Types.ObjectId, ref:"user"},
    },
  ],
  
  totalrating: {
    type:Number,
    default: 0,
  },
  comments: [
    {
      comment: String,
      postedby: {type:mongoose.Schema.Types.ObjectId, ref:"user"},
      username: {type:mongoose.Schema.Types.String, ref:"user"},
      parentId: {type:mongoose.Schema.Types.ObjectId},
    },
  ],
  
  

},
{timestamps : true}
);



const Player= mongoose.model("player", playerSchema);

module.exports = { Player};
