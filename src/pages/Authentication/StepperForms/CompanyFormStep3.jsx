import React from 'react';
import { Row, Col, Input, Button } from 'reactstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const CompanyFormStep3 = ({ handleSubmit, handlePrev, formValues, handleChange }) => {

  const formik = useFormik({
    initialValues: {
      bankName: formValues.bankName || '',
      bankCode: formValues.bankCode || '',
      accountNo: formValues.accountNo || ''
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

  // Update formik values on change
  React.useEffect(() => {
    formik.setValues({
      bankName: formValues.bankName || '',
      bankCode: formValues.bankCode || '',
      accountNo: formValues.accountNo || ''
    });
  }, [formValues]); // Run whenever formValues change


  return (
    <form onSubmit={formik.handleSubmit}>
      <Row className="mb-3">
        <Col md={6}>
          <label>Bank Name</label>
          <Input
            name="bankName" 
            type="text" 
            className="form-control bg-light border-light mb-2" 
            onChange={(e) => {
              formik.handleChange(e);
              handleChange(e); // Update parent state
            }}
            value={formik.values.bankName}
          />
          {
            formik.errors.bankName && formik.touched.bankName ? (
              <div className="text-danger">{formik.errors.bankName}</div>
            ) : null
          }
        </Col>
        <Col md={6}>
          <label>Bank Code</label>
          <Input 
            name="bankCode" 
            type="text" 
            className="form-control bg-light border-light mb-2" 
            onChange={(e) => {
              formik.handleChange(e);
              handleChange(e); // Update parent state
            }} 
            value={formik.values.bankCode}
          />
          {
            formik.errors.bankCode && formik.touched.bankCode ? (
              <div className="text-danger">{formik.errors.bankCode}</div>
            ) : null
          }
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={12}>
          <label>Account No</label>
          <Input 
            name="accountNo" 
            type="text" 
            className="form-control bg-light border-light mb-2" 
            onChange={(e) => {
              formik.handleChange(e);
              handleChange(e); // Update parent state
            }}
            value={formik.values.accountNo}
          />
          {
            formik.errors.accountNo && formik.touched.accountNo ? (
              <div className="text-danger">{formik.errors.accountNo}</div>
            ) : null
          }
        </Col>
      </Row>
      <div className="d-flex justify-content-between">
        <Button className="w-25" type="submit"  onClick={handlePrev}>Prev</Button>
        <Button className="w-25 bg-primary" type="submit">Register</Button>
      </div>
    </form>
  );
};

export default CompanyFormStep3;
