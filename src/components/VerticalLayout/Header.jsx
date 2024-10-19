import PropTypes from 'prop-types';
import React, { useState } from "react";

import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";

// Import menuDropdown
import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown";
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu";

import logo from "../../assets/images/collapsed-logo.png";

//i18n
import { withTranslation } from "react-i18next";


// Redux Store
import {
  showRightSidebarAction,
  toggleLeftmenu,
  changeSidebarType,
} from "../../store/actions";
import { IoWallet } from 'react-icons/io5';
import { CgMenuLeft } from 'react-icons/cg';

const Header = props => {
  // const location = useLocation();
  // const path = location.pathname;
  // const segments = path.split('/');

  function tToggle() {
    var body = document.body;
    if (window.screen.width <= 998) {
      body.classList.toggle("sidebar-enable");
    } else {
      body.classList.toggle("vertical-collpsed");
      body.classList.toggle("sidebar-enable");
    }
  }

  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="navbar-header border-bottom border-dark border-opacity-10">
          <div>
            <button type="button" onClick={() => { tToggle(); }} className="btn btn-sm px-1 d-lg-none header-item bg-light h-fit rounded-0 rounded-end" id="vertical-menu-btn" > <CgMenuLeft className="font-size-24" /> </button>
          </div>
          
          <div className="d-flex align-items-center">

            <button type="button" className="btn btn-light h-fit w-fit mx-1 mx-md-2 px-3 d-flex align-items-center rounded-3 font-size-14 fw-semibold"><IoWallet className='fs-4 '/> <span className='ms-1'>₹ 12000</span></button>
            {/* <LanguageDropdown /> */}

            <NotificationDropdown />
            <ProfileMenu />
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

Header.propTypes = {
  changeSidebarType: PropTypes.func,
  leftMenu: PropTypes.any,
  leftSideBarType: PropTypes.any,
  showRightSidebar: PropTypes.any,
  showRightSidebarAction: PropTypes.func,
  t: PropTypes.any,
  toggleLeftmenu: PropTypes.func
};

const mapStatetoProps = state => {
  const {
    layoutType,
    showRightSidebar,
    leftMenu,
    leftSideBarType,
  } = state.Layout;
  return { layoutType, showRightSidebar, leftMenu, leftSideBarType };
};

export default connect(mapStatetoProps, {
  showRightSidebarAction,
  toggleLeftmenu,
  changeSidebarType,
})(withTranslation()(Header));
