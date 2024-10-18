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
import { TbBriefcaseFilled, TbMoneybag } from "react-icons/tb";
import { FaMobile } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { PiBankFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import BalanceCard from "../../components/Dashboard/BalanceCard";
import QuickTransferCard from "../../components/Dashboard/QuickTransferCard";
import RecentTransactionCard from "../../components/Dashboard/RecentTransactionCard";


const Dashboard = props => {
  const navigate = useNavigate();

  //meta title
  document.title = "Ezipay | Dashboard";

  const handleAddMoney = () => {
    navigate("/dashboard/add-money");
  };
  
  const handleEzipayWallet = () => {
    navigate("/dashboard/geopay-wallet");
  };

  const handleViewPayment = () => {
    navigate("/dashboard/view-payment");
  };

  const handleShowCode = () => {
    navigate("/dashboard/show-code");
  };

  const handleDirectPayCompanies = () => {
    navigate("/dashboard/direct-pay-companies");
  };

  const handleTransferToMobileMoney = () => {
    navigate("/dashboard/transfer-to-mobile-money");
  };

  const handleInternationalAirtime = () => {
    navigate("/dashboard/international-airtime");
  };

  const handleTransferMoneyToBank = () => {
    navigate("/dashboard/transfer-money-to-bank");
  };

  return (
    <Container fluid className="page-content">
      <Row>
        <Col xxl={9} className="pe-lg-4">
          <Container fluid className="p-0">
            <div className="rounded-4 overflow-hidden mb-4 w-100 shadow">
              <AutoScrollCarousel />
            </div>
          </Container>

          <Container fluid>
            <h4 className="font-size-18">Wallet Services</h4>
            <Row>
              <Col className="mt-5"><CustomButton onClick={handleAddMoney} btn_heading="Add Money" btn_icon={GoPlus} /></Col>
              <Col className="mt-5"><CustomButton onClick={handleEzipayWallet}  btn_heading="Softieons Wallet" btn_icon={IoWallet} /></Col>
              {/* <Col className="mt-5"><CustomButton onClick={handleViewPayment}  btn_heading="View Payment " btn_icon={IoWallet} /></Col> */}
              <Col className="mt-5"><CustomButton onClick={handleShowCode}  btn_heading="Show Code" btn_icon={BsQrCodeScan} /></Col>
            </Row>
          </Container>
          <Container fluid>
            <h4 className="font-size-18 mt-4">Pay Services</h4>
            <Row>
              <Col xs={6} md={3} className="mt-5"><CustomButton onClick={handleDirectPayCompanies} btn_heading="Direct Pay Company" btn_icon={TbBriefcaseFilled}/></Col>
              <Col xs={6} md={3} className="mt-5"><CustomButton onClick={handleTransferToMobileMoney} btn_heading="Transfer to Mobile Money" btn_icon={FaMobile} /></Col>
              <Col xs={6} md={3} className="mt-5"><CustomButton onClick={handleInternationalAirtime} btn_heading="International Airtime " btn_icon={BiSolidPhoneCall} /></Col>
              <Col xs={6} md={3} className="mt-5"><CustomButton onClick={handleTransferMoneyToBank} btn_heading="Transfer to Bank" btn_icon={PiBankFill} /></Col>
            </Row>
          </Container>
        </Col>
        <Col xxl={3} className="pt-4 pt-xxl-0 border-start ps-lg-4">
          <Container fluid className="p-0">
            <h4 className="font-size-18">Quick Transfer</h4>
            <QuickTransferCard />
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
