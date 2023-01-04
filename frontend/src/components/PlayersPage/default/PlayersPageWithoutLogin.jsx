import styles from "../styles.modules.css";
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Cards from "./Cards/Cards";
import ImageSlider from "../ImageSlider";
import HeaderForMain from "../../LandingWithoutLogin/HeaderForMain";
const PlayersPageWithoutLogin = () => {
  return (
    <div className={styles.main_container}>
      <HeaderForMain />

      <ImageSlider />

      <p className="title">This Week's Players</p>
      
      <Cards />
    </div>
  );
};

export default PlayersPageWithoutLogin;
/*
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic" color="#3b3db1">
          Sort By
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/player">Default</Dropdown.Item>
          <Dropdown.Item href="/player/age-sorted">Age</Dropdown.Item>
          <Dropdown.Item href="/player/rating-sorted">Rating</Dropdown.Item>
          <Dropdown.Item href="/player/market-value-sorted">
            Market Value
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      */