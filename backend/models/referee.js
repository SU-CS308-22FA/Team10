const mongoose = require("mongoose");

const refereeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: String, required: true },
  domestic_league: { type: String, required: true },
  international_league: { type: String, required: true },
});

const Referee = mongoose.model("referee", refereeSchema);

module.exports = { Referee };
