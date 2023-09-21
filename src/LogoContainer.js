import React from "react";
import logo from "./logo.png";
import "./logoContainer.css";
const LogoContainer = () => {
  return (
    <div className="container mt-3  logoContainer">
      <div>
        <img src={logo} alt="logo" className="img-fluid logo" />
      </div>
      <div className="line"></div>
      <h4 className="text-success">Website Development Tracker</h4>
    </div>
  );
};
export default LogoContainer;
