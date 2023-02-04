import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/HomeNavigation/Home";
import EmployeeLogin from "./components/Logins/EmployeeLogin/EmployeeLogin";
import ManagerLogin from "./components/Logins/ManagerLogin/ManagerLogin";
import AdminLogin from "./components/Logins/AdminLogin/AdminLogin";
import EmployeeNavigation from "./components/All-Modules/Employee Module/EmployeeNavigation";
import Project from "./components/All-Modules/Employee Module/Project";
import ProjectDetails from "./components/All-Modules/Employee Module/ProjectDetails";
import Manager from "./components/All-Modules/Employee Module/Manager";
import MyProfile from "./components/All-Modules/Employee Module/MyProfile";
import Opportunity from "./components/All-Modules/Employee Module/Opportunity";
import ManagerNavigation from "./components/All-Modules/Manager Module/ManagerNavigation";
import ManagerProjects from "./components/All-Modules/Manager Module/ManagerProjects";
import ManagerProjectDetails from "./components/All-Modules/Manager Module/ManagerProjectDetails";
import ManagerEmployees from "./components/All-Modules/Manager Module/ManagerEmployees";
import ManagerMyProfile from "./components/All-Modules/Manager Module/MyProfile";
import AdminNavigation from "./components/All-Modules/Admin Module/AdminNavigation";
import AdminProject from "./components/All-Modules/Admin Module/AdminProject";
import AdminProjectDetails from "./components/All-Modules/Admin Module/AdminProjectDetails";
import AdminEmployees from "./components/All-Modules/Admin Module/AdminEmployees";
import AdminManagers from "./components/All-Modules/Admin Module/AdminManagers";

