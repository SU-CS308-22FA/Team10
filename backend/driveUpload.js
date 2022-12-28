const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');



const KEYFILEPATH = "./weeklysoccerapi-810712d1b4ca.json";

const SCOPES = ['https://www.googleapis.com/auth/drive'];

var Readable = require('stream').Readable; 

function bufferToStream(buffer) { 
  var stream = new Readable();
  stream.push(buffer);
  stream.push(null);

  return stream;
}
const driveUpload = async(file) => {
    const auth = new google.auth.GoogleAuth(  {
        keyFile: KEYFILEPATH,
        scopes: SCOPES
    });

    const driveService = google.drive(  {version: 'v3', auth} );

    let fileMetaData= {
        name: file.originalname,
        parents: ['1g4jdpAPgTRxWV-fIWrWbPop3CQAifXaI']
    }

    let media = {
        mimeType: 'image/jpg',
        body:  fs.createReadStream(file.path)

    }

    let response = await driveService.files.create( {
        resource: fileMetaData,
        media: media,
        fields: 'id'
    });
    
    switch(response.status){
        case 200:
            console.log("File created succesfully", response.data.id);
            break;
        default:
            console.log("Error creating file" + response.errors);
            break;
    }
    return response;
}

module.exports = driveUpload;