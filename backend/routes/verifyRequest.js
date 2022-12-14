const express = require('express');
const router = express.Router();
const {verifyRequest, validator } = require("../models/verifyRequest");
const bcrypt = require("bcrypt");

const validate = require('../middleware/validate');
const isValidObjectId = require('../middleware/isValidObjectId');
const asyncHandler = require('../middleware/asyncHandler');

router.post("/", asyncHandler(async (req, res) => {
	try {
		console.log("PostVerified");
		console.log(req.body);
		console.log(Date.now());
		const { error } = validator(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const verified = await verifyRequest.findOne({ user: req.body.user });
		if (verified)
			return res
				.status(409)
				.send({ message: "User already verified!" });


		await new verifyRequest({ ...req.body,  date: Date.now() }).save(); //db ye kayıt

		res.status(201).send({ message: "User verify request is sent successfully" });
	} catch (error) {
		console.log(error);
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
		console.log("GetVerified");
		const verified= await verifyRequest.findById(req.params.id);
		res.send(verified);
	})
)

router.put(
	"/:id",
	isValidObjectId,
	asyncHandler(async(req,res)=>{
		console.log('UpdateVerified');
		await verifyRequest.findByIdAndUpdate({_id: req.params.id},req.body);
		const verified = await verifyRequest.findById(req.params.id);
		res.status(200).send({message: "Updated successfully3",  verified: verified})
	})
)

router.delete(
	"/:id",
	isValidObjectId,
	asyncHandler(async(req,res)=>{
		console.log('DeleteVerified');
		await verifyRequest.findByIdAndDelete(req.params.id);
		res.status(200).send("verified user deleted successfully")
	})
);

module.exports = router;