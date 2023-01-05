import React from "react";
import styles from "./card-style.css";
import { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import img1 from "../assets/58088-1572949088.webp";
import img2 from "../assets/318077-1660050345.webp";
import img3 from "../assets/68863-1591599151.webp";
import cardInfo from "../../cardInfo";
import axios from "axios";
import { useState, useEffect } from "react";

const Cards = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();



    const [players, setPlayers] = React.useState(cardInfo);

    React.useEffect(() => {
      async function fetchData() {

          const playerListUrl =
            "https://weeklysoccer.onrender.com/api/player/allplayers";

          const fetchedPlayerList = await axios.get(playerListUrl);
          console.log(fetchedPlayerList.data);
          setPlayers(fetchedPlayerList.data);
      }
      fetchData();

    },[]);
    


      const renderCard = (card, index) => {
        return(

                <div className="col" key={index} >

                    <div className="card h-100 w-100 text-center" >
                    <div className="overflow">
                      <img src={card.image} className="card-img-top" alt="..." object-fit = "fill"/>
                    </div>
                    <div className="card-body text-dark">
                        <h5 className="card-title">{card.name}</h5>
                        <p className="card-text">
                          Team: {card.club} {<img src= {card.icon} width={23} alt="..."></img>} <br/>
                          Age: {card.age}<br/>
                          Position: {card.position}<br/>
                          Nationality: {card.nationality}
                          Rate: {card.totalrating}
                          </p>
                        <Link to={card._id}>
                            <button type="button" className="_btn" >
                               Go to profile
                            </button>
                         </Link>
                        <Link to={"rate/"+card._id}>
                            <button type="button" className="_btn" >
                               Rate
                            </button>
                         </Link>
                    </div>
                    </div>
                </div>


        );

    };
    return <div className="row row-cols-4 row-cols-md-6 g-4">{players.map(renderCard)}</div>; //players.map yazıcaz
}

export default Cards;
