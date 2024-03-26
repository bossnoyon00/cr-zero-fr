import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import logo from "../../assets/whitehomenav.png";
import AppNotifications from "../other/AppNotifications";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="nav-container">
      <div className="left">
        <div
          className="nav-icon"
          onClick={() => {
            window.scrollTo(0, 0);
            navigate("/home");
          }}
        >
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="right">
        <div
          className="nav-link"
          onClick={() => {
            window.scrollTo(0, 0);
            navigate("/create-post");
          }}
        >
          Enlist Program
        </div>
        <AppNotifications />

        {/* DropDown */}
        <Dropdown />
      </div>
    </div>
  );
};

export default Navbar;
