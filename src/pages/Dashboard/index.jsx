import PropTypes from "prop-types";
import React from "react";
import { Col, Container, Row } from "reactstrap";

//i18n
import { withTranslation } from "react-i18next";
import AutoScrollCarousel from "../../components/Common/AutoScrollCarousel";

// Icons
import CustomButton from "../../components/Common/CustomButton";
import { IoWallet } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { BsQrCodeScan } from "react-icons/bs";
import { TbBriefcaseFilled } from "react-icons/tb";
import { FaMobile } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { PiBankFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";


const Dashboard = props => {
  const navigate = useNavigate();

  //meta title
  document.title = "Ezipay | Dashboard";

  const handleAddMoney = () => {
    navigate("/dashboard/addmoney");
  };
  
  const handleEzipayWallet = () => {
    navigate("/dashboard/ezipaywallet");
  };

  const handleViewPayment = () => {
    navigate("/dashboard/viewpayment");
  };

  const handleShowCode = () => {
    navigate("/dashboard/showcode");
  };

  const handleDirectPayCompanies = () => {
    navigate("/dashboard/directpaycompanies");
  };

  const handleTransferToMobileMoney = () => {
    navigate("/dashboard/transfertomobilemoney");
  };

  const handleInternationalAirtime = () => {
    navigate("/dashboard/internationalairtime");
  };

  const handleTransferMoneyToBank = () => {
    navigate("/dashboard/transfermoneytobank");
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="bg_overlay_1"></div>
        <div className="bg_overlay_2"></div>
        <Container fluid className="dashboard-carousel mb-4 border shadow p-0">
          <AutoScrollCarousel />
        </Container>
        <Container fluid>
          <h4 className="mb-3 font-size-18">Wallet Services</h4>
          <Row>
            <Col><CustomButton onClick={handleAddMoney} btn_heading="Add Money" btn_icon={IoWallet} btn_bottom_icon={GoPlus }/></Col>
            <Col><CustomButton onClick={handleEzipayWallet}  btn_heading="Ezipay Wallet" btn_icon={IoWallet} /></Col>
            <Col><CustomButton onClick={handleViewPayment}  btn_heading="View Payment " btn_icon={IoWallet} /></Col>
            <Col><CustomButton onClick={handleShowCode}  btn_heading="Show Code" btn_icon={BsQrCodeScan} /></Col>
          </Row>
        </Container>
        <Container fluid>
          <h4 className="mb-3 font-size-18">Pay Services</h4>
          <Row>
            <Col><CustomButton onClick={handleDirectPayCompanies} btn_heading="Direct Pay Company" btn_icon={TbBriefcaseFilled}/></Col>
            <Col><CustomButton onClick={handleTransferToMobileMoney} btn_heading="Transfer to Mobile Money" btn_icon={FaMobile} /></Col>
            <Col><CustomButton onClick={handleInternationalAirtime} btn_heading="International Airtime " btn_icon={BiSolidPhoneCall} /></Col>
            <Col><CustomButton onClick={handleTransferMoneyToBank} btn_heading="Transfer to Bank" btn_icon={PiBankFill} /></Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

Dashboard.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
};

export default withTranslation()(Dashboard);
