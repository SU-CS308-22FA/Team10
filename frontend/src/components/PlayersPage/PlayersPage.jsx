import styles from "./styles.modules.css";
import React from "react";
import { AppBar, Tab, Tabs, Toolbar,Typography} from "@mui/material";
//import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";
import Card from "./Cards/Cards";
import ImageSlider from "./ImageSlider";


const PlayersPage = () => {
	
	
	
    return (
		<div className={styles.main_container}>
			<AppBar sx={{ backgroundColor: "#3b3db1" }} position="sticky">
				<Toolbar>
					<Tabs
					sx={{ ml: "auto" }}
					textColor="inherit"
					indicatorColor="primary"
					value= "undefined"
					
					>
						<Tab LinkComponent={NavLink} to="/players" label="Players" />
						<Tab LinkComponent={NavLink} to="/" label="Matches" />
						<Tab LinkComponent={NavLink} to="/" label="Referees" />
						<Tab LinkComponent={NavLink} to="/profile" label="My Profile" />
					</Tabs>

				</Toolbar>
			</AppBar>
			
			
			<ImageSlider/>
			
			<br/>
			<br/>
			<Card/>
		</div>
    );
}


export default PlayersPage;
/*
<div>
				<Card sx={{ maxWidth: 345 }}>
				<CardMedia
					component="img"
					alt="messi"
					height="340"
					image="logo512.png"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
					Lizard
					</Typography>
					<Typography variant="body2" color="text.secondary">
					Lizards are a widespread group of squamate reptiles, with over 6,000
					species, ranging across all continents except Antarctica
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small">Share</Button>
					<Button size="small">Learn More</Button>
				</CardActions>
				</Card>


				<Card sx={{ maxWidth: 345 }}>
				<CardMedia
					component="img"
					alt="green iguana"
					height="140"
					image="logo512.png"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
					Lizard
					</Typography>
					<Typography variant="body2" color="text.secondary">
					Lizards are a widespread group of squamate reptiles, with over 6,000
					species, ranging across all continents except Antarctica
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small">Share</Button>
					<Button size="small">Learn More</Button>
				</CardActions>
				</Card>
			</div>
*/