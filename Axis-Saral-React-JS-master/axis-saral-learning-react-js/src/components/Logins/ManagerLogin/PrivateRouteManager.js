import React from "react";
import { Navigate } from "react-router-dom";
import { isLogIn } from "./CheckManagerLogin";

const PrivateRouteManager = ({ children }) => {
  const isLoggedIn = isLogIn();

  return (
    <>
      {isLoggedIn ? (
        children
      ) : (
        <>
          {alert("Kindly Login to access the page.")}
          <Navigate to={"/"} />
        </>
      )}
    </>
  );
};

export default PrivateRouteManager;
