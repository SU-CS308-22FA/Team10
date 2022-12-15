const {google} = require('googleapis');

const KEYFILEPATH = "./weeklysoccerapi-810712d1b4ca.json";

const SCOPES = ['https://www.googleapis.com/auth/drive'];



const driveDownload = async(fileId) => {
    const auth = new google.auth.GoogleAuth(  {
        keyFile: KEYFILEPATH,
        scopes: SCOPES
    });

    const driveService = google.drive(  {version: 'v3', auth} );


    let response = await driveService.files.get( { 
        fileId: fileId,
        alt: 'media',
    });
    console.log(response);

    switch(response.status){
        case 200:
            console.log("File downloaded successfully", response.data.id);
            break;
        default:
            console.log("Error downloading file" + response.errors);
            break;
    }
    return response.data;
}

module.exports = driveDownload;