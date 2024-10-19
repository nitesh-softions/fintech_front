import PropTypes from "prop-types";
import React from "react";
import { Col, Container, Row } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";

// Icons
import { IoWallet } from "react-icons/io5";
import { RxDotFilled } from "react-icons/rx";

import securePayment from "../../assets/images/secure_payment.gif";

const transferMoneyToBank = props => {

  //meta title
  document.title = "Ezipay | Transfer To Bank ";

  return (
    <React.Fragment>
      <Container fluid className="page-content">
        <Row className="h-100">
          <Col className="d-flex flex-column">
            <h2 className="mb-3">Transfer To Bank </h2>
            <div className="card rounded-4 h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h5 className="d-md-flex justify-content-start align-items-center">
                      <div className="d-flex align-items-center mb-2 mb-md-0">
                        <span className='heading_icon bg-light'>
                          <IoWallet />
                        </span>
                        <span className="m-0 ms-2">
                          <p className="m-0 fw-semibold">BALANCE</p>
                          <p className="m-0 text-primary mt-1">11 USD</p>
                        </span>
                      </div>
                      <h5 className="d-flex justify-content-start align-items-center mb-0 ms-md-5">
                          <RxDotFilled className="border border-5 me-3 fs-4 rounded-circle bg-primary text-primary"/>
                          <p className="m-0 fw-semibold">Global Wallets</p>
                      </h5>
                  </h5>
                  <button className="btn btn-primary waves-effect waves-light btn btn-primary">Add Beneficiary Details</button>
                </div>
                
                <form className="mb-4">
                  <select name="state" id="" className="form-control form-control-lg bg-light mb-3 border-light p-3">
                    <option>Select Country</option>
                    <option>India</option>
                    <option>Australia</option>
                    <option>USA</option>
                    <option>UK</option>
                  </select>
                  <select name="state" id="" className="form-control form-control-lg bg-light mb-3 border-light p-3">
                    <option>Select Beneficiary </option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                  <input name="" id="" placeholder="Enter Amount USD" type="text" className="form-control form-control-lg bg-light mb-3 border-light p-3" />
                  <input name="" id="" placeholder="Account Descriptions" type="text" className="form-control form-control-lg bg-light mb-3 border-light p-3" />
                  <div className="d-flex justify-content-between mb-4">
                    <p className="card-text m-0 w-50"> Once a new amount is entered or payment method is changed, the exchange rate and fees will be recalculated </p>
                    <button className="btn btn-primary waves-effect waves-light btn btn-primary h-fit w-fit">
                      Submit
                    </button>
                  </div>

                </form>
                
                <div className="bg-light p-5 d-flex flex-column justify-content-center align-items-center rounded-4">
                  <img src={securePayment} height={150} alt="" />
                  <p className="m-0 fs-5 fw-medium text-dark text-center">Your Payment Details are Secured</p>
                </div>
              </div>
            </div>
          </Col>
          <Col className="d-flex flex-column">
            <h2 className="mb-3">Recent Transactions</h2>
            <div className="card rounded-4 h-100">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-borderless mb-0 table">
                    <thead>
                      <tr>
                        <th className="border-bottom">Servicer Name</th>
                        <th className="border-bottom">Mobile No</th>
                        <th className="border-bottom">Amount</th>
                        <th className="border-bottom">Transactions Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Google play</th>
                        <td>9874563210</td>
                        <td>₹ 50,000</td>
                        <td>Done </td>
                      </tr>
                      <tr>
                        <th scope="row">Google play</th>
                        <td>9874563210</td>
                        <td>₹ 50,000</td>
                        <td>Pending</td>
                      </tr>
                      <tr>
                        <th scope="row">Google play</th>
                        <td>9874563210</td>
                        <td>the ₹ 50,000</td>
                        <td>Done </td>
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

transferMoneyToBank.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
};

export default withTranslation()(transferMoneyToBank);
