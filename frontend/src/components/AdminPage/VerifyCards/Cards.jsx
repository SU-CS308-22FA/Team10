import React from "react";

import { Component } from "react";
import { Link, useNavigate } from "react-router-dom";

import cardInfo from "../../cardInfo";
import axios from "axios";
import { useState, useEffect } from "react";

const RequestCards = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://weeklysoccer.onrender.com/api/verify/allrequests";
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

  const [requests, setRequests] = React.useState(cardInfo);

  React.useEffect(() => {
    async function fetchData() {
      const requestListUrl =
        "https://weeklysoccer.onrender.com/api/verify/allrequests";

      const fetchedRequestList = await axios.get(requestListUrl);
      console.log(fetchedRequestList);
      setRequests(fetchedRequestList.data);
    }
    fetchData();
  }, []);
  /*
    const handleApproveClicked = async (e) => {
        e.preventDefault();
        try {
          const request = sessionStorage.getItem("verifyrequest");
          const url =
            "https://weeklysoccer.onrender.com/api/user/" +
            user._id +
            "?_id=" +
            user._id;
          const {
            data: { user: updatedUser, message: message },
          } = await axios.put(url, { firstName: user.firstName, lastName: user.lastName, team: user.team, email: user.email, verified: true });
          sessionStorage.setItem("user", JSON.stringify(updatedUser));
          window.location.reload();
          navigate("/profile");
        } catch (error) {
          if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
          ) {
          }
        }
        try {
            const request = sessionStorage.getItem("verifyrequest");
            const url =
              "https://weeklysoccer.onrender.com/api/verify/" +
              request._id+
              "?_id=" +
              request._id;
            const {
              data: { user: updatedUser, message: message },
            } = await axios.delete(url, { });
            sessionStorage.setItem("verifyrequest", JSON.stringify(updatedUser));
            window.location.reload();
          } catch (error) {
            if (
              error.response &&
              error.response.status >= 400 &&
              error.response.status <= 500
            ) {
            }
          }
      };
      
      const handleRejectClicked = async (e) => {
        e.preventDefault();
        try {
          const url =
            "https://weeklysoccer.onrender.com/api/verify/" +
            card._id +
            "?_id=" +
            card._id;
          const {
            data: { user: updatedUser, message: message },
          } = await axios.delete(url, { email });
          sessionStorage.setItem("user", JSON.stringify(updatedUser));
          window.location.reload();
        } catch (error) {
          if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
          ) {
          }
        }
      };
      */
  const renderCard = (card, index) => {
    return (
      <div className="col" key={index}>
        <div className="card h-100 w-100 text-center">
          <div className="overflow">
            <img
              src={card.file}
              className="card-img-top"
              alt="..."
              object-fit="fill"
            />
          </div>
          <div className="card-body text-dark">
            <h5 className="card-title">{card.name}</h5>
            <p className="card-text">
              User Name: {card.name}
              <br />
              Date of Request: {card.date}
              <br />
            </p>
            <Link to={card._id}>
              <button type="button" className="_btn">
                Approve
              </button>
            </Link>
            <Link to={card._id}>
              <button type="button" className="_btn">
                Reject
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="row row-cols-4 row-cols-md-6 g-4">
      {requests.map(renderCard)}
    </div>
  ); //players.map yazıcaz
};

export default RequestCards;
