
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

function PlayerRate({props}) {
  const[inputs,setInputs] = useState({});
  const id = useParams().id;
  console.log();
  useEffect(()=>{
    const fetchHandler=async()=>{
      await axios
      .get(`http://localhost:8080/api/player/${id}`)
      .then((res) => (res.data)).then(data=>setInputs(data.player))
      
    };
    fetchHandler();
  },[id]);
  //const [value, setValue] = React.useState(2);
  

/*
  const handleClicked = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
    }
*/
    /*
  const handleSubmit1 = async (e,newValue,res) => {
    e.preventDefault();
    try {
      setValue(newValue);
      console.log(newValue);
      const url = `http://localhost:8080/api/player/rate/${id}`;
      const {
        data: { player: updatedPlayer, message: message },
      } = await axios.put(url, {totalrating});
      //console.log(totalratings);
      res.JSON.stringify(updatedPlayer);
    } catch (error) {
      
    }
  };
  */
    //const [state, dispatch] = useStore();
    const [totalrating, setTotalRating] = useState(inputs.totalrating);
    const [ratings, setRatings] = useState(inputs.ratings);
    const user = JSON.parse(sessionStorage.getItem("user"));
    const [star, setStar] = useState(2);
    const [errorMessage, setErrorMessage] = useState("");
    const [isInteractive, setIsInteractive] = useState(true);
    const [btnValue, setBtnValue] = useState("Submit");
    const [ratingEntered, setRatingEntered] = useState(true);
    const [btnDisabled, setBtnDisabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
      const newRating = {star, postedby: user._id};
      axios
          .put(`http://localhost:8080/api/player/rate/${id}`, newRating)
          .then((res) => {
            console.log("off");
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
      console.log(newRating);
      setRatings(prevRatings=>[...prevRatings,newRating]);
      //setRatings(newRating);
      console.log(ratings);
      
      setIsInteractive(false);
      setBtnValue("Saved");
      setBtnDisabled(true);
        
    
}

   
  return (
    
<div className="playerprofile-main">
      <Header />
        
      <div className="basic-playerprofile">
      
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div">
            <div className="heading-img-div" style={{display:"flex"}}>
            
              <ReactRoundedImage
                image={inputs.image}
                roundedColor="#3b3db1"
                imageWidth="250"
                imageHeight="250"
                roundedSize="9"
                borderRadius="150"
                hoverColor="#FFFFFF"
                allowFullScreen
              />
            <div>
                
            </div>
            </div>
            
          </div>
        
          <div className="heading-div">
            <div className="heading-text-div">
              <h1 className="heading-text"  style={{ color: "#3B3DB1" }}>
               {inputs.name}
              </h1>
             
            </div>
          </div >
          <div >
            <form  onSubmit={handleSubmit}>
              <Box
                  sx={{
                      '& > legend': { mt: 2 },
                  }}
                  >
                  <Typography component="legend">Rate</Typography>
                  <Rating
                      
                      name="size-large"
                      value={star}
                      onChange={e => setStar(e.target.value)}
                      star={star}
                  />
                  <button type="button" className="_btn" onClick={handleSubmit}>
                        Submit
                    </button>
                    <h1>{inputs.totalrating}</h1>
                    
                      
                  </Box>
                </form>
            </div>
        </Fade>
        
      </div>
    </div>
  );
}

export default PlayerRate;
