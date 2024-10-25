import PropTypes from "prop-types";
import React from "react";
import withRouter from "../../components/Common/withRouter";
import AuthLeftBanner from "../../components/Common/AuthLeftBanner";

// import images
import bgAuthOverlay from '../../assets/images/bg_overlay/bg-auth-overlay.svg';

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";
import { Button, Col, Container, Form, Input, Label, Row } from "reactstrap";


const CreateNewPassword = (props) => {

    const formik = useFormik({
        initialValues: {
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
            confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], "Passwords must match")
            .required("Confirm password is required"),
        }),
        onSubmit: (values) => {
            // console.log(values); // Log or dispatch your action here
        },
    });


    return(
        <React.Fragment>
            <Container fluid className="vh-100 overflow-hidden">
                <Row className="h-100">
                    {/* Left Section */}
                    <AuthLeftBanner/>

                    {/* <!-- Right Section --> */}
                    <Col lg={5} className="d-flex flex-column align-items-center justify-content-center bg-white">
                        {/* <!-- Top right corner watermark --> */}
                        <div className="position-absolute top-0 end-0 text-align d-flex justify-content-end w-100">
                            <img src={bgAuthOverlay} alt="Logo" className="img-fluid w-50 h-50"/>
                        </div>
                        {/* <!-- Create New Password Form Container --> */}
                        <div className="w-100 px-5 auth-container">
                            <h3 className="text-center text-black mb-3">Create New Password</h3>
                            <p className="text-center text-secondary mb-4 ">Your new password must be different from previous used passwords.</p>
                            <Form onSubmit={formik.handleSubmit}>
                                <div className="mb-4">
                                    <Label>Password</Label>
                                    <div className="input-group">
                                        <Input type="password" name="password" className="form-control border-0 bg-light" value={formik.values.password} onChange={formik.handleChange}/>
                                    </div>
                                    {
                                        formik.errors.password && formik.touched.password ? (
                                        <div className="text-danger">{formik.errors.password}</div>
                                        ) : null
                                    }
                                </div>
                                <div className="mb-4">
                                    <Label>Confirm Password</Label>
                                    <div className="input-group">
                                        <Input type="password" name="confirmPassword" className="form-control border-0 bg-light" value={formik.values.confirmPassword} onChange={formik.handleChange}/>
                                    </div>
                                    {
                                        formik.errors.confirmPassword && formik.touched.confirmPassword ? (
                                        <div className="text-danger">{formik.errors.confirmPassword}</div>
                                        ) : null
                                    }
                                </div>
                                <Row className="text-center">
                                    <p>if you didn't receive A code <Label className="text-secondary">resend</Label></p>
                                </Row>
                                <Button className="w-100 bg-primary" type="submit">Update</Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

CreateNewPassword.propTypes = {
    history: PropTypes.object,
};
  
export default withRouter(CreateNewPassword);