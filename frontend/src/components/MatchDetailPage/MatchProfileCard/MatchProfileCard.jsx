import React from "react";
import "./MatchProfileCard.css";
import { Fade, Flip } from "react-reveal";
import { style } from "glamor";
function MatchProfileCard(props) {
  const matchinfo = props.matchinfo;
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
      width: "33.3%",
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
    <div className="matchinfo-card">
      <Fade left duration={2000} distance="40px">
        <div {...card_body}>
          <div className="body-header" style={{ backgroundColor: "#3B3DB1" }}>
            <div className="body-header-title">
              <h2 className="card-title" style={{ color: "#FFFFFF" }}>
                {matchinfo.title}
              </h2>
              <h3 className="card-subtitle" style={{ color: "#FFFFFF" }}>
                {matchinfo.subtitle}
              </h3>
            </div>
            <div className="body-header-duration">
              <h3 className="duration" style={{ color: "#FFFFFF" }}>
                {matchinfo.duration}
              </h3>
            </div>
          </div>
          <div classname="body-content">
            {matchinfo.descriptions.map((sentence) => {
              return (
                <p className="content-list" style={{ color: "#343434" }}>
                  {sentence}
                </p>
              );
            })}
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default MatchProfileCard;
