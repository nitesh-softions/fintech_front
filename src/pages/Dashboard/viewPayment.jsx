import PropTypes from "prop-types";
import React from "react";
import { Col, Container, Row } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";

// Icons
import { IoWallet } from "react-icons/io5";

import securePayment from "../../assets/images/secure_payment.gif";

const ViewPayment = props => {

  //meta title
  document.title = "Ezipay | View Payment";

  return (
    <React.Fragment>
      <div className="page-content h-100">
        <div className="bg_overlay_1"></div>
        <div className="bg_overlay_2"></div>
        <Container fluid>
          <h2 className="mb-3">View Payment Request</h2>
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
        </Container>
      </div>
    </React.Fragment>
  );
};

ViewPayment.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
};

export default withTranslation()(ViewPayment);
