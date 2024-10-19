import PropTypes from "prop-types";
import React from "react";
import { Col, Container, Row } from "reactstrap";

//i18n
import { withTranslation } from "react-i18next";


import securePayment from "../../assets/images/secure_payment.gif";
import qrCode from "../../assets/images/qr_code.png";

const ShowCode = props => {

  //meta title
  document.title = "Ezipay | Dashboard";

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="bg_overlay_1"></div>
        <div className="bg_overlay_2"></div>
        <Container fluid>
          <h2 className="mb-3">Ezipay Wallet</h2>
          <div className="card rounded-4 h-100">
            <div className="card-body">
              <div className="d-flex justify-content-end mb-4">
                <button className="btn btn-primary waves-effect waves-light btn btn-primary">Back</button>
              </div>
              <Row className="pb-5">
                <Col className="d-flex flex-column position-relative">
                  <div className="p-5 d-flex flex-column justify-content-center align-items-center rounded-4 h-100">
                    <h4 className="mb-3 text-uppercase text-dark">To Pay Pritesh Salla</h4>
                    <p className="mb-0">Share your EziPay QR Code to receive payments</p>
                    <img src={qrCode} className="w-100 p-lg-5" alt="" />
                  </div>
                  <h5 className="position-absolute vertical-seprator d-none d-lg-block end-0 top-50">
                      <span className="bg-primary h-fit w-fit text-white p-2 rounded-2 position-relative z-1">Or</span>
                  </h5>
                </Col>
                <Col className="d-flex flex-column">

                  <div className="bg-light p-5 d-flex flex-column justify-content-center align-items-center rounded-4 h-100">
                    <img src={securePayment} height={150} alt="" />
                    <p className="m-0 fs-5 fw-medium text-dark text-center">Your Payment Details are Secured</p>
                  </div>
                </Col>
              </Row>
              
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

ShowCode.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
};

export default withTranslation()(ShowCode);
