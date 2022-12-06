const express = require('express');
const router = express.Router();
const {Player} = require("../models/player");

const {User} = require("../models/user");
const asyncHandler = require('../middleware/asyncHandler');

router.get(
	"/637a8ed97757477ec0e7085bf",
	asyncHandler(async(req,res)=>{
		
		const player = await Player.findById("637a8ed97757477ec0e7085b");
		res.status(201).send(player);
	})
)
router.get(
	"/allplayers",
	asyncHandler(async(req,res)=>{

		const playerList = await Player.find();
		res.send(playerList);
	})
)
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
	let player;
	try {
		
	  player = await Player.findById(id);
	} catch (err) {
	  console.log(err);
	}
	if (!player) {
	  return res.status(404).json({ message: "No Player found" });
	}
	return res.status(200).json({ player });
  };
router.get("/:id", getById);
const rateById = async (req, res, next) => {
	const id = req.params.id;
	let player;
	try {
		
	  player = await Player.findById(id);
	} catch (err) {
	  console.log(err);
	}
	if (!player) {
	  return res.status(404).json({ message: "No Player found" });
	}
	return res.status(200).json({ player });
  };
router.get("rate/:id", rateById);



module.exports = router;
