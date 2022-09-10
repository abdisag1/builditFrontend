import React, { useState, useContext } from "react";
import axiosInstance from "../axios";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import { userDetailsContext } from "../Context";
import Nav from "./Home/Nav/Nav";
import Footer from "./Home/Footer/Footer";

export default function Login() {
  const history = useNavigate();
  const initialFormData = Object.freeze({
    email: "",
    password: "",
  });

  const [formData, updateFormData] = useState(initialFormData);
  const [islogd, setIsloged] = useContext(userDetailsContext);
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    axiosInstance
      .post(`token/`, {
        email: formData.email,
        password: formData.password,
      })
      .then((res) => {
        localStorage.setItem("access_token", res.data.access);
        localStorage.setItem("refresh_token", res.data.refresh);
        axiosInstance.defaults.headers["Authorization"] =
          "JWT " + localStorage.getItem("access_token");
        history("/home");
        console.log(res);
        console.log(res.data);
        setIsloged(true);
        console.log(islogd)
      });
  };


  return (
    <div className="Login">
      <div className="main-container">
        <div className="login-container">
          <div className="container">
            <form className="form" noValidate>

              <h6>ALREADY MEMBERS</h6>
              <h6>Need help ?</h6>
              <br></br>
              <br></br>


              <input
                type="email"
                variant="outlined"
                required

                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                placeholder="Email Address"
                onChange={handleChange}
              ></input>
              <br></br>

              <input
                variant="outlined"
                required

                name="password"
                label="Password"
                type="password"
                id="password"
                placeholder="password"
                autoComplete="current-password"
                onChange={handleChange}
              ></input>
              <br></br>

              <button
                name="submit"
                type="submit"

                variant="contained"
                color="primary"
                onClick={handleSubmit}

              >
                Sign In
              </button>
            </form>
          </div>
          <div className="container-2">
            <p>
              Don't have an account yet ?<br></br>
              <a href="/register">
                <span>Create an account</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}