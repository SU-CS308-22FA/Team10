import styles from "./matchStyles.modules.css";
import React from "react";

import CardsMatches from "./CardsMatch/CardsMatch";
import ImageSlider from "./matchesSlides";
import Header from "../Header/Header";
const MatchesPage = () => {
  return (
    <div className={styles.main_container}>
      <Header />

      <ImageSlider />
      <p className="title">This Week's Matches</p>

      <CardsMatches />


    </div>
  );
};

export default MatchesPage;
