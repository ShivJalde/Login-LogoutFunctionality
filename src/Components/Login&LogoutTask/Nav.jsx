import React from "react";
import "../Css/Nav.css";
import context from "./Context";
import { useContext } from "react";

function Nav() {
  const { isLoggedIn, setIsLoggedIn } = useContext(context);
  return (
    <div className="nav-container">
      <div className="nav-logo">Shivraj</div>
      <div className="nav-links">
        <a href="q">Home</a>
        <a href="a">About Us</a>
        <a href="a">Contact Us</a>
        <a href="a">More</a>
        <button
          onClick={() => {
            setIsLoggedIn(false);
          }}
        >
          {isLoggedIn ? "Logout" : null}
        </button>
      </div>
    </div>
  );
}

export default Nav;
