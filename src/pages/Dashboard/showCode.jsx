import PropTypes from "prop-types";
import React from "react";
import { Col, Container, Row, Button, Input } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";

// Icons
import qrCode from "../../assets/images/qr_code.png";

const ShowCode = props => {

  //meta title
  document.title = "GeoPay | Dashboard";

  return (
    <React.Fragment>
      <div className="page-content">
        {/* <div className="bg_overlay_1"></div>
        <div className="bg_overlay_2"></div> */}
        <Container fluid>
          <h2 className="mb-3">GeoPay Wallet</h2>
          <div className="card rounded-4 border-1">
            <div className="card-body">
              {/* <div className="d-flex justify-content-end mb-4">
                <button className="btn btn-primary waves-effect waves-light btn btn-primary">Back</button>
              </div> */}
              <Row>
                <Col className="d-flex flex-column position-relative">
                  <div className="p-5 d-flex flex-column justify-content-center align-items-center rounded-4 h-100">
                    <h4 className="mb-3 text-uppercase text-dark">To Pay Pritesh Salla</h4>
                    <p className="mb-0">Share your GeoPay QR Code to receive payments</p>
                    <img src={qrCode} className="w-100 px-5" alt="" />
                  </div>
                  <h5 className="position-absolute vertical-seprator d-none d-lg-block end-0 top-50">
                      <span className="bg-primary h-fit w-fit text-white p-2 rounded-2 position-relative z-1">Or</span>
                  </h5>
                </Col>
                <Col className="d-flex flex-column align-items-center justify-content-center">
                  <div className="bg-primary d-flex flex-column align-items-center p-4 rounded-3">
                    <div className="d-flex justify-content-center">
                      
                    </div>
                    <p className="text-white py-1">Enter Mobile Number to Pay</p>
                    <Button className="bg-white text-black d-flex w-75 justify-content-center">909-234-2342</Button>
                    <Input placeholder="1 234-453-689"></Input>
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