const express = require('express');
const router = express.Router();
const axios = require("axios");
const {Match} = require("../models/match");
const { authMiddleware } = require("../middleware/authMiddleware");
const asyncHandler = require('../middleware/asyncHandler');
const asyncHandler1 = require("express-async-handler");
const {User} = require("../models/user");
const {MongoClient} = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

router.get(
	"/allmatches",
	asyncHandler(async(req,res)=>{
		const matchList = await Match.find();
		res.send(matchList);
	})
)
router.get(
	"/maxmatch",
	asyncHandler(async (req, res) => {
	  const maxmatch = await Match.find({}).sort({totalrating:-1}).limit(1);
	  res.status(200).json(maxmatch);
	  
	})
  );
async function deleteAllMatchRecords() {
	try {
	  const database = client.db("test");
	  const matches= database.collection("matches");

	  const result = await matches.deleteMany({});
	  console.log("Deleted " + result.deletedCount + " documents");
	} finally {
	  await client.close();
	}
}
router.post("/updateMatch",asyncHandler(async (req, res)=>{
    console.log(req.body.e);
	const weekNum = parseInt(req.body.e);
	console.log("upload started");
	await deleteAllMatchRecords();
	const options = {
		method: 'GET',
		url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
		params: {
		  league: '203',
		  season: '2022',
		  from: '2022-08-03',
		  to: '2023-05-28',
		  timezone: 'Europe/Istanbul'
		},
		headers: {
		  'X-RapidAPI-Key': '602c4adf1bmsh910076b23b3f397p1880d5jsn734017665c2d',
		  'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
		}
	  };

	  axios.request(options).then( async function (resp) {
		  //console.log(resp.data);
          console.log(resp.data.response[1]);
          let weekCount = 0;
		  var count = 0;

          for(var i=0; i<resp.data.response.length; i++) {
            if(i%9 == 0) { // when i= 0, then first week
                weekCount +=1;
            }
            if(weekCount==weekNum) {
                const team1 = resp.data.response[i].teams.home.name;
                const team2 = resp.data.response[i].teams.away.name;
                const place = resp.data.response[i].fixture.venue.name;
                let date = resp.data.response[i].fixture.date;
				
                const logo1 = resp.data.response[i].teams.home.logo;
                const logo2 = resp.data.response[i].teams.away.logo;
				const time = date.substring(11,16);
				date = date.substring(0,10);
				const week = weekCount;
				const team1_goals = resp.data.response[i].goals.home;
				const team2_goals = resp.data.response[i].goals.away;
			    const referee = resp.data.response[i].fixture.referee;
				const fixture_id =  resp.data.response[i].fixture.id;
				console.log("PostMatch");


				const options = {
					method: 'GET',
					url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures/statistics',
					params: {fixture: fixture_id},
					headers: {
					  'X-RapidAPI-Key': '602c4adf1bmsh910076b23b3f397p1880d5jsn734017665c2d',
					  'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
					}
				  };
				  
				  axios.request(options).then(async function (response2) {
					  console.log(response2.data);
					  console.log("statistics");
					  console.log(response2.data.response[1]);
					  const team1_shots = response2.data.response[0].statistics[0].value;
						const team2_shots = response2.data.response[1].statistics[0].value;
						const team1_shots_off_goal= response2.data.response[0].statistics[1].value;
						const team2_shots_off_goal= response2.data.response[1].statistics[1].value;
						const team1_shots_total = response2.data.response[0].statistics[2].value;
						const team2_shots_total= response2.data.response[1].statistics[2].value;
						const team1_shots_blocked = response2.data.response[0].statistics[3].value;
						const team2_shots_blocked= response2.data.response[1].statistics[3].value;
						
						const fouls1 = response2.data.response[0].statistics[6].value;
						const fouls2 = response2.data.response[1].statistics[6].value;
						const offsides1 = response2.data.response[0].statistics[8].value;
						const offsides2 = response2.data.response[1].statistics[8].value;
						const yellow1 = response2.data.response[0].statistics[10].value;
						const yellow2 = response2.data.response[1].statistics[10].value;
						const red1 = response2.data.response[0].statistics[11].value;
						const red2 = response2.data.response[1].statistics[11].value;
						const goalkeeper_saves1 = response2.data.response[0].statistics[12].value;
						const goalkeeper_saves2 = response2.data.response[1].statistics[12].value;
						const predictWinner1 = 1;
						const predictWinner2 = 0;
					await new Match({team1, team2, logo1, logo2, week, place,date, time, team1_goals, team2_goals, referee, team1_shots, team2_shots, team1_shots_off_goal, team2_shots_off_goal, team1_shots_total, team2_shots_total, team1_shots_blocked, team2_shots_blocked, fouls1, fouls2, yellow1, yellow2, red1, red2,offsides1, offsides2, goalkeeper_saves1, goalkeeper_saves2, predictWinner1, predictWinner2 }).save(); //db ye kayıt
				  }).catch(function (error) {
					  console.error(error);
				  });
				  
				console.log("eklendi");
		  }
	    }
		res.status(201).send({ message: "That week's matches are uploaded successfully" });

	  }).catch(function (error) {
		  console.error(error);
	  });
}));

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

/*
router.get(
	"/637e05299953a84747abc2bb",
	asyncHandler(async(req,res)=>{
		console.log("deneme3");
		const match = await Match.findById("637e05299953a84747abc2bb");
		res.status(201).send({ message: "Match got successfully" });
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
*/
module.exports = router;
