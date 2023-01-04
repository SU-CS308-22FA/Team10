const express = require("express");
const router = express.Router();
const { Player } = require("../models/player");
const { authMiddleware } = require("../middleware/authMiddleware");
const {User} = require("../models/user");
const asyncHandler = require("../middleware/asyncHandler");
const asyncHandler1 = require("express-async-handler");
const axios = require("axios");
const {MongoClient} = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

router.post("/addPlayer", async (req, res) => {
  const {
    name,
    team,
    age,
    position,
    market_value,
    nationality,
    icon,
    image,
    desc,
    dateOB,
    height,
    placeOB,
    youthCareer,
    transferHist,
    joined,
    number,
    ratings,
    totalrating,
  } = req.body;
  const newPlayer = new Player({
    name,
    team,
    age,
    position,
    market_value,
    nationality,
    icon,
    image,
    desc,
    dateOB,
    height,
    placeOB,
    youthCareer,
    transferHist,
    joined,
    number,
    ratings,
    totalrating,
  });

  try {
    const player = await Player.findOne({ name: name });
    if (player) throw Error("This player already exists");

    const savedPlayer = await newPlayer.save();
    if (!savedPlayer)
      throw Error("Something went wrong while saving the player");
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

async function deleteAllPlayerRecords() {
	try {
	  const database = client.db("test");
	  const players = database.collection("players");

	  const result = await players.deleteMany({});
	  console.log("Deleted " + result.deletedCount + " documents");
	} finally {
	  await client.close();
	}
}
router.post("/updatePlayers",asyncHandler(async (req, res)=>{
   
	console.log("upload started");
	await deleteAllPlayerRecords();
	for(var j=3;j<6; j++) {
	const options = {
		method: 'GET',
		url: 'https://api-football-v1.p.rapidapi.com/v3/players',
		params: {league: '203', season: '2022', page: j},
		headers: {
		  'X-RapidAPI-Key': '602c4adf1bmsh910076b23b3f397p1880d5jsn734017665c2d',
		  'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
		}
	  };
	  axios.request(options).then(async function (resp) {
		  console.log(resp.data.response[1].player);
		  console.log(resp.data.response[1]);
		  console.log(resp.data.response.length);
		  for(var i=0; i<resp.data.response.length; i++) {
			const name = resp.data.response[i].player.name;
			const age =resp.data.response[i].player.age;
			const team = resp.data.response[i].statistics[0].team.name;
			const icon = resp.data.response[i].statistics[0].team.logo;
			const nationality = resp.data.response[i].player.nationality;
			const image = resp.data.response[i].player.photo;
			const position = resp.data.response[i].statistics[0].games.position;
			const height =resp.data.response[i].player.height;
			const weight = resp.data.response[i].player.weight;
			const birthDate = resp.data.response[i].player.birth.date;
			const birthPlace = resp.data.response[i].player.birth.place + ", " + resp.data.response[i].player.birth.country;
			const league = resp.data.response[i].statistics[0].league.name + ", " + resp.data.response[i].statistics[0].league.country + ", " +resp.data.response[i].statistics[0].league.season;
			const cards = "Yellow: " + resp.data.response[i].statistics[0].cards.yellow +" YellowRed: " + resp.data.response[i].statistics[0].cards.yellowred + " Red: " + resp.data.response[i].statistics[0].cards.red;
			const fouls = "Drawn: "+ resp.data.response[i].statistics[0].fouls.drawn + " Committed: " + resp.data.response[i].statistics[0].fouls.committed;
			const penalty = "Won: "  + resp.data.response[i].statistics[0].penalty.won
			+ " Committed: " + resp.data.response[i].statistics[0].penalty.committed 
			+" Scored: "+resp.data.response[i].statistics[0].penalty.scored 
			+ " Missed: " + resp.data.response[i].statistics[0].penalty.missed 
			+ " Saved: " + resp.data.response[i].statistics[0].penalty.saved;
			const goals = "Total :" + resp.data.response[i].statistics[0].goals.total;

			await new Player({name, age, team, icon, image, nationality, position, height, weight, birthDate, birthPlace, league, cards, fouls, penalty, goals}).save(); //db ye kayıt
			console.log("eklendi");
		  } 
	  }).catch(function (error) {
		  console.error(error);
	  });
	}
}));

router.get("/players", async (req, res) => {
  try {
    let sort = req.query.sort || "age";
    req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);
    let sortBy = {};
    if (sort[1]) {
      sortBy[sort[0]] = sort[1];
    } else {
      sortBy[sort[0]] = "asc";
    }

    const players = await Player.find({}).sort(sortBy);

    res.status(200).json(players);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
});

router.get(
  "/allplayers",
  asyncHandler(async (req, res) => {
    const playerList = await Player.find();
    res.send(playerList);
  })
);
router.get(
	"/maxplayer",
	asyncHandler(async (req, res) => {
	  const maxplayer = await Player.find({}).sort({totalrating:-1}).limit(1);
	  res.status(200).json(maxplayer);
	  
	})
  );


/*

router.get(
	"/:id",
	asyncHandler(async(req,res)=>{
		console.log("Guler");
		const playerList = await Player.findById(req.params.id);
		res.send(playerList);
}))

router.get(
	"/:id",
	asyncHandler(async(req,res)=>{
		console.log("Guler");
		const playerList = await Player.findById(req.params.id);
		res.send(playerList);
	})
	router.get(
	"/637a8ed97757477ec0e7085bf",
	asyncHandler(async(req,res)=>{

		const player = await Player.findById("637a8ed97757477ec0e7085b");
		res.status(201).send(player);
	})
)
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
      totalrating,
    });

    //player = await player.save();
  } catch (err) {
    console.log(err);
  }
  if (!player) {
    return res.status(404).json({ message: "Unable To Update By this ID" });
  }
  return res.status(200).json({ player });
};
router.put("/:id", updatePlayer);

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



router.post("/comment/:id",authMiddleware,asyncHandler1(async(req,res)=>{

	const playerId = req.params.id;
	const {_id} = req.user;

	const{comment} = req.body;
	const{parentId} = req.body;

	try{
		const player = await Player.findById(playerId);
		const user = await User.findById(_id);

		const commentPlayer = await Player.findByIdAndUpdate({_id: playerId},{

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

	const playerId = req.params.id;
	const {_id} = req.user;

	const{comment} = req.body;
	const{parentId} = req.body;

	try{
		const player = await Player.findById(playerId);
		let alreadycommented = player.comments.find((userId) => userId.postedby.toString() === _id.toString());
		if (alreadycommented){
			const updateComment = await Player.updateOne(
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
