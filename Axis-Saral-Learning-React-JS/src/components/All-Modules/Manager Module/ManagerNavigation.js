import React from "react";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../Logins/ManagerLogin/CheckManagerLogin";
import ManagerSlideBar from "./ManagerSliderBar";
import LogoutIcon from "@mui/icons-material/Logout";

const ManagerNavigation = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    logOut();
    navigate("/");
  };

  return (
    <>
      <div className="headerposition">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid" id="navid">
            <a
              className="navbar-brand"
              onClick={() => {
                navigate("/manager-news-feed");
              }}
            >
              Axis SARAL Learning
            </a>
            <div
              className="collapse navbar-collapse navb-center"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-current="page"
                    onClick={() => {
                      navigate("/manager-project");
                    }}
                  >
                    PROJECT
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => {
                      navigate("/manager-employees");
                    }}
                  >
                    EMPLOYEES
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => {
                      navigate("/manager-module");
                    }}
                  >
                    DOCUMENTS
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => {
                      navigate("/manager-profile");
                    }}
                  >
                    MY PROFILE
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => {
                      handleClick();
                    }}
                  >
                    <LogoutIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div>
        <ManagerSlideBar />
      </div>
      <footer className="copyrightfooter">
        <p> Copyright &#169; By Axis Batch 9 </p>
      </footer>
    </>
  );
};

export default ManagerNavigation;
