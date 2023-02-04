import React from "react";
import "./Navigation.css";
import { useNavigate } from "react-router-dom";

function Navigation() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid" id="navid">
          <a className="navbar-brand">Axis SARAL Learning</a>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
