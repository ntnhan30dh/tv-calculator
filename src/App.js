import React, { Fragment, useState } from "react";
import Calculator from "./components/calculator";
import Login from "./components/login";
import Logout from "./components/logout";
import Auth from "./constants/auth";

import logo from "./images/logo.png";

import "semantic-ui-css/semantic.min.css";
import "./App.scss";

const auth = new Auth();
const App = () => {
  let [isAuthenticated, setstate] = useState(auth.isAuthenticated());

  const setLoginState = () => {
    setstate(auth.isAuthenticated());
  };

  return (
    <Fragment className="App">
      {!isAuthenticated && (
        <div className="wrap">
          <header className="header">
            <div className="left">
              <div className="leftWrapper">
                <div className="top">
                  <img src={logo} alt="logo" />
                 TVC Media Pressure Optimiser
                </div>
                <div className="bottom">
                  <Login setLoginState={setLoginState} />
                </div>
              </div>
            </div>
          </header>
        </div>
      )}
      {isAuthenticated && (
        <div className="wrap">
          <header className="header">
            <div className="left">
              <div className="leftWrapper">
                <div className="top">
                  <img src={logo} alt="logo" />
                 TVC Media Pressure Optimiser
                </div>
                <div className="bottom">
                  <Logout setLoginState={setLoginState} />
                </div>
              </div>
            </div>
          </header>
          <Calculator />
        </div>
      )}
    </Fragment>
  );
};

export default App;
