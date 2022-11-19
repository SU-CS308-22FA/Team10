import styles from "./matchStyles.modules.css";
import React from "react";

import Cards from "./matchCards/matchCards";
import ImageSlider from "./matchesSlides";
import Header from "../Header/Header";
const MatchesPage = () => {
  return (
    <div className={styles.main_container}>
      <Header />

      <ImageSlider />

      <p className="title">Last Week's Matches</p>

      <Cards />

      <p className="title">This Week's Matches</p>

      <Cards />

      <p className="title">Next Week's Matches</p>

      <Cards />
    </div>
  );
};

export default MatchesPage;
