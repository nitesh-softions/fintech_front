import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import withRouter from "../../components/Common/withRouter";

//redux
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

import { Row, Col, CardBody, Card, Alert, Container, Form, Input, FormFeedback, Label, } from "reactstrap";

// actions
import { loginUser, socialLogin } from "../../store/actions";

// import images
import profile from "../../assets/images/profile-img.png";
import brandlogo from "../../assets/images/brand-logo.svg";
import lightlogo from "../../assets/images/logo-light.svg";
// import authbgimg from "../../assets/images/auth-bg-img.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaEnvelope, FaLock } from 'react-icons/fa';
import AuthLeftBanner from "../../components/Common/AuthLeftBanner.jsx";
// import avatar1 from '../../assets/images/users/avatar-1.jpg';
// import avatar2 from '../../assets/images/users/avatar-2.jpg';
// import avatar3 from '../../assets/images/users/avatar-3.jpg';
// import avatar4 from '../../assets/images/users/avatar-4.jpg';
// import authbannerstar from '../../assets/images/auth-banner-star.svg';
// import ratings from "../../assets/images/ratings.svg";
import bgchain from '../../assets/images/bgchain.svg';


const Login = (props) => {
  //meta title
  document.title = "Login | Skote - Vite React Admin & Dashboard Template";
  const dispatch = useDispatch();

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      email: "rajan.softieons@gmail.com" || "",
      password: "12345678" || "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Please Enter Your Email"),
      password: Yup.string().required("Please Enter Your Password"),
    }),
    onSubmit: (values) => {
      dispatch(loginUser(values, props.router.navigate));
    },
  });

  const selectLoginState = (state) => state.Login;

  const LoginProperties = createSelector(
    selectLoginState,
    (login) => ({
      error: login.error
    })
  );

  const { error } = useSelector(LoginProperties);

  const signIn = type => {
    dispatch(socialLogin(type, props.router.navigate));
  };

  //for facebook and google authentication
  const socialResponse = type => {
    signIn(type);
  };

  console.log(error);

   // Array of static image paths for user avatars
   // const userAvatars = [avatar1, avatar2, avatar3, avatar4];

  return (
    <React.Fragment className="bg-white">
        <div className="container-fluid vh-100 overflow-hidden">
            <div className="row h-100">
                {/* Left Section */}
                <AuthLeftBanner/>

                {/* <!-- Right Section --> */}
                <form className="col-lg-6 d-flex flex-column justify-content-center align-items-center position-relative bg-white">
                    
                        {/* <!-- Top right corner watermark --> */}
                        <div className="position-absolute top-0 end-0 text-align d-flex justify-content-end w-100">
                            <img src={bgchain} alt="Logo" className="img-fluid w-50 h-50"/>
                        </div>

                        {/* <!-- Login Form Container --> */}
                        <div className="w-100 px-5 auth-container">
                            <h3 className="text-center text-black mb-3">Sign in To Fintech</h3>
                            
                            {/* <!-- Social Media Icons --> */}
                            <div className="d-flex justify-content-center mb-3 gap-3">
                                <div className="d-flex text-black justify-content-center align-items-center border border-1 border-secondary rounded-circle social-media-icons">
                                    <FaFacebookF />
                                </div>
                                <div className="d-flex text-black justify-content-center align-items-center border border-1 border-secondary rounded-circle social-media-icons">
                                    <FaGoogle />
                                </div>
                                <div className="d-flex text-black justify-content-center align-items-center border border-1 border-secondary rounded-circle social-media-icons">
                                    <FaLinkedinIn />
                                </div>
                            </div>
                            <p className="text-center mb-4">Or use your email account</p>
                            {/* <!-- Email Input --> */}
                            <div className="mb-3">
                                <div className="mb-3">
                                    <div className="input-group">
                                        <span className="input-group-text bg-light border-0">
                                            <FaEnvelope />
                                        </span>
                                        <input type="email" className="form-control border-0 bg-light" placeholder="Email" />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Password Input --> */}
                            <div className="mb-3">
                            <div className="mb-3">
                                <div className="input-group">
                                    <span className="input-group-text bg-light border-0">
                                    <FaLock />
                                    </span>
                                    <input type="password" className="form-control border-0 bg-light" placeholder="Password" />
                                </div>
                            </div>
                            </div>

                            {/* <!-- Forgot Password --> */}
                            <div className="mb-3 text-end">
                                <a href="#" className="fw-medium text-secondary">Forgot your password?</a>
                            </div>

                            {/* <!-- Login and Signup Buttons --> */}
                            <div className="text-center">
                                <button className="btn btn-primary w-100 btn-login" type="button">Login</button>
                                {/* Divider with text */}
                                <div className="d-flex align-items-center justify-content-center my-3">
                                    <hr className="flex-grow-1 hr-line"/>
                                    <span className="mx-2 text-muted">Or with sign up</span>
                                    <hr className="flex-grow-1 hr-line"/>
                                </div>
                                <button className="btn btn-secondary w-100 btn-signup" type="button">Sign up</button>
                            </div>
                        </div>
                    
                </form>
            </div>
        </div>

    </React.Fragment>
  );
};

export default withRouter(Login);

Login.propTypes = {
  history: PropTypes.object,
};
