const mongoose = require("mongoose");
const { stringify } = require("querystring");

const matchSchema = new mongoose.Schema({
  team1: { type: String, required: true },
  team2: { type: String, required: true },
  logo1: {type:String},
  logo2: {type:String},
  week: {type: Number},
  place: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  referee: { type: String},

  team1_goals: { type: String },
  team2_goals: { type: String },
 
 
  team1_shots: { type: String},
  team2_shots: { type: String},
  team1_shots_off_goal: { type: String},
  team2_shots_off_goal: { type: String },
  team1_shots_total: { type: String },
  team2_shots_total: { type: String },
  team1_shots_blocked: { type: String },
  team2_shots_blocked: { type: String },
  red1 : { type: String },
  red2 : { type: String },
  fouls1:  { type: String },
  fouls2:  { type: String },
  yellow1:  { type: String },
  yellow2:  { type: String },
  offsides1:  { type: String },
  offsides2 :  { type: String },
  goalkeeper_saves1:  { type: String },
  goalkeeper_saves2:  { type: String },
  comp: { type: String},
  predictWinner1: {type: String},
  predictWinner2: {type: String},
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



const Match = mongoose.model("matches", matchSchema);

module.exports = {Match};
