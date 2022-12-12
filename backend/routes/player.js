const express = require('express');
const router = express.Router();
const {Player} = require("../models/player");
const {createPlayer} = require("../controller/playerCtrl");

const {User} = require("../models/user");
const asyncHandler = require('../middleware/asyncHandler');
const asyncHandler1 = require("express-async-handler");

/*
router.post("/",asyncHandler(async(req,res)=>{
    try{
        const player = new Player(req.body);
		
		const newPlayer = await player.save() //error
		console.log("gizm");
        //await new Player(req.body).save();
		
        res.status(200).json(newPlayer);
        
        
    }catch(error){
        res.status(500).send({ message: "Internal Server Error" });
    }
    
}));
*/
router.post("/addPlayer", async(req, res) => {
    const {name, team, age, position, market_value, nationality,icon,image,desc,dateOB,height,placeOB,youthCareer,transferHist,joined,number,ratings,totalrating} = req.body;
    const newPlayer = new Player({ name, team, age, position, market_value, nationality,icon,image,desc,dateOB,height,placeOB,youthCareer,transferHist,joined,number,ratings,totalrating });

    try {
        const player = await Player.findOne({ name:name });
        if (player) throw Error('This player already exists');

        const savedPlayer = await newPlayer.save();
        if (!savedPlayer) throw Error('Something went wrong while saving the match');

    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});
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


/*

router.put("/rate",asyncHandler(async(req,res)=>{
	const {_id} = req.user;
	const{star, playerId} = req.body;
	try{
		const player = await Player.findById(playerId);
		let alreadyRated = player.ratings.find((userId) => userId.postedby.toString() === _id.toString());
		if (alreadyRated){
			const updateRating = await Player.updateOne(
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
			const ratePlayer = await Player.findByIdAndUpdate(playerId,{
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
			//res.json(ratePlayer);
		}
		const getallratings = await Player.findById(playerId);
		let totalRating = getallratings.ratings.length;
		let ratingsum = getallratings.ratings.map((item)=> item.star).reduce((prev, curr)=>prev_curr,0);
		let actualRating = Math.round(ratingsum/totalRating);
		let finalPlayer = await Player.findByIdAndUpdate(playerId,{
			totalrating: actualRating,
		},
		{
			new:true
		});
		res.json(finalPlayer);
	}catch(error){
		throw new Error(error)

	}
}));


*/


module.exports = router;
