import React from "react";
import { Row, Col, Input, Button } from "reactstrap";

import withRouter from "../../components/Common/withRouter";

import avatar from "../../assets/images/users/avatar-1.jpg";

const ChangePassword = (props) => {

  return (
    <div className="my-2">
      <span className="d-block d-sm-none">
        <h2 className="mb-3 font-size-18 text-secondary text-center">Change Password</h2>
      </span>
      {/* {error && error ? <Alert color="danger">{error}</Alert> : null} */}
      {/* {success ? <Alert color="success">{success}</Alert> : null} */}
      <div className="mt-3">
        <Row>
          <Col xs={12} lg={8}>
            <Row>
              <Col xs={12}>
                <label htmlFor="old_pass">Old Password</label>
                <Input placeholder="Enter Old Password" type="text" id="old_pass" className="form-control bg-light mb-3 border-light" />
              </Col>
              <Col xs={12}>
                <label htmlFor="new_pass">New Password</label>
                <Input placeholder="Enter New Password" type="text" id="new_pass" className="form-control bg-light mb-3 border-light" />
              </Col>
              <Col xs={12}>
                <label htmlFor="re_enter_pass">Re Enter Password</label>
                <Input placeholder="Confirm Password" type="text" id="re_enter_pass" className="form-control bg-light mb-3 border-light" />
              </Col>
              
              <Col xs={12} className="d-flex align-content-center gap-3 mt-3">
                <Button type="submit" className='text-nowrap px-4 text-secondary' color="light"> Cancel </Button>
                <Button type="submit" className='text-nowrap px-4' color="secondary"> Update </Button>
              </Col>
            </Row>
          </Col>
          <Col xs={12} lg={4}></Col>
        </Row>
      </div>
    </div>
  );
};

export default withRouter(ChangePassword);
