
import React from "react";

import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

import image from "../img/weekly_soccer.png"

import styles from "./styles.modules.css";
const Header = () => {

    return (
         <AppBar sx={{ backgroundColor: "#3b3db1" }} position="sticky">
            <Toolbar>
                <Tabs
                sx={{ ml: "auto" }}
                textColor="inherit"
                indicatorColor="primary"
                value= "undefined"
                
                >
                    
                    <img className = "photo" src={image}/>
                    <Tab LinkComponent={NavLink} to="/" label="Home" />
                    <Tab LinkComponent={NavLink} to="/aboutUs" label="About Us" />
                    <Tab/>
                    <Tab/>
                    <Tab/>
                    <Tab/>
                    <Tab/>
                    <Tab/>
                    <Tab/>
                    <Tab/><Tab/>
                    <Tab LinkComponent={NavLink} to="/players" label="Players" />
                    <Tab LinkComponent={NavLink} to="/" label="Matches" />
                    <Tab LinkComponent={NavLink} to="/" label="Referees" />
                    <Tab LinkComponent={NavLink} to="/profile" label="My Profile" />
                </Tabs>

            </Toolbar>
        </AppBar>
);


};

export default Header;