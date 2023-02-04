import React, { useState } from "react";
import ManagerSOP from "./Manager-Documents/ManagerSOP";

import { useNavigate } from "react-router-dom";
import "./ManagerSlideBar.css";

const ManagerSlideBar = () => {
  const navigate = useNavigate();

  const scdClick = () => {
    navigate("/manager-module-policy");
  };

  const policyClick = () => {
    navigate("/manager-module-scd");
  };

  const sopClick = () => {
    navigate("/manager-module-sop");
  };

  return (
    <>
      <div className="div3">
        <div className="div1">
          <h4>DOCUMENTS</h4>
          <ul>
            <li onClick={sopClick}>SOP </li>
            <li onClick={scdClick}> SCD </li>
            <li onClick={policyClick}> POLICIES </li>
          </ul>
        </div>
        <div className="div2">
          <ManagerSOP />
        </div>
      </div>
    </>
  );
};

export default ManagerSlideBar;
