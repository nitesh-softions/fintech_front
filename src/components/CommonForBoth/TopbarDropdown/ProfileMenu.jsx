import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, } from "reactstrap";

// i18n
import { withTranslation } from "react-i18next";

// Redux
import { Link } from "react-router-dom";
import withRouter from "../../Common/withRouter";

// users
import user1 from "../../../assets/images/users/avatar-1.jpg";
import { decryptData, getCookie } from "../../../utils/CommonFunctions";

// const userCookie = getCookie("authUser");

// useEffect(() => {
//   const user = decryptData(userCookie);
//   console.log(user);
// }, [userCookie]);

const ProfileMenu = (props) => {
  // Declare a new state variable, which we'll call "menu"
  const [menu, setMenu] = useState(false);

  const [username, setUsername] = useState("Admin");
  const [userEmail, setUserEmail] = useState("");

  const userCookie = getCookie("user");

  useEffect(() => {
    if (userCookie) {
      const user = JSON.parse(decryptData(userCookie));
      setUsername(user.first_name + " " + user.last_name);
      setUserEmail(user.email);
    }
  }, [userCookie]); // This effect will run whenever userCookie changes

  return (
    <React.Fragment>
      <Dropdown isOpen={menu} toggle={() => setMenu(!menu)} className="d-inline-block" >
        <DropdownToggle className="btn header-item d-flex align-items-center" id="page-header-user-dropdown" tag="button" >
          <img
            className="rounded-circle header-profile-user p-0"
            src={user1}
            alt="Header Avatar"
          />
          <span className="d-none d-xl-inline-block ms-2 me-1 text-start text-white">
            <p className="m-0">
              {username}
              <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
            </p>
            <p className="m-0">{userEmail}</p>
          </span>
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end">
          <DropdownItem tag="a" href="/crypto-wallet">
            <i className="bx bx-wallet font-size-16 align-middle me-1" />
            {props.t("My Wallet")}
          </DropdownItem>
          <DropdownItem tag="a" href="#">
            <span className="badge bg-success float-end">11</span>
            <i className="bx bx-wrench font-size-16 align-middle me-1" />
            {props.t("Settings")}
          </DropdownItem>
          <div className="dropdown-divider" />
          <Link to="/logout" className="dropdown-item">
            <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />
            <span>{props.t("Logout")}</span>
          </Link>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

ProfileMenu.propTypes = {
  t: PropTypes.any,
};

export default withRouter(withTranslation()(ProfileMenu));
