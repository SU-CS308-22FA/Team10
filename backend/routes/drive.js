const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: "public/files" });
const asyncHandler = require("../middleware/asyncHandler");
const {verifyRequest} = require("../models/verifyRequest");
const driveUpload = require("./../driveUpload.js") ;
const driveDownload = require("./../driveDownload.js") ;
const fs= require('fs');
const deleteFile = (filePath) => { //delete file from local directory
    fs.unlink(filePath, () => {
      console.log("file deleted");
    });
  };

  router.post("/google-drive", upload.single("file"), async (req, res, next) => {
    try {
        console.log(req.file);
        console.log("post google drive")
        
        if (!req.file) {
          res.send("No file uploaded.");
          return;
        }
        const response = await driveUpload(req.file);
        console.log(response);
        deleteFile(req.file.path);
        console.log("Uploaded succesfully");
        res.json({ id: response.data.id });
      } catch (err) {
        console.log(err);
  }
  router.get(
    "/google-drive/:id",
    
    asyncHandler(async(req,res)=>{
      console.log("GetRequest");
      const verifyRequest = await verifyRequest.findById(req.params.requestId);
      const response = await driveDownload(verifyRequest.file);
      console.log(response);
      res.send(verifyRequest);
      console.log("Downloaded succesfully");
    })
  )
 
});


module.exports = router;