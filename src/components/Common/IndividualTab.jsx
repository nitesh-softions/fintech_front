import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Label, Row, Col } from "reactstrap";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

import ReactSelect from "../../components/Common/ReactSelect";

// Select Options
const selectOptions = [
    { value: 'india', label: 'India' },
    { value: 'usa', label: 'USA' },
    { value: 'canada', label: 'Canada' },
    { value: 'brazil', label: 'Brazil' },
    { value: 'UK', label: 'UK' }
];
  

const IndividualTab = prop => {

    const navigate = useNavigate();

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
        // console.log(selectedOption);
    }


    return (
        <Form onSubmit={formik.handleSubmit}>
            <Row>
                {/* First Name */}
                <Col md={6} className="mb-3">
                <Label>First Name</Label>
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
                <Label>Last Name</Label>
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
                <Label>Email</Label>
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
                <Label>Select Country</Label>
                <ReactSelect isMulti={false} selectedUser={selectedCountry} options={selectOptions} />
                </Col>
            </Row>
            <Row>
                {/* Password */}
                <Col md={6} className="mb-3">
                <Label>Pin Code</Label>
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
                <Label>Mobile Number</Label>
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
                <Label>Password</Label>
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
                <Label>Confirm Password</Label>
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
                <Label htmlFor="terms" className="d-flex text-secondary">
                I have read the User agreement and I accept it
                {formik.errors.terms && (
                    <div className="text-danger">{formik.errors.terms}</div>
                )}
                </Label>
            </div>
            {/* Register Button */}
            <div className="text-center">
                <Button className="w-100" type="submit">Register</Button>
            </div>
        </Form>
    )
}

export default IndividualTab;