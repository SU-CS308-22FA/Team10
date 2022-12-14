const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: "public/files" });

const driveUpload = require("./../driveUpload.js") ;

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
        deleteFile(req.file.path);
        console.log("Uploaded succesfully");
        res.json({ id: response.data.id });
      } catch (err) {
        console.log(err);
  }
});


module.exports = router;