import React, { useEffect, useState } from "react";
import { Col, Container, Row, Card, CardBody, Nav, TabContent, NavItem, NavLink, TabPane } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

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
import CompanyFormStep1 from "./StepperForms/CompanyFormStep1";
import CompanyFormStep2 from "./StepperForms/CompanyFormStep2";
import CompanyFormStep3 from "./StepperForms/CompanyFormStep3";


const Register = props => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectAccountState = (state) => state.Account;
  const AccountProperties = createSelector(
    selectAccountState,
    (account) => ({
      user: account.user,
      registrationError: account.registrationError,
    })
  );

  // const { user, registrationError } = useSelector(AccountProperties);

  useEffect(() => {
    dispatch(apiError(""));
  }, []);

  // Individual/Company Tab State
  const [activeTab1, setActiveTab1] = useState("1");
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
    if(step >=3) {
      navigate('/login');
      return
    };
    // event.preventDefault();
    // if (formValues[`step${step}`] !== '') {
      setStepsCompleted({ ...stepsCompleted, [step]: true });
      setActiveStep(step + 1);  // Move to the next step
      // console.log("hey jack:", formValues[`step${step}`]);
    // } else {
    //   alert('Please fill out the form to proceed.');
    // }
  };

  // Handle form input changes
  const handleChange = (e) => {
    validation.handleChange(e); 
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };


  return (
    <React.Fragment>
      <div className="container-fluid vh-100 overflow-x-hidden">
        <div className="row h-100 justify-content-center">
          {/* Left Banner Section */}
          <AuthLeftBanner/>

          {/* Right Register Section */}
          <div className="col-lg-6 d-flex flex-column align-items-center bg-white">
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
                      <NavLink className={classnames({ active: activeTab1 === "1" })} onClick={() => { toggle1("1"); }}>
                        <span className="d-sm-block">Individual</span>
                      </NavLink>
                    </NavItem>
                    <NavItem className="border border-1 rounded">
                      <NavLink className={classnames({ active: activeTab1 === "2" })} onClick={() => { toggle1("2"); }}>
                        <span className="d-sm-block">Company</span>
                      </NavLink>
                    </NavItem>
                  </Nav>

                  <TabContent activeTab={activeTab1} className="text-black">
                    {/* Individual Section */}
                    <TabPane tabId="1">
                      <form>
                        <Row className="">
                          {/* First Name */}
                          <Col md={6}>
                            <label>First Name</label>
                            <input name="firstName" type="text" className="form-control bg-light border-light mb-3" />
                          </Col>
                          {/* Last Name */}
                          <Col md={6}>
                            <label>Last Name</label>
                            <input name="lastName" type="text" className="form-control bg-light border-light mb-3" />
                          </Col>
                        </Row>

                        {/* Email */}
                        <div className="mb-3">
                          <label>Email</label>
                          <input name="email" type="email" className="form-control bg-light border-light" />
                        </div>

                        <Row className="mb-3">
                          {/* Password */}
                          <Col md={6}>
                            <label>Password</label>
                            <input name="password" type="password" className="form-control bg-light border-light mb-2" />
                          </Col>
                          {/* Confirm Password */}
                          <Col md={6}>
                            <label>Confirm Password</label>
                            <input name="confirmPassword" type="password" className="form-control bg-light border-light mb-2" />
                          </Col>
                        </Row>

                        {/* Terms and Conditions */}
                        <div className="mb-2">
                          <input type="checkbox" id="terms" className="me-2"/>
                          <label htmlFor="terms">
                            I have read the User agreement And I accept it
                          </label>
                        </div>

                        {/* Register Button */}
                        <div className="text-center">
                          {/* <button className="btn btn-primary w-100 btn-signup" type="submit">Register</button> */}
                          <Link to={"/login"} className="btn btn-primary w-100 btn-signup" type="submit">Register</Link>
                        </div>
                      </form>
                    </TabPane>
                    
                    {/* Company Section*/}
                    <TabPane tabId="2">
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
                              <CompanyFormStep1 handleChange={handleChange} handleSubmit={handleFormSubmit}/>
                            </div>
                          )}
                        {/* Form 2 */}
                        {
                          activeStep === 2 && (
                            <div className="form-step">
                              <CompanyFormStep2 handleChange={handleChange} handleSubmit={handleFormSubmit}/>
                            </div>
                          )}
                        {/* Form 3 */}
                        {
                          activeStep === 3 && (
                            <div className="form-step">
                              <CompanyFormStep3 handleChange={handleChange} handleSubmit={handleFormSubmit}/>
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