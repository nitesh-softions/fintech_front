import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import withRouter from "../../components/Common/withRouter";
import { Row, Col, Container, Form, Input, Card, Button, Alert, } from "reactstrap";

// Components
import AuthLeftBanner from "../../components/Common/AuthLeftBanner.jsx";

//redux
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

// actions
import { loginUser, socialLogin } from "../../store/actions";

// import images
import SVGIcons from "../../components/Common/SVGIcons";

const Login = (props) => {
  
  //meta title
  document.title = "Login | GeoPay";
  const dispatch = useDispatch();

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,
    initialValues: { email: "", password: "", },

    validationSchema: Yup.object({
      email: Yup.string() .matches( /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid email format" ) .required("Email is required"),
      password: Yup.string().required("Password is required"),
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

  return (
    <React.Fragment>
        <Container fluid className="vh-100 overflow-hidden">
            <Row className="h-100">
                {/* Left Section */}
                <AuthLeftBanner/>

                {/* <!-- Right Section --> */}
                <Col lg={5} className="bg-white d-flex justify-content-center align-items-center">
                  {/* <!-- Background Overlay --> */}
                  <div className="bg_overlay_3"></div>
                  <div className="bg_overlay_4"></div>

                  <Card className="w-100 px-5 auth-container shadow-none bg-transparent">
                      {error ? <Alert color="danger">{error.message}</Alert> : null}
                      <h3 className="text-center text-black mb-3">Sign in To Fintech</h3>
                      
                      <div className="d-flex justify-content-center mb-3 gap-3">
                          <Button color="secondary" className="rounded-circle d-flex align-items-center justify-content-center social-media-icons" outline > <SVGIcons.Facebook className="text-primary"/> </Button>
                          <Button color="secondary" className="rounded-circle d-flex align-items-center justify-content-center social-media-icons" outline > <SVGIcons.Google className="text-primary"/> </Button>
                          <Button color="secondary" className="rounded-circle d-flex align-items-center justify-content-center social-media-icons" outline > <SVGIcons.LinkedinIn className="text-primary"/> </Button>
                      </div>
                      <p className="text-center mb-4">Or use your email account</p>

                      <Form onSubmit={validation.handleSubmit}>
                        <div className="mb-3">
                          <div className="input-group">
                            <span className="input-group-text bg-light border-0">
                              <SVGIcons.Envelope/>
                            </span>
                            <Input type="email" name="email" className="form-control border-0 bg-light" placeholder="Email" value={validation.values.email} onChange={validation.handleChange} onBlur={validation.handleBlur} />
                          </div>
                          {validation.touched.email && validation.errors.email && (
                            <div className="text-danger">{validation.errors.email}</div>
                          )}
                        </div>

                        <div className="mb-3">
                          <div className="input-group">
                            <span className="input-group-text bg-light border-0">
                              <SVGIcons.Lock/>
                            </span>
                            <Input type="password" name="password" className="form-control border-0 bg-light" placeholder="Password" value={validation.values.password} onChange={validation.handleChange} onBlur={validation.handleBlur} />
                          </div>
                          {validation.touched.password && validation.errors.password && (
                            <div className="text-danger">{validation.errors.password}</div>
                          )}
                        </div>
                        
                        <div className="mb-3 text-end">
                          <Link to="/forgot-password" className="fw-medium text-secondary">Forgot your password?</Link>
                        </div>
                        
                        <div className="text-center">
                          <Button type="submit" className="btn btn-primary w-100 btn-login">Login</Button>
                        </div>
                      </Form>


                      <div className="d-flex align-items-center justify-content-center my-3">
                          <hr className="flex-grow-1 hr-line"/>
                          <span className="mx-2 text-muted">Or with sign up</span>
                          <hr className="flex-grow-1 hr-line"/>
                      </div>
                      <Link to={"/register"} className="btn btn-secondary w-100" type="submit">Sign up</Link>
                  </Card>
                </Col>
            </Row>
        </Container>

    </React.Fragment>
  );
};

export default withRouter(Login);

Login.propTypes = {
  history: PropTypes.object,
};
