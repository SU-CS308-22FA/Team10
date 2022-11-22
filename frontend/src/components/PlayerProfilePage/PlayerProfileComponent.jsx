
import ReactRoundedImage from "react-rounded-image";
import PlayerInfos from "./PlayerInfos/PlayerInfos";
import "./PlayerProfileComponent.css";
import { Fade } from "react-reveal";
import img1 from "./messi.jpg";
import Header from "../Header/Header";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { inputAdornmentClasses } from "@mui/material";

function PlayerProfile(props) {
  const[inputs,setInputs] = useState({});
  const id = useParams().id;
  console.log();
  useEffect(()=>{
    const fetchHandler=async()=>{
      await axios
      .get(`http://localhost:8080/api/player/${id}`)
      .then((res) => (res.data)).then(data=>setInputs(data.player))
      
    };
    fetchHandler();
  },[id]);

  return (
    
<div className="playerprofile-main">
      <Header />
      <div className="basic-playerprofile">
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div">
            <div className="heading-img-div">
              <ReactRoundedImage
                image={src= inputs.image}
                roundedColor="#3b3db1"
                imageWidth="250"
                imageHeight="250"
                roundedSize="13"
                borderRadius="100"
                hoverColor="#FFFFFF"
              />
            </div>
          </div>
          <div className="heading-div">
            <div className="heading-text-div">
              <h1 className="heading-text"  style={{ color: "#3B3DB1" }}>
               {inputs.name}
              </h1>
              <p className="heading-text-div" style={{ color: "#7F8DAA" }}>
                Lionel Andrés Messi, is an Argentine professional footballer who
                plays as a forward for Ligue 1 club Paris Saint-Germain and
                captains the Argentina national team. Widely regarded as one of
                the greatest players of all time, Messi has won a record seven
                Ballon d'Or awards, a record six European Golden Shoes, and in
                2020 was named to the Ballon d'Or Dream Team. Until leaving the
                club in 2021, he had spent his entire professional career with
                Barcelona, where he won a club-record 35 trophies, including ten
                La Liga titles, seven Copa del Rey titles and four UEFA
                Champions Leagues.
              </p>
            </div>
          </div>
        </Fade>
        <PlayerInfos theme={props.theme} />
      </div>
    </div>
  );
}

export default PlayerProfile;
