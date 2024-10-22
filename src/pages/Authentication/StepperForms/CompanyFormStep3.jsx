import React from 'react';
import { Row, Col } from 'reactstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const CompanyFormStep3 = ({ handleSubmit }) => {
  const formik = useFormik({
    initialValues: {
      bankName: '',
      bankCode: '',
      accountNumber: '',
    },
    validationSchema: Yup.object({
      bankName: Yup.string().required('Bank name is required'),
      bankCode: Yup.string().required('Bank code is required'),
      accountNumber: Yup.string().required('Account number is required'),
    }),
    onSubmit: (values) => {
      handleSubmit(values); // Pass values to parent
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Row className="mb-3">
        <Col md={6}>
          <label>3 Name</label>
          <input
            name="bankName"
            type="text"
            className="form-control bg-light border-light mb-2"
            onChange={formik.handleChange}
            value={formik.values.bankName}
          />
          {formik.errors.bankName && <div className="text-danger">{formik.errors.bankName}</div>}
        </Col>
        <Col md={6}>
          <label>Bank Code</label>
          <input
            name="bankCode"
            type="text"
            className="form-control bg-light border-light mb-2"
            onChange={formik.handleChange}
            value={formik.values.bankCode}
          />
          {formik.errors.bankCode && <div className="text-danger">{formik.errors.bankCode}</div>}
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6}>
          <label>Account Number</label>
          <input
            name="accountNumber"
            type="text"
            className="form-control bg-light border-light mb-2"
            onChange={formik.handleChange}
            value={formik.values.accountNumber}
          />
          {formik.errors.accountNumber && <div className="text-danger">{formik.errors.accountNumber}</div>}
        </Col>
      </Row>
      <div className="text-center">
        <button className="btn btn-primary w-100 btn-signup" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default CompanyFormStep3;
