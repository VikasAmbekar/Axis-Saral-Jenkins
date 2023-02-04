import React, { useState } from "react";
import "./SlideBar.css";
import SOP from "./Download-Documents/SOP";
import { useNavigate } from "react-router-dom";
import { Document, Page } from "react-pdf";
import EmployeeNavigation from "../All-Modules/Employee Module/EmployeeNavigation";

const SlideBar2 = () => {
  const navigate = useNavigate();

    const scd = () => {
      navigate("/employee-module-scd");
    };

    const sop = () => {
      navigate("/employee-module-sop");
    };

    const policy = () => {
      navigate("/employee-module-policy");
    };

  return (
    <>
      <EmployeeNavigation />
      <div className="div3">
        <div className="div1">
          <h4>DOCUMENTS</h4>
          <ul>
            <li onClick={sop}> SOP </li>
            <li onClick={scd}> SCD </li>
            <li onClick={policy}> POLICIES </li>
            <li
              onClick={() => {
                navigate("/employee-search");
              }}
            >
              EMPLOYEE SEARCH
            </li>
            <li
              onClick={() => {
                navigate("/opportunities");
              }}
            >
              OPPORTUNITIES
            </li>
          </ul>
        </div>
        <div className="div2">
          <SOP />
        </div>
      </div>
    </>
  );
};

export default SlideBar2;
