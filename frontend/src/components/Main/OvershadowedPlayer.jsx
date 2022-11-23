import React from "react";
import styles from "./card-style.css";
import { Component } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import { useState, useEffect } from "react";

const OverShadowedPlayer = () => {
  const [card, setCard] = React.useState({});

  React.useEffect(() => {
    async function fetchData() {
      console.log("Ebrar");
      const playerUrl =
        "https://weeklysoccer.com/api/player/637a8ed97757477ec0e7085b";

      const fetchedPlayer = await axios.get(playerUrl);
      console.log(fetchedPlayer.data);
      setCard(fetchedPlayer.data);
    }
    fetchData();
  }, []);

  return (
    <div className="row row-cols-15 row-cols-md-5 g-6">
      <div className="center ">
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
              {<img src={card.icon} width={23} height={23} alt="..."></img>}{" "}
              <br />
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
                Go to profile
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverShadowedPlayer;

/*
{
          image: img1,
          title: "Project 1",
          text: "Static Website",
          link:"/"
        },
        {
          image:img2,
          title: "Project 2",
          text: "Newsletter Sign Up",
          link:"#"
        },
        {
          image:img3,
          title: "Project 3",
          text: "Reactdskglkjklgjlkdfjgldkfgkldjfklgjdfklgjfklsdfnklsjgkjsdflkgjskdljfgklsjflkdsjkfjslkfjslkjflkdjsklfjdslk App",
          link:"#"
        },
        {
          image: img1,
          title: "Project 1",
          text: "Static Website",
          link:"#"
        },
        {
          image:img2,
          title: "Project 2",
          text: "Newsletter Sign Up",
          link:"#"
        },
        {
          image:
            img3,
          title: "Project 3",
          text: "Reactdskglkjklgjlkdfjgldkfgkldjfklgjdfklgjfklsdfnklsjgkjsdflkgjskdljfgklsjflkdsjkfjslkfjslkjflkdjsklfjdslk App",
          link:"#"
        },
        {
          image: img1,
          title: "Project 1",
          text: "Static Website",
          link:"/"
        },
        {
          image:
            img2,
          title: "Project 2",
          text: "Newsletter Sign Up",
          link:"/"
        },
        {
          image:
            img3,
          title: "Project 3",
          text: "Reactdskglkjklgjlkdfjgldkfgkldjfklgjdfklgjfklsdfnklsjgkjsdflkgjskdljfgklsjflkdsjkfjslkfjslkjflkdjsklfjdslk App",
          link:"#"
        },
*/
