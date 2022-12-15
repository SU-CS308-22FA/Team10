const express = require('express');
const router = express.Router();
//const { User, validate } = require("../models/user");
const { User, validator } = require("../models/user");
const bcrypt = require("bcrypt");

const validate = require('../middleware/validate');
const isValidObjectId = require('../middleware/isValidObjectId');
const asyncHandler = require('../middleware/asyncHandler');
var multer  = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+file.originalname)
    }
  });

  const fileFilter=(req, file, cb)=>{
   if(file.mimetype ==='application/pdf' || file.mimetype ==='image/jpg' || file.mimetype ==='image/png'){
       cb(null,true);
   }else{
       cb(null, false);
   }

  }

var upload = multer({ 
    storage:storage,
    limits:{
        fileSize: 1024 * 1024 * 5
    },
    fileFilter:fileFilter
 });

router.post("/", asyncHandler(async (req, res) => {
	try {
		console.log("PostUser");
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

router.get(
	"/:id",
	
	asyncHandler(async(req,res)=>{
		console.log("GetUser");
		const user = await User.findById(req.params.id);
		res.send(user);
	})
)
/*
router.get(
	"/",
	asyncHandler(async(req,res)=>{
		const user = await User.find();
		res.send(user);
	})
)
*/
router.put(
	"/:id",
	isValidObjectId,
	asyncHandler(async(req,res)=>{
		console.log('UpdateUser');
		await User.findByIdAndUpdate({_id: req.params.id},req.body);
		const user = await User.findById(req.params.id);
		res.status(200).send({message: "Updated successfully3",  user: user})
	})
)

router.delete(
	"/:id",
	isValidObjectId,
	asyncHandler(async(req,res)=>{
		console.log('DeleteUser');
		await User.findByIdAndDelete(req.params.id);
		res.status(200).send("User deleted successfully")
	})
);

router.post("/verify/",upload.single('file'),isValidObjectId,
  function(req,res,next){

     var id=req.body.user_id;
     var verificationFile= req.file.path;
     User.findById(id,function(err,data){
 
     data.file =verificationFile?verificationFile:data.file;
     
        data.save()
          .then(doc=>{
             res.status(201).json({
                 message:"Verification File Uploaded Successfully",
                 results:doc
             });
          })
          .catch(err=>{
              res.json(err);
          })
         
     });
 
 });
module.exports = router;
