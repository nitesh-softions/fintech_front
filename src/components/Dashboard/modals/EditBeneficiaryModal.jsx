// EditBeneficiaryModal.js
import React, { useState } from "react";
import { Button, Col, Input, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";
import Select from "react-select";
import PropTypes from "prop-types";
import CountrySelect from "../../Common/CountrySelect";

const EditBeneficiaryModal = ({ isOpen, toggle, selectedUser }) => {

  const selectedCountry = (selectedGroup) => {
    console.log('selectedGroup', selectedGroup);
  }
  return (
    <>
      {/* Main Beneficiary Modal */}
      <Modal isOpen={isOpen} toggle={toggle} className="modal-dialog-centered">
        <ModalHeader toggle={toggle}>Update Beneficiary Detail</ModalHeader>
        <ModalBody>
          {selectedUser ? (
            <Row>
              <Col className="mb-3" sm={12}>
                <label className="font-size-13 mb-0">Service Name</label>
                <Input className="form-control form-control-sm border-0 input2 border-bottom-only" type="text" value="Artisanal kale" />
              </Col>
              <Col className="mb-3" sm={12}>
                <label className="font-size-13 mb-0">Country Name</label>
                <CountrySelect selectedCountry={selectedCountry}/>
              </Col>
              <Col className="mb-3" sm={6}>
                <label className="font-size-13 mb-0">Operator Name</label>
                <Input className="form-control form-control-sm border-0 input2 border-bottom-only" type="text" value="Artisanal kale" />
              </Col>
              <Col className="mb-3" sm={6}>
                <label className="font-size-13 mb-0">Mobile No.</label>
                <Input className="form-control form-control-sm border-0 input2 border-bottom-only" type="text" value="+27 50264984581" />
              </Col>
              <Col className="mb-3" sm={6}>
                <label className="font-size-13 mb-0">First Name</label>
                <Input className="form-control form-control-sm border-0 input2 border-bottom-only" type="text" value="Pritesh" />
              </Col>
              <Col className="mb-3" sm={6}>
                <label className="font-size-13 mb-0">Last Name</label>
                <Input className="form-control form-control-sm border-0 input2 border-bottom-only" type="text" value="Salla" />
              </Col>
              <Col className="mb-3" sm={12}>
                <label className="font-size-13 mb-0">Email</label>
                <Input className="form-control form-control-sm border-0 input2 border-bottom-only" type="email" value="pritesh@gmail.com" />
              </Col>
            </Row>
          ) : (
            <p>No user selected.</p>
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" className="px-4" onClick={toggle}>Cancel</Button>{' '}
          <Button color="primary" className="px-4" onClick={toggle}>Update</Button>{' '}
        </ModalFooter>
      </Modal>
    </>
  );
};

EditBeneficiaryModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  selectedUser: PropTypes.object, // Can be null
};

export default EditBeneficiaryModal;
