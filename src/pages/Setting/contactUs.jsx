import PropTypes from "prop-types";
import React from "react";
import { Button, Col, Container, DropdownItem, DropdownMenu, DropdownToggle, Form, Input, Label, Row, UncontrolledDropdown } from "reactstrap";

//i18n
import { withTranslation } from "react-i18next";

import { FaCaretDown } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { PiPhoneCallLight } from "react-icons/pi";
import { TbWorldWww } from "react-icons/tb";
import SVGIcons from "../../components/Common/SVGIcons";

const ContactUs = props => {

  //meta title
  document.title = "Geopay | Dashboard";

  return (
    <React.Fragment>
      <div className="d-flex flex-column position-relative mb-3">
          <span className="d-block d-sm-none">
            <h2 className="mb-3 font-size-18 text-secondary text-center">Contact Us</h2>
          </span>
          <div className="d-flex align-items-center justify-content-between">
            <h3 className="mt-3 font-size-18 text-dark d-flex align-items-center"><SVGIcons.PiMapPinLineBold className="me-1 font-size-20"/> <span>GeoPay</span></h3>
            <div className="d-flex align-items-center gap-3">
              <div className={`btn btn-soft-success rounded-circle d-flex align-items-center justify-content-center p-1 p-md-2`}>
                <SVGIcons.FaWhatsapp className="font-size-20"/>
              </div>
              <div className={`btn btn-soft-danger rounded-circle d-flex align-items-center justify-content-center p-1 p-md-2`}>
                <SVGIcons.FaInstagram className="font-size-20"/>
              </div>
              <div className={`btn btn-soft-info rounded-circle d-flex align-items-center justify-content-center p-1 p-md-2`}>
                <SVGIcons.Facebook className="font-size-20"/>
              </div>
            </div>

          </div>
          <p className="mt-2 font-size-12">5th Floore  The Core, No 62 ICT Cybercity 72201 <br/> Ebene,Republic of Mauritius </p>
          <Row className="gap-2 w-100 m-auto">
            <Col className="d-flex align-items-center text-start text-nowrap mb-1 p-2 rounded-2 border border-dark border-opacity-25 ">
              <PiPhoneCallLight className="me-2 text-dark font-size-20"/>
              <h6 className="fw-bold mb-0 me-1 text-dark font-size-12">Call Support : </h6>
              <h6 className="m-0 font-size-12 text-muted">+23054565615</h6>
            </Col>
            <Col className="d-flex align-items-center text-start text-nowrap mb-1 p-2 rounded-2 border border-dark border-opacity-25 ">
              <HiOutlineMailOpen className="me-2 text-dark font-size-20"/>
              <h6 className="fw-bold mb-0 me-1 text-dark font-size-12">Email : </h6>
              <h6 className="m-0 font-size-12 text-muted">support@geopay.global</h6>
            </Col>
            <Col className="d-flex align-items-center text-start text-nowrap mb-1 p-2 rounded-2 border border-dark border-opacity-25 ">
              <HiOutlineMailOpen className="me-2 text-dark font-size-20"/>
              <h6 className="fw-bold mb-0 me-1 text-dark font-size-12">Website : </h6>
              <h6 className="m-0 font-size-12 text-muted">www.geopay.global</h6>
            </Col>
          </Row>
      </div>
    </React.Fragment>
  );
};

ContactUs.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
};

export default withTranslation()(ContactUs);
