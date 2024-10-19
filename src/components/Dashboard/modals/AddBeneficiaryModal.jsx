// AddBeneficiaryModal.js
import React, { useState } from "react";
import { Button, Col, Input, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";
import Select from "react-select";
import PropTypes from "prop-types";

// Country code options with flag images
const countryCode = [
  {
    label: "Countries",
    options: [
      { label: "+91 India", value: "India", flag: "https://t3.ftcdn.net/jpg/06/12/34/84/360_F_612348476_k3i3brMUOo3N9Wk3yoceMHqZ8w4jpFqu.jpg" },
      { label: "+1 Canada", value: "Canada", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1200px-Flag_of_Canada_%28Pantone%29.svg.png" },
      { label: "+27 South Africa", value: "South Africa", flag: "https://cdn.britannica.com/27/4227-050-00DBD10A/Flag-South-Africa.jpg" },
    ],
  },
];

// Custom option component for react-select
const CustomOption = ({ innerRef, innerProps, data, isFocused }) => (
  <div ref={innerRef} {...innerProps} className={`d-flex align-items-center ${isFocused ? 'bg-primary text-white' : ''}`} style={{ padding: '5px 12px', cursor: 'pointer' }} >
    <img src={data.flag} alt="" width="25" height="25" className="me-2 rounded-circle" />
    <span>{data.label}</span>
  </div>
);

const AddBeneficiaryModal = ({ isOpen, toggle }) => {
  const [selectedGroup, setSelectedGroup] = useState(null);

  const handleSelectGroup = (selectedGroup) => {
    setSelectedGroup(selectedGroup);
  };
  return (
    <>
      {/* Main Beneficiary Modal */}
      <Modal isOpen={isOpen} toggle={toggle} className="modal-dialog-centered modal-lg" scrollable>
        <ModalHeader toggle={toggle}> Add Beneficiary Detail </ModalHeader>
        <ModalBody>
            <Row>
              <Col className="mb-4" lg={4}>
                <label className="font-size-13 mb-0">Beneficiary Type</label>
                <Select value={selectedGroup} onChange={handleSelectGroup} options={countryCode} className="input2 border-bottom-only p-0" components={{ Option: CustomOption }} placeholder="Select Beneficiary Type"/>
              </Col>
              <Col className="mb-4" lg={4}>
                <label className="font-size-13 mb-0">Country</label>
                <Select value={selectedGroup} onChange={handleSelectGroup} options={countryCode} className="input2 border-bottom-only p-0" components={{ Option: CustomOption }} placeholder="Select Country"/>
              </Col>
              <Col className="mb-4" lg={4}>
                <label className="font-size-13 mb-0">Channel Provider</label>
                <Select value={selectedGroup} onChange={handleSelectGroup} options={countryCode} className="input2 border-bottom-only p-0" components={{ Option: CustomOption }} placeholder="Select Channel Provider"/>
              </Col>
              <Col className="mb-4" sm={6}>
                <label className="font-size-13 mb-0">Bank Account Number</label>
                <Input className="form-control form-control-sm border-0 input2 border-bottom-only" type="text" placeholder="Enter Bank Account Number" />
              </Col>
              <Col className="mb-4" sm={6}>
                <label className="font-size-13 mb-0">Beneficiary First Name</label>
                <Input className="form-control form-control-sm border-0 input2 border-bottom-only" type="text" placeholder="Enter First Name" />
              </Col>
              <Col className="mb-4" sm={6}>
                <label className="font-size-13 mb-0">Beneficiary Middle Name ( Optional )</label>
                <Input className="form-control form-control-sm border-0 input2 border-bottom-only" type="text" placeholder="Enter Middle Name" />
              </Col>
              <Col className="mb-4" sm={6}>
                <label className="font-size-13 mb-0">Beneficiary Last Name</label>
                <Input className="form-control form-control-sm border-0 input2 border-bottom-only" type="text" placeholder="Enter Last Name" />
              </Col>
              <Col className="mb-4" sm={6}>
                <label className="font-size-13 mb-0">Beneficiary Address</label>
                <Input className="form-control form-control-sm border-0 input2 border-bottom-only" type="text" placeholder="Enter Address" />
              </Col>
              <Col className="mb-4" sm={6}>
                <label className="font-size-13 mb-0">Beneficiary State</label>
                <Input className="form-control form-control-sm border-0 input2 border-bottom-only" type="text" placeholder="Enter State" />
              </Col>
              <Col className="mb-4" sm={6}>
                <label className="font-size-13 mb-0">Beneficiary Email</label>
                <Input className="form-control form-control-sm border-0 input2 border-bottom-only" type="email" placeholder="Enter Email id" />
              </Col>
              <Col className="mb-4" sm={6}>
                <label className="font-size-13 mb-0">Beneficiary Mobile No</label>
                <Input className="form-control form-control-sm border-0 input2 border-bottom-only" type="text" placeholder="Enter Mobile No" />
              </Col>
              <Col className="mb-4" lg={6}>
                <label className="font-size-13 mb-0">Select Beneficiary Relationship with sender</label>
                <Select value={selectedGroup} onChange={handleSelectGroup} options={countryCode} className="input2 border-bottom-only p-0" components={{ Option: CustomOption }} placeholder="Select Relationship"/>
              </Col>
              <Col className="mb-4" lg={6}>
                <label className="font-size-13 mb-0">Beneficiary Id Type</label>
                <Select value={selectedGroup} onChange={handleSelectGroup} options={countryCode} className="input2 border-bottom-only p-0" components={{ Option: CustomOption }} placeholder="Select Id Type"/>
              </Col>
              <Col className="mb-4" lg={6}>
                <label className="font-size-13 mb-0">Select Source of Fund</label>
                <Select value={selectedGroup} onChange={handleSelectGroup} options={countryCode} className="input2 border-bottom-only p-0" components={{ Option: CustomOption }} placeholder="Select Source"/>
              </Col>
              <Col className="mb-4" lg={6}>
                <label className="font-size-13 mb-0">Select Remittance purpose</label>
                <Select value={selectedGroup} onChange={handleSelectGroup} options={countryCode} className="input2 border-bottom-only p-0" components={{ Option: CustomOption }} placeholder="Select Remittance"/>
              </Col>
              <Col className="mb-4" sm={6}>
                <label className="font-size-13 mb-0">Beneficiary Id Number</label>
                <Input className="form-control form-control-sm border-0 input2 border-bottom-only" type="text" placeholder="Enter Id Number" />
              </Col>
              <Col sm={6}>
                <label className="font-size-13 mb-0">Receiver Id Expiry Date</label>
                <Input className="form-control form-control-sm border-0 input2 border-bottom-only" type="date" />
              </Col>
            </Row>
        </ModalBody>
        <ModalFooter>
              <Button color="secondary" onClick={toggle}>Cancel</Button>{' '}
              <Button color="primary" onClick={toggle}>Add</Button>{' '}
        </ModalFooter>
      </Modal>
    </>
  );
};

AddBeneficiaryModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  selectedUser: PropTypes.object, // Can be null
};

export default AddBeneficiaryModal;
