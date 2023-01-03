const express = require("express");
const router = express.Router();
const { Referee } = require("../models/referee");

const { User } = require("../models/user");
const asyncHandler = require("../middleware/asyncHandler");

router.post("/addReferee", async (req, res) => {
  const {
    name,
    age,
    domestic_league,
    international_league,
    image,
    bio,
    career,
    matches,
    yellow,
    secondyellow,
    red,
    penalty,
    ratings,
    totalrating,
    comments
  } = req.body;
  const newReferee = new Referee({
    name,
    age,
    domestic_league,
    international_league,
    image,
    bio,
    career,
    matches,
    yellow,
    secondyellow,
    red,
    penalty,
    ratings,
    totalrating,
    comments
  });

  try {
    const referee = await Referee.findOne({ name: name });
    if (referee) throw Error("This referee already exists");

    const savedReferee = await newReferee.save();
    if (!savedReferee)
      throw Error("Something went wrong while saving the referee");
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

router.get(
  "/637d9bdbb9e9d9d7f5703984",
  asyncHandler(async (req, res) => {
    
    const referee = await Referee.findById("637d9bdbb9e9d9d7f5703984");
    res.status(201).send(referee);
  })
);
router.get(
  "/allreferees",
  asyncHandler(async (req, res) => {

    const refereeList = await Referee.find();
    res.send(refereeList);
  })
);
/*
router.get(
	"/:id",
	asyncHandler(async(req,res)=>{
		console.log("Guler");
		const playerList = await Player.findById(req.params.id);
		res.send(playerList);
	})
)
*/
const getById = async (req, res, next) => {
  const id = req.params.id;
  let referee;
  try {
    
    referee = await Referee.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!referee) {
    return res.status(404).json({ message: "No Referee found" });
  }
  return res.status(200).json({ referee });
};
router.get("/:id", getById);

module.exports = router;
