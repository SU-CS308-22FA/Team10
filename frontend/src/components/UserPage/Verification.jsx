import React, { Component, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Verification({}) {
  const [uploadedFile, setUploadedFile] = useState();
  const [myresponse, setResponse] = useState();
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
    if (uploadedFile) {
      console.log(uploadedFile.data);
      console.log(uploadedFile.type);
      let formData = new FormData();

      formData.append("file", uploadedFile.data);
      console.log(formData);

      axios
        .post(
          "https://weeklysoccer.onrender.com/api/drive/google-drive",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          console.log("Uploaded");

          this.setState({ msg: res.data.message });
          this.setState({ file: res.data.results.file });
          console.log(res);
        })
        .catch((err) => console.log(err));
    } else alert("You need to add a FILE");
  };
  /*
        const formData=new FormData();
        formData.append("file",file);
        formData.append("/:id",user._id);
        console.log(formData.file);
        //update-profile
        axios.post("https://weeklysoccer.onrender.com/api/drive/google-drive" ,formData,{
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
    user: user._id,
    file: uploadedFile,
    name: user.firstName + " " + user.lastName,
  });
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const handleRequestClicked = async (e) => {
    e.preventDefault();

    try {
      if (!uploadedFile) {
        alert("You need to upload file first");
      }
      const url = "https://weeklysoccer.onrender.com/api/verify";

      const { data: res } = await axios.post(url, data);

      console.log(res.message);
      setResponse(res.data.id);
      console.log("my response ");
      console.log(myresponse);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
    try {
      const url =
        "https://weeklysoccer.onrender.com/api/users/" +
        user._id +
        "?_id=" +
        user._id;
      const {
        data: { user: updatedUser, message: message },
      } = await axios.put(url, {
        firstName: user.firstName,
        lastName: user.lastName,
        team: user.team,
        image: user.image,
        file: myresponse,
        email: user.email,
      });
      sessionStorage.setItem("user", JSON.stringify(updatedUser));
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
      }
    }
  };

  const handleFileChange = (e) => {
    const uploadedFile = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    console.log(uploadedFile);
    setUploadedFile(uploadedFile);
    console.log(myresponse);
    setData((prev) => ({ ...prev, file: uploadedFile.data }));
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form
            className={styles.form_container}
            onSubmit={handleUploadClicked}
          >
            <h1>Verify your account:</h1>

            <h5> Upload your verification file as a PDF/PNG/JPG: </h5>
            <input type="file" name="file" onChange={handleFileChange}></input>

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
        axios.post("https://weeklysoccer.onrender.com/api/users/verify/" ,formData,{
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
