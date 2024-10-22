import React from 'react';
import { Row, Col } from 'reactstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const CompanyFormStep2 = ({ handleSubmit }) => {

  const formik = useFormik({
    initialValues: {
      companyName: '',
      companyAddress: '',
      tin: '',
      vat: ''
    },
    validationSchema: Yup.object({
      companyName: Yup.string().required('Comany Name is required'),
        companyAddress: Yup.string().required('Company Address is required'),
        tin: Yup.string().required('TIN is required'),
        vat: Yup.string().required('VAT is required')
    }),
    onSubmit: (values) => {
      handleSubmit(values); // Pass values to parent
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Row className="mb-3">
        <Col md={6}>
          <label>Corporate/Company Name</label>
          <input
            name="companyName" 
            type="text" 
            className="form-control bg-light border-light mb-2" 
            onChange={formik.handleChange}
            value={formik.values.companyName}
          />
          {formik.errors.companyName && (
            <div className="text-danger">{formik.errors.companyName}</div>
          )}
        </Col>
        <Col md={6}>
          <label>Corporate/Company Address</label>
          <input 
            name="companyAddress" 
            type="text" 
            className="form-control bg-light border-light mb-2" 
            onChange={formik.handleChange} 
            value={formik.values.companyAddress}
          />
          {formik.errors.companyAddress && (
            <div className="text-danger">{formik.errors.companyAddress}</div>
          )}
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6}>
          <label>TIN</label>
          <input 
            name="tin" 
            type="text" 
            className="form-control bg-light border-light mb-2" 
            onChange={formik.handleChange}
            value={formik.values.tin}
          />
          {formik.errors.tin && (
            <div className="text-danger">{formik.errors.tin}</div>
          )}
        </Col>
        <Col md={6}>
          <label>VAT</label>
          <input 
            name="vat" 
            type="text" 
            className="form-control bg-light border-light mb-2" 
            onChange={formik.handleChange}
            value={formik.values.vat}
          />
          {formik.errors.vat && (
            <div className="text-danger">{formik.errors.vat}</div>
          )}
        </Col>
      </Row>
      <div className="text-center">
        <button className="btn btn-primary w-100 btn-signup" type="submit">Next</button>
      </div>
    </form>
  );
};

export default CompanyFormStep2;
