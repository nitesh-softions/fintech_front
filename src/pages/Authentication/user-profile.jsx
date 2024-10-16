import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Alert, CardBody, Button, Label, Input, FormFeedback, Form, } from "reactstrap";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

//redux
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";

import withRouter from "../../components/Common/withRouter";

//Import Breadcrumb
import Breadcrumb from "../../components/Common/Breadcrumb";

import avatar from "../../assets/images/users/avatar-1.jpg";
import cover from "../../assets/images/users/cover.png";
import { IoLocationSharp } from "react-icons/io5";

const UserProfile = (props) => {

  //meta title
  document.title = "Profile | Skote - React Admin & Dashboard Template";

  const dispatch = useDispatch();

  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [idx, setidx] = useState(1);

  useEffect(() => {
    if (localStorage.getItem("authUser")) {
      const obj = JSON.parse(localStorage.getItem("authUser"));
      if (import.meta.env.VITE_APP_DEFAULTAUTH === "firebase") {
        setname(obj.displayName);
        setemail(obj.email);
        setidx(obj.uid);
      } else if (
        import.meta.env.VITE_APP_DEFAULTAUTH === "fake" ||
        import.meta.env.VITE_APP_DEFAULTAUTH === "jwt"
      ) {
        setname(obj.username);
        setemail(obj.email);
        setidx(obj.uid);
      }
      // setTimeout(() => {
      //   dispatch(resetProfileFlag());
      // }, 3000);
    }
  }, [dispatch]);

  // const validation = useFormik({
  //   // enableReinitialize : use this flag when initial values needs to be changed
  //   enableReinitialize: true,

  //   initialValues: {
  //     username: name || '',
  //     idx: idx || '',
  //   },
  //   validationSchema: Yup.object({
  //     username: Yup.string().required("Please Enter Your UserName"),
  //   }),
  //   onSubmit: (values) => {
  //     console.log('editProfile(values)');
  //   }
  // });

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumb title="Skote" breadcrumbItem="Profile" />

          <Row>
            <Col lg="12">
              {/* {error && error ? <Alert color="danger">{error}</Alert> : null} */}
              {/* {success ? <Alert color="success">{success}</Alert> : null} */}

              <Card className="rounded-4">
                <CardBody>
                  <div className="position-relative z-0">
                    <img src={cover} alt="" className="w-100 rounded-4 shadow object-fit-cover" style={{height:'200px'}}/>
                    <button type="button" className="btn btn-dark shadow-lg w-fit position-absolute end-0 top-0 m-3">Upload Cover</button>
                  </div>
                  <div className="ms-4 ms-md-5 me-4">
                    <div className="d-flex">
                      <div>
                        <img src={avatar} alt="" className="avatar-2xl rounded-4 shadow-lg position-relative z-1" />
                        <div className="d-flex justify-content-between">
                          <button type="button" className="btn btn-link fw-medium p-0 p-md-2"><span className="small d-md-none">Change</span><span className="d-none d-md-block">Change</span></button>
                          <button type="button" className="btn btn-link fw-medium p-0 p-md-2"><span className="small d-md-none">Delete</span><span className="d-none d-md-block">Delete</span></button>
                        </div>
                      </div>
                      <div className="flex-grow-1 align-self-center">
                        <div className="text-dark ms-4">
                          <h5 className="text-capitalize">{name}</h5>
                          <p className="mb-1 text-capitalize"><IoLocationSharp className="text-primary"/>Surat, gujarat</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Row>
                        <Col xs={12} md={4}>
                          <h5 className="pb-3 mb-3 border-bottom">First Name : <span className="text-muted fw-normal">Tejas</span></h5>
                        </Col>
                        <Col xs={12} md={4}>
                          <h5 className="pb-3 mb-3 border-bottom">Last Name : <span className="text-muted fw-normal">Kaklotar</span></h5>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12} md={4}>
                          <h5 className="pb-3 mb-3 border-bottom">Email : <span className="text-muted fw-normal">priiteshsalla@gmail.com</span></h5>
                        </Col>
                        <Col xs={12} md={4}>
                          <h5 className="pb-3 mb-3 border-bottom">Mobile No : <span className="text-muted fw-normal">987-456-3210</span></h5>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12} md={4}>
                          <h5 className="pb-3 mb-3 border-bottom">Email ID Status : <span className="text-success fw-normal">Verified</span></h5>
                        </Col>
                        <Col xs={12} md={4}>
                          <h5 className="pb-3 mb-3 border-bottom">Last Name : <span className="text-success fw-normal">Verified</span></h5>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12} md={8}>
                          <h5 className="pb-3 mb-3">Daily Withdrawal Limit : <span className="text-muted fw-normal">30000 USD</span></h5>
                        </Col>
                      </Row>
                    </div>
                    {/* <Form className="form-horizontal mt-4" onSubmit={(e) => { e.preventDefault(); validation.handleSubmit(); return false; }} >
                      <div className="form-group">
                        <Label className="form-label">User Name</Label>
                        <Input name="username" className="form-control" placeholder="Enter User Name" type="text" onChange={validation.handleChange} onBlur={validation.handleBlur} value={validation.values.username || ""} invalid={ validation.touched.username && validation.errors.username ? true : false } />
                        {validation.touched.username && validation.errors.username ? (
                          <FormFeedback type="invalid">{validation.errors.username}</FormFeedback>
                        ) : null}
                        <Input name="idx" value={idx} type="hidden" />
                      </div>
                      <div className="text-center mt-4">
                        <Button type="submit" color="danger">
                          Update User Name
                        </Button>
                      </div>
                    </Form> */}
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withRouter(UserProfile);
