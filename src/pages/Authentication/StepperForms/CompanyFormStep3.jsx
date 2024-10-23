import React from 'react';
import { Row, Col, Input, Button } from 'reactstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const CompanyFormStep3 = ({ handleChange, handleSubmit }) => {

  const formik = useFormik({
    initialValues: {
      bankName: '',
      bankCode: '',
      accountNo: ''
    },
    validationSchema: Yup.object({
      bankName: Yup.string().required('Bank Name is required'),
      bankCode: Yup.string().required('Bank Code is required'),
      accountNo: Yup.string().required('Account Number is required'),
    }),
    onSubmit: (values) => {
      handleSubmit(values); // Pass values to parent
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Row className="mb-3">
        <Col md={6}>
          <label>Bank Name</label>
          <Input
            name="bankName" 
            type="text" 
            className="form-control bg-light border-light mb-2" 
            onChange={formik.handleChange}
            value={formik.values.bankName}
          />
          {formik.errors.bankName && (
            <div className="text-danger">{formik.errors.bankName}</div>
          )}
        </Col>
        <Col md={6}>
          <label>Bank Code</label>
          <Input 
            name="bankCode" 
            type="text" 
            className="form-control bg-light border-light mb-2" 
            onChange={formik.handleChange} 
            value={formik.values.bankCode}
          />
          {formik.errors.bankCode && (
            <div className="text-danger">{formik.errors.bankCode}</div>
          )}
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={12}>
          <label>Account No</label>
          <Input 
            name="accountNo" 
            type="text" 
            className="form-control bg-light border-light mb-2" 
            onChange={formik.handleChange} 
            value={formik.values.accountNo}
          />
          {formik.errors.accountNo && (
            <div className="text-danger">{formik.errors.accountNo}</div>
          )}
        </Col>
      </Row>
      <div className="text-center">
        <Button className="w-100" type="submit">Register</Button>
      </div>
    </form>
  );
};

export default CompanyFormStep3;
