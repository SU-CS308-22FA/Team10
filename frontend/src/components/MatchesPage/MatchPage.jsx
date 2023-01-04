import styles from "./matchStyles.modules.css";
import React, { Fragment } from 'react';

import { Grid, Container, Button, Tooltip } from '@material-ui/core';
import hero9 from './matchAssets/hero-4.jpg'
import { Link } from 'react-router-dom';
import img from './matchAssets/ball.jpg'
import CardsMatches from "./CardsMatch/CardsMatch";
import ImageSlider from "./matchesSlides";
import Header from "../Header/Header";
const MatchesPage = () => {
  return (
    <div className={styles.main_container}>
      <Header />
      <ImageSlider/>

    <p className="title">All Matches</p>

    <CardsMatches />


    </div>
  );
};

export default MatchesPage;
