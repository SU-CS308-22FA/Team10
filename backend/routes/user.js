const express = require('express');
const router = express.Router();
//const { User, validate } = require("../models/user");
const { User, validator } = require("../models/user");
const bcrypt = require("bcrypt");

const validate = require('../middleware/validate');
const isValidObjectId = require('../middleware/isValidObjectId');
const asyncHandler = require('../middleware/asyncHandler');

router.post("/", asyncHandler(async (req, res) => {
	try {
		const { error } = validator(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);
		

		await new User({ ...req.body, password: hashPassword }).save(); //db ye kayıt

		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
}));

/*router.get(
	"/",
	asyncHandler(async(req,res)=>{
		const user = await User.find();
		res.send(user);
	})
)*/

router.get(
	"/:id",
	isValidObjectId,
	asyncHandler(async(req,res)=>{
		const user = await User.findById(req.params.id);
		res.send(user);
	})
)

router.put(
	"/:id",
	isValidObjectId,
	asyncHandler(async(req,res)=>{
		
		await User.findByIdAndUpdate({_id: req.params.id},req.body);
		const user = await User.findById(req.params.id);
		res.status(200).send({message: "Updated successfully",  user: user})
	})
)

router.delete(
	"/:id",
	isValidObjectId,
	asyncHandler(async(req,res)=>{
		await User.findByIdAndDelete(req.params.id);
		res.status(200).send("User deleted successfully")
	})
);

module.exports = router;
