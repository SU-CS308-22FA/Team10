const express = require("express");
const router = express.Router();
const { Referee } = require("../models/referee");
const { authMiddleware } = require("../middleware/authMiddleware");
const { User } = require("../models/user");
const asyncHandler = require("../middleware/asyncHandler");
const asyncHandler1 = require("express-async-handler");

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
router.get(
  "/637d9bdbb9e9d9d7f5703984",
  asyncHandler(async (req, res) => {
    
    const referee = await Referee.findById("637d9bdbb9e9d9d7f5703984");
    res.status(201).send(referee);
  })
);
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

	
const updateReferee = async (req, res, next) => {
	const id = req.params.id;
	const { totalrating } = req.body;
	let referee;
	try {
	  	referee = await Referee.findByIdAndUpdate(id, {
		totalrating
	  });
	  
	  //referee = await referee.save();
	
	} catch (err) {
	  console.log(err);
	}
	if (!referee) {
	  return res.status(404).json({ message: "Unable To Update Referee By this ID" });
	}
	return res.status(200).json({ referee});
  }
router.put("/:id",updateReferee);
	

const rateById = async (req, res, next) => {

	const id = req.params.id;
	let  referee;
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
router.get("/rate/:id", rateById);



router.put("/rate/:id",authMiddleware,asyncHandler1(async(req,res)=>{
	console.log("putt");
	const refereeId = req.params.id;
	const {_id} = req.user;
	const{star} = req.body;
	try{
		const referee = await Referee.findById(refereeId);
		let alreadyRated = Referee.ratings.find((userId) => userId.postedby.toString() === _id.toString());
		if (alreadyRated){
			const updateRating = await Referee.updateOne(
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
			const rateReferee = await Referee.findByIdAndUpdate({_id: refereeId},{
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
			//res.json(rateReferee );
		}
		const getallratings = await Referee.findById(refereeId);
		let totalRating = getallratings.ratings.length;
		let ratingsum = getallratings.ratings.map((item)=> item.star).reduce((prev, curr)=>prev + curr,0);
		let actualRating = (ratingsum/totalRating*1.0);
		let finalReferee = await Referee.findByIdAndUpdate(refereeId,{
			totalrating: actualRating,
		},
		{
			new:true
		});
		//res.json(finalReferee );
	}catch(error){
		throw new Error(error)

	}
}));

module.exports = router;
