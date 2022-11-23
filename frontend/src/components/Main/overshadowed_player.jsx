import React from "react";
import styles from "./card-style.css";
import { Component } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

const Overshadowed_Player = () => {
  const [myplayer, setPlayer] = React.useState();

  React.useEffect(() => {
    async function fetchData() {
      console.log("Ebrar");
      const playerURL =
        "https://weeklysoccer.com/api/player/63624526fe649491f2e3057f";

      const fetchedPlayer = await axios.get(playerURL);
      console.log(fetchedPlayer);
      setPlayer(fetchedPlayer); //fetchedPlayer.data
    }
    fetchData();
  }, []);

  const renderCard = (card, index) => {
    return (
      <div className="col" key={index}>
        <div className="card h-100 w-100 text-center">
          <div className="overflow">
            <img
              src={card.image}
              className="card-img-top"
              alt="..."
              object-fit="fill"
            />
          </div>
          <div className="card-body text-dark">
            <h5 className="card-title">{card.name}</h5>
            <p className="card-text">
              Team: {card.club}{" "}
              {<img src={card.icon} width={23} alt="..."></img>} <br />
              Age: {card.age}
              <br />
              Position: {card.position}
              <br />
              Position Category: {card.position_category}
              <br />
              Merket Vaue: {card.market_value}M <br />
              Nationality: {card.nationality}
            </p>
            <Link to={card.link}>
              <button type="button" className="_btn">
                To learn more about him
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="row row-cols-4 row-cols-md-6 g-4">
      {myplayer.renderCard}
    </div>
  ); //players.map yazıcaz
};

export default Overshadowed_Player;
