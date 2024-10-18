import PropTypes from "prop-types";
import React, { useState } from "react";
import { Col, 
  Container, 
  Row, 
  Card,
  CardBody,
  CardText,
  CardTitle,
  Nav,
  TabContent,
  NavItem,
  NavLink,
  TabPane,
 } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";

// Icons
import { IoWallet } from "react-icons/io5";
import { RxDotFilled } from "react-icons/rx";

import securePayment from "../../assets/images/secure_payment.gif";

import classnames from "classnames";



const AddMoney = props => {

  //meta title
  document.title = "Ezipay | Add Money";
  
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
            <h2 className="mb-3">Add Money</h2>
            <Card className="rounded-4 h-100 border-2">
              <CardBody>
                <Nav pills className="nav-justified">
                  <NavItem>
                    <NavLink className={classnames({ active: activeTab1 === "5" })} onClick={() => { toggle1("5"); }}>
                      <span className="d-none d-sm-block">Visa/Master AMEX Card USD(MCB)</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className={classnames({ active: activeTab1 === "6" })} onClick={() => { toggle1("6"); }}>
                      <span className="d-none d-sm-block">Mobile Money</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className={classnames({ active: activeTab1 === "7" })} onClick={() => { toggle1("7"); }}>
                      <span className="d-none d-sm-block">Nigeria-Bank Debit</span>
                    </NavLink>
                  </NavItem>
                </Nav>

                <TabContent activeTab={activeTab1} className="pt-3 text-muted">
                  <TabPane tabId="5">
                    <form>
                      <input placeholder="Enter Amount in USD (eg : 100 or eg : 0.0)" type="text" className="form-control bg-light mb-3 border-light" />
                      <div className="d-flex align-content-center gap-1">
                        <p className="font-size-11">
                          Once a new amount is entered or payment method is changed, the exchange rate and fees will be recalculated.
                        </p>
                        <button type="submit" className="btn btn-primary w-md text-center h-25"> Add Money </button>
                      </div>
                    </form>
                  </TabPane>
                  <TabPane tabId="6">
                    <form>
                      <select className="form-control bg-light mb-3 border-light">
                        <option>Select Country</option>
                        <option>India</option>
                        <option>Australia</option>
                        <option>USA</option>
                        <option>UK</option>
                      </select>
                      <div className="col d-flex">
                        <div className="col-2">
                          <select className="form-control bg-light mb-3 border-light px-1">
                            <option>+123</option>
                          </select>
                        </div>
                        <div className="col-10 d-flex">
                          <input placeholder="Enter Mobile Number" type="text" className="form-control bg-light mb-3 border-light ms-2" />
                        </div>
                      </div>
                      <input placeholder="Enter Amount in USD" type="text" className="form-control bg-light mb-3 border-light" />
                      <input placeholder="Beneficiary Name" type="text" className="form-control bg-light mb-3 border-light" />
                      <textarea placeholder="Account Descriptions" className="form-control bg-light mb-3 border-light" />
                      <div className="d-flex align-content-center gap-1">
                        <p className="font-size-11">
                          Once a new amount is entered or payment method is changed, the exchange rate and fees will be recalculated.
                        </p>
                        <button type="submit" className="btn btn-primary w-md text-center h-25"> Add Money </button>
                      </div>
                    </form>
                  </TabPane>
                  <TabPane tabId="7">
                    <form>
                      <input placeholder="Enter Amount in USD (eg : 100 or eg : 0.0)" type="text" className="form-control bg-light mb-3 border-light" />
                      <div className="d-flex align-content-center gap-1">
                        <p className="font-size-11">
                          Once a new amount is entered or payment method is changed, the exchange rate and fees will be recalculated.
                        </p>
                        <button type="submit" className="btn btn-primary w-md text-center h-25"> Add Money </button>
                      </div>
                    </form>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
          <Col className="d-flex flex-column">
            <h2 className="mb-3">Recent Transactions</h2>
            <div className="card rounded-4 h-100 border-2">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-borderless mb-0">
                    <thead>
                      <tr>
                        <th className="border-bottom text-muted opacity-75">Servicer Name</th>
                        <th className="border-bottom text-muted opacity-75">Mobile No</th>
                        <th className="border-bottom text-muted opacity-75">Amount</th>
                        <th className="border-bottom text-muted opacity-75">Transaction Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-bottom">
                        <td>Google Play</td>
                        <td>9874563210</td>
                        <td>50,000</td>
                        <td className="fw-bold text-success">Done</td>
                      </tr>
                      <tr className="border-bottom">
                        <td>Google Play</td>
                        <td>9874563210</td>
                        <td>50,000</td>
                        <td className="fw-bold text-warning">Pending</td>
                      </tr>
                      <tr className="border-bottom">
                      <td>Google Play</td>
                        <td>9874563210</td>
                        <td>50,000</td>
                        <td className="fw-bold text-success">Done</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
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
