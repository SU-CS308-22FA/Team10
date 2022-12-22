const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  team: { type: String, required: true },
  age: { type: String, required: true },
  position: { type: String, required: true },
  market_value: { type: String, required: true },
  nationality: { type: String, required: true },
  icon: { type: String, required: true },
  image: { type: String, required: true },
  desc: { type: String, required: true },
  dateOB: { type: String, required: true },
  height: { type: String, required: true },
  placeOB: { type: String, required: true },
  youthCareer: { type: Array, required: true },
  transferHist: { type: Array, required: true },
  joined: { type: String, required: true },
  number: { type: String, required: true },
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
      subcomments: [{
        comment: Number,
        postedby: {type:mongoose.Schema.Types.ObjectId, ref:"user"},
      }],
    },
  ],
  
  

},
{timestamps : true}
);



const Player= mongoose.model("player", playerSchema);

module.exports = { Player};
