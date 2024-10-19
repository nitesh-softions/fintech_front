// EditBeneficiaryModal.js
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
    <div className="avatar-xxs ms-3">
      <span className="avatar-title rounded-circle bg-danger text-white font-size-10"> 5 </span>
    </div>
  </div>
);

const EditBeneficiaryModal = ({ isOpen, toggle, selectedUser }) => {
  const [selectedGroup, setSelectedGroup] = useState(null);

  const handleSelectGroup = (selectedGroup) => {
    setSelectedGroup(selectedGroup);
  };
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
                <Select value={selectedGroup} onChange={handleSelectGroup} options={countryCode} className="input2 border-bottom-only p-0" components={{ Option: CustomOption }}/>
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
