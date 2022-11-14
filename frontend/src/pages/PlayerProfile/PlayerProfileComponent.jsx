import React from "react";
import PlayerInfos from "../../containers/PlayerInfos/PlayerInfos";
import "./PlayerProfileComponent.css";
import { Fade } from "react-reveal";
import img1 from "./58088-1572949088.webp";
function PlayerProfile(props) {
  const theme = props.theme;
  return (
    <div className="playerprofile-main">
      <div className="basic-playerprofile">
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div">
            <img
              src={img1}
              class="heading-img-div"
              style={({ maxHeight: 200 }, { maxWidth: 200 })}
            />
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: "#343434" }}>
                Lionel Messi
              </h1>
              <p className="heading-text-div" style={{ color: "#7F8DAA" }}>
                Lionel Andrés Messi, is an Argentine professional footballer who
                plays as a forward for Ligue 1 club Paris Saint-Germain and
                captains the Argentina national team.
              </p>
            </div>
          </div>
        </Fade>
        <PlayerInfos theme={props.theme} />
      </div>
    </div>
  );
}

export default PlayerProfile;
