import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Context } from "./Components/Login&LogoutTask/Context";

ReactDOM.render(
  <Context>
    <App />
  </Context>,
  document.getElementById("root")
);
