import React from "react";
import "./PlayerInfos.css";
import PlayerProfileCard from "../../components/PlayerProfileCard/PlayerProfileCard.jsx";
import { Fade } from "react-reveal";

const playerinfos = {
  playerinfos: [
    {
      title: "Shantilal Shah Engineering College",
      subtitle: "Bachelor in Information Technology",
      logo_path: "ssec.png",
      alt_name: "SSEC",
      duration: "2021 - Present",
      descriptions: [
        "⚡ I'm currently pursuing my bachelors in Information Technology.",
        // "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        // "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        // "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "http://www.ssgec.ac.in/",
    },
    {
      title: "Dr. S. & S. S. Ghandhy College Of Engineering & Technology",
      subtitle: "Diploma in Information Technology",
      logo_path: "ssgandhy.png",
      alt_name: "SSGC",
      duration: "2018 - 2021",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "http://www.ssgc.cteguj.in/",
    },
  ],
};

function PlayerInfos(props) {
  const theme = props.theme;

  return (
    <div className="main" id="playerinfos">
      <div className="playerinfos-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="playerinfos-header" style={{ color: "#343434" }}>
            Rewards
          </h1>
        </Fade>
      </div>
      <div className="playerinfos-body-div">
        {playerinfos.playerinfos.map((playerinfo) => {
          return <PlayerProfileCard playerinfo={playerinfo} theme={theme} />;
        })}
      </div>
    </div>
  );
}

export default PlayerInfos;
