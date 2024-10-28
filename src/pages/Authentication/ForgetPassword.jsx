import PropTypes from "prop-types";
import React from "react";

//redux
import withRouter from "../../components/Common/withRouter";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

// action
// import { userForgetPassword } from "../../store/actions";

// import images
import AuthLeftBanner from "../../components/Common/AuthLeftBanner.jsx";
import { Button, Col, Container, Form, Input, Label, Row } from "reactstrap";


const ForgetPasswordPage = (props) => {
  //meta title
  // document.title =
  //   "Forget Password | Skote - Vite React Admin & Dashboard Template";
  // const dispatch = useDispatch();

  // const validation = useFormik({
  //   // enableReinitialize : use this flag when initial values needs to be changed
  //   enableReinitialize: true,

  //   initialValues: {
  //     email: "",
  //   },
  //   validationSchema: Yup.object({
  //     email: Yup.string().required("Please Enter Your Email"),
  //   }),
  //   onSubmit: (values) => {
  //     dispatch(userForgetPassword(values, props.history));
  //   },
  // });

  // const selectForgotPasswordState = (state) => state.ForgetPassword;
  // const ForgotPasswordProperties = createSelector(
  //   selectForgotPasswordState,
  //   (forgetPassword) => ({
  //     forgetError: forgetPassword.forgetError,
  //     forgetSuccessMsg: forgetPassword.forgetSuccessMsg,
  //   })
  // );

  // const {
  //   forgetError,
  //   forgetSuccessMsg
  // } = useSelector(ForgotPasswordProperties);

  const formik = useFormik({
    initialValues: {
        email: '',
    },
    validationSchema: Yup.object({
        email: Yup.string().email("Invalid email address").required("Email is required"),
    }),
    onSubmit: (values) => {
        // console.log(values); // Log or dispatch your action here
    },
    });

  return (
    <React.Fragment>
        <Container fluid className="vh-100 overflow-hidden">
            <Row className="h-100">
                {/* Left Section */}
                <AuthLeftBanner/>

                {/* <!-- Right Section --> */}
                <Col lg={5} className="d-flex flex-column align-items-center justify-content-center bg-white">
                    {/* <!-- Background Overlay --> */}
                    <div className="bg_overlay_3"></div>
                    <div className="bg_overlay_4"></div>
                    {/* <!-- Forgot Password Form Container --> */}
                    <div className="w-100 px-5 auth-container">
                        <h3 className="text-center text-black mb-3">Forgot Password</h3>
                        <p className="text-center text-secondary mb-4">It is a long established fact that a reader will be distracted by the readable content.</p>
                        <Form onSubmit={formik.handleSubmit}>
                            {/* <!-- Email Input --> */}
                            <div className="mb-4">
                                <Label>Email</Label>
                                <div className="input-group">
                                    <Input name="email" type="email" className="form-control border-0 bg-light" placeholder="Enter your email"  value={formik.values.email} onChange={formik.handleChange} />
                                </div>
                                {
                                    formik.errors.email && formik.touched.email ? (
                                    <div className="text-danger">{formik.errors.email}</div>
                                    ) : null
                                }
                            </div>
                            <Button className="w-100 bg-primary" type="submit">Send</Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    </React.Fragment>
  );
};

ForgetPasswordPage.propTypes = {
  history: PropTypes.object,
};

export default withRouter(ForgetPasswordPage);
