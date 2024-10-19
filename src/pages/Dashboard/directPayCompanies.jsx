import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Select from "react-select";

const optionGroup = [
  {
    label: "Picnic",
    options: [
      { label: "Mustard", value: "Mustard" },
      { label: "Ketchup", value: "Ketchup" },
      { label: "Relish", value: "Relish" },
    ],
  },
];

const DirectPayCompanies = (props) => {
  const [selectedGroup, setSelectedGroup] = useState(null);

  //meta title
  useEffect(() => {
    document.title = "Softieons | Dashboard";
  }, []);

  const handleSelectGroup = (selectedGroup) => {
    setSelectedGroup(selectedGroup);
  };

  return (
    <React.Fragment>
      <Container fluid className="page-content">
        <Row className="h-100">
          <Col className="d-flex flex-column">
            <div className="card rounded-4 h-100 border-1">
              <div className="card-body">
                <form className="mb-4">
                  <Select value={selectedGroup} onChange={handleSelectGroup} options={optionGroup} className="bg-light mb-3 rounded-3" placeholder="Select Direct Company Pay" />
                  <input name="" id="" placeholder="Enter Amount  in USD (eg : 100  or eg : 0.0 )" type="text" className="form-control bg-light mb-3 border-light" />
                  <input name="" id="" placeholder="Beneficiary Name" type="text" className="form-control bg-light mb-3 border-light" />
                  <textarea name="" id="" placeholder="Account Descriptions" className="form-control bg-light mb-3 border-light" />
                  <div className="d-xl-flex align-content-center justify-content-between gap-1">
                    <p className="font-size-11 pe-xl-5"> Once a new amount is entered or payment method is changed, the exchange rate and fees will be recalculated. </p>
                    <button type="submit" className="btn btn-primary w-md text-center h-25" > Add Money </button>
                  </div>
                </form>
              </div>
            </div>
          </Col>
          <Col className="d-flex flex-column">
            <div className="card rounded-4 h-100 border-1">
              <div className="card-body">
                <h4 className="font-size-18">Recent Transactions</h4>
                <div className="table-responsive">
                  <table className="table table-borderless mb-0">
                    <thead>
                      <tr>
                        <th className="border-bottom text-muted opacity-75"> Servicer Name </th>
                        <th className="border-bottom text-muted opacity-75"> Mobile No </th>
                        <th className="border-bottom text-muted opacity-75"> Amount </th>
                        <th className="border-bottom text-muted opacity-75"> Transaction Status </th>
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

DirectPayCompanies.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
};

export default DirectPayCompanies;

