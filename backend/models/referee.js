const mongoose = require("mongoose");

const refereeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: String, required: true },
  domestic_league: { type: Array, required: true },
  international_league: { type: Array, required: true },
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
  }
},
{timestamps : true}
);

const Referee = mongoose.model("referee", refereeSchema);

module.exports = { Referee };
