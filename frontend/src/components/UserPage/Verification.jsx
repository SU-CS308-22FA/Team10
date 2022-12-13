import React, { Component, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

  

export default function Verification({}) {
    
    const [uploadedFile, setUploadedFile] = useState();
    
    const user = JSON.parse(sessionStorage.getItem("user"));
    const navigate = useNavigate();
    console.log("Verify your account");
    const [image, setImage] = useState(user.image);
    const [file, setFile] = useState(user.file);
    const [verification, setVerification] = useState(user.verified);
    
    const [error, setError] = useState("");
    const handleUploadClicked = async (e) => {
       
        e.preventDefault();
        console.log(uploadedFile);
        if(uploadedFile)
        {
            console.log(uploadedFile.name);
            console.log(uploadedFile.type);
            let formData = new FormData();
            formData.append(
                "myFile",
                uploadedFile,
                uploadedFile.name,
                uploadedFile.data
              );
            formData.append("file", uploadedFile.data);
            console.log(formData);

            axios.post("http://localhost:8080/api/drive/google-drive" ,formData,{
            headers: {
                "Content-type":  'multipart/form-data'
              }
        }).then(res=>{
            
           console.log("Uploaded")

           this.setState({msg:res.data.message});
           this.setState({file:res.data.results.file});
           console.log(res);
        })
        .catch(err=>console.log(err))
            
        }
        else
            alert("You need to add a FILE");
    };
    /*
        const formData=new FormData();
        formData.append("file",file);
        formData.append("/:id",user._id);
        console.log(formData.file);
        //update-profile
        axios.post("http://localhost:8080/api/drive/google-drive" ,formData,{
            headers: {
                "Content-type":  'application/x-www-form-urlencoded'
              }
        }).then(res=>{
            console.log(res);
            console.log("Uploaded")
           this.setState({msg:res.data.message});
           this.setState({file:res.data.results.file});
        })
        .catch(err=>console.log(err))
        
    };
   */
    function handleCancelClicked() {
      console.log("Cancelled");
      navigate("/profile");
    }
    const [data, setData] = useState({
        user: "63624526fe649491f2e3057f",
        date:1670970230922,
        file: "https://drive.google.com/drive/u/1/folders/1g4jdpAPgTRxWV-fIWrWbPop3CQAifXaI",
        name: "ebrarguler",
      });
    const handleRequestClicked = async (e) => {
        console.log(data.name);
        e.preventDefault();
        try {
          const url = "http://localhost:8080/api/verify";
          
          const { data: res } = await axios.post(url, data);
          navigate("/profile");
          console.log(res.message);
        } catch (error) {
          if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
          ) {
            setError(error.response.data.message);
          }
        }
      };
     
    
    return (
      <div className={styles.login_container}>
        <div className={styles.login_form_container}>
          <div className={styles.left}>
            <form className={styles.form_container} onSubmit={handleUploadClicked}>
              <h1>Verify your account:</h1>
              
              <h5> Upload your verification file as a PDF/PNG/JPG: </h5><input 
                  type="file" 
                  value= {file}
                  verification = {true}
                  
                  onChange={(e) => setUploadedFile(e.target.files[0])}
                  />
             
             
              <button
                stype="button"
                className={styles.purple_btn}
                onClick={handleUploadClicked}
              >
                Upload
              </button>
              <button
                stype="button"
                className={styles.purple_btn}
                onClick={handleCancelClicked}
              >
                Cancel
              </button>
              <button
                stype="button"
                className={styles.green_btn}
                onClick={handleRequestClicked}
              >
                Send Verification Request
              </button>
            </form>
            
          </div>
          
        </div>
       
      </div>
    );
  }

  /*
  const formData=new FormData();
        formData.append("file",this.state.uploadedFile);
        formData.append("/:id",this.state.user._id);

        //update-profile
        axios.post("http://localhost:8080/api/users/verify/" ,formData,{
            headers: {
                "content-type": "application/json"
              }
        }).then(res=>{
            console.log(res);
           this.setState({msg:res.data.message});
           this.setState({file:res.data.results.file});
        })
        .catch(err=>console.log(err))
        navigate("/profile");
*/