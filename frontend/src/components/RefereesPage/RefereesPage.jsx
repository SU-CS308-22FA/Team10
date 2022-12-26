import styles from "./styles.modules.css";
import React from "react";

import Cards from "./Cards/Cards";
import ImageSlider from "./ImageSlider";
import Header from "../Header/Header";
const RefereesPage = () => {
  return (
    <div className={styles.main_container}>
      <Header />

      <p className="title">This Week's Referees</p>

      <Cards />
    </div>
  );
};

export default RefereesPage;
