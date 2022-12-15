import React from "react";
import styles from "./card-style.css";
import { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import cardInfo from "../../../cardInfo";
import axios from "axios";
import { useState, useEffect } from "react";

function Cards() {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [sort, setSort] = useState({ sort: "age", order: "desc" });
  const [players, setPlayers] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://weeklysoccer.onrender.com/api/player/allplayers";
      const { data: res } = await axios.get(url, data);
      console.log(data);
      navigate("/playerprofile");
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
  useEffect(() => {
    const fetchPlayers = async () => {
      const response = await fetch(
        "https://weeklysoccer.onrender.com/api/player/allplayers"
      );
      const data = await response.json();
      console.log(data);
      setPlayers(data);
    };
    fetchPlayers();
  });

  /*
  useEffect(() => {
    const fetchData = async () => {
      try {
        const playerListUrl =
          '${"http://localhost:3000/api/player/players"}?sort=${sort.sort},${sort.order}';
        const fetchedPlayerList = await axios.get(playerListUrl);
        setPlayers(fetchedPlayerList.data);
      } catch (err) {}
    };
    fetchData();
  }, [sort]);*/

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
              Market Vaue: {card.market_value} <br />
              Nationality: {card.nationality}
            </p>
            <Link to={card._id}>
              <button type="button" className="_btn">
                Go to profile
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
}

export default Cards;