import EmployeeSearch from "./components/All-Modules/Employee Module/Employee-Search";
import PrivateRouteAxis from "./components/Logins/EmployeeLogin/PrivateRouteAxis";
import PrivateRouteManager from "./components/Logins/ManagerLogin/PrivateRouteManager";
import PrivateAdmin from "./components/Logins/AdminLogin/PrivateAdmin";
import AdminNewsFeed from "./components/All-Modules/Admin Module/Admin-News-Feed/AdminNewsFeed";
import EmployeeNewsFeed from "./components/All-Modules/Employee Module/Employee-News-Feed/EmployeeNewsFeed";
import Products from "./components/HomeNavigation/Products-Services/Products";
import AdminNotifications from "./components/All-Modules/Admin Module/Admin-Notifications/AdminNotifications";
import AdminProduct from "./components/All-Modules/Admin Module/AdminProduct";
import ManagerNewsFeed from "./components/All-Modules/Manager Module/Manager-News-Feed/ManagerNewsFeed";
import MyDocuments from "./components/All-Modules/Employee Module/Employee-Documents/MyDocuments";
import SalarySlip from "./components/All-Modules/Employee Module/Employee-Documents/SalarySlip";
import AppointmentLetter from "./components/All-Modules/Employee Module/Employee-Documents/AppointmentLetter";
import JoiningLetter from "./components/All-Modules/Employee Module/Employee-Documents/JoiningLetter";
import IncrementLetter from "./components/All-Modules/Employee Module/Employee-Documents/IncrementLetter";
import AdminAddProjects from "./components/All-Modules/Admin Module/Admin-Project/AdminAddProjects";
import AdminUpload from "./components/All-Modules/Admin Module/Admin-Documents/AdminUpload";
import SlideBar1 from "./components/HomeNavigation/SlideBar1";
import SlideBar2 from "./components/HomeNavigation/SlideBar2";
import SlideBar3 from "./components/HomeNavigation/SlideBar3";
import AddNews from "./components/All-Modules/Admin Module/Admin-News-Feed/AddNews";
import ManagerSlideBar1 from "./components/All-Modules/Manager Module/Manager-Documents/ManagerSlideBar1";
import ManagerSlideBar2 from "./components/All-Modules/Manager Module/Manager-Documents/ManagerSlideBar2";
import ManagerSlideBar3 from "./components/All-Modules/Manager Module/Manager-Documents/ManagerSlideBar3";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          Home Page
        </Route>
        <Route path="/products-services" element={<Products />}>
          Home Page
        </Route>
        <Route path="/employee-login" element={<EmployeeLogin />}></Route>
        <Route path="/manager-login" element={<ManagerLogin />}></Route>
        <Route path="/admin-login" element={<AdminLogin />}></Route>
        <Route
          path="/employee-module"
          element={<PrivateRouteAxis children={<EmployeeNavigation />} />}
        ></Route>
        <Route
          path="/employee-module-scd"
          element={<PrivateRouteAxis children={<SlideBar1 />} />}
        ></Route>
        <Route
          path="/employee-module-sop"
          element={<PrivateRouteAxis children={<SlideBar2 />} />}
        ></Route>
        <Route
          path="/employee-module-policy"
          element={<PrivateRouteAxis children={<SlideBar3 />} />}
        ></Route>
        <Route
          path="/employee-project"
          element={<PrivateRouteAxis children={<Project />} />}
        ></Route>
        <Route
          path="/project-details"
          element={<PrivateRouteAxis children={<ProjectDetails />} />}
        ></Route>
        <Route
          path="/employee-documents"
          element={<PrivateRouteAxis children={<MyDocuments />} />}
        ></Route>
        <Route
          path="/employee-salaryslip"
          element={<PrivateRouteAxis children={<SalarySlip />} />}
        ></Route>
        <Route
          path="/employee-appointment-letter"
          element={<PrivateRouteAxis children={<AppointmentLetter />} />}
        ></Route>
        <Route
          path="/employee-joining-letter"
          element={<PrivateRouteAxis children={<JoiningLetter />} />}
        ></Route>
        <Route
          path="/employee-increment-letter"
          element={<PrivateRouteAxis children={<IncrementLetter />} />}
        ></Route>
        <Route
          path="/employee-search"
          element={<PrivateRouteAxis children={<EmployeeSearch />} />}
        ></Route>
        <Route
          path="/employee-news-feed"
          element={<PrivateRouteAxis children={<EmployeeNewsFeed />} />}
        ></Route>
        <Route
          path="/manager-details"
          element={<PrivateRouteAxis children={<Manager />} />}
        ></Route>
        <Route
          path="/myprofile-details"
          element={<PrivateRouteAxis children={<MyProfile />} />}
        ></Route>
        <Route
          path="/opportunities"
          element={<PrivateRouteAxis children={<Opportunity />} />}
        ></Route>
        <Route
          path="/manager-module"
          element={<PrivateRouteManager children={<ManagerNavigation />} />}
        ></Route>
        <Route
          path="/manager-project"
          element={<PrivateRouteManager children={<ManagerProjects />} />}
        ></Route>
        <Route
          path="/manager-project-details"
          element={<PrivateRouteManager children={<ManagerProjectDetails />} />}
        ></Route>
        <Route
          path="/manager-employees"
          element={<PrivateRouteManager children={<ManagerEmployees />} />}
        ></Route>
        <Route
          path="/manager-profile"
          element={<PrivateRouteManager children={<ManagerMyProfile />} />}
        ></Route>
        <Route
          path="/manager-news-feed"
          element={<PrivateRouteManager children={<ManagerNewsFeed />} />}
        ></Route>
        <Route
          path="/manager-module-sop"
          element={<PrivateRouteManager children={<ManagerSlideBar1 />} />}
        ></Route>
        <Route
          path="/manager-module-scd"
          element={<PrivateRouteManager children={<ManagerSlideBar2 />} />}
        ></Route>
        <Route
          path="/manager-module-policy"
          element={<PrivateRouteManager children={<ManagerSlideBar3 />} />}
        ></Route>
        <Route
          path="/admin-module"
          element={<PrivateAdmin children={<AdminNavigation />} />}
        ></Route>
        <Route
          path="/admin-project"
          element={<PrivateAdmin children={<AdminProject />} />}
        ></Route>
        <Route
          path="/admin-project-details"
          element={<PrivateAdmin children={<AdminProjectDetails />} />}
        ></Route>
        <Route
          path="/admin-employees"
          element={<PrivateAdmin children={<AdminEmployees />} />}
        ></Route>
        <Route
          path="/admin-managers"
          element={<PrivateAdmin children={<AdminManagers />} />}
        ></Route>
        <Route
          path="/admin-news-feed"
          element={<PrivateAdmin children={<AdminNewsFeed />} />}
        ></Route>
        <Route
          path="/admin-notifications"
          element={<PrivateAdmin children={<AdminNotifications />} />}
        ></Route>
        <Route
          path="/admin-products"
          element={<PrivateAdmin children={<AdminProduct />} />}
        ></Route>
        <Route
          path="/admin-project-add"
          element={<PrivateAdmin children={<AdminAddProjects />} />}
        ></Route>
        <Route
          path="/admin-document-add"
          element={<PrivateAdmin children={<AdminUpload />} />}
        ></Route>
        <Route
          path="/admin-news-add"
          element={<PrivateAdmin children={<AddNews />} />}
        ></Route>
      </Routes>
    </>
  );
};

export default App;
