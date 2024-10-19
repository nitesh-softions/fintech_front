import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect } from "react-redux";
import withRouter from "../Common/withRouter";

// i18n
import { withTranslation } from "react-i18next";
import SidebarContent from "./SidebarContent";

import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { IoClose } from "react-icons/io5";

const Sidebar = (props) => {

  const tToggle = () => {
    const body = document.body;

    if (window.screen.width <= 998) {
      body.classList.toggle("sidebar-enable");
    } else {
      body.classList.toggle("vertical-collpsed");
      body.classList.toggle("sidebar-enable");
    }
  };

  return (
    <React.Fragment>
      {/* <div className="bg-overlay z-2 d-lg-none" onClick={tToggle}></div> */}
      <div className="vertical-menu border-end border-dark border-opacity-25">
        <IoClose className="d-lg-none text-primary position-absolute top-0 end-0 m-2 font-size-20 opacity-75" onClick={tToggle}/>
        <div className="logo mb-3">
          <Link to="/" className="logo logo-dark">
            <span className="logo-lg d-flex justify-content-center">
              <img className="w-50 h-auto" src={logo} alt="logo" height="17" />
            </span>
          </Link>
        </div>

        <SidebarContent />

        <div className="sidebar-background"></div>
      </div>
    </React.Fragment>
  );
};

Sidebar.propTypes = {
  type: PropTypes.string,
};

const mapStatetoProps = (state) => {
  return {
    layout: state.Layout,
  };
};

export default connect(
  mapStatetoProps,
  {}
)(withRouter(withTranslation()(Sidebar)));
