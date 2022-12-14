import styles from "../styles.modules.css";
import React from "react";
import { Tab } from "@mui/material";
import { NavLink } from "react-router-dom";
import Cards from "./Cards/Cards";
import ImageSlider from "../ImageSlider";
import Header from "../../Header/Header";
const PlayersPage = () => {
  return (
    <div className={styles.main_container}>
      <Header />

      <ImageSlider />

      <p className="title">This Week's Players</p>
      <Tab
        LinkComponent={NavLink}
        to="/player/age-sorted"
        label="Sort By Age"
      />
      <Cards />
    </div>
  );
};

export default PlayersPage;
