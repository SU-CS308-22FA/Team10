const mongoose = require("mongoose");
const asyncHandler = require("./middleware/asyncHandler");

module.exports = asyncHandler(async () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(process.env.MONGODB_URI, connectionParams);
    console.log("Successfully connected to database");
  } catch (error) {
    console.log(error);
    console.log("error on db");
  }
});
