import { useState } from 'react';
import Group from './Group';
import { Link, useNavigate } from "react-router-dom";
import EditableUserProfile from './EditableUserProfile';
import { withTheme } from '@emotion/react';
import { purple, red } from '@mui/material/colors';
import styles from "./styles.module.css";
import Header from "../Header/Header";
import image from "./user_pp3.jpeg";


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
  const handleLogOut = () => {
		sessionStorage.removeItem("token");
		sessionStorage.removeItem("user");
		
    window.location.reload();
	};
  const handleVerification = () => {
		navigate("/profile/verify");
	};
    const buttonStyle = {
        backgroundColor: withTheme,
        color: purple
    };
    let verified_status = "";

    if(user.verified)
        verified_status = "Verified"
    else
        verified_status = "Not verified"
    
    return (
      <div>
      <Header/>
     
      <div className={styles.login_container}>
      
			 <div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleUpdate}>
					
          <img src={image} width={182} height={182} />
          <div>
            <h4>Name:   {user.firstName}  </h4> 
						
      
            <h4>Last Name:   {user.lastName}</h4> 
        
            <h4>Email:     {user.email} </h4> 
            
            <h4>Favorite Team: {user.team} </h4>
            </div>
            <button stype="button" className={styles.green_btn} onClick={handleUpdate}>Update</button>
            <button stype="button" className={styles.green_btn} onclick ={handleLogOut}>Logout</button>
            </form>
       </div>
       <div className={styles.bottom}>
          <h1>My Profile</h1>
          <h1></h1>
          <h1></h1>
          <h5 className={styles.textverify}> Your account is:   <b>{verified_status}</b> </h5>
          
          <button stype="button" className={styles.white_btn} onClick={handleVerification}>Verify if not verified</button>

          <h1></h1>
          <h1></h1>
          <h1></h1>
          <button stype="button" className={styles.white_btn} onClick={handleDelete}>Delete</button>

        </div>
		  </div>
      </div>
      </div>
    );
};

export default UserPage;
