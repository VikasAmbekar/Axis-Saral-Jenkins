import React from "react";
import "./AdminNavigation.css";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../Logins/AdminLogin/CheckAdminLogin";
import LogoutIcon from "@mui/icons-material/Logout";

function AdminNavigation() {
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
                navigate("/admin-news-feed");
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
                      navigate("/admin-document-add");
                    }}
                  >
                    DOCUMENTS
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-current="page"
                    onClick={() => {
                      navigate("/admin-project");
                    }}
                  >
                    PROJECT
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => {
                      navigate("/admin-managers");
                    }}
                  >
                    MANAGER
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => {
                      navigate("/admin-employees");
                    }}
                  >
                    EMPLOYEE
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => {
                      navigate("/admin-products");
                    }}
                  >
                    PRODUCT
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => {
                      navigate("/admin-notifications");
                    }}
                  >
                    NOTIFICATIONS
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
      <footer className="copyrightfooter">
        <p> Copyright &#169; By Axis Batch 9 </p>
      </footer>
    </>
  );
}

export default AdminNavigation;
