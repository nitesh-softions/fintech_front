import React, { useState } from "react";
import { Col, Container, Row, Card, CardBody, Nav, TabContent, NavItem, NavLink, TabPane } from "reactstrap";

// Import Components
import AuthLeftBanner from "../../components/Common/AuthLeftBanner";
import CompanyTab from "../../components/Common/CompanyTab";
import IndividualTab from "../../components/Common/IndividualTab";


import classnames from "classnames";

// Import custom SCSS
import '../../assets/scss/custom/components/authentication.scss';



const Register = props => {
  
  // Individual/Company Tab State
  const [activeTab1, setActiveTab1] = useState("1");
  const toggle1 = (tab) => {
      if (activeTab1 !== tab) {
      setActiveTab1(tab);
      }
  };

  return (
    <React.Fragment>
      <Container fluid className="vh-100 overflow-x-hidden">
        <Row className="h-100 justify-content-center">
          {/* Left Banner Section */}
          <AuthLeftBanner/>

          {/* Right Register Section */}
          <Col lg={5} className="d-flex flex-column align-items-center bg-white">
            {/* <!-- Background Overlay --> */}
            <div className="bg_overlay_3"></div>
            <div className="bg_overlay_4"></div>

            {/* <!-- Register Form Container --> */}
            <div className="w-100 px-2 auth-container h-100 align-content-md-around">
              <h3 className="text-center text-black mb-3 mt-3">Register</h3>

              <Card className="shadow-none bg-transparent">
                <CardBody>
                  <Nav pills className="nav-justified px-3 gap-3 mb-3">
                    <NavItem className="border border-1 rounded">
                      <NavLink className={classnames({ active: activeTab1 === "1" })} onClick={() => { toggle1("1"); }}>
                        <span className="d-sm-block">Individual</span>
                      </NavLink>
                    </NavItem>
                    <NavItem className="border border-1 rounded">
                      <NavLink className={classnames({ active: activeTab1 === "2" })} onClick={() => { toggle1("2"); }}>
                        <span className="d-sm-block">Company</span>
                      </NavLink>
                    </NavItem>
                  </Nav>

                  <TabContent activeTab={activeTab1} className="text-black">
                    {/* Individual Section */}
                    <TabPane tabId="1">
                      <IndividualTab/>
                    </TabPane>
                    {/* Company Section*/}
                    <TabPane tabId="2">
                      <CompanyTab/>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Register;