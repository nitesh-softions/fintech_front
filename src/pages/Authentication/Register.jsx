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
  const handleFormSubmit = (step, values) => {
    setFormValues({ ...formValues, [`step${step}`]: values });

    // Check if all required fields in the current step are valid
    if (values) {
      setStepsCompleted({ ...stepsCompleted, [step]: true });
      if (step < 3) {
        setActiveStep(step + 1); // Move to next step
      } else {
        // Final step - submit the full form data
        // console.log('All steps completed:', formValues);
        navigate('/login');  // Redirect to login after successful completion
      }
    } else {
      alert('Please fill out the form to proceed.');
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    formik.handleChange(e); 
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };


    // Formik validation schema for Individual form
    const individualValidationSchema = Yup.object().shape({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], "Passwords must match")
        .required("Confirm password is required"),
      terms: Yup.boolean().oneOf([true], "You must accept the terms and conditions")
    });
  
    // Formik setup for Individual form
    const formik = useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        terms: false
      },
      validationSchema: individualValidationSchema,
      onSubmit: values => {
        navigate("/login"); // Redirect after form submission
      }
    });




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
                      <form onSubmit={formik.handleSubmit}>
                        <Row>
                          {/* First Name */}
                          <Col md={6}>
                            <label>First Name</label>
                            <input 
                              name="firstName" 
                              type="text" 
                              className={`form-control bg-light border-light mb-3 ${formik.errors.firstName && formik.touched.firstName ? 'is-invalid' : ''}`} 
                              onChange={formik.handleChange} 
                              value={formik.values.firstName}
                            />
                            {formik.errors.firstName && formik.touched.firstName ? (
                              <div className="invalid-feedback">{formik.errors.firstName}</div>
                            ) : null}
                          </Col>
                          {/* Last Name */}
                          <Col md={6}>
                            <label>Last Name</label>
                            <input 
                              name="lastName" 
                              type="text" 
                              className={`form-control bg-light border-light mb-3 ${formik.errors.lastName && formik.touched.lastName ? 'is-invalid' : ''}`} 
                              onChange={formik.handleChange} 
                              value={formik.values.lastName}
                            />
                            {formik.errors.lastName && formik.touched.lastName ? (
                              <div className="invalid-feedback">{formik.errors.lastName}</div>
                            ) : null}
                          </Col>
                        </Row>

                        {/* Email */}
                        <div className="mb-3">
                          <label>Email</label>
                          <input 
                            name="email" 
                            type="email" 
                            className={`form-control bg-light border-light ${formik.errors.email && formik.touched.email ? 'is-invalid' : ''}`} 
                            onChange={formik.handleChange} 
                            value={formik.values.email}
                          />
                          {formik.errors.email && formik.touched.email ? (
                            <div className="invalid-feedback">{formik.errors.email}</div>
                          ) : null}
                        </div>

                        <Row className="mb-3">
                          {/* Password */}
                          <Col md={6}>
                            <label>Password</label>
                            <input 
                              name="password" 
                              type="password" 
                              className={`form-control bg-light border-light mb-2 ${formik.errors.password && formik.touched.password ? 'is-invalid' : ''}`} 
                              onChange={formik.handleChange} 
                              value={formik.values.password}
                            />
                            {formik.errors.password && formik.touched.password ? (
                              <div className="invalid-feedback">{formik.errors.password}</div>
                            ) : null}
                          </Col>
                          {/* Confirm Password */}
                          <Col md={6}>
                            <label>Confirm Password</label>
                            <input 
                              name="confirmPassword" 
                              type="password" 
                              className={`form-control bg-light border-light mb-2 ${formik.errors.confirmPassword && formik.touched.confirmPassword ? 'is-invalid' : ''}`} 
                              onChange={formik.handleChange} 
                              value={formik.values.confirmPassword}
                            />
                            {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
                              <div className="invalid-feedback">{formik.errors.confirmPassword}</div>
                            ) : null}
                          </Col>
                        </Row>

                        {/* Terms and Conditions */}
                        <div className="mb-2">
                          <input 
                            type="checkbox" 
                            id="terms" 
                            className="me-2" 
                            name="terms"
                            onChange={formik.handleChange} 
                            value={formik.values.terms}
                          />
                          <label htmlFor="terms">I have read the User agreement and I accept it</label>
                          {formik.errors.terms && formik.touched.terms ? (
                            <div className="text-danger">{formik.errors.terms}</div>
                          ) : null}
                        </div>

                        {/* Register Button */}
                        <div className="text-center">
                          <button className="btn btn-primary w-100 btn-signup" type="submit">Register</button>
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
                                <CompanyFormStep1 handleSubmit={(values) => handleFormSubmit(1, values)} />
                            </div>
                          )}
                        {/* Form 2 */}
                        {
                          activeStep === 2 && (
                            <div className="form-step">
                                 <CompanyFormStep2 handleSubmit={(values) => handleFormSubmit(2, values)} />
                            </div>
                          )}
                        {/* Form 3 */}
                        {
                          activeStep === 3 && (
                            <div className="form-step">
                               <CompanyFormStep3 handleSubmit={(values) => handleFormSubmit(3, values)} />
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