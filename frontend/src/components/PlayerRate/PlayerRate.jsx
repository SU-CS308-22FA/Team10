
import ReactRoundedImage from "react-rounded-image";

import { Fade } from "react-reveal";

import Header from "../Header/Header";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { inputAdornmentClasses } from "@mui/material";
import styles from "./PlayerRate.css";

function PlayerRate(props) {
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
          <div className="heading-div1">
            <div className="heading-img-div1" style={{display:"flex"}}>
              <ReactRoundedImage
                image={inputs.image}
                roundedColor="#3b3db1"
                imageWidth="250"
                imageHeight="250"
                roundedSize="9"
                borderRadius="150"
                hoverColor="#FFFFFF"
                allowFullScreen
              />
            </div>
          </div>
          <div className="heading-div">
            <div className="heading-text-div">
              <h1 className="heading-text"  style={{ color: "#3B3DB1" }}>
               {inputs.name}
              </h1>
             
            </div>
          </div>
        </Fade>
        
      </div>
    </div>
  );
}

export default PlayerRate;
