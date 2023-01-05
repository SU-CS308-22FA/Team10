import ReactRoundedImage from "react-rounded-image";
import MatchInfos from "./MatchInfos/MatchInfos";
import "./MatchProfileComponent.css";
import { Fade } from "react-reveal";

import Header from "../Header/Header";
import React, { useEffect, useState,  Fragment} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { inputAdornmentClasses } from "@mui/material";

import {
  Grid, Card 
} from '@material-ui/core';

function MatchProfile(props) {
  const [inputs, setInputs] = useState({});
  const id = useParams().id;
  console.log();
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`https://weeklysoccer.onrender.com/api/match/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.match));
    };
    fetchHandler();
  }, [id]);

  return (
    <div className="matchprofile-main">
      <Header />
      <div className="basic-matchprofile">
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div">
            <div className="heading-img-div1" style={{ display: "flex" }}>
              <ReactRoundedImage
                image={inputs.logo1}
                roundedColor="#3b3db1"
                imageWidth="250"
                imageHeight="250"
                roundedSize="9"
                borderRadius="150"              
              />
            </div>
              <h1 className="heading-text1" style={{ color: "#3B3DB1" }}>

                {inputs.team1_goals} - {inputs.team2_goals}
              </h1>
            
            <div className="heading-img-div2" style={{ display: "flex" }}>
              <ReactRoundedImage
                image={inputs.logo2}
                roundedColor="#3b3db1"
                imageWidth="250"
                imageHeight="250"
                roundedSize="9"
                borderRadius="150"
                
              />
            </div>
          </div>
          <div className="heading-div">
            <div className="heading-text-div1">
              <h1 className="heading-text2" style={{ color: "#3B3DB1" }}>

                {inputs.team1} vs. {inputs.team2}
              </h1>
            </div>
          </div>
        </Fade>


        <Fragment>
        <br></br>
        <br></br>
        <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="card-transparent mb-4">
            <div className="card-img-wrapper">

            </div>
            <div className="card-body text-center">
              <h5 className="card-title font-weight-bold font-size-lg" style={{ color: "#3B3DB1" }}>
                Competition
              </h5>
              <p className="card-text">
                {"Superlig 2022-2023"}
              </p>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="card-transparent mb-4">
            <div className="card-img-wrapper">

            </div>
            <div className="card-body text-center">
              <h5 className="card-title font-weight-bold font-size-lg" style={{ color: "#3B3DB1" }}>
                Date and Time
              </h5>
              <p className="card-text">
                {inputs.date}, {inputs.time}
              </p>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="card-transparent mb-4">
            <div className="card-img-wrapper">

            </div>
            <div className="card-body text-center">
              <h5 className="card-title font-weight-bold font-size-lg" style={{ color: "#3B3DB1" }}>
                Referee
              </h5>
              <p className="card-text">
                {inputs.referee}
              </p>

            </div>
          </Card>
        </Grid>
      </Grid>
      <br></br>
      <br></br>
        <div className="table-responsive">
          <table className="table table-striped table-hover table-bordered mb-3">
            <thead className="thead-light">
              <tr align="center">
                <th scope="col" className="card-body text-center"></th>
                <th scope="col" className="card-body text-center" style={{ color: "#3B3DB1" }}>{inputs.team1}</th>
                <th scope="col" className="card-body text-center" style={{ color: "#3B3DB1" }}>{inputs.team2}</th>
              </tr>
            </thead>
            <tbody>
              <tr align="center">
                <th scope="row" className="card-body text-center" style={{ color: "#3B3DB1" }}>Goals</th>
                <td className="card-body text-center">{inputs.team1_goals}</td>
                <td className="card-body text-center">{inputs.team2_goals}</td>
              </tr>
              <tr align="center">
                <th scope="row" className="card-body text-center" style={{ color: "#3B3DB1" }}>Shots on Goal</th>
                <td className="card-body text-center">{inputs.team1_shots}</td>
                <td className="card-body text-center">{inputs.team2_shots}</td>
              </tr>
              <tr align="center">
                <th scope="row" className="card-body text-center" style={{ color: "#3B3DB1" }}>Shots off Goal</th>
                <td className="card-body text-center">{inputs.team1_shots_off_goal}</td>
                <td className="card-body text-center">{inputs.team2_shots_off_goal}</td>
              </tr>
              <tr align="center">
                <th scope="row" className="card-body text-center" style={{ color: "#3B3DB1" }}>Total Shots</th>
                <td className="card-body text-center">{inputs.team1_shots_total}</td>
                <td className="card-body text-center">{inputs.team2_shots_total}</td>
              </tr>
              <tr align="center">
                <th scope="row" className="card-body text-center" style={{ color: "#3B3DB1" }}>Blocked Shots</th>
                <td className="card-body text-center">{inputs.team1_shots_blocked}</td>
                <td className="card-body text-center">{inputs.team2_shots_blocked}</td>
              </tr>
              <tr align="center">
                <th scope="row" className="card-body text-center" style={{ color: "#3B3DB1" }}>Fouls</th>
                <td className="card-body text-center">{inputs.fouls1}</td>
                <td className="card-body text-center">{inputs.fouls2}</td>
              </tr>
              <tr align="center">
                <th scope="row" className="card-body text-center" style={{ color: "#3B3DB1" }}>Offsides</th>
                <td className="card-body text-center">{inputs.offsides1}</td>
                <td className="card-body text-center">{inputs.offsides2}</td>
              </tr>
              <tr align="center">
                <th scope="row" width="250px" className="card-body text-center" style={{ color: "#3B3DB1" }}>Yellow Cards</th>
                <td className="card-body text-center">{inputs.yellow1}</td>
                <td className="card-body text-center">{inputs.yellow2}</td>
              </tr>
              <tr align="center">
                <th scope="row" width="250px" className="card-body text-center" style={{ color: "#3B3DB1" }}>Red Cards</th>
                <td className="card-body text-center">{inputs.red1}</td>
                <td className="card-body text-center">{inputs.red2}</td>
              </tr>
              <tr align="center">
                <th scope="row" width="250px" className="card-body text-center" style={{ color: "#3B3DB1" }}>Goalkeeper Saves</th>
                <td className="card-body text-center">{inputs.goalkeeper_saves1}</td>
                <td className="card-body text-center">{inputs.goalkeeper_saves2}</td>
              </tr>
              <tr align="center">
                <th scope="row" width="250px" className="card-body text-center" style={{ color: "#3B3DB1" }}>Winner Prediction</th>
                <td className="card-body text-center">{inputs.predictWinner1}</td>
                <td className="card-body text-center">{inputs.predictWinner2}</td>
              </tr>
            </tbody>
          </table>
        </div>
    
      </Fragment>
      </div>
    </div>
  );
}

export default MatchProfile;
