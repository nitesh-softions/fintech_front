import React, { useState } from 'react';
import { CardText, Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import QuickTransferCard from '../../components/Dashboard/QuickTransferCard';
import RecentTransactionCard from '../../components/Dashboard/RecentTransactionCard';
import classnames from 'classnames'; // Import classnames
import UserProfile from './UserProfile';
import ChangePassword from './ChangePassword';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import SVGIcons from '../../components/Common/SVGIcons';
import FAQ from './FAQ';

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
                      <SVGIcons.FaUserEdit className='font-size-20'/>
                    </span>
                    <span className="d-none d-sm-block">Edit Profile</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{ cursor: "pointer" }} className={classnames({ active: customActiveTab === "2" })} onClick={() => { toggleCustom("2"); }}>
                    <span className="d-block d-sm-none">
                      <SVGIcons.LockEdit className='font-size-16'/>
                    </span>
                    <span className="d-none d-sm-block">Change Password</span>
                  </NavLink>
                </NavItem>
                  {/* <NavItem>
                    <NavLink style={{ cursor: "pointer" }} className={classnames({ active: customActiveTab === "3" })} onClick={() => { toggleCustom("3"); }}>
                      <span className="d-block d-sm-none">
                        <SVGIcons.TbAffiliateFilled className='font-size-20'/>
                      </span>
                      <span className="d-none d-sm-block">Referral Code</span>
                    </NavLink>
                  </NavItem> */}
                <NavItem>
                  <NavLink style={{ cursor: "pointer" }} className={classnames({ active: customActiveTab === "4" })} onClick={() => { toggleCustom("4"); }}>
                    <span className="d-block d-sm-none">
                      <SVGIcons.FaQuestionCircle className='font-size-20'/>
                    </span>
                    <span className="d-none d-sm-block">FAQ</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{ cursor: "pointer" }} className={classnames({ active: customActiveTab === "5" })} onClick={() => { toggleCustom("5"); }}>
                    <span className="d-block d-sm-none">
                      <SVGIcons.FaUsers className='font-size-20'/>
                    </span>
                    <span className="d-none d-sm-block">About Us</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{ cursor: "pointer" }} className={classnames({ active: customActiveTab === "6" })} onClick={() => { toggleCustom("6"); }}>
                    <span className="d-block d-sm-none">
                      <SVGIcons.ContactUsIcon className='font-size-20'/>
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
                      <UserProfile />
                    </Col>
                  </Row>
                </TabPane>

                {/* Change Password Tab */}
                <TabPane tabId="2">
                  <Row>
                    <Col sm="12">
                      <ChangePassword/>
                    </Col>
                  </Row>
                </TabPane>

                {/* Referral Code Tab */}
                {/* <TabPane tabId="3">
                  <Row>
                    <Col sm="12">
                      <CardText className="mb-0">
                        Coming Soon...
                      </CardText>
                    </Col>
                  </Row>
                </TabPane> */}

                {/* FAQ Tab */}
                <TabPane tabId="4">
                  <Row>
                    <Col sm="12">
                      <FAQ />
                    </Col>
                  </Row>
                </TabPane>

                {/* About Us Tab */}
                <TabPane tabId="5">
                  <Row>
                    <Col sm="12">
                      <AboutUs />
                    </Col>
                  </Row>
                </TabPane>

                {/* Contact Us Tab */}
                <TabPane tabId="6">
                  <Row>
                    <Col sm="12">
                      <ContactUs/>
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
