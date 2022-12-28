const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema({
  team1: { type: String, required: true },
  team2: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  gf: { type: String, required: true },
  ga: { type: String, required: true },
  poss: { type: String, required: true },
  team1_goals: { type: String, required: true },
  team1_shots: { type: String, required: true },
  team1_shots_on_target: { type: String, required: true },
  team1_shot_percentage: { type: String, required: true },
  team1_pk: { type: String, required: true },
  team1_pkatt: { type: String, required: true },
  team2_shots: { type: String, required: true },
  team2_shots_on_target: { type: String, required: true },
  team2_shot_percentage: { type: String, required: true },
  team2_pk: { type: String, required: true },
  team2_pkatt: { type: String, required: true },
  comp: { type: String, required: true },


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



const Match= mongoose.model("matches", matchSchema);

module.exports = { Match};