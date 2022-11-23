const express = require('express');
const router = express.Router();
const {Match} = require("../models/match");

const asyncHandler = require('../middleware/asyncHandler');


router.get(
	"/637e05299953a84747abc2bb",
	asyncHandler(async(req,res)=>{
		console.log("deneme3");
		const match = await Match.findById("637e05299953a84747abc2bb");
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