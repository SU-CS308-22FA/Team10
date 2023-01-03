const mongoose = require("mongoose");

const refereeSchema = new mongoose.Schema({
  name: { type: String, required: false },
  age: { type: String, required: false },
  domestic_league: { type: Array, required: false },
  international_league: { type: Array, required: false },
  image:{ type: String, required: false },
  bio:{ type: String, required: false },
  career:{ type: String, required: false },
  matches:{ type: Number, required: false },
  yellow:{ type: Number, required: false },
  secondyellow:{ type: Number, required: false },
  red:{ type: Number, required: false },
  penalty:{ type: Number, required: false },
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

const Referee = mongoose.model("referee", refereeSchema);

module.exports = { Referee };
