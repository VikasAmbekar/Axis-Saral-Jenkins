import React, { useState } from "react";
import "./SlideBar.css";
import SOP from "./Download-Documents/SOP";
import { useNavigate } from "react-router-dom";
import { Document, Page } from "react-pdf";

const SlideBar = () => {
  const navigate = useNavigate();

  // const [document, setDocument] = useState({
  //   title: "STATEMENT OF PURPOSE",
  //   body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  // });
  // let scd = {
  //   title: "SPECIFICATION CONTROL DOCUMENT",
  //   body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  // };

  // let policy = {
  //   title: "POLICIES",
  //   body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  // };

  // let sop = {
  //   title: "STATEMENT OF PURPOSE",
  //   body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  // };

  // const scdClick = () => {
  //   setDocument(scd);
  // };

  // const policyClick = () => {
  //   setDocument(policy);
  // };

  // const sopClick = () => {
  //   setDocument(sop);
  // };

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

export default SlideBar;
