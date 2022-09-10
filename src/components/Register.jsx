import React, { useState } from 'react';
import axiosInstance from '../axios';
import { useNavigate } from 'react-router-dom';
//MaterialUI



export default function Register() {
  const history = useNavigate();
  const initialFormData = Object.freeze({
    email: '',
    username: '',
    password: '',
  });

  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    axiosInstance
      .post(`user/create/`, {
        email: formData.email,
        user_name: formData.username,
        password: formData.password,
      })
      .then((res) => {
        history('/');
        console.log(res);
        console.log(res.data);
      });
  };



  return (
    <div className="Login">
      <nav></nav>
      <div className="main-container">
        <div className="login-container">
          <div className="container">
            <form className="form" noValidate>
              <p>
                <h6>ALREADY MEMBERS</h6>
                <h7>Need help ?</h7><br></br><br></br>
              </p>

              <input
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                placeholder='Email Address'
                onChange={handleChange}
              ></input><br></br>

              <input
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                placeholder='user name'
                onChange={handleChange}></input><br></br>
              <input
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                placeholder='password'
                autoComplete="current-password"
                onChange={handleChange}
              ></input><br></br>


              <button name="submit"
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >Sign UP</button>
            </form>
          </div>
          <div className="container-2">
            <p>Already have an account ?<br></br>
              <a href="/"><span>Sign in</span></a>
            </p>
          </div>


        </div>
      </div>


    </div>
  );
}