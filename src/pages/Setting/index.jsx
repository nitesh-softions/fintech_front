import React, { useState } from 'react';
import { CardText, Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import QuickTransferCard from '../../components/Dashboard/QuickTransferCard';
import RecentTransactionCard from '../../components/Dashboard/RecentTransactionCard';
import classnames from 'classnames'; // Import classnames
import UserProfile from './user-profile';
import ChangePassword from './ChangePassword';
import AboutUs from './aboutUs';
import ContactUs from './contactUs';

const SettingsPage = () => {
  const [customActiveTab, setCustomActiveTab] = useState("1");

  const toggleCustom = (tab) => {
    if (customActiveTab !== tab) {
      setCustomActiveTab(tab);
    }
  };

  return (
    <React.Fragment>
      <Container fluid className="page-content">
        <Row>
          <Col xxl={9} className="pe-lg-4 d-flex flex-column justify-content-between">
            <div>
              <Nav tabs className="nav-tabs-custom nav-justified">
                <NavItem>
                  <NavLink style={{ cursor: "pointer" }} className={classnames({ active: customActiveTab === "1" })} onClick={() => { toggleCustom("1"); }}>
                    <span className="d-block d-sm-none">
                      <i className="far fa-user"></i>
                    </span>
                    <span className="d-none d-sm-block">Edit Profile</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{ cursor: "pointer" }} className={classnames({ active: customActiveTab === "2" })} onClick={() => { toggleCustom("2"); }}>
                    <span className="d-block d-sm-none">
                      <i className="fas fa-home"></i>
                    </span>
                    <span className="d-none d-sm-block">Change Password</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{ cursor: "pointer" }} className={classnames({ active: customActiveTab === "3" })} onClick={() => { toggleCustom("3"); }}>
                    <span className="d-block d-sm-none">
                      <i className="far fa-envelope"></i>
                    </span>
                    <span className="d-none d-sm-block">Referral Code</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{ cursor: "pointer" }} className={classnames({ active: customActiveTab === "4" })} onClick={() => { toggleCustom("4"); }}>
                    <span className="d-block d-sm-none">
                      <i className="fas fa-cog"></i>
                    </span>
                    <span className="d-none d-sm-block">FAQ</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{ cursor: "pointer" }} className={classnames({ active: customActiveTab === "5" })} onClick={() => { toggleCustom("5"); }}>
                    <span className="d-block d-sm-none">
                      <i className="fas fa-info-circle"></i>
                    </span>
                    <span className="d-none d-sm-block">About Us</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{ cursor: "pointer" }} className={classnames({ active: customActiveTab === "6" })} onClick={() => { toggleCustom("6"); }}>
                    <span className="d-block d-sm-none">
                      <i className="fas fa-phone"></i>
                    </span>
                    <span className="d-none d-sm-block">Contact Us</span>
                  </NavLink>
                </NavItem>
              </Nav>

              <TabContent activeTab={customActiveTab} className="py-3 text-muted">
                {/* Edit Profile Tab */}
                <TabPane tabId="1">
                  <Row>
                    <Col sm="12">
                      <CardText className="mb-0">
                        <UserProfile />
                      </CardText>
                    </Col>
                  </Row>
                </TabPane>

                {/* Change Password Tab */}
                <TabPane tabId="2">
                  <Row>
                    <Col sm="12">
                      <CardText className="mb-0">
                        <ChangePassword/>
                      </CardText>
                    </Col>
                  </Row>
                </TabPane>

                {/* Referral Code Tab */}
                <TabPane tabId="3">
                  <Row>
                    <Col sm="12">
                      <CardText className="mb-0">
                        {/* Referral Code content */}
                        Share your unique referral code with friends to earn rewards. Every successful referral helps you earn credits.
                      </CardText>
                    </Col>
                  </Row>
                </TabPane>

                {/* FAQ Tab */}
                <TabPane tabId="4">
                  <Row>
                    <Col sm="12">
                      <CardText className="mb-0">
                        {/* FAQ content */}
                        Find answers to frequently asked questions about our platform, account management, and more.
                      </CardText>
                    </Col>
                  </Row>
                </TabPane>

                {/* About Us Tab */}
                <TabPane tabId="5">
                  <Row>
                    <Col sm="12">
                      <CardText className="mb-0">
                        <AboutUs />
                      </CardText>
                    </Col>
                  </Row>
                </TabPane>

                {/* Contact Us Tab */}
                <TabPane tabId="6">
                  <Row>
                    <Col sm="12">
                      <CardText className="mb-0">
                        <ContactUs/>
                      </CardText>
                    </Col>
                  </Row>
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
}

export default SettingsPage;
