import React from "react";
import "./PlayerInfos.css";
import PlayerProfileCard from "../PlayerProfileCard/PlayerProfileCard";
import { Fade } from "react-reveal";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { height } from "@mui/system";

function PlayerInfos(props) {
  const theme = props.theme;
  const [inputs, setInputs] = useState({});
  const id = useParams().id;
  console.log();
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`https://weeklysoccer2.onrender.com/api/player/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.player));
    };
    fetchHandler();
  }, [id]);
  const playerinfos = {
    playerinfos: [
      {
        title: "Personal Information",
        descriptions: [
          "Full name: " + inputs.name,
          "Date of birth:	" + inputs.dateOB,
          "Place of birth:	" + inputs.placeOB,
          "Height:	" + inputs.height,
          "Position(s):	" + inputs.position,
        ],
      },
      {
        title: "Club Information",
        descriptions: [
          "Current team:	" + inputs.team,
          "Joined:	" + inputs.joined,
          "Number: " + inputs.number,
        ],
      },

      {
        title: "Youth Career",
        descriptions: [inputs.youthCareer + " "],
      },
      {
        title: "Transfer History",
        descriptions: [inputs.transferHist + " "],
      },
    ],
  };

  return (
    <div className="main" id="playerinfos">
      <div className="playerinfos-body-div">
        {playerinfos.playerinfos.map((playerinfo) => {
          return <PlayerProfileCard playerinfo={playerinfo} theme={theme} />;
        })}
      </div>
    </div>
  );
}

export default PlayerInfos;
