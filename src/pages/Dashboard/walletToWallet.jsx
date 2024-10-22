import PropTypes from "prop-types";
import React from "react";
import { Col, Container, Row, Button, Input, Card, CardText } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";

// Icons
import qrCode from "../../assets/images/qr_code.png";
import gridDots from "../../assets/images/svgs/grid-dots.svg";
import QuickTransferCard from "../../components/Dashboard/QuickTransferCard";
import RecentTransactionCard from "../../components/Dashboard/RecentTransactionCard";

const WalletToWallet = props => {

  //meta title
  document.title = "GeoPay | Dashboard";

  return (
    <React.Fragment>
      <div className="page-content h-100">
        {/* <div className="bg_overlay_1"></div>
        <div className="bg_overlay_2"></div> */}
        <Container fluid className="h-100">
          <Row className="h-100">
            <Col xxl={9} className="pe-lg-4">     
              <h2 className="mb-4 font-size-22">Wallet to Wallet</h2>
              <Row>
                <Col md={6} className="d-flex flex-column position-relative">
                  <div className="p-5 d-flex flex-column justify-content-center align-items-center rounded-4 h-100">
                    <h4 className="mb-3 text-uppercase text-dark">To Pay Pritesh Salla</h4>
                    <p className="mb-0">Share your GeoPay QR Code to receive payments</p>
                    <img src={qrCode} className="w-100" alt="" style={{maxWidth: '500px'}}/>
                  </div>
                  <h5 className="position-absolute vertical-seprator d-none d-md-block end-0 top-50">
                      <span className="bg-primary h-fit w-fit text-white p-2 font-size-22 rounded-3 position-relative z-1">OR</span>
                  </h5>
                  <h5 className="position-absolute d-md-none start-50 translate-middle-x bottom-0">
                      <span className="bg-primary h-fit w-fit text-white p-2 font-size-22 rounded-3 position-relative z-1">OR</span>
                  </h5>
                </Col>
                <Col md={6} className="d-flex flex-column align-items-center justify-content-center">
                  <Card className="bg-secondary d-flex flex-column align-items-center justify-content-center p-5 rounded-4 gap-4 mt-5" style={{aspectRatio: '1/1'}}>
                    <img src={gridDots} width={50} />
                    <p className="text-white py-3 mb-0 font-size-20">Enter Mobile Number to Pay</p>
                    <Input className="form-control form-control-lg text-center" placeholder="1 234-453-689" />
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col xxl={3} className="pt-4 pt-xxl-0 border-start border-dark border-opacity-25 ps-lg-4 quick-transfer-column">
              <Container fluid className="p-0">
                <div className="d-none d-xxl-block">
                  <h4 className="font-size-18">Quick Transfer</h4>
                  <QuickTransferCard />
                </div>
                <h4 className="font-size-18">Recent Transaction</h4>
                <RecentTransactionCard />
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

WalletToWallet.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
};

export default withTranslation()(WalletToWallet);