import PropTypes from "prop-types";
import React from "react";
import { Badge, Button, Container, Form, Input } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";
import { IoWallet } from "react-icons/io5";
import { RxDotFilled } from "react-icons/rx";

const Transaction = props => {

  //meta title
  document.title = "Transaction";

  return (
    <React.Fragment>
      <Container fluid className="page-content">
        <h2 className="mb-3">User Statement </h2>
        <div className="card rounded-4 h-100">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start mb-4">
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
              </h5>
            </div>
            
            <div className="d-block d-md-flex align-items-center mb-4">
                <Input id="exampleDate" name="date" className="form-control bg-light w-100 mx-2 mb-2" placeholder="date placeholder" type="date" />
                <Input id="exampleDate" name="date" className="form-control bg-light w-100 mx-2 mb-2" placeholder="date placeholder" type="date" />
                <Button type="submit" color="primary" className="form-control text-nowrap w-fit mx-2 mb-2"> Download CSV </Button>
                <Button type="submit" color="primary" className="form-control text-nowrap w-fit mx-2 mb-2"> Download PDF </Button>
            </div>

            <div className="table-responsive">
                  <table className="table table-borderless mb-0 table">
                    <thead>
                      <tr>
                        <th className="border-bottom">Service Name</th>
                        <th className="border-bottom">Transaction Status</th>
                        <th className="border-bottom">Transaction ID</th>
                        <th className="border-bottom">Transfer Amount</th>
                        <th className="border-bottom">Pay-Out Currency</th>
                        <th className="border-bottom">Exchange Rate</th>
                        <th className="border-bottom">Commission Amount</th>
                        <th className="border-bottom">Time Stamp</th>
                        <th className="border-bottom">Mobile no / Account no</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Google play</th>
                        <td><Badge color="success"> Success </Badge></td>
                        <td>SDF9F874563210</td>
                        <td>₹ 50,000</td>
                        <td>INR </td>
                        <td>₹ 100</td>
                        <td>₹ 500</td>
                        <td>Sat, 24 Aug 2024 10:06:31 GMT</td>
                        <td>9855668844</td>
                      </tr>
                      <tr>
                        <th scope="row">Google play</th>
                        <td><Badge color="danger"> Failed </Badge></td>
                        <td>SDF9F874563210</td>
                        <td>₹ 50,000</td>
                        <td>INR</td>
                        <td>₹ 100</td>
                        <td>₹ 500</td>
                        <td>Sat, 24 Aug 2024 10:06:31 GMT</td>
                        <td>2254159855668844</td>
                      </tr>
                      <tr>
                        <th scope="row">Google play</th>
                        <td><Badge color="secondary"> Pending </Badge></td>
                        <td>SDF9F874563210</td>
                        <td>₹ 50,000</td>
                        <td>INR </td>
                        <td>₹ 100</td>
                        <td>₹ 500</td>
                        <td>Sat, 24 Aug 2024 10:06:31 GMT</td>
                        <td>9855668844</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

Transaction.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
};

export default withTranslation()(Transaction);
