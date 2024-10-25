import PropTypes from "prop-types";
import React from "react";
import withRouter from "../../components/Common/withRouter";
import AuthLeftBanner from "../../components/Common/AuthLeftBanner";
import { Button, Col, Container, Form, Input, Label, Row } from "reactstrap";

// import images
import bgAuthOverlay from '../../assets/images/bg_overlay/bg-auth-overlay.svg';

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";


const Verification = (props) => {

    const formik = useFormik
    ({
        initialValues: {
            otp: '',
        },
        validationSchema: Yup.object({
            otp: Yup.string().required('OTP is required'),
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

                        {/* <!-- Verification Form Container --> */}
                        <div className="w-100 px-5 auth-container w-50">
                            <h3 className="text-center text-black mb-3">Verification</h3>
                            <p className="text-center text-secondary mb-4 ">We have send the OTP on 8882356364 will apply auto to the fields</p>
                            <Form onSubmit={formik.handleSubmit}>
                                <div className="mb-4">
                                    <Label>OTP</Label>
                                    <div className="input-group">
                                        <Input type="text" name="otp" className="form-control border-0 bg-light" placeholder="Enter your OTP" onChange={(e) => { formik.handleChange(e) }}/>
                                    </div>
                                    {
                                        formik.errors.otp && formik.touched.otp ? (
                                        <div className="text-danger">{formik.errors.otp}</div>
                                        ) : null
                                    }
                                </div>
                                <Row className="text-center">
                                    <p>if you didn't receive A code <Label className="text-secondary">resend</Label></p>
                                </Row>
                                <Button className="w-100 bg-primary" type="submit">Verify</Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

Verification.propTypes = {
    history: PropTypes.object,
};
  
export default withRouter(Verification);