import React from "react";
import "./MatchInfos.css";
import MatchProfileCard from "../MatchProfileCard/MatchProfileCard";
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
        .get(`http://localhost:8080/api/match/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.match));
    };
    fetchHandler();
  }, [id]);
  const matchinfos = {
    matchinfos: [
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
    <div className="main" id="matchinfos">
      <div className="matchinfos-body-div">
        {matchinfos.matchinfos.map((matchinfo) => {
          return <MatchProfileCard matchinfo={matchinfo} theme={theme} />;
        })}
      </div>
    </div>
  );
}

export default RefereeInfos;
