import React, { useEffect, useState } from "react";
import { Col, Container, Row, Card, CardBody, Nav, TabContent, NavItem, NavLink, TabPane } from "reactstrap";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

// action
import { registerUser, apiError } from "../../store/actions";

//redux
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";

import AuthLeftBanner from "../../components/Common/AuthLeftBanner";
import bgAuthOverlay from '../../assets/images/bgAuthOverlay.svg';

import classnames from "classnames";

// Import custom SCSS
import '../../assets/scss/custom/components/authentication.scss';


const Register = props => {
  
  // const [selectedGroup, setSelectedGroup] = useState(null);
  // const handleSelectGroup = (selectedGroup) => {
  //   setSelectedGroup(selectedGroup);
  // }

  document.title = "Register | Skote - Vite React Admin & Dashboard Template";

  const dispatch = useDispatch();

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      firstName: '', // Added this
      lastName: '',  // Added this
      companyFirstName: '', // Added for company section
      companyLastName: '',
      companyPassword: '',
      companyConfirmPassword: '',
      companyAddress: '',
      tin: '',
      vat: '',
      bankName: '',
      bankCode: '',
      accountNumber: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Please Enter Your Email"),
      username: Yup.string().required("Please Enter Your Username"),
      password: Yup.string().required("Please Enter Your Password"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Please Confirm Your Password')
    }),

    onSubmit: (values) => {
      dispatch(registerUser(values));
    }
  });

  const selectAccountState = (state) => state.Account;
  const AccountProperties = createSelector(
    selectAccountState,
    (account) => ({
      user: account.user,
      registrationError: account.registrationError,
    })
  );

  const { user, registrationError } = useSelector(AccountProperties);

  useEffect(() => {
    dispatch(apiError(""));
  }, []);


  const [activeTab1, setActiveTab1] = useState("5");
  const toggle1 = (tab) => {
    if (activeTab1 !== tab) {
      setActiveTab1(tab);
    }
  };

  // State variables for each step
  const [activeStep, setActiveStep] = useState(1);
  const [stepsCompleted, setStepsCompleted] = useState({ 1: false, 2: false, 3: false });
  const [formValues, setFormValues] = useState({
    step1: '',
    step2: '',
    step3: ''
  });

  // Function to handle form submission and mark the step as completed
  const handleFormSubmit = (step) => {
    if (formValues[`step${step}`] !== '') {
      setStepsCompleted({ ...stepsCompleted, [step]: true });
      setActiveStep(step + 1);  // Move to the next step
      // console.log("hey jack:");
    } else {
      alert('Please fill out the form to proceed.');
    }
  };

  // Handle form input changes
  // const handleChange = (e) => {
  //   console.log("jack: ",e);
  //   setFormValues({ ...formValues, [e.target.name]: e.target.value });
  // };


  return (
    <React.Fragment>
      <div className="container-fluid vh-100 overflow-x-hidden">
        <div className="row h-100 justify-content-center">
          {/* Left Banner Section */}
          <AuthLeftBanner/>

          {/* Right Register Section */}
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center position-relative bg-white">
            {/* <!-- Top right corner watermark --> */}
            <div className="position-absolute top-0 end-0 text-align d-flex justify-content-end w-100">
              <img src={bgAuthOverlay} alt="Logo" className="img-fluid w-50 h-50"/>
            </div>

            {/* <!-- Register Form Container --> */}
            <div className="w-100 px-2 auth-container">
              <h3 className="text-center text-black mb-3 mt-3">Register</h3>

              <Card className="bg-transparent">
                <CardBody>
                  <Nav pills className="nav-justified px-3 gap-3 mb-3">
                    <NavItem className="border border-1 rounded">
                      <NavLink className={classnames({ active: activeTab1 === "5" })} onClick={() => { toggle1("5"); }}>
                        <span className="d-sm-block">Individual</span>
                      </NavLink>
                    </NavItem>
                    <NavItem className="border border-1 rounded">
                      <NavLink className={classnames({ active: activeTab1 === "6" })} onClick={() => { toggle1("6"); }}>
                        <span className="d-sm-block">Company</span>
                      </NavLink>
                    </NavItem>
                  </Nav>

                  <TabContent activeTab={activeTab1} className="text-black">
                    {/* Individual Section */}
                    <TabPane tabId="5">
                      <form onSubmit={validation.handleSubmit}>
                        <Row className="">
                          {/* First Name */}
                          <Col md={6}>
                            <label>First Name</label>
                            <input name="firstName" type="text" className="form-control bg-light border-light mb-3" onChange={validation.handleChange} value={validation.values.firstName}/>
                          </Col>
                          {/* Last Name */}
                          <Col md={6}>
                            <label>Last Name</label>
                            <input name="lastName" type="text" className="form-control bg-light border-light mb-3" onChange={validation.handleChange} value={validation.values.lastName}/>
                          </Col>
                        </Row>

                        {/* Email */}
                        <div className="mb-3">
                          <label>Email</label>
                          <input name="email" type="email" className="form-control bg-light border-light" onChange={validation.handleChange} value={validation.values.email}/>
                        </div>

                        <Row className="mb-3">
                          {/* Password */}
                          <Col md={6}>
                            <label>Password</label>
                            <input name="password" type="password" className="form-control bg-light border-light mb-2" onChange={validation.handleChange} value={validation.values.password}/>
                          </Col>
                          {/* Confirm Password */}
                          <Col md={6}>
                            <label>Confirm Password</label>
                            <input name="confirmPassword" type="password" className="form-control bg-light border-light mb-2" onChange={validation.handleChange} value={validation.values.confirmPassword}/>
                          </Col>
                        </Row>

                        {/* Terms and Conditions */}
                        <div className="mb-2">
                          <input type="checkbox" id="terms" className="me-2"/>
                          <label htmlFor="terms">
                            I agree to the Terms and Conditions
                          </label>
                        </div>

                        {/* Register Button */}
                        <div className="text-center">
                          <button className="btn btn-primary w-100 btn-signup" type="submit">Register</button>
                        </div>
                      </form>
                    </TabPane>
                    
                    {/* Company Section*/}
                    <TabPane tabId="6">
                      {/* <form> */}
                        {/* Stepper */}
                        <div className="stepper-wrapper">
                          <div className={`stepper-item ${activeStep === 1 ? 'active' : ''} ${stepsCompleted[1] ? 'completed' : ''}`}>
                            <div className="circle">
                              <div className={`dot ${stepsCompleted[1] ? 'filled' : ''}`}></div>
                            </div>
                          </div>
                          <div className={`stepper-item ${activeStep === 2 ? 'active' : ''} ${stepsCompleted[2] ? 'completed' : ''}`}>
                            <div className="circle">
                              <div className={`dot ${stepsCompleted[2] ? 'filled' : ''}`}></div>
                            </div>
                          </div>
                          <div className={`stepper-item ${activeStep === 3 ? 'active' : ''} ${stepsCompleted[3] ? 'completed' : ''}`}>
                            <div className="circle">
                              <div className={`dot ${stepsCompleted[3] ? 'filled' : ''}`}></div>
                            </div>
                          </div>
                        </div>

                        {/* Conditional rendering of forms based on the active step */}
                        {/* Form 1 */}
                        {
                          activeStep === 1 && (
                            <div className="form-step">
                              <form>
                                <Row className="mb-3">
                                  <Col md={6}>
                                    <label>First Name</label>
                                    <input name="companyFirstName" type="text" className="form-control bg-light border-light mb-2" onChange={validation.handleChange} value={validation.values.companyFirstName}/>
                                  </Col>
                                  <Col md={6}>
                                    <label>Last Name</label>
                                    <input name="companyLastName" type="text" className="form-control bg-light border-light mb-2" onChange={validation.handleChange} value={validation.values.companyLastName}/>
                                  </Col>
                                </Row>
                                <Row className="mb-3">
                                  <Col md={6}>
                                    <label>Mobile Number</label>
                                    <div className="col d-flex">
                                      <div className="col-4">
                                        <select className="form-control bg-light mb-3 border-light px-1">
                                          <option>+123</option>
                                        </select>
                                      </div>
                                      <div className="col-8 d-flex">
                                        <input type="text" className="form-control bg-light mb-3 border-light ms-2" />
                                      </div>
                                    </div>
                                  </Col>
                                  <Col md={6}>
                                    <label>Telephone (Optional)</label>
                                    <div className="col d-flex">
                                      <div className="col-4">
                                        <select className="form-control bg-light mb-3 border-light px-1">
                                          <option>+123</option>
                                        </select>
                                      </div>
                                      <div className="col-8 d-flex">
                                        <input type="text" className="form-control bg-light mb-3 border-light ms-2" />
                                      </div>
                                    </div>
                                  </Col>
                                </Row>
                                <Row className="mb-3">
                                  <Col md={6}>
                                    <label>Password</label>
                                    <input name="companyPassword" type="password" className="form-control bg-light border-light mb-2" onChange={validation.handleChange} value={validation.values.companyPassword}/>
                                  </Col>
                                  <Col md={6}>
                                    <label>Confirm Password</label>
                                    <input name="companyConfirmPassword" type="password" className="form-control bg-light border-light mb-2" onChange={validation.handleChange} value={validation.values.companyConfirmPassword}/>
                                  </Col>
                                </Row>
                                <div className="text-center">
                                  <button className="btn btn-primary w-100 btn-signup" type="submit" onClick={() => handleFormSubmit(1)}>Next</button>
                                </div>
                              </form>
                            </div>
                          )}
                        {/* Form 2 */}
                        {
                          activeStep === 2 && (
                            <div className="form-step">
                              <form>
                                <Row className="mb-3">
                                  <Col md={6}>
                                    <label>Corporate/Company Name</label>
                                    <input name="companyName" type="text" className="form-control bg-light border-light mb-2" onChange={validation.handleChange} value={validation.values.companyName}/>
                                  </Col>
                                  <Col md={6}>
                                    <label>Corporate/Company Address</label>
                                    <input name="companyAddress" type="text" className="form-control bg-light border-light mb-2" onChange={validation.handleChange} value={validation.values.companyAddress}/>
                                  </Col>
                                </Row>
                                <Row className="mb-3">
                                  <Col md={6}>
                                    <label>TIN</label>
                                    <input name="tin" type="text" className="form-control bg-light border-light mb-2" onChange={validation.handleChange} value={validation.values.tin}/>
                                  </Col>
                                  <Col md={6}>
                                    <label>VAT</label>
                                    <input name="vat" type="text" className="form-control bg-light border-light mb-2" onChange={validation.handleChange} value={validation.values.vat}/>
                                  </Col>
                                </Row>
                                <div className="text-center">
                                  <button className="btn btn-primary w-100 btn-signup" type="submit" onClick={() => handleFormSubmit(2)}>Next</button>
                                </div>
                              </form>
                            </div>
                          )}
                        {/* Form 3 */}
                        {
                          activeStep === 3 && (
                            <div className="form-step">
                              <form>
                                <Row className="mb-3">
                                  <Col md={6}>
                                    <label>Bank Name</label>
                                    <input name="bankName" type="text" className="form-control bg-light border-light mb-2" onChange={validation.handleChange} value={validation.values.bankName}/>
                                  </Col>
                                  <Col md={6}>
                                    <label>Bank Code</label>
                                    <input name="bankCode" type="text" className="form-control bg-light border-light mb-2" onChange={validation.handleChange} value={validation.values.bankCode}/>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col md={12}>
                                    <label>Account No</label>
                                    <input name="accountNumber" type="text" className="form-control bg-light border-light mb-5" onChange={validation.handleChange} value={validation.values.accountNumber}/>
                                  </Col>
                                </Row>
                              </form>
                              <div className="text-center">
                                  <button className="btn btn-primary w-100 btn-signup" type="submit" onClick={() => handleFormSubmit(3)}>Next</button>
                              </div>
                            </div>
                          )}
                      {/* </form> */}
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;