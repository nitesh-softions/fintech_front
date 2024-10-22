import React from 'react';
import { Row, Col, Input } from 'reactstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const CompanyFormStep1 = ({ handleSubmit }) => {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            mobile: '',
            telephone: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('First name is required'),
            lastName: Yup.string().required('Last name is required'),
            mobile: Yup.string().required('Mobile number is required'),
            password: Yup.string().required('Passowrd is required'),
            confirmPassword: Yup.string().required('Confirm password is required'),
        }),
        onSubmit: (values) => {
          handleSubmit(values); // Pass values to parent
        },
    });


  return (
    <form onSubmit={formik.handleSubmit}>
      <Row className="mb-3">
        <Col md={6}>
          <label>First Name</label>
          <input
            name="firstName" 
            type="text" 
            className="form-control bg-light border-light mb-2" 
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          {formik.errors.firstName && (
            <div className="text-danger">{formik.errors.firstName}</div>
          )}
        </Col>
        <Col md={6}>
          <label>Last Name</label>
          <input 
            name="lastName" 
            type="text" 
            className="form-control bg-light border-light mb-2" 
            onChange={formik.handleChange} 
            value={formik.values.lastName}
          />
          {formik.errors.lastName && (
            <div className="text-danger">{formik.errors.lastName}</div>
          )}
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6}>
          <label>Mobile Number</label>
          <div className='d-flex'>
            <div className='col-4'>
            <select className="form-control bg-light mb-3 border-light px-1">
                <option>+123</option>
            </select>
            </div>
            <div className='col-8 d-flex'>
                <Input type="text" name='mobile' className="form-control bg-light mb-3 border-light ms-2" 
                onChange={formik.handleChange} 
                value={formik.values.mobile}/>
            </div>
          </div>
          {formik.errors.mobile && (
              <div className="text-danger">{formik.errors.mobile}</div>
            )}
        </Col>
        <Col md={6}>
          <label>Telephone (Optional)</label>
          <div className='d-flex'>
            <div className='col-4'>
            <select className="form-control bg-light mb-3 border-light px-1">
                <option>+123</option>
            </select>
            </div>
            <div className='col-8 d-flex'>
                <Input type="text" name='telephone' className="form-control bg-light mb-3 border-light ms-2" 
                onChange={formik.handleChange} 
                value={formik.values.telephone}/>
                {formik.errors.telephone && (
                  <div className="text-danger">{formik.errors.telephone}</div>
                )}
            </div>
          </div>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6}>
          <label>Password</label>
          <input 
            name="password" 
            type="password" 
            className="form-control bg-light border-light mb-2" 
            onChange={formik.handleChange} 
            value={formik.values.password}
          />
          {formik.errors.password && (
            <div className="text-danger">{formik.errors.password}</div>
          )}
        </Col>
        <Col md={6}>
          <label>Confirm Password</label>
          <input 
            name="confirmPassword" 
            type="password" 
            className="form-control bg-light border-light mb-2" 
            onChange={formik.handleChange} 
            value={formik.values.confirmPassword}
          />
          {formik.errors.confirmPassword && (
            <div className="text-danger">{formik.errors.confirmPassword}</div>
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
