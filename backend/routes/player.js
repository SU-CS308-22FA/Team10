const express = require("express");
const router = express.Router();
const { Player } = require("../models/player");

const { User } = require("../models/user");
const asyncHandler = require("../middleware/asyncHandler");

router.get("/players", async (req, res) => {
  try {
    const search = req.query.search || "";
    let sort = req.query.sort || "age";
    let position = req.query.position || "All";
    const positionOptions = [
      "Goal Keeper",
      "Right Winger",
      "Left Winger",
      "Centre-Forward",
    ];

    position === "All"
      ? (position = [...positionOptions])
      : (position = req.query.position.split(","));
    req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

    let sortBy = {};
    if (sort[1]) {
      sortBy[sort[0]] = sort[1];
    } else {
      sortBy[sort[0]] = "asc";
    }

    const players = await Player.find({
      name: { $regex: search, $options: "i" },
    })
      .where("position")
      .in([...position])
      .sort(sortBy);

    res.status(200).json(players);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
});

router.get(
  "/637a8ed97757477ec0e7085bf",
  asyncHandler(async (req, res) => {
    console.log("Guler2");
    const player = await Player.findById("637a8ed97757477ec0e7085b");
    res.status(201).send(player);
  })
);
router.get(
  "/allplayers",
  asyncHandler(async (req, res) => {
    console.log("Guler3");
    const playerList = await Player.find();
    res.send(playerList);
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
*/
const getById = async (req, res, next) => {
  const id = req.params.id;
  let player;
  try {
    console.log("find_by_id");
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

module.exports = router;
