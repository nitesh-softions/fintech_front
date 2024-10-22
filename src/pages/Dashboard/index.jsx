import PropTypes from "prop-types";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import qrCode from "../../assets/images/qr_code.png";

//i18n
import { withTranslation } from "react-i18next";
import AutoScrollCarousel from "../../components/Common/AutoScrollCarousel";

// Icons
import SVGIcons from "../../components/Common/SVGIcons";

import CustomButton from "../../components/Common/CustomButton";
import { useNavigate } from "react-router-dom";
import QuickTransferCard from "../../components/Dashboard/QuickTransferCard";
import RecentTransactionCard from "../../components/Dashboard/RecentTransactionCard";


const Dashboard = props => {
  const navigate = useNavigate();

  //meta title
  document.title = "GeoPay | Dashboard";

  const handleAddMoney = () => {
    navigate("/dashboard/add-money");
  };
  
  const handleGeopayWallet = () => {
    navigate("/dashboard/wallet-to-wallet");
  };

  // const handleDirectPayCompanies = () => {
  //   navigate("/dashboard/direct-pay-companies");
  // };

  const handleTransferToMobileMoney = () => {
    navigate("/dashboard/transfer-to-mobile-money");
  };

  const handleInternationalAirtime = () => {
    navigate("/dashboard/international-airtime");
  };

  const handleTransferMoneyToBank = () => {
    navigate("/dashboard/transfer-to-mobile-money");
  };

  return (
    <Container fluid className="page-content">
      <Row>
        <Col xxl={9} className="pe-lg-4 d-flex flex-column justify-content-between">
          <Container fluid className="p-0">
            <div className="rounded-4 overflow-hidden mb-4 w-100 shadow">
              <AutoScrollCarousel />
            </div>
          </Container>
    
          <Row>
            <Col md={8} className="order-1 order-md-0 pe-lg-5">
              <Container fluid>
                <h4 className="font-size-18">Wallet Services</h4>
                <Row className="gap-3 gap-md-0">
                  <Col md={4}><CustomButton onClick={handleAddMoney} btn_heading="Add Money" btn_icon={SVGIcons.AddCircle} /></Col>
                  <Col md={4}><CustomButton onClick={handleGeopayWallet}  btn_heading="Wallet to Wallet" btn_icon={SVGIcons.LinedWallet} /></Col>
                  {/* <Col className="mt-5"><CustomButton onClick={handleViewPayment}  btn_heading="View Payment " btn_icon={IoWallet} /></Col> */}
                  {/* <Col className="mt-5"><CustomButton onClick={handleShowCode}  btn_heading="Show Code" btn_icon={BsQrCodeScan} /></Col> */}
                </Row>
              </Container>
              <Container fluid>
                <h4 className="font-size-18 mt-4">Pay Services</h4>
                <Row className="gap-3 gap-md-0">
                  {/* <Col md={4}><CustomButton onClick={handleDirectPayCompanies} btn_heading="Direct Pay Company" btn_icon={TbBriefcaseFilled}/></Col> */}
                  <Col md={4}><CustomButton onClick={handleTransferToMobileMoney} btn_heading="Transfer to Mobile Money" btn_icon={SVGIcons.HandHoldingDollar} /></Col>
                  <Col md={4}><CustomButton onClick={handleInternationalAirtime} btn_heading="International Airtime " btn_icon={SVGIcons.TfiWorld} /></Col>
                  <Col xs={4}><CustomButton onClick={handleTransferMoneyToBank} btn_heading="Transfer to Bank" btn_icon={SVGIcons.PiBankLight  } /></Col>
                </Row>
              </Container>
            </Col>
            <Col md={4} className="order-0 order-md-1 border-start border-dark border-opacity-25 qr-column">
              <div className="d-flex flex-column justify-content-start align-items-center rounded-4 h-100">
                <h4 className="font-size-20 mb-4 text-dark fw-semibold">Scan QR Code</h4>
                <h4 className="font-size-14 text-uppercase text-dark fw-semibold">To Pay Pritesh Salla</h4>
                <p className="mb-0 text-secondary font-size-12">Share your GeoPay QR Code to receive payments</p>
                <img src={qrCode} className="w-100" alt="" />
              </div>
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
  );
};

Dashboard.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
};

export default withTranslation()(Dashboard);
