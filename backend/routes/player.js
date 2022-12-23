const express = require('express');
const router = express.Router();
const {Player} = require("../models/player");
const {User} = require("../models/user");
const { authMiddleware } = require("../middleware/authMiddleware");

const asyncHandler = require('../middleware/asyncHandler');
const asyncHandler1 = require("express-async-handler");


router.post("/addPlayer", async(req, res) => {
    const {name, team, age, position, market_value, nationality,icon,image,desc,dateOB,height,placeOB,youthCareer,transferHist,joined,number,ratings,totalrating} = req.body;
    const newPlayer = new Player({ name, team, age, position, market_value, nationality,icon,image,desc,dateOB,height,placeOB,youthCareer,transferHist,joined,number,ratings,totalrating });

    try {
        const player = await Player.findOne({ name:name });
        if (player) throw Error('This player already exists');

        const savedPlayer = await newPlayer.save();
        if (!savedPlayer) throw Error('Something went wrong while saving the player');

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

/*

router.put("/:id", async(req, res) => {
    
    //const newPlayer = new Player({ name, team, age, position, market_value, nationality,icon,image,desc,dateOB,height,placeOB,youthCareer,transferHist,joined,number,ratings,totalrating });
	const id = req.params.id;
	const { totalrating } = req.body;
    try {
		let player = await Player.findByIdAndUpdate(id,req.body);
        //const savedPlayer = await Player.findById(id);
        if (!player) throw Error('Something went wrong while saving the player');

    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});

router.put(
"/:id",
	asyncHandler(async(req,res)=>{
		const id = req.params.id;
		
		console.log("g");
		await Player.findByIdAndUpdate(id);
		const player = await Player.findById(id);
		res.status(200).send({message: "Updated successfully",  player: player})
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


const updatePlayer = async (req, res, next) => {
	const id = req.params.id;
	const { totalrating } = req.body;
	let player;
	try {
		
	  	player = await Player.findByIdAndUpdate(id, {
		totalrating
	  });
	  
	  //player = await player.save();
	
	} catch (err) {
	  console.log(err);
	}
	if (!player) {
	  return res.status(404).json({ message: "Unable To Update By this ID" });
	}
	return res.status(200).json({ player });
  }
router.put("/:id",updatePlayer);
	

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
router.get("/rate/:id", rateById);

const commentById = async (req, res, next) => {
	

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
router.get("/comment/:id", commentById);



router.put("/rate/:id",authMiddleware,asyncHandler1(async(req,res)=>{
	console.log("putt");
	const playerId = req.params.id;
	const {_id} = req.user;
	const{star} = req.body;
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
			const ratePlayer = await Player.findByIdAndUpdate({_id: playerId},{
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
		let ratingsum = getallratings.ratings.map((item)=> item.star).reduce((prev, curr)=>prev + curr,0);
		let actualRating = parseFloat(((ratingsum/totalRating*1.0))).toFixed(2);
		let finalPlayer = await Player.findByIdAndUpdate(playerId,{
			totalrating: actualRating,
		},
		{
			new:true
		});
		//res.json(finalPlayer);
	}catch(error){
		throw new Error(error)

	}
}));


router.put("/comment/:id",authMiddleware,asyncHandler1(async(req,res)=>{
	
	const playerId = req.params.id;
	const {_id} = req.user;
	
	const{comment} = req.body;
	try{
		const player = await Player.findById(playerId);
		const user = await User.findById(_id);
		
		const ratePlayer = await Player.findByIdAndUpdate({_id: playerId},{
			
			$push: {
				comments:{
					comment: comment,
					username: user.firstName +" "+ user.lastName,
					postedby: _id,
					parentId: null,
				},
			},
		},
		{
			new:true,
		}
		);
		console.log("comment");
		
	}catch(error){
		throw new Error(error)

	}
}));


module.exports = router;
