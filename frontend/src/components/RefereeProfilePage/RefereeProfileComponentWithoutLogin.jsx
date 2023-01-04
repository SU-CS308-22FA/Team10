import ReactRoundedImage from "react-rounded-image";
import RefereeInfos from "./RefereeInfos/RefereeInfos";
import "./RefereeProfileComponent.css";
import { Fade } from "react-reveal";

import HeaderForMain from "../LandingWithoutLogin/HeaderForMain";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { inputAdornmentClasses } from "@mui/material";


function RefereeProfileWithoutLogin(props) {
  const [inputs, setInputs] = useState({});
  const id = useParams().id;
  console.log();
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`https://weeklysoccer.onrender.com/api/referee/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.referee));
    };
    fetchHandler();
  }, [id]);

  return (
    <div className="refereeprofile-main">
      <HeaderForMain />
      <div className="basic-refereeprofile">
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div">
            <div className="heading-img-div" style={{ display: "flex" }}>
              <ReactRoundedImage
                image={inputs.image}
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
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: "#3B3DB1" }}>
                {inputs.name}
              </h1>
            </div>
          </div>
        </Fade>
        <RefereeInfos theme={props.theme} />
      </div>
    </div>
  );
}

export default RefereeProfileWithoutLogin;