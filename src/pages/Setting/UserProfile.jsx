import React, { useState } from "react";
import { Row, Col, Input, Button } from "reactstrap";

import withRouter from "../../components/Common/withRouter";

import avatar1 from "../../assets/images/users/avatar-1.jpg";
import SVGIcons from "../../components/Common/SVGIcons";

const UserProfile = (props) => {
  const [avatar, setAvatar] = useState(avatar1);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatar(e.target.result); // Update avatar with new image
      };
      reader.readAsDataURL(file); // Convert file to Base64
    }
  };

  const handleEditClick = () => {
    document.getElementById('imageUpload').click(); // Trigger file input click
  };

  return (
    <div className="my-2">
      <span className="d-block d-sm-none">
        <h2 className="mb-3 font-size-18 text-secondary text-center">User Profile</h2>
      </span>
      {/* {error && error ? <Alert color="danger">{error}</Alert> : null} */}
      {/* {success ? <Alert color="success">{success}</Alert> : null} */}
      <div className="position-relative w-fit user-profile">
        <img src={avatar} alt="User Avatar" className="avatar-2xl rounded-4 shadow-lg" />
        <input type="file" id="imageUpload" accept="image/*" style={{ display: 'none' }} onChange={handleImageChange} />
        <Button className="btn btn-light position-absolute top-0 end-0 m-2 p-1 d-flex align-items-center justify-content-center" style={{ width: '20px', height: '20px' }} onClick={handleEditClick} >
          <SVGIcons.RiEdit2Fill className="font-size-11" />
        </Button>
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
