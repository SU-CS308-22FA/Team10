import React from "react";
import styles from "./card-style.css";
import { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import cardInfo from "../../../cardInfo";
import axios from "axios";
import { useState, useEffect } from "react";

const Cards = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://weeklysoccer.onrender.com/api/player/allplayers";
      const { data: res } = await axios.get(url, data);
      console.log(data);

      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  const [players, setPlayers] = React.useState(cardInfo);

  React.useEffect(() => {
    async function fetchData() {
      const playerListUrl =
        "https://weeklysoccer.onrender.com/api/player/allplayers";

      const fetchedPlayerList = await axios.get(playerListUrl);
      //console.log(fetchedPlayerList);
      setPlayers(fetchedPlayerList.data);
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
            
              Nationality: {card.nationality} <br />
              Total Rating: {card.totalrating}
            </p>
            <Link to={card._id}>
              <button type="button" className="_btn">
                Go to profile
              </button>
            </Link>
            <Link to={"rate/" + card._id}>
              <button type="button" className="_btn">
                Rate
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="row row-cols-4 row-cols-md-6 g-4">
      {players.map(renderCard)}
    </div>
  ); //players.map yazıcaz
};

export default Cards;
