import PropTypes from "prop-types";
import React, { useState } from "react";
import { Col, Container, Row, Nav, TabContent, NavItem, NavLink, TabPane, } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";

import QuickTransferCard from "../../components/Dashboard/QuickTransferCard";
import RecentTransactionCard from "../../components/Dashboard/RecentTransactionCard";

import classnames from "classnames";;
import AddMcb from "../../components/Common/forms/add_money/AddMcb";
import AddMobileMoney from "../../components/Common/forms/add_money/AddMobileMoney";
import AddNigeriaBank from "../../components/Common/forms/add_money/AddNigeriaBank";

const AddMoney = props => {
  //meta title
  document.title = "GeoPay | Add Money";
  
  // Add Money
  const [activeTab1, setActiveTab1] = useState("5");
  const toggle1 = (tab) => {
    if (activeTab1 !== tab) {
      setActiveTab1(tab);
    }
  };

  return (
    <React.Fragment>
      <Container fluid className="page-content">
        <Row className="h-100">
          <Col className="d-flex flex-column">
            <h2 className="mb-4 font-size-22">Add Money</h2>
            <div className="mb-3">
              <Nav pills className="nav-justified d-grid d-md-flex gap-2 bg-secondary-subtle p-1 rounded">
                <NavItem>
                  <NavLink className={classnames({ active: activeTab1 === "5" })} onClick={() => { toggle1("5"); }}>
                    <span>Visa/Master AMEX Card USD(MCB)</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className={classnames({ active: activeTab1 === "6" })} onClick={() => { toggle1("6"); }}>
                    <span>Mobile Money</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className={classnames({ active: activeTab1 === "7" })} onClick={() => { toggle1("7"); }}>
                    <span>Nigeria-Bank Debit</span>
                  </NavLink>
                </NavItem>
              </Nav>

              <TabContent activeTab={activeTab1} className="pt-3 text-muted">
                <TabPane tabId="5">
                  <AddMcb />
                </TabPane>
                <TabPane tabId="6">
                  <AddMobileMoney />
                </TabPane>
                <TabPane tabId="7">
                  <AddNigeriaBank />
                </TabPane>
              </TabContent>
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

AddMoney.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
};

export default withTranslation()(AddMoney);
