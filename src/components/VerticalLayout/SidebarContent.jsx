import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";

// //Import Scrollbar
import SimpleBar from "simplebar-react";

// MetisMenu
import MetisMenu from "metismenujs";
import { Link, useLocation } from "react-router-dom";
import withRouter from "../Common/withRouter";

// Icons
import SVGIcons from "../Common/SVGIcons";

//i18n
import { withTranslation } from "react-i18next";
import { useCallback } from "react";

import supportImage from "../../assets/images/vectors/support-vector.png";
import { Button } from "reactstrap";

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

  const tToggle = () => {
    const body = document.body;
    body.classList.toggle("sidebar-enable");
  };

  return (
    <React.Fragment>
      <SimpleBar className="sidebar-container pb-4" ref={ref}>
        <div id="sidebar-menu" className="h-100 d-flex flex-column justify-content-between">
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
              <Link to="/dashboard" onClick={tToggle} className="">
                <SVGIcons.RxDashboard />
                <span>{props.t("Dashboards")}</span>
              </Link>
            </li>

            <li>
              <Link to="/transaction" onClick={tToggle} className="">
                <SVGIcons.CgFileDocument />
                <span>{props.t("Transaction")}</span>
              </Link>
            </li>
            <li>
              <Link to="/notification" onClick={tToggle}>
                <SVGIcons.PiBell />
                <span>{props.t("Notification")}</span>
              </Link>
            </li>
            {/* <li>
              <Link to="/statistics" onClick={tToggle}>
                <SVGIcons.BsBarChart />
                <span>{props.t("Statistics")}</span>
              </Link>
            </li> */}
            <li>
              <Link to="/settings" onClick={tToggle}>
                <SVGIcons.IoSettingsOutline/>
                <span>{props.t("Settings")}</span>
              </Link>
            </li>

            {/* <li className="d-md-none">
              <Link to="/watchvideo">
                <TbPlayerPlayFilled/>
                <span>{props.t("Watch Video")}</span>
              </Link>
            </li> */}

            <li>
              <Link to="/logout">
                <SVGIcons.BiLogOut />
                <span>{props.t("Logout")}</span>
              </Link>
            </li>
          </ul>
          <div className="pb-5 pb-xl-0 d-flex flex-column align-items-center ">
            <img className="w-100 h-auto" src={supportImage} alt="logo" height="17" />
            <p className="p-3 border rounded-3 small mb-0">It could be related to customer support, technical support, product guides</p>
            <Button className="btn btn-secondary btn-sm w-fit mb-lg-5 mb-xxl-0" style={{ marginTop: "-14px" }}>Support</Button>
          </div>
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
