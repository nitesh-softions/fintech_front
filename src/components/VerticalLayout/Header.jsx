import PropTypes from 'prop-types';
import React, { useState } from "react";

import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";

// Import menuDropdown
import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown";
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu";

import logo from "../../assets/images/collapsed-logo.png";
import logoLightSvg from "../../assets/images/collapsed-logo.png";

//i18n
import { withTranslation } from "react-i18next";


// Redux Store
import {
  showRightSidebarAction,
  toggleLeftmenu,
  changeSidebarType,
} from "../../store/actions";
import { IoWallet } from 'react-icons/io5';

const Header = props => {
  const [search, setsearch] = useState(false);
  // const location = useLocation();
  // const path = location.pathname;
  // const segments = path.split('/');

  function toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

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
          <div className="d-flex align-items-center">

            <div className="navbar-brand-box d-lg-none d-md-block pe-2">
              <Link to="/" className="logo logo-dark">
                <span className="logo-sm">
                  <img src={logo} alt="" height="22" />
                </span>
              </Link>

              <Link to="/" className="logo logo-light">
                <span className="logo-sm">
                  <img src={logoLightSvg} alt="" height="22" />
                </span>
              </Link>
            </div>

            <button type="button" onClick={() => { tToggle(); }} className="btn btn-sm px-2 d-lg-none font-size-16 header-item " id="vertical-menu-btn" > <i className="fa fa-fw fa-bars" /> </button>
            {/* <h1 className="font-size-22 mb-0 text-capitalize">{segments[segments.length - 1].split('-').join(' ')}</h1> */}

          </div>
          
          <div className="d-flex align-items-center">

            <button type="button" className="btn btn-light h-fit w-fit mx-1 mx-md-2 px-2 d-flex align-items-center fw-semibold"><IoWallet className='fs-4 '/> <span className='ms-1'>₹ 12000</span></button>
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
