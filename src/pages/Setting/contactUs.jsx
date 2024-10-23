import PropTypes from "prop-types";
import React from "react";
import { Button, Col, Container, DropdownItem, DropdownMenu, DropdownToggle, Form, Input, Label, Row, UncontrolledDropdown } from "reactstrap";

//i18n
import { withTranslation } from "react-i18next";

import { FaCaretDown } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { PiPhoneCallLight } from "react-icons/pi";
import { TbWorldWww } from "react-icons/tb";

const ContactUs = props => {

  //meta title
  document.title = "Geopay | Dashboard";

  return (
    <React.Fragment>
      <div className="d-flex flex-column position-relative mb-3">
          {/* <h1 className="fw-bolder">Get in <span className="text-primary">Touch</span></h1>
          <p className="mt-4 text-dark">Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p> */}
          {/* <Form className="form-horizontal my-2" >
            <div className="form-group">
              <Label className="form-label">User Name</Label>
              <Input name="username" className="form-control border-light mb-3" placeholder="Name*" type="text" />
              <Input name="email" className="form-control border-light mb-3" placeholder="Email" type="text" />
              <Input name="username" className="form-control border-light mb-3" placeholder="Phone number*" type="text" />
              <UncontrolledDropdown>
                <DropdownToggle caret color="white" className="form-control border border-light d-flex justify-content-between align-items-center mb-3"> Primary <FaCaretDown /> </DropdownToggle>
                <DropdownMenu light>
                  <DropdownItem header> Header </DropdownItem>
                  <DropdownItem> Some Action </DropdownItem>
                  <DropdownItem> Foo Action </DropdownItem>
                  <DropdownItem> Bar Action </DropdownItem>
                  <DropdownItem> Quo Action </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
            <div className="text-center">
              <Button type="submit" color="primary" className="form-control"> send </Button>
            </div>
          </Form> */}
          <h3 className="mt-3 font-size-18 text-dark">GeoPay</h3>
          <p className="mt-2 font-size-12">5th Floore  The Core, No 62 ICT Cybercity 72201 <br/> Ebene,Republic of Mauritius </p>
          <Row className="gap-2">
            <Col className="d-flex align-items-center text-start mb-1 p-2 rounded-2 border border-dark border-opacity-25 ">
              <PiPhoneCallLight className="me-2 text-dark font-size-20"/>
              <h6 className="fw-bold mb-0 me-1 text-dark font-size-12">Call Support : </h6>
              <h6 className="m-0 font-size-12 text-muted">+23054565615</h6>
            </Col>
            <Col className="d-flex align-items-center text-start mb-1 p-2 rounded-2 border border-dark border-opacity-25 ">
              <HiOutlineMailOpen className="me-2 text-dark font-size-20"/>
              <h6 className="fw-bold mb-0 me-1 text-dark font-size-12">Email : </h6>
              <h6 className="m-0 font-size-12 text-muted">support@geopay.global</h6>
            </Col>
            <Col className="d-flex align-items-center text-start mb-1 p-2 rounded-2 border border-dark border-opacity-25 ">
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
