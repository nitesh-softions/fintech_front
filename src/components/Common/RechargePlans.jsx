import React, { useState } from 'react'
import classnames from "classnames";
import { Card, CardBody, CardText, CardTitle, Col, Input, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';

const plansData = {
  "1": [
    { id: 1, price: "16.31 USD", description: "Topup Plan - 1000 INR" },
    { id: 2, price: "25.00 USD", description: "Topup Plan - 1500 INR" },
    { id: 3, price: "32.00 USD", description: "Topup Plan - 2000 INR" },
  ],
  "2": [
    { id: 4, price: "10.00 USD", description: "Data Plan - 500 MB" },
    { id: 5, price: "20.00 USD", description: "Data Plan - 1 GB" },
    { id: 6, price: "30.00 USD", description: "Data Plan - 2 GB" },
  ]
};

const RechargePlans = () => {
  const [customActiveTab, setCustomActiveTab] = useState("1");
  const [selectedPlanId, setSelectedPlanId] = useState(null); // Store the selected plan id

  const toggleCustom = (tab) => {
    if (customActiveTab !== tab) {
      setCustomActiveTab(tab);
      setSelectedPlanId(null); // Reset selection when switching tabs
    }
  };

  const handleCheckboxChange = (id) => {
    setSelectedPlanId(id); // Only allow one checkbox to be selected at a time
  };

  return (
    <div>
      <Nav tabs className="nav-tabs-custom recharge-tabs w-fit nav-justified">
        <NavItem>
          <NavLink
            style={{ cursor: "pointer" }}
            className={classnames({ active: customActiveTab === "1" })}
            onClick={() => toggleCustom("1")}
          >
            <span className="d-block d-sm-none"><i className="fas fa-home"></i></span>
            <span className="d-none d-sm-block text-nowrap">Topup Plan</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            style={{ cursor: "pointer" }}
            className={classnames({ active: customActiveTab === "2" })}
            onClick={() => toggleCustom("2")}
          >
            <span className="d-block d-sm-none"><i className="far fa-user"></i></span>
            <span className="d-none d-sm-block">Data</span>
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent activeTab={customActiveTab} className="p-3 text-muted">
        <TabPane tabId="1">
          <Row className='overflow-auto flex-nowrap thin-scrollbar g-2'>
            {plansData["1"].map(plan => (
              <Col xs="6" sm="4" md="3" xl="2" key={plan.id}>
                <label htmlFor={`checkbox-${plan.id}`}>
                  <Card className='border position-relative rounded-3'>
                    <CardBody>
                      <Input id={`checkbox-${plan.id}`} name="checkbox" type="checkbox" className='position-absolute top-0 end-0 m-2' checked={selectedPlanId === plan.id} onChange={() => handleCheckboxChange(plan.id)} />
                      <CardTitle>{plan.price}</CardTitle>
                      <CardText className="mb-0 text-muted">{plan.description}</CardText>
                    </CardBody>
                  </Card>
                </label>
              </Col>
            ))}
          </Row>
        </TabPane>

        <TabPane tabId="2">
          <Row className='overflow-auto flex-nowrap thin-scrollbar g-2'>
            {plansData["2"].map(plan => (
              <Col xs="6" sm="4" md="3" xl="2" key={plan.id}>
                <label htmlFor={`checkbox-${plan.id}`}>
                  <Card className='border position-relative rounded-3'>
                    <CardBody>
                      <Input
                        id={`checkbox-${plan.id}`}
                        name="checkbox"
                        type="checkbox"
                        className='position-absolute top-0 end-0 m-2'
                        checked={selectedPlanId === plan.id}
                        onChange={() => handleCheckboxChange(plan.id)}
                      />
                      <CardTitle>{plan.price}</CardTitle>
                      <CardText className="mb-0 text-muted">{plan.description}</CardText>
                    </CardBody>
                  </Card>
                </label>
              </Col>
            ))}
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default RechargePlans;
