import React from 'react';
import { Row, Col } from 'reactstrap';

const CompanyFormStep3 = ({ handleChange, handleSubmit }) => {
  return (
    <form onSubmit={(event) => { event.preventDefault(); handleSubmit(3); }}>
      <Row className="mb-3">
        <Col md={6}>
          <label>Bank Name</label>
          <input
            name="bankName" 
            type="text" 
            className="form-control bg-light border-light mb-2" 
            // onChange={formik.handleChange}
            // value={formik.values.companyFirstName}
          />
          {/* {formik.errors.companyFirstName && (
            <div className="text-danger">{formik.errors.companyFirstName}</div>
          )} */}
        </Col>
        <Col md={6}>
          <label>Bank Code</label>
          <input 
            name="bankCode" 
            type="text" 
            className="form-control bg-light border-light mb-2" 
            // onChange={formik.handleChange} 
            // value={formik.values.companyLastName}
          />
          {/* {formik.errors.companyLastName && (
            <div className="text-danger">{formik.errors.companyLastName}</div>
          )} */}
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={12}>
          <label>Account No</label>
          <input 
            name="accountNo" 
            type="text" 
            className="form-control bg-light border-light mb-2" 
            // onChange={formik.handleChange} 
            // value={formik.values.companyPassword}
          />
          {/* {formik.errors.companyPassword && (
            <div className="text-danger">{formik.errors.companyPassword}</div>
          )} */}
        </Col>
      </Row>
      <div className="text-center">
        <button className="btn btn-primary w-100 btn-signup" type="submit">Register</button>
      </div>
    </form>
  );
};

export default CompanyFormStep3;
