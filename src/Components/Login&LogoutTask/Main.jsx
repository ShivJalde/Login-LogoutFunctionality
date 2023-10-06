import React, { useContext } from "react";
import Home from "./Home";
import Login from "./Login";
import Nav from "./Nav";

import context from "./Context";

function Main() {
  const { isLoggedIn } = useContext(context);
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div>{isLoggedIn ? <Home /> : <Login />}</div>
    </div>
  );
}

export default Main;
