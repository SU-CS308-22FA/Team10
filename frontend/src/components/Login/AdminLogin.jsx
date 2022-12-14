import { useState } from "react";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const AdminLogin = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/auth";
      const { data: res } = await axios.post(url, data);
      console.log(res);
      sessionStorage.setItem("token", res.data);
      sessionStorage.setItem("user", JSON.stringify(res.user));
      
      
      window.location = "/admin-page";
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
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Admin Login</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            />
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
              Login
            </button>
          </form>
        </div>
        <div className={styles.bottom}>
          <h1> Not an admin?</h1>
          <Link to="/login">
            <button type="button" className={styles.white_btn}>
              User Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;