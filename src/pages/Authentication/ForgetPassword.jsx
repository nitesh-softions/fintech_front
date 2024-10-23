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
// import logo from "../../assets/images/logo.png";
import AuthLeftBanner from "../../components/Common/AuthLeftBanner.jsx";
import bgAuthOverlay from '../../assets/images/bg_overlay/bg-auth-overlay.svg';


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
        console.log(values); // Log or dispatch your action here
    },
    });

  return (
    <React.Fragment>
        <div className="container-fluid vh-100 overflow-hidden">
            <div className="row h-100">
                {/* Left Section */}
                <AuthLeftBanner/>

                {/* <!-- Right Section --> */}
                <form className="col-lg-6 d-flex flex-column justify-content-center align-items-center position-relative bg-white" onSubmit={formik.handleSubmit}>
                    {/* <!-- Top right corner watermark --> */}
                    <div className="position-absolute top-0 end-0 text-align d-flex justify-content-end w-100">
                        <img src={bgAuthOverlay} alt="Logo" className="img-fluid w-50 h-50"/>
                    </div>
                    {/* <!-- Forgot Password Form Container --> */}
                    <div className="w-100 px-5 auth-container">
                        <h3 className="text-center text-black mb-3">Forgot Password</h3>
                        <p className="text-center text-secondary mb-4 mx-4 px-3">It is a long established fact that a reader will be distracted by the readable content.</p>
                        {/* <!-- Email Input --> */}
                        <div className="mb-4">
                            <div className="mb-3">
                                <label>Email</label>
                                <div className="input-group">
                                    <input name="email" type="email" className="form-control border-0 bg-light" placeholder="Enter your email"  value={formik.values.email} onChange={formik.handleChange} />
                                </div>
                                {
                                    formik.errors.email && formik.touched.email ? (
                                    <div className="text-danger">{formik.errors.email}</div>
                                    ) : null
                                }
                            </div>
                        </div>
                        {/* <!-- Login and Signup Buttons --> */}
                        <div className="text-center">
                            <button className="btn btn-primary w-100 btn-login" type="submit">Send</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    </React.Fragment>
  );
};

ForgetPasswordPage.propTypes = {
  history: PropTypes.object,
};

export default withRouter(ForgetPasswordPage);
