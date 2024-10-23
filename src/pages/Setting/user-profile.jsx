import React from "react";
import { Container, Row, Col, Card, CardBody, Input, Button } from "reactstrap";

import withRouter from "../../components/Common/withRouter";

import avatar from "../../assets/images/users/avatar-1.jpg";

const UserProfile = (props) => {

  return (
    <div className="my-2">
      {/* {error && error ? <Alert color="danger">{error}</Alert> : null} */}
      {/* {success ? <Alert color="success">{success}</Alert> : null} */}
      <div className="position-relative w-fit user-profile">
        <img src={avatar} alt="" className="avatar-2xl rounded-4 shadow-lg" />
        <label className="position-absolute top-0 end-0 m-2">edit</label>
      </div>
      <div className="mt-4">
        <Row>
          <Col xs={12} lg={8}>
            <Row>
              <Col xs={12} md={6}>
                <label htmlFor="first_name">First Name</label>
                <Input placeholder="Enter First Name" type="text" id="first_name" className="form-control bg-light mb-3 border-light" />
              </Col>
              <Col xs={12} md={6}>
                <label htmlFor="last_name">Last Name</label>
                <Input placeholder="Enter Last Name" type="text" id="last_name" className="form-control bg-light mb-3 border-light" />
              </Col>
              <Col xs={12} md={6}>
                <label htmlFor="email">Email Address</label>
                <div className="position-relative">
                  <Input placeholder="Enter Email Address" type="email" id="email" className="form-control bg-light mb-3 border-light" />
                  <label className="position-absolute font-size-11 top-50 end-0 translate-middle-y text-success fw-light me-3"> verified </label>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <label htmlFor="kyc">KYC</label>
                <div className="position-relative">
                  <Input type="text" id="kyc" className="form-control bg-light mb-3 border-light" />
                  <label className="position-absolute font-size-11 top-50 end-0 translate-middle-y text-success fw-light me-3"> verified </label>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <label htmlFor="mobile_number">Mobile No.</label>
                <div className="position-relative">
                  <Input type="number" placeholder="Enter Mobile No." id="mobile_number" className="form-control bg-light mb-3 border-light mobile-number-element" />
                  <label className="position-absolute font-size-11 top-50 end-0 translate-middle-y text-success fw-light me-3"> verified </label>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <label htmlFor="withdrawal_limit">Daily Withdraw Limit</label>
                <div className="position-relative">
                  <Input type="number" placeholder="Enter Daily Withdraw Limit" id="withdrawal_limit" className="form-control bg-light mb-3 border-light mobile-number-element" />
                  <label className="position-absolute font-size-11 top-50 end-0 translate-middle-y text-success fw-light me-3"> verified </label>
                </div>
              </Col>
              <Col xs={12} className="d-flex align-content-center gap-3 mt-3">
                <Button type="submit" className='text-nowrap px-4 text-secondary' color="light"> Cancel </Button>
                <Button type="submit" className='text-nowrap px-4' color="secondary"> Save </Button>
              </Col>
            </Row>
          </Col>
          <Col xs={12} lg={4}></Col>
        </Row>
      </div>
    </div>
  );
};

export default withRouter(UserProfile);
