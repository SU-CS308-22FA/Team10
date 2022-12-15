const User = require("../models/user");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const authMiddleware = asyncHandler(async (req, res, next) => {
  if (
    
    req?.headers?.authorization?.startsWith("Bearer")
  ){
    const token = req.headers.authorization.split(" ")[1];
      try {
        
        if (!token) return res.status(403).send("Access denied.");
        if(token){

          const decoded = jwt.verify(token, process.env.JWTPRIVATEKEY);
          req.user = decoded;
          next();
        }
    } catch (error) {
        res.status(400).send("Invalid token");
    }
  }
  else{
    console.log("token error");
  }

  });


  
module.exports = { authMiddleware };



