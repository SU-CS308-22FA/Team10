import React from "react";
import "./PlayerProfileCard.css";
import { Fade, Flip } from "react-reveal";
import { style } from "glamor";

function PlayerProfileCard(props) {
  const playerinfo = props.playerinfo;
  const theme = props.theme;

  const style_img = style({
    width: "220px",
    height: "auto",
    borderRadius: " 50%",
    padding: "10px",
    border: `1px solid #3B3DB1`,
    marginRight: "50px",
    boxShadow: `0px 0px 5px #3B3DB1`,
    transition: "all 0.2s ease-in-out",
    ":hover": {
      color: "rgba(255, 255, 255, 1)",
      boxShadow: `0 5px 15px #3B3DB1`,
    },
    "@media (max-width: 768px)": {
      marginLeft: "50px",
      marginBottom: "15px",
      width: "175px",
    },
  });

  const card_body = style({
    borderBottom: `1px solid #3B3DB1`,
    borderLeft: `1px solid #3B3DB1`,
    borderRight: `1px solid #3B3DB1`,
    borderRadius: "7px",
    width: "90%",
    margin: "10px",
    boxShadow: `0px 1px 5px #3B3DB1`,
    transition: "all 0.2s ease-in-out",
    ":hover": {
      color: "rgba(255, 255, 255, 1)",
      boxShadow: `0 5px 15px #3B3DB1`,
    },
    "@media (max-width: 768px)": {
      width: "100%",
    },
  });

  const button_visit = style({
    textDecoration: "none",
    color: "rgba(255, 255, 255, 1)",
    background: `#3B3DB1`,
    padding: "15px 15px",
    marginTop: "25px",
    borderRadius: "4px",
    borderWidth: "0px",
    marginBottom: "20px",
    width: "200px",
    height: "50px",
    fontWeight: "bold",
    fontSize: "17px",
    transition: "all 0.2s ease-in-out",
    cursor: "pointer",
    ":hover": {
      color: "rgba(255, 255, 255, 1)",
      boxShadow: `0 5px 10px #3B3DB1`,
    },
  });

  return (
    <div className="playerinfo-card">
      <Flip left duration={2000}></Flip>
      <Fade right duration={2000} distance="40px">
        <div {...card_body}>
          <div className="body-header" style={{ backgroundColor: "#3B3DB1" }}>
            <div className="body-header-title">
              <h2 className="card-title" style={{ color: "#FFFFFF" }}>
                {playerinfo.title}
              </h2>
              <h3 className="card-subtitle" style={{ color: "#FFFFFF" }}>
                {playerinfo.subtitle}
              </h3>
            </div>
            <div className="body-header-duration">
              <h3 className="duration" style={{ color: "#FFFFFF" }}>
                {playerinfo.duration}
              </h3>
            </div>
          </div>
          <div classname="body-content">
            {playerinfo.descriptions.map((sentence) => {
              return (
                <p className="content-list" style={{ color: "#343434" }}>
                  {sentence}
                </p>
              );
            })}
            <a
              href={playerinfo.website_link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", textAlign: "center" }}
            >
              <p
                className="content-list"
                {...button_visit}
                style={{
                  marginRight: "23px",
                  textDecoration: "none",
                  float: "right",
                  backgroundColor: "#3B3DB1",
                }}
              >
                Visit Website
              </p>
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default PlayerProfileCard;
