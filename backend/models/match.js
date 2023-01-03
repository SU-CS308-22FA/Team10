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

  gf: { type: String },
  ga: { type: String },
  poss: { type: String},
  team1_goals: { type: String },
  team1_shots: { type: String},
  team1_shots_on_target: { type: String},
  team1_shot_percentage: { type: String },
  team1_pk: { type: String},
  team1_pkatt: { type: String },
  team2_shots: { type: String},
  team2_shots_on_target: { type: String },
  team2_shot_percentage: { type: String},
  team2_pk: { type: String},
  team2_pkatt: { type: String},
  comp: { type: String},


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
