import React from "react";
import { Navigate } from "react-router-dom";
import { decryptData, getCookie } from "../utils/CommonFunctions";

const Authmiddleware = (props) => {
  const token = decryptData(getCookie("token"));

  console.log('getCookie("token"): ', getCookie("token"));
  console.log('token: ', token);
  
  if (!token) {
    return (
      <Navigate to={{ pathname: "/login", state: { from: props.location } }} />
    );
  }
  return <React.Fragment>{props.children}</React.Fragment>;
};

export default Authmiddleware;
