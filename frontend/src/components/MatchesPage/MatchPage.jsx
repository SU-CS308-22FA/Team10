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
      <Fragment>
      <div className="hero-wrapper bg-composed-wrapper bg-premium-light min-vh-100" align-items="center" justify-content="center">
        <div className="flex-grow-1 w-100 d-flex align-items-center" align-items="center" justify-content="center">
          <div
            className="bg-composed-wrapper--image"
            style={{ backgroundImage: 'url(' + hero9 + ')' }}
          />
          <div className="bg-composed-wrapper--bg bg-second" />
          <div className="bg-composed-wrapper--bg bg-red-dark" />
          <div className="bg-composed-wrapper--content pt-5 pb-2 py-lg-5">
            <Container maxWidth="md" className="pb-5" >
              <Grid container spacing={10 } >
                <Grid
                  item
                  lg={10}
                  className="px-0 mx-auto d-flex align-items-center">
                  <div className="text-center">

                    <div className="px-4 px-sm-0 text-black mt-4">
                      <h1 className="display-2 mb-5 font-weight-bold">
                        Match of the Week
                      </h1>
                      <p className="font-size-xl text-black-50 mb-3">
                        The match got the highest average rank this week according to the vote's of the weeklysoccer members.
                      </p>

                      <div className="divider border-2 border-light my-5 border-light opacity-2 mx-auto rounded-circle w-50" />
                      <div>
                        <Button
                          to="rate/63ab54ca47471ce3d6c50984"
                          component={Link}
                          size="large"
                          color="primary"
                          variant="contained"
                          className="m-2 py-3 px-5"
                          title="View Carolina React Admin Dashboard with Material-UI Free Live Preview">
                          <span className="btn-wrapper--label">Rate Now!</span>
                          <span className="btn-wrapper--icon">
                          </span>
                        </Button>
                        <Button
                            to="63ab54ca47471ce3d6c50984"
                            component={Link}
                            size="large"
                            color="secondary"
                            variant="contained"
                            className="m-2 py-3 px-5"
                            title="View Carolina React Admin Dashboard with Material-UI Free Live Preview">
                            <span className="btn-wrapper--label">See Statistics!</span>
                            <span className="btn-wrapper--icon">
                            </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Container>

          </div>
        </div>
      </div>
    </Fragment>

    <p className="title">All Matches</p>

    <CardsMatches />


    </div>
  );
};

export default MatchesPage;
