
import ReactRoundedImage from "react-rounded-image";

import { Fade } from "react-reveal";

import Header from "../Header/Header";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Button, inputAdornmentClasses } from "@mui/material";

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import MatchComments from "./MatchComments";

function MatchRate({props}) {
  const[inputs,setInputs] = useState({});
  const id = useParams().id;
 
  useEffect(()=>{
    const fetchHandler=async()=>{
      await axios
      .get(`https://weeklysoccer.onrender.com/api/match/${id}`)
      .then((res) => (res.data)).then(data=>setInputs(data.match))
      
    };
    fetchHandler();
  },[id]);
  
    const token = JSON.parse(sessionStorage.getItem("token"));
    const [errorMessage, setErrorMessage] = useState("");
    const [isInteractive, setIsInteractive] = useState(true);
    const [btnValue, setBtnValue] = useState("Submit");
    const [btnDisabled, setBtnDisabled] = useState(false);

    const [ratings, setRatings] = useState({});
    const user = JSON.parse(sessionStorage.getItem("user"));

    const [value, setValue] = useState(2);
    const [star, setStar] = useState(inputs.ratings);

  
    
    
  
  const handleSubmit = (e,getState) => {
    e.preventDefault(); 

    console.log(token);

    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }; 
    
    console.log("Bearer ",token);
 
      
      axios
          .put(`https://weeklysoccer.onrender.com/api/match/rate/${id}`, {star, postedby: user._id},config)
          .then((res) => {
        
            
              if (res.status === 200 && res.data.message) {
                  setErrorMessage(res.data.message);
              } else if (res.status === 200) {
                  setErrorMessage("Your rating submitted successfully");
              } else {
                  setErrorMessage("Error! Please try again.");
              }
          }).catch((err) => {
              console.log("Error: ", err);
              setErrorMessage("Error! Please try again.");
          });
      console.log({star, postedby: user._id});
      //setRatings(prevRatings=>[...prevRatings,newRating]);
      //setRatings(newRating);
      console.log(inputs.totalrating);
      
      setIsInteractive(false);
      setBtnValue("Saved");
      setBtnDisabled(true);
      window.location.reload();
    
};

   
  return (
    

    <div className="matchprofile-main">
      <Header />        
      <div className="basic-matchprofile">
        <Fade bottom duration={2000} distance="40px">
        <div className="heading-div">
            <div className="heading-img-div1" style={{ display: "flex" }}>
              <ReactRoundedImage
                image={inputs.logo1}
                roundedColor="#3b3db1"
                imageWidth="250"
                imageHeight="250"
                roundedSize="9"
                borderRadius="150"
                hoverColor="#FFFFFF"
              />
            </div>
            <div className="heading-img-div1" style={{ display: "flex" }}>
              <ReactRoundedImage
                image={inputs.logo2}
                roundedColor="#3b3db1"
                imageWidth="250"
                imageHeight="250"
                roundedSize="9"
                borderRadius="150"
                hoverColor="#FFFFFF"
              />
            </div>
            
          </div>
        
          <div className="heading-div">
            <div className="heading-text-div1">
              <h1 className="heading-text1" style={{ color: "#3B3DB1" }}>
                {inputs.team1} vs. {inputs.team2}
              </h1>
              <h2 className="text--3">Rating: {parseFloat(inputs.totalrating).toFixed(2)}</h2>
            </div>
            
          </div>
          <div className="heading-text-div1">
            <form  onSubmit={handleSubmit}>
              <Box
                  sx={{
                      '& > legend': { mt: 2 },
                  }}
                  >
                  <h3 className="text">Rate</h3>
                  <Rating
                      
                      name="size-large half-rating"
                      precision={0.5}
                      defaultValue={inputs.totalrating} 
                      size="large"
                      value={star}
                      onChange={e => {setValue(e.target.value);setStar(e.target.value)}}
                      
                  />
                  <div>
                  <button type="button" className="cta" onClick={handleSubmit}>
                        <span>Submit</span>
                        <svg viewBox="0 0 13 10" height="10px" width="15px">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </button>
                    
                    </div>
                      
                  </Box>
                </form>
            </div>
            <MatchComments/>
        </Fade>
        
      </div>
    </div>
  );
}

export default MatchRate;
