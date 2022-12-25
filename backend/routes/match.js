const express = require('express');
const router = express.Router();
const {Match} = require("../models/match");

const asyncHandler = require('../middleware/asyncHandler');

/*
router.get(
	"/637e05299953a84747abc2bb",
	asyncHandler(async(req,res)=>{
		console.log("deneme3");
		const match = await Match.findById("637e05299953a84747abc2bb");
		res.status(201).send({ message: "Match got successfully" });
	})
)
*/

router.get(
	"/allmatches",
	asyncHandler(async(req,res)=>{
		console.log("deneme2");
		const matchList = await Match.find();
		res.send(matchList);
	})
)
/*
router.get(
	"/:id",
	asyncHandler(async(req,res)=>{
		console.log("deneme");
		const matchList = await  Match.findById(req.params.id);
		res.send(matchList);
	})
)
*/
const getById = async (req, res, next) => {
	const id = req.params.id;
	let match;
	try {
	  
	  match = await Match.findById(id);
	} catch (err) {
	  console.log(err);
	}
	if (!match) {
	  return res.status(404).json({ message: "No Match found" });
	}
	return res.status(200).json({ match });
  };
  router.get("/:id", getById);

const rateById = async (req, res, next) => {
	
	console.log("get match")
	const id = req.params.id;
	let match;
	try {
		
	  match = await Match.findById(id);
	} catch (err) {
	  console.log(err);
	}
	if (!match) {
	  return res.status(404).json({ message: "No Match found" });
	}
	return res.status(200).json({ match });
  };
router.get("/rate/:id", rateById);

const commentById = async (req, res, next) => {
	

	const id = req.params.id;
	let match;
	try {
		
	  match = await Match.findById(id);
	} catch (err) {
	  console.log(err);
	}
	if (!match) {
	  return res.status(404).json({ message: "No Match found" });
	}
	return res.status(200).json({ match });
  };
router.get("/comment/:id", commentById);

router.put("/rate/:id",authMiddleware,asyncHandler1(async(req,res)=>{
	console.log("put match");
	const matchId = req.params.id;
	const {_id} = req.user;
	const{star} = req.body;
	try{
		const match = await Match.findById(matchId);
		let alreadyRated = match.ratings.find((userId) => userId.postedby.toString() === _id.toString());
		if (alreadyRated){
			const updateRating = await Match.updateOne(
				{
					ratings:{$elemMatch: alreadyRated},
				},
				{
					$set:{"ratings.$.star":star},
				},
				{
					new:true,
				}
			);
			//res.json(updateRating);
		}else{
			const rateMatch = await Match.findByIdAndUpdate({_id: matchId},{
				$push: {
					ratings:{
						star: star,
						postedby: _id,
					},
				},
			},
			{
				new:true,
			}
			);
			//res.json(rateMatch);
		}
		const getallratings = await Match.findById(matchId);
		let totalRating = getallratings.ratings.length;
		let ratingsum = getallratings.ratings.map((item)=> item.star).reduce((prev, curr)=>prev + curr,0);
		let actualRating = parseFloat(((ratingsum/totalRating*1.0))).toFixed(2);
		let finalMatch = await Match.findByIdAndUpdate(matchId,{
			totalrating: actualRating,
		},
		{
			new:true
		});
	
	}catch(error){
		throw new Error(error)

	}
}));

router.post("/comment/:id",authMiddleware,asyncHandler1(async(req,res)=>{
	
	const matchId = req.params.id;
	const {_id} = req.user;
	
	const{comment} = req.body;
	const{parentId} = req.body;

	try{
		const match = await Match.findById(matchId);
		const user = await User.findById(_id);
		
		const commentMatch = await Match.findByIdAndUpdate({_id: matchId},{
			
			$push: {
				comments:{
					comment: comment,
					username: user.firstName +" "+ user.lastName,
					postedby: _id,
					parentId: parentId,
				},
			},
		},
		{
			new:true,
		}
		);
		console.log("comment match");
		
	}catch(error){
		throw new Error(error)

	}
}));

module.exports = router;
