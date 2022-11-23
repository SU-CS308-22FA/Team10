const express = require('express');
const router = express.Router();
const {Player} = require("../models/player");

const {User} = require("../models/user");
const asyncHandler = require('../middleware/asyncHandler');

router.get(
	"/637a8ed97757477ec0e7085bf",
	asyncHandler(async(req,res)=>{
		console.log("Guler2");
		const player = await Player.findById("637a8ed97757477ec0e7085b");
		res.status(201).send({ message: "Player got successfully" });
	})
)
router.get(
	"/allplayers",
	asyncHandler(async(req,res)=>{
		console.log("Guler3");
		const playerList = await Player.find();
		res.send(playerList);
	})
)
router.get(
	"/:id",
	asyncHandler(async(req,res)=>{
		console.log("Guler");
		const playerList = await Player.findById(req.params.id);
		res.send(playerList);
	})
)




module.exports = router;
