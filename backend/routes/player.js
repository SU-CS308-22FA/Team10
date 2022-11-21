const express = require('express');
const router = express.Router();
const {Player} = require("../models/player");


const asyncHandler = require('../middleware/asyncHandler');
const { User} = require("../models/user");
router.get(
	"/63795b1155ad5a72f90dc12a",
	asyncHandler(async(req,res)=>{
		console.log("GUler2");
		const user = await User.findById("637a8ac3f33ead04373b41e4");
		res.status(201).send({ message: "Player got successfully" });
	})
)

router.get(
	"/allplayers",
	asyncHandler(async(req,res)=>{
		console.log("Guler");
		const playerList = await Player.find();
		res.send(playerList);
	})
)



module.exports = router;
