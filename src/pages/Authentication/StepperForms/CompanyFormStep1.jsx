import React from 'react';
import { Row, Col, Input, Button } from 'reactstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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

  return (
    <form onSubmit={formik.handleSubmit}>
      <Row className="mb-2">
        <Col md={6}>
          <label>First Name</label>
          <Input
            name="firstName" 
            type="text" 
            className="form-control bg-light border-light" 
            onChange={(e) => {
              formik.handleChange(e);
              handleChange(e); // Update parent state
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
          <label>Last Name</label>
          <Input 
            name="lastName" 
            type="text" 
            className="form-control bg-light border-light" 
            onChange={(e) => {
              formik.handleChange(e);
              handleChange(e); // Update parent state
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
          <label>Mobile Number</label>
          <div className='d-flex'>
            <div className='col-4'>
            <select className="form-control bg-light border-light px-1">
                <option>+123</option>
            </select>
            </div>
            <div className='col-8 d-flex'>
                <Input type="text" name='mobile' className="form-control bg-light border-light ms-2" 
                onChange={(e) => {
                  formik.handleChange(e);
                  handleChange(e); // Update parent state
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
          <label>Email</label>
          <Input 
            name="email" 
            type="email" 
            className="form-control bg-light border-light" 
            onChange={(e) => {
              formik.handleChange(e);
              handleChange(e); // Update parent state
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
          <label>Password</label>
          <Input 
            name="password" 
            type="password" 
            className="form-control bg-light border-light" 
            onChange={(e) => {
              formik.handleChange(e);
              handleChange(e); // Update parent state
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
          <label>Confirm Password</label>
          <Input 
            name="confirmPassword" 
            type="password" 
            className="form-control bg-light border-light" 
            onChange={(e) => {
              formik.handleChange(e);
              handleChange(e); // Update parent state
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
    </form>
  );
};

export default CompanyFormStep1;
