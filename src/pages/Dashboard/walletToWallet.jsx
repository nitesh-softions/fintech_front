import PropTypes from "prop-types";
import React, { useState } from "react";
import { Col, Container, Row, Button, Input, Form } from "reactstrap";

//i18n
import { withTranslation } from "react-i18next";

// Icons
import QuickTransferCard from "../../components/Dashboard/QuickTransferCard";
import RecentTransactionCard from "../../components/Dashboard/RecentTransactionCard";
import CountrySelect from "../../components/Common/CountrySelect";

const WalletToWallet = props => {
  //meta title
  document.title = "GeoPay | Dashboard";

  const [selectedState, setSelectedState] = useState("");
  const [amount, setAmount] = useState("");
  const selectedCountry = (selectedGroup) => {
    console.log('selectedGroup', selectedGroup);
    setSelectedState(selectedGroup.code)
  }


  return (
    <React.Fragment>
      <div className="page-content h-100">
        {/* <div className="bg_overlay_1"></div>
        <div className="bg_overlay_2"></div> */}
        <Container fluid className="h-100">
          <Row className="h-100">
            <Col xxl={9} className="pe-lg-4">     
              <h2 className="mb-4 font-size-22">Wallet to Wallet</h2>
              <Form>
                <CountrySelect selectedCountry={selectedCountry}/>
                <div className="d-flex">
                    <Input placeholder="Country Code" type="text" value={selectedState} className="form-control bg-light mb-3 border-light w-fit" disabled/>
                    <Input placeholder="Enter Mobile Number" type="text" className="form-control bg-light mb-3 border-light ms-2" />
                </div>
                <Input placeholder="Enter Amount in USD" type="text" value={amount} onChange={(e) => setAmount(e.target.value)} className={`form-control bg-light border-light ${amount <= 0 ? "mb-3" : "mb-1"}`} />
                <div size="lg" className={`w-100 text-start mb-3 p-2 rounded-2 border g-2 ${amount <= 0 ? "d-none" : ""}`} >
                  <div className="d-flex justify-content-between align-items-center">
                    <Row className="w-100">
                      <Col xs={6} md={4}><span className="font-size-12 mb-0 text-dark fw-semibold text-nowrap">Fee(USD) <div className="text-muted fw-normal">0</div></span></Col>
                      <Col xs={6} md={4}><span className="font-size-12 mb-0 text-dark fw-semibold text-nowrap">Net Amount In USD <div className="text-muted fw-normal">100</div></span></Col>
                      <Col xs={6} md={4}><span className="font-size-12 mb-0 text-dark fw-semibold text-nowrap">Debit In (XOF) <div className="text-muted fw-normal">65,500</div></span></Col>
                    </Row>
                  </div>
                </div>
                <Input placeholder="Beneficiary Name" type="text" className="form-control bg-light mb-3 border-light" />
                <textarea placeholder="Account Description" className="form-control bg-light mb-3 border-light" />
                <div className="d-flex align-content-center justify-content-between gap-1">
                  <p className="font-size-11 pe-xl-5">
                    Once a new amount is entered or payment method is changed, the exchange rate and fees will be recalculated.
                  </p>
                  <Button type="submit" className='text-nowrap' color="primary"> Add Money </Button>
                </div>
            </Form>
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

export default withTranslation()(WalletToWallet);