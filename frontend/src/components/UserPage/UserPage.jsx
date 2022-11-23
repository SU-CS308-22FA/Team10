import { useState } from 'react';
import Group from './Group';
import { Link, useNavigate } from "react-router-dom";
import EditableUserProfile from './EditableUserProfile';
import { withTheme } from '@emotion/react';
import { purple, red } from '@mui/material/colors';
import styles from "./styles.module.css";
import Header from "../Header/Header";
import image from "./user_pp3.jpeg";
import team from "./fenerbahce_logo.png";

const UserPage = () =>{

  const [data, setData] = useState({
		firstName: "",
	});

  console.log("USERPAGE")
  const user = JSON.parse(sessionStorage.getItem("user"));
  const navigate = useNavigate();
  const handleChange = event => {
    setData(event.target.value);
    console.log('value is:', event.target.value);
  };
  const handleUpdate = () => {
		navigate("/profile/update");
	};
  const handleDelete = () => {
		navigate("/profile/delete");
	};

    const buttonStyle = {
        backgroundColor: withTheme,
        color: purple
    };

    
    return (
      <div>
      <Header/>
     
      <div className={styles.login_container}>
      
			 <div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleUpdate}>
					
          <img src={user.image} width={182} height={182} />
          <div>
            <h4>Name:   {user.firstName}  </h4> 
						
      
            <h4>Last Name:   {user.lastName}</h4> 
        
            <h4>Email:     {user.email} </h4> 
            
            <h4>Favorite Team: {user.team} </h4>
            </div>
            <button stype="button" className={styles.green_btn} onClick={handleUpdate}>Update</button>
            </form>
       </div>
       <div className={styles.bottom}>
          <h1>My Profile</h1>
          <button stype="button" className={styles.white_btn} onClick={handleDelete}>Delete</button>
        </div>
		  </div>
      </div>
      </div>
    );
};

export default UserPage;
