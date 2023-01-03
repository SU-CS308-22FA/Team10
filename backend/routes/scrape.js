const axios = require("axios");
const express = require('express');
const router = express.Router();
const {Match} = require("../models/match");

const asyncHandler = require('../middleware/asyncHandler');
  const uploadFromApi =  async(req, res) => {
    console.log(req.body);
	//const {weekNum} = req.body;
	console.log("upload started");
	const options = {
		method: 'GET',
		url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
		params: {
		  league: '203',
		  season: '2022',
		  from: '2022-08-03',
		  to: '2023-05-28',
		  timezone: 'Europe/Istanbul'
		},
		headers: {
		  'X-RapidAPI-Key': '602c4adf1bmsh910076b23b3f397p1880d5jsn734017665c2d',
		  'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
		}
	  };
	  
	  axios.request(options).then(function (resp) {
		  //console.log(resp.data);
          //console.log(resp.data.response[1]);
          let weekCount = 0;
          for(var i=0; i<resp.data.response.length; i++) {
            var count = 0;
            if(i%9 ==0) { // when i= 0, then first week
                weekCount +=1;
            }
            console.log(weekCount);
            if(weekCount==7) {
                const team1 = resp.data.response[i].teams.home.name;
                const team2 = resp.data.response[i].teams.away.name;
                const place = resp.data.response[i].fixture.venue.name;
                const date = resp.data.response[i].fixture.date;
                const logo1 = resp.data.response[i].teams.home.logo;
                const logo2 = resp.data.response[i].teams.away.logo;
                const newMatch = new Match({team1, team2, logo1, logo2, date, place});
                console.log(newMatch);
                newMatch.save();
            }
          }
	  }).catch(function (error) {
		  console.error(error);
	  });
});
