import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { Button, Col, Container, Form, Input, Row } from "reactstrap";
import QuickTransferCard from "../../components/Dashboard/QuickTransferCard";
import RecentTransactionCard from "../../components/Dashboard/RecentTransactionCard";
import CountryCodeSelect from "../../components/Common/CountryCodeSelect";
import SVGIcons from "../../components/Common/SVGIcons";
import ReactSelect from "../../components/Common/ReactSelect";
import RechargePlans from "../../components/Common/RechargePlans";

const operators = [
  { value: 'airtel', label: 'Airtel' },
  { value: 'jio', label: 'Jio' },
  { value: 'vodafone-idea', label: 'Vodafone Idea (Vi)' },
  { value: 'bsnl', label: 'BSNL' },
  { value: 'mtnl', label: 'MTNL' }
];

const InternationalAirtime = (props) => {
  //meta title
  useEffect(() => {
    document.title = "GeoPay | International Airtime";
  }, []);

  const selectedCountry = (selectedGroup) => {
    console.log(selectedGroup);
  };

  

  return (
    <React.Fragment>
      <Container fluid className="page-content">
        <Row>
          <Col xxl={9} className="pe-lg-4">
            <h2 className="mb-4 font-size-22">International Airtime</h2>
            <Form className="mb-3">
              <Input name="" id="" placeholder="Beneficiary Name" type="text" className="form-control bg-light mb-3 border-light" />
              <div className="d-flex align-items-center gap-2">
                <CountryCodeSelect selectedCountry={selectedCountry}/>
                <Input id="" placeholder="Mobile Number" type="number" className="form-control number-input bg-light mb-3 border-light" onInput={(e) => { if (e.target.value.length > 10) { e.target.value = e.target.value.slice(0, 10); } }} />
              </div>
              <div className="mb-3">
                <ReactSelect options={operators} isMulti={false} placeholder="Select Operator"/>
              </div>
              <RechargePlans />
              <div className="d-xl-flex align-content-center justify-content-end gap-1">
                <Button type="submit" color="primary" className="w-md text-center h-25" > Proceed </Button>
              </div>
            </Form>

            <h2 className="mb-4 font-size-14">My Recharge & Bills</h2>
            <div size="lg" className="w-100 text-start mb-1 p-2 rounded-2 border g-2" >
              <label className="font-size-13 text-dark fw-semibold text-nowrap border-bottom w-100 pb-1">Jio</label>
              <div className="d-flex justify-content-between align-items-center">
                <Row className="w-100">
                  <Col xs={6} md={3}><span className="font-size-12 mb-0 text-dark fw-semibold text-nowrap">Name: <span className="text-muted fw-normal">Tejash Sharma</span></span></Col>
                  <Col xs={6} md={3}><span className="font-size-12 mb-0 text-dark fw-semibold text-nowrap">Date: <span className="text-muted fw-normal">25/10/2024</span></span></Col>
                  <Col xs={6} md={3}><span className="font-size-12 mb-0 text-dark fw-semibold text-nowrap">Mobile: <span className="text-muted fw-normal">+919874563210</span></span></Col>
                  <Col xs={6} md={3}><span className="font-size-12 mb-0 text-dark fw-semibold text-nowrap">Amount: <span className="text-muted fw-normal">16.31 USD</span></span></Col>
                </Row>
                <SVGIcons.IoMdRefresh className="bg-secondary p-1 rounded-circle font-size-18 text-white" style={{minWidth: '20px', height: '20px'}}/>
              </div>
            </div>
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
    </React.Fragment>
  );
};

InternationalAirtime.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
};

export default InternationalAirtime;
