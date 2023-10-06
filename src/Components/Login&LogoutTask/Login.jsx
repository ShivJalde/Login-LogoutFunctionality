import React from "react";
import "../Css/Login.css";
import context from "./Context";
import { useState, useContext } from "react";

function Login() {
  const { setIsLoggedIn } = useContext(context);
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const HandleLoginButton = () => {
    if (loginData.username === "shivraj" && loginData.password === "shivraj") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid UserName Or Password");
    }
  };
  return (
    <div className="login-container">
      <div className="login-username-container">
        <input
          type="text"
          placeholder="username"
          onChange={(e) => {
            setLoginData({
              ...loginData,
              username: e.target.value,
            });
          }}
        />
      </div>
      <div className="login-password-container">
        <input
          type="password"
          placeholder="password"
          onChange={(e) => {
            setLoginData({
              ...loginData,
              password: e.target.value,
            });
          }}
        />
      </div>
      <div className="login-button-container">
        <button onClick={HandleLoginButton}>Login</button>
      </div>
    </div>
  );
}

export default Login;
