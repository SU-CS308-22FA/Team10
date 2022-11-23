const express = require('express');
const router = express.Router();
const {Match} = require("../models/match");

const asyncHandler = require('../middleware/asyncHandler');


router.get(
	"/637dfd469953a84747abc2ba",
	asyncHandler(async(req,res)=>{
		console.log("deneme3");
		const match = await Match.findById("637dfd469953a84747abc2ba");
		res.status(201).send({ message: "Match got successfully" });
	})
)

router.get(
	"/allmatches",
	asyncHandler(async(req,res)=>{
		console.log("deneme2");
		const matchList = await Match.find();
		res.send(matchList);
	})
)
router.get(
	"/:id",
	asyncHandler(async(req,res)=>{
		console.log("deneme");
		const matchList = await  Match.findById(req.params.id);
		res.send(matchList);
	})
)
module.exports = router;