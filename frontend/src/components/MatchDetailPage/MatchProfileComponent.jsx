import ReactRoundedImage from "react-rounded-image";
import MatchInfos from "./MatchInfos/MatchInfos";
import "./MatchProfileComponent.css";
import { Fade } from "react-reveal";

import Header from "../Header/Header";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { inputAdornmentClasses } from "@mui/material";

function MatchProfile(props) {
  const [inputs, setInputs] = useState({});
  const id = useParams().id;
  console.log();
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:8080/api/match/${id}`)
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
                image={inputs.image1}
                roundedColor="#3b3db1"
                imageWidth="250"
                imageHeight="250"
                roundedSize="9"
                borderRadius="150"
                hoverColor="#FFFFFF"
              />
            </div>
            <div className="heading-img-div1" style={{ display: "flex" }}>
              <ReactRoundedImage
                image={inputs.image2}
                roundedColor="#3b3db1"
                imageWidth="250"
                imageHeight="250"
                roundedSize="9"
                borderRadius="150"
                hoverColor="#FFFFFF"
              />
            </div>
          </div>
          <div className="heading-div">
            <div className="heading-text-div1">
              <h1 className="heading-text1" style={{ color: "#3B3DB1" }}>
                {inputs.team1} vs. {inputs.team2}
              </h1>
            </div>
          </div>
        </Fade>
        <MatchInfos theme={props.theme} />
      </div>
    </div>
  );
}

export default MatchProfile;
