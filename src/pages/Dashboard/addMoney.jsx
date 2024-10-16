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
      <div className="page-content">
        <div className="bg_overlay_1"></div>
        <div className="bg_overlay_2"></div>

        <Container fluid>
          <Row className="h-100">
            <Col className="d-flex flex-column">
              <h2 className="mb-3">Add money</h2>
              <div className="card rounded-4 h-100 border-2">
                <div className="card-body p-0">
                  {/* <div className="d-flex justify-content-between align-items-center mb-4">
                    <h5 className="d-flex justify-content-start align-items-center">
                        <span className='heading_icon bg-light'>
                          <IoWallet />
                        </span>
                        <span className="m-0 ms-2">
                          <p className="m-0 fw-semibold">BALANCE</p>
                          <p className="m-0 text-primary mt-1">11 USD</p>
                        </span>
                    </h5>
                    <button className="btn btn-primary waves-effect waves-light btn btn-primary">Back</button>
                  </div> */}

                  {/* <Row>
                    <Col>
                      <div className="card border rounded-4">
                          <div className="card-body">
                            <h5 className="d-flex justify-content-start align-items-center mb-0">
                                <RxDotFilled className="border border-5 me-3 fs-4 rounded-circle bg-primary text-primary"/>
                                <span className="m-0 ms-2">
                                  <p className="m-0 fs-6 text-dark">Visa/Master</p>
                                  <p className="m-0 fs-6 text-dark">AMEX Card USD(MCB)</p>
                                </span>
                            </h5>
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div className="card border rounded-4">
                          <div className="card-body">
                            <h5 className="d-flex justify-content-start align-items-center mb-0">
                                <RxDotFilled className="border border-5 me-3 fs-4 rounded-circle bg-primary text-primary"/>
                                <span className="m-0 ms-2">
                                  <p className="m-0 fs-6 text-dark">Visa/Master</p>
                                  <p className="m-0 fs-6 text-dark">AMEX Card USD(MCB)</p>
                                </span>
                            </h5>
                        </div>
                      </div>
                    </Col>
                  </Row> */}
                  {/* <Row>
                    <Col>
                      <div className="card border rounded-4">
                          <div className="card-body">
                            <h5 className="d-flex justify-content-start align-items-center mb-0">
                                <RxDotFilled className="border border-5 me-3 fs-4 rounded-circle bg-primary text-primary"/>
                                <span className="m-0 ms-2">
                                  <p className="m-0 fs-6 text-dark">Visa/Master</p>
                                  <p className="m-0 fs-6 text-dark">AMEX Card USD(MCB)</p>
                                </span>
                            </h5>
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div className="card border rounded-4">
                          <div className="card-body">
                            <h5 className="d-flex justify-content-start align-items-center mb-0">
                                <RxDotFilled className="border border-5 me-3 fs-4 rounded-circle bg-primary text-primary"/>
                                <span className="m-0 ms-2">
                                  <p className="m-0 fs-6 text-dark">Visa/Master</p>
                                  <p className="m-0 fs-6 text-dark">AMEX Card USD(MCB)</p>
                                </span>
                            </h5>
                        </div>
                      </div>
                    </Col>
                  </Row> */}
                          
                  <Col lg={12} md={12}>
                    <Card>
                      <CardBody>
                        <Nav pills className="nav-justified">
                          <NavItem>
                            <NavLink className={classnames({ active: activeTab1 === "5", })} onClick={() => { toggle1("5"); }}>
                              <span className="d-block d-sm-none"><i className="fas fa-home"></i></span>
                              <span className="d-none d-sm-block">Visa/Master AMEX Card USD(MCB)</span>
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink className={classnames({ active: activeTab1 === "6", })} onClick={() => { toggle1("6"); }}>
                              <span className="d-block d-sm-none"><i className="far fa-user"></i></span>
                              <span className="d-none d-sm-block">Mobile Money</span>
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink className={classnames({ active: activeTab1 === "7", })} onClick={() => { toggle1("7"); }}>
                              <span className="d-block d-sm-none"><i className="far fa-envelope"></i></span>
                              <span className="d-none d-sm-block">Nigeria-Bank Debit</span>
                            </NavLink>
                          </NavItem>
                        </Nav>

                        <TabContent activeTab={activeTab1} className="pt-3 text-muted">
                          <TabPane tabId="5">
                            <Row>
                              <form className="mb-4">
                                <input name="" id="" placeholder="Enter Amount in USD (eg : 100 or eg : 0.0" type="text" className="form-control bg-light mb-3 border-light" />
                                <div className="d-flex align-content-center gap-1">
                                  <p className="font-size-11">
                                    Once a new amount is entered or payment method is changed, the 
                                    exchange rate and fees will be recalculated
                                  </p>
                                  <button type="submit" className="btn btn-primary w-md text-center h-25"> Add Money </button>
                                </div>
                              </form>
                            </Row>
                          </TabPane>
                          <TabPane tabId="6">
                            <Row>
                              <form className="mb-4">
                                <select name="state" id="" className="form-control bg-light mb-3 border-light">
                                  <option>Select Country</option>
                                  <option>India</option>
                                  <option>Australia</option>
                                  <option>USA</option>
                                  <option>UK</option>
                                </select>
                                <div className="col d-flex">
                                  <div className="col-2">
                                    <select name="state" id="" className="form-control bg-light mb-3 border-light px-1">
                                      <option>+123</option>
                                    </select>
                                  </div>
                                  <div className="col-10 d-flex">
                                    <input placeholder="Enter Mobile Number" type="text" className="form-control bg-light mb-3 border-light ms-2"/>
                                  </div>
                                </div>
                                <input name="" id="" placeholder="Enter you Amount USD" type="text" className="form-control bg-light mb-3 border-light" />
                                <input name="" id="" placeholder="Beneficiary Name" type="text" className="form-control bg-light mb-3 border-light" />
                                <textarea name="" id="" placeholder="Account Descriptions" type="text" className="form-control bg-light mb-3 border-light" />
                                <div className="d-flex align-content-center gap-1">
                                  <p className="font-size-11">
                                    Once a new amount is entered or payment method is changed, the 
                                    exchange rate and fees will be recalculated
                                  </p>
                                  <button type="submit" className="btn btn-primary w-md text-center h-25"> Add Money </button>
                                </div>
                              </form>
                            </Row>
                          </TabPane>
                          <TabPane tabId="7">
                            <Row>
                            <form className="mb-4">
                                <input name="" id="" placeholder="Enter Amount in USD (eg : 100 or eg : 0.0" type="text" className="form-control bg-light mb-3 border-light" />
                                <div className="d-flex align-content-center gap-1">
                                  <p className="font-size-11">
                                    Once a new amount is entered or payment method is changed, the 
                                    exchange rate and fees will be recalculated
                                  </p>
                                  <button type="submit" className="btn btn-primary w-md text-center h-25"> Add Money </button>
                                </div>
                              </form>
                            </Row>
                          </TabPane>
                        </TabContent>
                      </CardBody>
                    </Card>
                  </Col>



                  {/* <p>
                    <a className="btn btn-primary" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
                    <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
                    <button className="btn btn-primary" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
                  </p>
                  <div className="row">
                    <div className="col">
                      <div className="collapse multi-collapse" id="multiCollapseExample1">
                        <div className="card card-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="collapse multi-collapse" id="multiCollapseExample2">
                        <div className="card card-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                      </div>
                    </div>
                  </div> */}

                  
                </div>
              </div>
            </Col>
            <Col className="d-flex flex-column">
              <h2 className="mb-3">Recent Transactions</h2>
              <div className="card rounded-4 h-100 border-2">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-borderless mb-0 table">
                      <thead>
                        <tr>
                          <th className="border-bottom text-muted opacity-75">Servicer Name</th>
                          <th className="border-bottom text-muted opacity-75">Mobile No</th>
                          <th className="border-bottom text-muted opacity-75">Amount</th>
                          <th className="border-bottom text-muted opacity-75">Transactions Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">Google play</th>
                          <td>9874563210</td>
                          <td>50,000</td>
                          <td className="fw-bold text-success">Done </td>
                        </tr>
                        <tr>
                          <th scope="row">Google play</th>
                          <td>9874563210</td>
                          <td>50,000</td>
                          <td className="fw-bold text-warning">Pending</td>
                        </tr>
                        <tr>
                          <th scope="row">Google play</th>
                          <td>9874563210</td>
                          <td>50,000</td>
                          <td className="fw-bold text-success">Done </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

AddMoney.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
};

export default withTranslation()(AddMoney);
