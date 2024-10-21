import React, { useEffect, useState } from "react";
// import { Row, Col, CardBody, Card, Alert, Container, Input, Label, Form, FormFeedback } from "reactstrap";
import { Col, 
  Container, 
  Row, 
  Card,
  CardBody,
  // CardText,
  // CardTitle,
  Nav,
  TabContent,
  NavItem,
  NavLink,
  TabPane,
 } from "reactstrap";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

// action
import { registerUser, apiError } from "../../store/actions";

//redux
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";

import { Link } from "react-router-dom";

// import images
import profileImg from "../../assets/images/profile-img.png";
import logo from "../../assets/images/logo.svg";
import lightlogo from "../../assets/images/logo-light.svg";
import AuthLeftBanner from "../../components/Common/AuthLeftBanner";
import bgchain from '../../assets/images/bgchain.svg';

import classnames from "classnames";



const Register = props => {
  
  const [selectedGroup, setSelectedGroup] = useState(null);
  const handleSelectGroup = (selectedGroup) => {
    setSelectedGroup(selectedGroup);
  }

  document.title = "Register | Skote - Vite React Admin & Dashboard Template";

  const dispatch = useDispatch();

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      email: '',
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Please Enter Your Email"),
      username: Yup.string().required("Please Enter Your Username"),
      password: Yup.string().required("Please Enter Your Password"),
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
      // loading: account.loading,
    })
  );

  const {
    user,
    registrationError,
    // loading
  } = useSelector(AccountProperties);

  useEffect(() => {
    dispatch(apiError(""));
  }, []);


  
  const [activeTab1, setActiveTab1] = useState("5");
  const toggle1 = (tab) => {
    if (activeTab1 !== tab) {
      setActiveTab1(tab);
    }
  };


  return (
    <React.Fragment>
      <div className="container-fluid vh-100 overflow-x-hidden">
            <div className="row h-100 justify-content-center">
                {/* Left Section */}
                <AuthLeftBanner/>

                {/* <!-- Right Section --> */}
                <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center position-relative bg-white">
                    {/* <!-- Top right corner watermark --> */}
                    <div className="position-absolute top-0 end-0 text-align d-flex justify-content-end w-100">
                            <img src={bgchain} alt="Logo" className="img-fluid w-50 h-50"/>
                    </div>

                    {/* <!-- Register Form Container --> */}
                    <div className="w-100 px-5 auth-container">
                        <h3 className="text-center text-black mb-3">Register</h3>
                        
                        <Card className="rounded-4 h-100">
                          <CardBody>
                            <Nav pills className="nav-justified px-3 gap-3">
                              <NavItem>
                                <NavLink className={classnames({ active: activeTab1 === "5" })} onClick={() => { toggle1("5"); }}>
                                  <span className="d-none d-sm-block">Individual</span>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink className={classnames({ active: activeTab1 === "6" })} onClick={() => { toggle1("6"); }}>
                                  <span className="d-none d-sm-block">Company</span>
                                </NavLink>
                              </NavItem>
                            </Nav>

                            <TabContent activeTab={activeTab1} className="pt-3 text-muted">
                              <TabPane tabId="5">
                                <form>
                                  <p>form 1</p>
                                  {/* <!-- Register Buttons --> */}
                                  <div className="text-center">
                                      <button className="btn btn-secondary w-100 btn-signup" type="button">Sign up</button>
                                  </div>
                                </form>
                              </TabPane>
                              <TabPane tabId="6">
                                <form>
                                  form 2
                                  {/* <!-- Register Buttons --> */}
                                  <div className="text-center">
                                      <button className="btn btn-secondary w-100 btn-signup" type="button">Sign up</button>
                                  </div>
                                </form>
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