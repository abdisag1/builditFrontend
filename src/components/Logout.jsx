import React, { useState, useEffect, useContext } from "react";
import axiosInstance from "../axios";
import { useNavigate } from "react-router-dom";
import { userDetailsContext } from "../Context";

export default function SignUp() {
  const [islogd, setIsloged] = useContext(userDetailsContext);
  const history = useNavigate();

  useEffect(() => {
    const response = axiosInstance.post("user/logout/blacklist/", {
      refresh_token: localStorage.getItem("refresh_token"),
    });
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    axiosInstance.defaults.headers["Authorization"] = null;
    history("/")
    setIsloged(true)
  });
  return <div>Logout</div>;
}