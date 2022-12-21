const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema({
  team1: { type: String, required: true },
  team2: { type: String, required: true },
  place: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  ratings: [
    {
      star: Number,
      postedby: {type:mongoose.Schema.Types.ObjectId, ref:"user"},
    },
  ],
  
  totalrating: {
    type:Number,
    default: 0,
  }
},
{timestamps : true}
);



const Match= mongoose.model("matches", matchSchema);

module.exports = { Match};