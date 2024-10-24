import React from 'react';
import { Row, Col, Input, Button } from 'reactstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const CompanyFormStep2 = ({ handleSubmit, handlePrev, formValues, handleChange }) => {

  const formik = useFormik({
    initialValues: {
      companyName: formValues.companyName || '',
      companyAddress: formValues.companyAddress || '',
      businessLicense: formValues.businessLicense || '',
      postalCode: formValues.postalCode || '',
      tin: formValues.tin || '',
      vat: formValues.vat || ''
    },
    validationSchema: Yup.object({
      companyName: Yup.string().required('Comany Name is required'),
      companyAddress: Yup.string().required('Company Address is required'),
      businessLicense: Yup.string().required('Business License is required'),
      postalCode: Yup.string().required('Postal Code is required'),
      tin: Yup.string().required('TIN is required'),
      vat: Yup.string().required('VAT is required')
    }),
    onSubmit: (values) => {
      handleSubmit(values); // Pass values to parent
    },
  });

   // Update formik values on change
   React.useEffect(() => {
    formik.setValues({
      companyName: formValues.companyName || '',
      companyAddress: formValues.companyAddress || '',
      businessLicense: formValues.businessLicense || '',
      postalCode: formValues.postalCode || '',
      tin: formValues.tin || '',
      vat: formValues.vat || ''
    });
  }, [formValues]); // Run whenever formValues change



  return (
    <form onSubmit={formik.handleSubmit}>
      <Row className="mb-3">
        <Col md={6}>
          <label>Corporate/Company Name</label>
          <Input
            name="companyName" 
            type="text" 
            className="form-control bg-light border-light mb-2" 
            onChange={(e) => {
              formik.handleChange(e);
              handleChange(e); // Update parent state
            }}
            value={formik.values.companyName}
          />
          {
            formik.errors.companyName && formik.touched.companyName ? (
              <div className="text-danger">{formik.errors.companyName}</div>
            ) : null
          }
        </Col>
        <Col md={6}>
          <label>Business License</label>
          <Input 
            name="businessLicense" 
            type="text" 
            className="form-control bg-light border-light mb-2" 
            onChange={(e) => {
              formik.handleChange(e);
              handleChange(e); // Update parent state
            }}
            value={formik.values.businessLicense}
          />
          {
            formik.errors.businessLicense && formik.touched.businessLicense ? (
              <div className="text-danger">{formik.errors.businessLicense}</div>
            ) : null
          }
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6}>
          <label>Corporate/Company Address</label>
          <Input 
            name="companyAddress" 
            type="text" 
            className="form-control bg-light border-light mb-2" 
            onChange={(e) => {
              formik.handleChange(e);
              handleChange(e); // Update parent state
            }}
            value={formik.values.companyAddress}
          />
          {
            formik.errors.companyAddress && formik.touched.companyAddress ? (
              <div className="text-danger">{formik.errors.companyAddress}</div>
            ) : null
          }
        </Col>
        <Col md={6}>
          <label>Postal Code</label>
          <Input 
            name="postalCode" 
            type="text" 
            className="form-control bg-light border-light mb-2" 
            onChange={(e) => {
              formik.handleChange(e);
              handleChange(e); // Update parent state
            }}
            value={formik.values.postalCode}
          />
          {
            formik.errors.postalCode && formik.touched.postalCode ? (
              <div className="text-danger">{formik.errors.postalCode}</div>
            ) : null
          }
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6}>
          <label>TIN</label>
          <Input 
            name="tin" 
            type="text" 
            className="form-control bg-light border-light mb-2" 
            onChange={(e) => {
              formik.handleChange(e);
              handleChange(e); // Update parent state
            }}
            value={formik.values.tin}
          />
          {
            formik.errors.tin && formik.touched.tin ? (
              <div className="text-danger">{formik.errors.tin}</div>
            ) : null
          }
        </Col>
        <Col md={6}>
          <label>VAT</label>
          <Input 
            name="vat" 
            type="text" 
            className="form-control bg-light border-light mb-2" 
            onChange={(e) => {
              formik.handleChange(e);
              handleChange(e); // Update parent state
            }}
            value={formik.values.vat}
          />
          {
            formik.errors.vat && formik.touched.vat ? (
              <div className="text-danger">{formik.errors.vat}</div>
            ) : null
          }
        </Col>
      </Row>
      <div className="d-flex justify-content-between">
        <Button className="w-25" type="submit"  onClick={handlePrev}>Prev</Button>
        <Button className="w-25 bg-primary" type="submit">Next</Button>
      </div>
    </form>
  );
};

export default CompanyFormStep2;
