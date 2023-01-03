
const express = require('express');
const router = express.Router();
const { Referee } = require("../models/referee");
const { authMiddleware } = require("../middleware/authMiddleware");

const {User} = require("../models/user");

const asyncHandler = require("../middleware/asyncHandler");
const asyncHandler1 = require("express-async-handler");

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
	"/allreferees",
	asyncHandler(async (req, res) => {
  
	  const refereeList = await Referee.find();
	  res.send(refereeList);
	})
  );

router.post("/addReferee", async(req, res) => {
    const {name, age, domestic_league, international_league, number, ratings,totalrating} = req.body;
    const newReferee = new Referee({name, age, domestic_league, international_league, number, ratings,totalrating });

    try {
        const referee = await Referee.findOne({ name:name });
        if (referee) throw Error('This referee already exists');

        const savedReferee = await newReferee.save();
        if (!savedReferee) throw Error('Something went wrong while saving the referee');

    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});

const getById = async (req, res, next) => {
	const id = req.params.id;
	let referee;
	try {
		
	referee = await Referee.findById(id);
	} catch (err) {
	  console.log(err);
	}
	if (!referee) {
	  return res.status(404).json({ message: "No referee found" });
	}
	return res.status(200).json({ referee});
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


const commentById = async (req, res, next) => {
	const id = req.params.id;
	let referee;
	try {
		
	referee = await Referee.findById(id);
	} catch (err) {
	  console.log(err);
	}
	if (!referee) {
	  return res.status(404).json({ message: "No referee found" });
	}
	return res.status(200).json({ referee });
  };
router.get("/comment/:id", commentById);



router.put("/rate/:id",authMiddleware,asyncHandler1(async(req,res)=>{
	console.log("bismillah");
	const refereeId = req.params.id;
	const {_id} = req.user;
	const{star} = req.body;
	try{
		const referee = await Referee.findById(refereeId);
		let alreadyRated = referee.ratings.find((userId) => userId.postedby.toString() === _id.toString());
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
		}
		const getallratings = await Referee.findById(refereeId);
		let totalRating = getallratings.ratings.length;
		let ratingsum = getallratings.ratings.map((item)=> item.star).reduce((prev, curr)=>prev + curr,0);
		let actualRating = parseFloat(((ratingsum/totalRating*1.0))).toFixed(2);
		let finalReferee = await Referee.findByIdAndUpdate(refereeId,{
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
	
	const refereeId = req.params.id;
	const {_id} = req.user;
	
	const{comment} = req.body;
	const{parentId} = req.body;

	try{
		const referee = await Referee.findById(refereeId);
		const user = await User.findById(_id);
		
		const commentReferee = await Referee.findByIdAndUpdate({_id: refereeId},{
			
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
		console.log("comment");
		
	}catch(error){
		throw new Error(error)

	}
}));

router.put("/comment/:id",authMiddleware,asyncHandler1(async(req,res)=>{
	
	const refereeId = req.params.id;
	const {_id} = req.user;
	
	const{comment} = req.body;
	const{parentId} = req.body;

	try{
		const referee = await Referee.findById(refereeId);
		let alreadycommented = referee.comments.find((userId) => userId.postedby.toString() === _id.toString());
		if (alreadycommented){
			const updateComment = await Referee.updateOne(
				{
					comments:{$elemMatch: alreadycommented},
				},
				{
					$set:{"comments.$.comment":comment},
				},
				
			);
			//res.json(updateRating);
		}
		console.log("update comment");
		
	}catch(error){
		throw new Error(error)

	}
}))

module.exports = router;
