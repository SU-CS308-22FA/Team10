import { useState, useEffect } from "react";
import Group from "./Group";
import axios from "axios";
import { purple, red } from "@mui/material/colors";
import { withTheme } from "@emotion/react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

export default function EditableUserProfile({}) {
  const navigate = useNavigate();
  console.log("Edit User Profile");
  const user = JSON.parse(sessionStorage.getItem("user"));

  const [firstName, setName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [team, setTeam] = useState(user.team);
  const [image, setImage] = useState(user.image);

  const defaultSelectValue = "Choose your favorite team";
  const [selected, setSelected] = useState(defaultSelectValue);
  const handleSaveClicked = async (e) => {
    e.preventDefault();
    try {
      const url =
        "https://weeklysoccer2.onrender.com/api/users/" +
        user._id +
        "?_id=" +
        user._id;
      const {
        data: { user: updatedUser, message: message },
      } = await axios.put(url, {
        firstName,
        lastName,
        team,
        image,
        email: user.email,
      });
      sessionStorage.setItem("user", JSON.stringify(updatedUser));

      navigate("/profile");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
      }
    }
  };

  function handleCancelClicked() {
    console.log("Cancelled");
    navigate("/profile");
  }

  const buttonStyle = {
    backgroundColor: withTheme,
    color: purple,
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={handleSaveClicked}>
            <h1>Edit your information:</h1>
            <h5> Upload an image: </h5>
            <input
              type="file"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <input
              type="text"
              value={firstName}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={styles.input}
            />
            <label htmlFor="team">Teams</label>{" "}
            <select
              id="team"
              name="team"
              defaultValue={selected}
              style={{
                color: selected === defaultSelectValue ? "gray" : "black",
              }}
              onChange={(e) => {
                setTeam(e.target.value);
                setSelected(e.target.value);
              }}
            >
              <option value="Fenerbahçe"> Fenerbahçe</option>
              <option value="Galatasaray">Galatasaray</option>
              <option value="Beşiktaş"> Beşiktaş</option>
              <option value="Fenerbahçe"> Fenerbahçe</option>
            </select>
            <h6>Selected: {selected}</h6>
            <button
              stype="button"
              className={styles.purple_btn}
              onClick={handleSaveClicked}
            >
              Save
            </button>
            <button
              stype="button"
              className={styles.purple_btn}
              onClick={handleCancelClicked}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
