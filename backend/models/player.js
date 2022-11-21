const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  team: { type: String, required: true },
  age: { type: String, required: true },
  position: { type: String, required: true },
  position_category: { type: String, required: true },
  market_value: { type: String, required: true },
  nationality: { type: String, required: true }

});



const Player= mongoose.model("player", playerSchema);

module.exports = { Player};
