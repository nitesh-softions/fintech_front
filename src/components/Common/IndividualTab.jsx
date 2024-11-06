import React, { useState } from "react";
import { Form, Input, Button, Label, Row, Col } from "reactstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import CountrySelect from "./CountrySelect";
import { toast, ToastContainer } from "react-toastify";

const IndividualTab = () => {
  const [selectedCountryCode, setSelectedCountryCode] = useState('');

  const individualValidationSchema = Yup.object().shape({
    first_name: Yup.string().required("First name is required."),
    last_name: Yup.string().required("Last name is required."),
    email: Yup.string().email("Invalid email address.").required("Email is required."),
    country_id: Yup.string().required("Country selection is required."),
    postcode: Yup.string().required("Pin code is required."),
    mobile_number: Yup.string().required("Mobile number is required."),
    password: Yup.string().min(6, "Password must be at least 6 characters.").required("Password is required."),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Passwords must match.").required("Confirm password is required."),
    terms: Yup.boolean().oneOf([true], "Please accept the terms and conditions."),
  });

  // Formik setup for Individual form
  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      country_id: selectedCountryCode,
      postcode: '',
      mobile_number: '',
      password: '',
      confirmPassword: '',
      terms: false,
    },
    validationSchema: individualValidationSchema,
    onSubmit: values => {
      console.log(values);
      toast.success("Registered Successfully!");
    },
    validateOnChange: true,
    validateOnBlur: true,
  });

  // Update country code and Formik value
  const selectedCountry = (selectedGroup) => {
    setSelectedCountryCode(selectedGroup.code);
    formik.setFieldValue('country_id', selectedGroup.code);
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <Form onSubmit={formik.handleSubmit}>
        <Row>
          <Col md={6} className="mb-3">
            <Label className="required">First Name</Label>
            <Input name="first_name" type="text" className="form-control bg-light border-light" onChange={formik.handleChange} value={formik.values.first_name} onBlur={formik.handleBlur} />
            {formik.touched.first_name && formik.errors.first_name && ( <div className="text-danger">{formik.errors.first_name}</div> )}
          </Col>
          <Col md={6} className="mb-3">
            <Label className="required">Last Name</Label>
            <Input name="last_name" type="text" className="form-control bg-light border-light" onChange={formik.handleChange} value={formik.values.last_name} onBlur={formik.handleBlur} />
            {formik.touched.last_name && formik.errors.last_name && ( <div className="text-danger">{formik.errors.last_name}</div> )}
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mb-3">
            <Label className="required">Email</Label>
            <Input name="email" type="email" className="form-control bg-light border-light" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
            {formik.touched.email && formik.errors.email && ( <div className="text-danger">{formik.errors.email}</div> )}
          </Col>
          <Col md={6} className="mb-3">
            <Label className="required">Select Country</Label>
            <CountrySelect selectedCountry={selectedCountry} />
            {formik.touched.country_id && formik.errors.country_id && ( <div className="text-danger">{formik.errors.country_id}</div> )}
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mb-3">
            <Label className="required">Pin Code</Label>
            <Input name="postcode" type="text" className="form-control bg-light border-light" onChange={formik.handleChange} value={formik.values.postcode} onBlur={formik.handleBlur} />
            {formik.touched.postcode && formik.errors.postcode && ( <div className="text-danger">{formik.errors.postcode}</div> )}
          </Col>
          <Col md={6} className="mb-3">
            <Label className="required">Mobile Number</Label>
            <Input name="mobile_number" type="tel" className="form-control bg-light border-light" onChange={formik.handleChange} value={formik.values.mobile_number} pattern="[0-9]*" inputMode="numeric" onKeyPress={(e) => { if (!/[0-9]/.test(e.key)) { e.preventDefault(); } }} onBlur={formik.handleBlur} />
            {formik.touched.mobile_number && formik.errors.mobile_number && ( <div className="text-danger">{formik.errors.mobile_number}</div> )}
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mb-3">
            <Label className="required">Password</Label>
            <Input name="password" type="password" className="form-control bg-light border-light" onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} />
            {formik.touched.password && formik.errors.password && ( <div className="text-danger">{formik.errors.password}</div> )}
          </Col>
          <Col md={6} className="mb-3">
            <Label className="required">Confirm Password</Label>
            <Input name="confirmPassword" type="password" className="form-control bg-light border-light" onChange={formik.handleChange} value={formik.values.confirmPassword} onBlur={formik.handleBlur} />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && ( <div className="text-danger">{formik.errors.confirmPassword}</div> )}
          </Col>
        </Row>
        <div className="mb-2">
          <div className="d-flex">
            <Input type="checkbox" id="terms" className="me-2" name="terms" onChange={formik.handleChange} checked={formik.values.terms} />
            <Label htmlFor="terms" className="d-flex text-secondary"> I have read the User agreement and I accept it</Label>
          </div>
          {formik.touched.terms && formik.errors.terms && ( <div className="text-danger">{formik.errors.terms}</div> )}
        </div>
        {/* Register Button */}
        <div className="text-center">
          <Button className="w-100" type="submit">Register</Button>
        </div>
      </Form>
    </React.Fragment>
  );
};

export default IndividualTab;
