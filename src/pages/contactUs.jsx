import PropTypes from "prop-types";
import React from "react";
import { Button, Col, Container, DropdownItem, DropdownMenu, DropdownToggle, Form, Input, Label, Row, UncontrolledDropdown } from "reactstrap";

//i18n
import { withTranslation } from "react-i18next";

import securePayment from "../assets/images/secure_payment.gif";
import qrCode from "../assets/images/qr_code.png";
import { FaCaretDown } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { PiPhoneCallLight } from "react-icons/pi";
import { TbWorldWww } from "react-icons/tb";

const ContactUs = props => {

  //meta title
  document.title = "Geopay | Dashboard";

  return (
    <React.Fragment>
      <Container fluid className="page-content">
        <h2 className="mb-3">Contact Us</h2>
        <div className="card rounded-4 h-100">
          <div className="card-body">
            <Row className="p-md-5">
              <Col xs={12} lg={6} className="d-flex flex-column position-relative pe-xl-5 mb-3">
                  <h1 className="fw-bolder">Get in <span className="text-primary">Touch</span></h1>
                  <p className="mt-4 text-dark">Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>
                  <Form className="form-horizontal my-2" >
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
                  </Form>
                  <h3 className="text-uppercase text-center mt-3">Adress</h3>
                  <p className="text-center">GeoPay Limited 5th Floor The CORE, <br /> No. 62 ICT Avenue, Cybercity 72201, Ebene,<br /> Republic of Mauritius</p>
                  <Row>
                    <Col xs={12} md={4} lg={6} xxl={4} className="d-flex align-items-center mb-3">
                      <PiPhoneCallLight className="fs-1 me-2"/>
                      <span>
                        <h6 className="fw-bold mb-1">PHONE</h6>
                        <h6 className="m-0 text-muted">+23054565615</h6>
                      </span>
                    </Col>
                    <Col xs={12} md={4} lg={6} xxl={4} className="d-flex align-items-center mb-3">
                      <HiOutlineMailOpen className="fs-1 me-2"/>
                      <span>
                        <h6 className="fw-bold mb-1">EMAIL</h6>
                        <h6 className="m-0 text-muted">support@geopay.global</h6>
                      </span>
                    </Col>
                    <Col xs={12} md={4} lg={6} xxl={4} className="d-flex align-items-center mb-3">
                      <TbWorldWww className="fs-1 me-2"/>
                      <span>
                        <h6 className="fw-bold mb-1">Website</h6>
                        <h6 className="m-0 text-muted">www.geopay.global</h6>
                      </span>
                    </Col>
                  </Row>
              </Col>
              <Col xs={12} lg={6} className="d-flex flex-column ps-xxl-5">
                <iframe className="w-100 h-100 rounded-4" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.3423324803284!2d57.484721976151626!3d-20.24463244818496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217c5b1fbb205391%3A0x2cd7211cbc918179!2sThe%20Core!5e0!3m2!1sen!2sin!4v1724489318424!5m2!1sen!2sin" style={{ minHeight: '450px' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </Col>
            </Row>
            
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

ContactUs.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
};

export default withTranslation()(ContactUs);
