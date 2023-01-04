import styles from "./styles.modules.css";
import React from "react";

import Cards from "./Cards/Cards";
import ImageSlider from "./ImageSlider";
import HeaderForMain from "../LandingWithoutLogin/HeaderForMain";
const RefereesPageWithoutLogin = () => {
  return (
    <div className={styles.main_container}>
      <HeaderForMain />

      <p className="title">This Week's Referees</p>

      <Cards />
    </div>
  );
};

export default RefereesPageWithoutLogin;