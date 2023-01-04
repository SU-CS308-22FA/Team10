import React from "react";

import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

import image from "../img/weekly_soccer.png";

import styles from "./styles.modules.css";
const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
		sessionStorage.removeItem("token");
		sessionStorage.removeItem("user");
		navigate("/")
    window.reload();
	};
  return (
    <AppBar sx={{ backgroundColor: "#3b3db1" }} position="sticky">
      <Toolbar className={"justify-content-center"}>
        <Tabs
          sx={{ ms: "auto" }}
          textColor="inherit"
          indicatorColor="primary"
          value="undefined"
        >
          <Typography variant="title" marginRight={100}>
            <a href="/main">
              <img src={image} width={182} height={64} />
            </a>
          </Typography>

          <Tab id= "players-tab"LinkComponent={NavLink} to="/player" label="Players"  />
          <Tab LinkComponent={NavLink} to="/match" label="Matches" />
          <Tab LinkComponent={NavLink} to="/referee" label="Referees" />
   
          <Tab LinkComponent={NavLink} to="/profile" label="My Profile" />
          <Tab onClick={handleLogout} label="Log Out" /> 
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
