import React, { useEffect, useState } from "react";
import { Col, Container, Row, Card, CardBody, Nav, TabContent, NavItem, NavLink, TabPane, Form, Input, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import ReactSelect from "../../components/Common/ReactSelect";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

// action
import { registerUser, apiError } from "../../store/actions";

//redux
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";

// Import Images
import AuthLeftBanner from "../../components/Common/AuthLeftBanner";
import bgAuthOverlay from '../../assets/images/bg_overlay/bg-auth-overlay.svg';

import classnames from "classnames";

// Import custom SCSS
import '../../assets/scss/custom/components/authentication.scss';
import CompanyFormStep1 from "./StepperForms/CompanyFormStep1";
import CompanyFormStep2 from "./StepperForms/CompanyFormStep2";
import CompanyFormStep3 from "./StepperForms/CompanyFormStep3";


const selectOptions = [
  { value: 'india', label: 'India' },
  { value: 'usa', label: 'USA' },
  { value: 'canada', label: 'Canada' },
  { value: 'brazil', label: 'Brazil' },
  { value: 'UK', label: 'UK' }
];

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
    step1: {},
    step2: {},
    step3: {}
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
        navigate('/login');  // Redirect to login after successful completion
      }
    } else {
      alert('Please fill out the form to proceed.');
    }
  };

  // Function to go back to the previous step
  const handlePrev = (step) => {
    if (step > 1) {
      setActiveStep(step - 1);
      // Mark the current step as incomplete when going back
      // setStepsCompleted((prev) => ({ ...prev, [step]: false }));
      setStepsCompleted({ ...stepsCompleted, [step-1]: false });
    }
  };


  // Handle form input changes
  const handleChange = (step, e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [`step${step}`]: {
        ...prevValues[`step${step}`],
        [name]: value,
      },
    }));
  };


  // Formik validation schema for Individual form
  const individualValidationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    pincode: Yup.string().required("Pin Code is required"),
    mobile: Yup.string().required("Mobile Number is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], "Passwords must match")
      .required("Confirm password is required"),
    terms: Yup.boolean().oneOf([true], "*")
  });

  // Formik setup for Individual form
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      pincode: '',
      mobile: '',
      password: '',
      confirmPassword: '',
      terms: false
    },
    validationSchema: individualValidationSchema,
    onSubmit: values => {
      navigate("/login"); // Redirect after form submission
    }
  });


  // Logs the selected country to the console
  const selectedCountry = (selectedOption) => {
    console.log(selectedOption);
  }


  return (
    <React.Fragment>
      <div className="container-fluid vh-100 overflow-x-hidden">
        <div className="row h-100 justify-content-center">
          {/* Left Banner Section */}
          <AuthLeftBanner/>

          {/* Right Register Section */}
          <div className="col-lg-5 d-flex flex-column align-items-center bg-white">
            {/* <!-- Top right corner watermark --> */}
            <div className="position-absolute top-0 end-0 text-align d-flex justify-content-end w-100">
              <img src={bgAuthOverlay} alt="Logo" className="img-fluid w-50 h-50"/>
            </div>

            {/* <!-- Register Form Container --> */}
            <div className="w-100 px-2 auth-container h-100 align-content-md-around">
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
                      <Form onSubmit={formik.handleSubmit}>
                        <Row>
                          {/* First Name */}
                          <Col md={6} className="mb-3">
                            <label>First Name</label>
                            <Input 
                              name="firstName" 
                              type="text" 
                              className="form-control bg-light border-light" 
                              onChange={formik.handleChange} 
                              value={formik.values.firstName}
                            />
                            {formik.errors.firstName && (
                              <div className="text-danger">{formik.errors.firstName}</div>
                            )}
                          </Col>
                          {/* Last Name */}
                          <Col md={6} className="mb-3">
                            <label>Last Name</label>
                            <Input 
                              name="lastName" 
                              type="text" 
                              className="form-control bg-light border-light"
                              onChange={formik.handleChange} 
                              value={formik.values.lastName}
                            />
                            {formik.errors.lastName && (
                              <div className="text-danger">{formik.errors.lastName}</div>
                            )}
                          </Col>
                        </Row>

                        {/* Email */}
                        <Row>
                          <Col md={6} className="mb-3">
                            <label>Email</label>
                            <Input 
                              name="email" 
                              type="email" 
                              className="form-control bg-light border-light" 
                              onChange={formik.handleChange} 
                              value={formik.values.email}
                            />
                            {formik.errors.email && (
                                <div className="text-danger">{formik.errors.email}</div>
                            )}
                          </Col>
                          <Col md={6} className="mb-3">
                            <label>Select Country</label>
                            <ReactSelect isMulti={false} selectedUser={selectedCountry} options={selectOptions} />
                          </Col>
                        </Row>

                        <Row>
                          {/* Password */}
                          <Col md={6} className="mb-3">
                            <label>Pin Code</label>
                            <Input 
                              name="pincode" 
                              type="text" 
                              className="form-control bg-light border-light" 
                              onChange={formik.handleChange} 
                              value={formik.values.pincode}
                            />
                            {formik.errors.pincode && (
                              <div className="text-danger">{formik.errors.pincode}</div>
                            )}
                          </Col>
                          {/* Confirm Password */}
                          <Col md={6} className="mb-3">
                            <label>Mobile Number</label>
                            <Input 
                              name="mobile" 
                              type="text" 
                              className="form-control bg-light border-light"
                              onChange={formik.handleChange} 
                              value={formik.values.mobile}
                            />
                            {formik.errors.mobile && (
                              <div className="text-danger">{formik.errors.mobile}</div>
                            )}
                          </Col>
                        </Row>
                        
                        <Row>
                          {/* Password */}
                          <Col md={6} className="mb-3">
                            <label>Password</label>
                            <Input 
                              name="password" 
                              type="password" 
                              className="form-control bg-light border-light" 
                              onChange={formik.handleChange} 
                              value={formik.values.password}
                            />
                            {formik.errors.password && (
                              <div className="text-danger">{formik.errors.password}</div>
                            )}
                          </Col>
                          {/* Confirm Password */}
                          <Col md={6} className="mb-3">
                            <label>Confirm Password</label>
                            <Input 
                              name="confirmPassword" 
                              type="password" 
                              className="form-control bg-light border-light"
                              onChange={formik.handleChange} 
                              value={formik.values.confirmPassword}
                            />
                            {formik.errors.confirmPassword && (
                              <div className="text-danger">{formik.errors.confirmPassword}</div>
                            )}
                          </Col>
                        </Row>

                        {/* Terms and Conditions */}
                        <div className="mb-2 d-flex">
                          <Input 
                            type="checkbox" 
                            id="terms" 
                            className="me-2" 
                            name="terms"
                            onChange={formik.handleChange} 
                            value={formik.values.terms}
                          />
                          <label htmlFor="terms" className="d-flex">
                            I have read the User agreement and I accept it
                            {formik.errors.terms && (
                              <div className="text-danger">{formik.errors.terms}</div>
                            )}
                          </label>
                        </div>

                        {/* Register Button */}
                        <div className="text-center">
                          <Button className="w-100" type="submit">Register</Button>
                        </div>
                      </Form>
                    </TabPane>
                    
                    {/* Company Section*/}
                    <TabPane tabId="2">
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
                              <CompanyFormStep1 handleSubmit={(values) => handleFormSubmit(1, values)} 
                              formValues={formValues.step1}  // Pass form values
                              handleChange={(e) => handleChange(1, e)}/>
                          </div>
                        )}
                      {/* Form 2 */}
                      {
                        activeStep === 2 && (
                          <div className="form-step">
                                <CompanyFormStep2 handleSubmit={(values) => handleFormSubmit(2, values)} handlePrev={() => handlePrev(2)} 
                                  formValues={formValues.step2}  // Pass form values
                                  handleChange={(e) => handleChange(2, e)}/>
                          </div>
                        )}
                      {/* Form 3 */}
                      {
                        activeStep === 3 && (
                          <div className="form-step">
                              <CompanyFormStep3 handleSubmit={(values) => handleFormSubmit(3, values)} handlePrev={() => handlePrev(3)} 
                               formValues={formValues.step3} // Pass form values
                               handleChange={(e) => handleChange(3, e)}/>
                          </div>
                      )}
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