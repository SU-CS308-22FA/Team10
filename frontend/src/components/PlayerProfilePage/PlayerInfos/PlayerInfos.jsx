import React from "react";
import "./PlayerInfos.css";
import PlayerProfileCard from "../PlayerProfileCard/PlayerProfileCard";
import { Fade } from "react-reveal";

const playerinfos = {
  playerinfos: [
    {
      title: "Personal Information",
      descriptions: [
        "Full name:	Lionel Andrés Messi",
        "Date of birth:	24 June 1987 (age 35)",
        "Place of birth:	Rosario, Santa Fe, Argentina",
        "Height:	1.70 m",
        "Position(s):	Forward",
      ],
    },
    {
      title: "Club Information",
      descriptions: ["Current team:	Paris Saint-Germain", "Number:	30"],
    },
    {
      title: "Youth Career",
      descriptions: [
        "1992–1995:	Grandoli",
        "1995–2000:	Newell's Old Boys",
        "2000–2003:	Barcelona",
      ],
    },
    {
      title: "Senior Career",
      descriptions: [
        "2003–2004:	Barcelona C",
        "2004–2005:	Barcelona B",
        "2004–2021:	Barcelona",
        "2021–	Paris Saint-Germain",
      ],
    },
    {
      title: "National Team",
      descriptions: [
        "2004-2005: 	Argentina U20",
        "2008: 	Argentina U23",
        "2005- 	Argentina",
      ],
    },
    {
      title: "Honours",
      descriptions: [
        "2005 Netherlands FIFA World Youth Championship Winner",
        "2021 Brazil Copa America Winner",
        "2022 England CONMEBOL-UEFA Cup of Champions Winner",
      ],
    },
  ],
};

function PlayerInfos(props) {
  const theme = props.theme;

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
