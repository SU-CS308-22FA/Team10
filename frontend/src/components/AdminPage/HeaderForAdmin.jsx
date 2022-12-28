import React from "react";

import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

import image from "../img/weekly_soccer.png";
import styles from "../Main/styles.modules.css";


const HeaderForAdmin = () => {
  return (
    <AppBar sx={{ backgroundColor: "#3b3db1" }} position="sticky">
      <Toolbar className={"justify-content-center"}>
        <Tabs
          sx={{ ms: "auto" }}
          textColor="inherit"
          indicatorColor="primary"
          value="undefined"
        >
          <Typography variant="title" marginRight={95}>
            <a href="/">
              <img src={image} width={182} height={64} />
            </a>
          </Typography>

          <Tab LinkComponent={NavLink} to="/requests" label="Verification Requests" />
          <Tab LinkComponent={NavLink} to="/player" label="Players" />
          <Tab LinkComponent={NavLink} to="/matches" label="Matches" />
          <Tab LinkComponent={NavLink} to="/referee" label="Referees" />
          <Tab LinkComponent={NavLink} to="/admin" label="Log Out" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderForAdmin;