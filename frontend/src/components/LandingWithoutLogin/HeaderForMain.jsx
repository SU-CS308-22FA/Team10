import React from "react";

import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

import image from "../img/weekly_soccer.png";

import styles from "./styles.modules.css";
const HeaderForMain = () => {
  return (
    <AppBar sx={{ backgroundColor: "#3b3db1" }} position="sticky">
      <Toolbar className={"justify-content-center"}>
        <Tabs
          sx={{ ms: "auto" }}
          textColor="inherit"
          indicatorColor="primary"
          value="undefined"
        >
          <Typography variant="title" marginRight={108}>
            <a href="/">
              <img src={image} width={182} height={64} />
            </a>
          </Typography>

          <Tab LinkComponent={NavLink} to="/player" label="Players" />
          <Tab LinkComponent={NavLink} to="/match" label="Matches" />
          <Tab LinkComponent={NavLink} to="/referee" label="Referees" />

          <Tab LinkComponent={NavLink} to="/login" label="Login" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderForMain;