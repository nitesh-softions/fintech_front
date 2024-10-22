import React from 'react';
import { Row, Col } from 'reactstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const CompanyFormStep1 = ({ handleChange, handleSubmit }) => {

    const formik = useFormik({
        initialValues: {
          companyFirstName: '',
          companyLastName: '',
          companyPassword: '',
          companyConfirmPassword: ''
        },
        validationSchema: Yup.object({
            companyFirstName: Yup.string().required('Company name is required'),
            companyLastName: Yup.string().required('Company Last name is required'),
            companyPassword: Yup.string().required('Passowrd is required'),
            companyConfirmPassword: Yup.string().required('Confirm password is required'),
        }),
        onSubmit: (values) => {
          handleSubmit(values); // Pass values to parent
        },
    });


  return (
    <form onSubmit={(event) => { event.preventDefault(); handleSubmit(1); }}>
      <Row className="mb-3">
        <Col md={6}>
          <label>1 Name</label>
          <input
            name="companyFirstName" 
            type="text" 
            className="form-control bg-light border-light mb-2" 
            onChange={formik.handleChange}
            value={formik.values.companyFirstName}
          />
          {formik.errors.companyFirstName && (
            <div className="text-danger">{formik.errors.companyFirstName}</div>
          )}
        </Col>
        <Col md={6}>
          <label>Last Name</label>
          <input 
            name="companyLastName" 
            type="text" 
            className="form-control bg-light border-light mb-2" 
            onChange={formik.handleChange} 
            value={formik.values.companyLastName}
          />
          {formik.errors.companyLastName && (
            <div className="text-danger">{formik.errors.companyLastName}</div>
          )}
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6}>
          <label>Password</label>
          <input 
            name="companyPassword" 
            type="password" 
            className="form-control bg-light border-light mb-2" 
            onChange={formik.handleChange} 
            value={formik.values.companyPassword}
          />
          {formik.errors.companyPassword && (
            <div className="text-danger">{formik.errors.companyPassword}</div>
          )}
        </Col>
        <Col md={6}>
          <label>Confirm Password</label>
          <input 
            name="companyConfirmPassword" 
            type="password" 
            className="form-control bg-light border-light mb-2" 
            onChange={formik.handleChange} 
            value={formik.values.companyConfirmPassword}
          />
          {formik.errors.companyConfirmPassword && (
            <div className="text-danger">{formik.errors.companyConfirmPassword}</div>
          )}
        </Col>
      </Row>
      <div className="text-center">
        <button className="btn btn-primary w-100 btn-signup" type="submit">Next</button>
      </div>
    </form>
  );
};

export default CompanyFormStep1;
