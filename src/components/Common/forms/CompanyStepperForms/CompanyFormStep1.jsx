import React from 'react';
import { Row, Col, Input, Button, Form, Label } from 'reactstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ReactSelect from '../../ReactSelect';

// Select Options
const selectOptions = [
  { value: '91', label: '+91' },
  { value: '92', label: '+92' },
  { value: '93', label: '+93' },
  { value: '94', label: '+94' },
  { value: '95', label: '+95' }
];


const CompanyFormStep1 = ({ handleSubmit, formValues, handleChange }) => {

    const formik = useFormik({
        initialValues: {
            firstName: formValues.firstName || '',
            lastName: formValues.lastName || '',
            mobile: formValues.mobile || '',
            email: formValues.email || '',
            password: formValues.password || '',
            confirmPassword: formValues.confirmPassword || ''
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('First name is required'),
            lastName: Yup.string().required('Last name is required'),
            mobile: Yup.string().required('Mobile number is required'),
            email: Yup.string().email("Invalid email address").required("Email is required"),
            password: Yup.string().required('Passowrd is required'),
            confirmPassword: Yup.string().required('Confirm password is required'),
        }),
        onSubmit: (values) => {
          handleSubmit(values); // Pass values to parent
        },
    });

   // Update formik values on change
   React.useEffect(() => {
    formik.setValues({
      firstName: formValues.firstName || '',
      lastName: formValues.lastName || '',
      mobile: formValues.mobile || '',
      email: formValues.email || '', 
      password: formValues.password || '',
      confirmPassword: formValues.confirmPassword || ''
    });
  }, [formValues]); // Run whenever formValues change

  // Logs the selected country code to the console
  const selectedCountryCode = (selectedOption) => {
    // console.log(selectedOption);  // Log selected country code
  }

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Row className="mb-2">
        <Col md={6}>
          <Label>First Name</Label>
          <Input
            name="firstName" 
            type="text" 
            className="form-control bg-light border-light" 
            onChange={(e) => {
              formik.handleChange(e);
              handleChange("firstName", e.target.value); // Update parent state
            }}
            value={formik.values.firstName}
          />
          {
            formik.errors.firstName && formik.touched.firstName ? (
              <div className="text-danger">{formik.errors.firstName}</div>
            ) : null
          }
        </Col>
        <Col md={6}>
          <Label>Last Name</Label>
          <Input 
            name="lastName" 
            type="text" 
            className="form-control bg-light border-light" 
            onChange={(e) => {
              formik.handleChange(e);
              handleChange("lastName", e.target.value); // Update parent state
            }}
            value={formik.values.lastName}
          />
          {
            formik.errors.lastName && formik.touched.lastName ? (
              <div className="text-danger">{formik.errors.lastName}</div>
            ) : null
          }
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Label>Mobile Number</Label>
          <div className='d-flex'>
            <div className='col-4'>
            {/* <select className="form-control bg-light border-light px-1">
                <option>+123</option>
            </select> */}
            <ReactSelect isMulti={false} selectedUser={selectedCountryCode} options={selectOptions} placeholder='+1'/>
            </div>
            <div className='col-8 d-flex'>
                <Input type="text" name='mobile' className="form-control bg-light border-light ms-2" 
                onChange={(e) => {
                  formik.handleChange(e);
                  handleChange("mobile", e.target.value); // Update parent state
                }}
                value={formik.values.mobile}/>
            </div>
          </div>
          {
            formik.errors.mobile && formik.touched.mobile ? (
              <div className="text-danger">{formik.errors.mobile}</div>
            ) : null
          }
        </Col>
        <Col md={6}>
          <Label>Email</Label>
          <Input 
            name="email" 
            type="email" 
            className="form-control bg-light border-light" 
            onChange={(e) => {
              formik.handleChange(e);
              handleChange("email", e.target.value); // Update parent state
            }}
            value={formik.values.email}
          />
          {
            formik.errors.email && formik.touched.email ? (
              <div className="text-danger">{formik.errors.email}</div>
            ) : null
          }
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={6}>
          <Label>Password</Label>
          <Input 
            name="password" 
            type="password" 
            className="form-control bg-light border-light" 
            onChange={(e) => {
              formik.handleChange(e);
              handleChange("password", e.target.value); // Update parent state
            }}
            value={formik.values.password}
          />
          {
            formik.errors.password && formik.touched.password ? (
              <div className="text-danger">{formik.errors.password}</div>
            ) : null
          }
        </Col>
        <Col md={6}>
          <Label>Confirm Password</Label>
          <Input 
            name="confirmPassword" 
            type="password" 
            className="form-control bg-light border-light" 
            onChange={(e) => {
              formik.handleChange(e);
              handleChange("confirmPassword", e.target.value); // Update parent state
            }} 
            value={formik.values.confirmPassword}
          />
          {
            formik.errors.confirmPassword && formik.touched.confirmPassword ? (
              <div className="text-danger">{formik.errors.confirmPassword}</div>
            ) : null
          }
        </Col>
      </Row>
      <div className="text-center">
        <Button className="w-100" type="submit">Next</Button>
      </div>
    </Form>
  );
};

export default CompanyFormStep1;
