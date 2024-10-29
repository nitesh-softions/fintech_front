import React from "react";
import { Navigate } from "react-router-dom";
import { getCookie } from "../utils/CommonFunctions";

const Authmiddleware = (props) => {
  const token = getCookie("token");
  
  if (!token) {
    return (
      <Navigate to={{ pathname: "/login", state: { from: props.location } }} />
    );
  }
  return <React.Fragment>{props.children}</React.Fragment>;
};

export default Authmiddleware;
