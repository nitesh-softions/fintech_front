import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";

// //Import Scrollbar
import SimpleBar from "simplebar-react";

// MetisMenu
import MetisMenu from "metismenujs";
import { Link, useLocation } from "react-router-dom";
import withRouter from "../Common/withRouter";

// Icons
import { RxDashboard } from "react-icons/rx";
import { CgFileDocument } from "react-icons/cg";
import { PiBell } from "react-icons/pi";
import { BsBarChart } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";

//i18n
import { withTranslation } from "react-i18next";
import { useCallback } from "react";

const SidebarContent = (props) => {
  const ref = useRef();
  const path = useLocation();

  const activateParentDropdown = useCallback((item) => {
    item.classList.add("active");
    const parent = item.parentElement;
    const parent2El = parent.childNodes[1];
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show");
    }

    if (parent) {
      parent.classList.add("mm-active");
      const parent2 = parent.parentElement;

      if (parent2) {
        parent2.classList.add("mm-show"); // ul tag

        const parent3 = parent2.parentElement; // li tag

        if (parent3) {
          parent3.classList.add("mm-active"); // li
          parent3.childNodes[0].classList.add("mm-active"); //a
          const parent4 = parent3.parentElement; // ul
          if (parent4) {
            parent4.classList.add("mm-show"); // ul
            const parent5 = parent4.parentElement;
            if (parent5) {
              parent5.classList.add("mm-show"); // li
              parent5.childNodes[0].classList.add("mm-active"); // a tag
            }
          }
        }
      }
      scrollElement(item);
      return false;
    }
    scrollElement(item);
    return false;
  }, []);

  const removeActivation = (items) => {
    for (var i = 0; i < items.length; ++i) {
      var item = items[i];
      const parent = items[i].parentElement;

      if (item && item.classList.contains("active")) {
        item.classList.remove("active");
      }
      if (parent) {
        const parent2El =
          parent.childNodes && parent.childNodes.lenght && parent.childNodes[1]
            ? parent.childNodes[1]
            : null;
        if (parent2El && parent2El.id !== "side-menu") {
          parent2El.classList.remove("mm-show");
        }

        parent.classList.remove("mm-active");
        const parent2 = parent.parentElement;

        if (parent2) {
          parent2.classList.remove("mm-show");

          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.remove("mm-active"); // li
            parent3.childNodes[0].classList.remove("mm-active");

            const parent4 = parent3.parentElement; // ul
            if (parent4) {
              parent4.classList.remove("mm-show"); // ul
              const parent5 = parent4.parentElement;
              if (parent5) {
                parent5.classList.remove("mm-show"); // li
                parent5.childNodes[0].classList.remove("mm-active"); // a tag
              }
            }
          }
        }
      }
    }
  };

  const activeMenu = useCallback(() => {
    const pathName = path.pathname;
    const firstPathName = '/' + pathName.split('/')[1];
    let matchingMenuItem = null;
    const ul = document.getElementById("side-menu");
    const items = ul.getElementsByTagName("a");
    removeActivation(items);

    for (let i = 0; i < items.length; ++i) {
      if (firstPathName === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem);
    }
  }, [path.pathname, activateParentDropdown]);

  useEffect(() => {
    ref.current.recalculate();
  }, []);

  useEffect(() => {
    new MetisMenu("#side-menu");
    activeMenu();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    activeMenu();
  }, [activeMenu]);

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop;
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300;
      }
    }
  }

  return (
    <React.Fragment>
      <SimpleBar className="sidebar-container pb-4" ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            {/* <li>
              <Link to="/#" className="has-arrow">
                <i className="bx bx-home-circle"></i>
                <span>{props.t("Dashboards")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="/dashboard">{props.t("Default")}</Link>
                </li>
                <li>
                  <Link to="/saas">{props.t("Saas")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("Crypto")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("Blog")}</Link>
                </li>
                <li>
                  <Link to="#">
                    {props.t("Job")}
                  </Link>
                </li>
              </ul>
            </li> */}

            <li>
              <Link to="/dashboard" className="">
                <RxDashboard />
                <span>{props.t("Dashboards")}</span>
              </Link>
            </li>

            <li>
              <Link to="/transaction" className="">
                <CgFileDocument />
                <span>{props.t("Transaction")}</span>
              </Link>
            </li>
            <li>
              <Link to="/notification">
                <PiBell />
                <span>{props.t("Notification")}</span>
              </Link>
            </li>
            <li>
              <Link to="/statistics">
                <BsBarChart />
                <span>{props.t("Statistics")}</span>
              </Link>
            </li>
            <li>
              <Link to="/settings">
                <IoSettingsOutline/>
                <span>{props.t("Settings")}</span>
              </Link>
            </li>

            {/* <li className="d-md-none">
              <Link to="/watchvideo">
                <TbPlayerPlayFilled/>
                <span>{props.t("Watch Video")}</span>
              </Link>
            </li>
            <li className="d-md-none">
              <Link to="/aboutus">
                <BiSolidInfoCircle/>
                <span>{props.t("About Us")}</span>
              </Link>
            </li>
            <li className="d-md-none">
              <Link to="/contactus">
                <BiSolidPhoneCall/>
                <span>{props.t("Contact Us")}</span>
              </Link>
            </li> */}

            <li>
              <Link to="/logout">
                <BiLogOut />
                <span>{props.t("Logout")}</span>
              </Link>
            </li>
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  );
};

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
};

export default withRouter(withTranslation()(SidebarContent));
