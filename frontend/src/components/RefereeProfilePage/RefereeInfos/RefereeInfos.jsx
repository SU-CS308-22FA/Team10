import React from "react";
import "./RefereeInfos.css";
import RefereeProfileCard from "../RefereeProfileCard/RefereeProfileCard";
import { Fade } from "react-reveal";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { height } from "@mui/system";

function RefereeInfos(props) {
  const theme = props.theme;
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
  const refereeinfos = {
    refereeinfos: [
      {
        title: "Personal Information",
        descriptions: ["Full name: " + inputs.name, "Age:	" + inputs.age],
      },
      {
        title: "Career Information",
        descriptions: [
          "Domestic Leagues: " + inputs.domestic_league,
          "International Leagues:	" + inputs.international_league,
        ],
      },
    ],
  };

  return (
    <div className="main" id="refereeinfos">
      <div className="refereeinfos-body-div">
        {refereeinfos.refereeinfos.map((refereeinfo) => {
          return <RefereeProfileCard refereeinfo={refereeinfo} theme={theme} />;
        })}
      </div>
    </div>
  );
}

export default RefereeInfos;
