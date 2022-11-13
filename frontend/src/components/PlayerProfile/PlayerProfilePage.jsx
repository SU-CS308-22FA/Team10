import styles from "../styles/styles.modules.css";
import React from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
//import Card from '@mui/material/Card';
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import Card from "./Cards/Cards";
import Header from "../Header/Header";
const PlayerProfilePage = () => {
  return (
    <div className={styles.main_container}>
      <Header />
      <Card />
    </div>
  );
};

export default PlayerProfilePage;
