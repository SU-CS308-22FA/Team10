import React from "react";
import styles from "./matchCard-style.css";
import { Component } from "react";
import { Link } from "react-router-dom";
import img1 from "../matchAssets/mac1.jpg";
import img2 from "../matchAssets/mac2.jpg";

const matchCards = () => {
  const cardInfo = [
    {
      image: img1,
      title: "mac 1",
      text: "Static Website",
      link: "/",
    },
    {
      image: img2,
      title: "Project 2",
      text: "Newsletter Sign Up",
      link: "/",
    },
  ];
  const renderCard = (card, index) => {
    return (
      <div className="col" >
        <div className="card h-100 w-100 text-center" key={index}>
          <div className="overflow">
            <img src={card.image} class="card-img-top" alt="..." />
          </div>
          <div class="card-body text-dark">
            <h5 class="card-title">{card.title}</h5>
            <p class="card-text">{card.text}</p>
            <Link to={card.link}>
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
    <div className="row row-cols-4 row-cols-md-4 g-4">
      {cardInfo.map(renderCard)}
    </div>
  );
};

export default matchCards;
