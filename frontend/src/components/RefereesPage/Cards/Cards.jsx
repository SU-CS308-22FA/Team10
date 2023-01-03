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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://weeklysoccer.onrender.com/api/referee/allreferees";
      const { data: res } = await axios.get(url, data);
      console.log(data);
      navigate("/refereeprofile");
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

  const [referees, setReferees] = React.useState(cardInfo);

  React.useEffect(() => {
    async function fetchData() {
      const refereeListUrl =
        "https://weeklysoccer.onrender.com/api/referee/allreferees";

      const fetchedRefereeList = await axios.get(refereeListUrl);
      console.log(fetchedRefereeList);
      setReferees(fetchedRefereeList.data);
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
              Age:
              <p className="card-subtext">{card.age}</p>
              <br />
              Domestic Leagues:
              <br />
              <p className="card-subtext">
                {card.domestic_league[0]}
                <br />
                {card.domestic_league[1]}
                <br />
              </p>
              International Leagues:
              <br />
              <p className="card-subtext">
                {card.international_league[0]}
                <br />
                {card.international_league[1]}{" "}
              </p>
            </p>
            <Link to={card._id}>
              <button type="button" className="_btn">
                Profile
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
  return (
    <div className="row row-cols-4 row-cols-md-6 g-4">
      {referees.map(renderCard)}
    </div>
  );
};

export default Cards;
