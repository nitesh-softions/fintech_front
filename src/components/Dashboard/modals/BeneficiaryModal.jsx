// BeneficiaryModal.js
import React, { useState } from "react";
import { Button, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";
import PropTypes from "prop-types";
import DeleteConfirmationModal from "../../Common/DeleteConfirmationModal";
import EditBeneficiaryModal from "./EditBeneficiaryModal";

const BeneficiaryModal = ({ isOpen, toggle, selectedUser }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Toggle for the delete confirmation modal
  const toggleDeleteModal = () => {
    setIsDeleteModalOpen(!isDeleteModalOpen);
  };

  const handleDelete = () => {
    // Handle the delete logic here
    console.log(`Deleted user: ${selectedUser.name}`);
    setIsDeleteModalOpen(false);
  };

  // Toggle for the edit confirmation modal
  const toggleEditModal = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  const handleEdit = () => {
    // Handle the delete logic here
    console.log(`Deleted user: ${selectedUser.name}`);
    setIsEditModalOpen(false);
  };

  return (
    <>
      {/* Main Beneficiary Modal */}
      <Modal isOpen={isOpen} toggle={toggle} className="modal-dialog-centered">
        <ModalHeader toggle={toggle}>Confirm Beneficiary Detail</ModalHeader>
        <ModalBody>
          {/* <h4 className="font-size-16 text-center pt-2 pb-3">Confirm Beneficiary Detail</h4> */}
          {selectedUser ? (
            <Row>
              <Col className="mb-2" sm={12}>
                <label className="font-size-13 mb-1">Service Name</label>
                <h6 className="font-size-13 fw-semibold">Transfer to mobile money</h6>
              </Col>
              <Col className="mb-2" sm={12}>
                <label className="font-size-13 mb-1">Country Name</label>
                <h6 className="font-size-13 fw-semibold">Ivory Coast (CI)</h6>
              </Col>
              <Col className="mb-2" md={6}>
                <label className="font-size-13 mb-1">Operator Name</label>
                <h6 className="font-size-13 fw-semibold">Orange</h6>
              </Col>
              <Col className="mb-2" md={6}>
                <label className="font-size-13 mb-1">Mobile No.</label>
                <h6 className="font-size-13 fw-semibold">2250264984581</h6>
              </Col>
              <Col className="mb-2" md={6}>
                <label className="font-size-13 mb-1">First Name</label>
                <h6 className="font-size-13 fw-semibold">{selectedUser.name}</h6>
              </Col>
              <Col className="mb-2" md={6}>
                <label className="font-size-13 mb-1">Last Name</label>
                <h6 className="font-size-13 fw-semibold">{selectedUser.name}</h6>
              </Col>
              <Col sm={12}>
                <label className="font-size-13 mb-1">Email</label>
                <h6 className="font-size-13 fw-semibold">pritesh@gmail.com</h6>
              </Col>
            </Row>
          ) : (
            <p>No user selected.</p>
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="dark" className="px-4" onClick={toggle}>Confirm</Button>{' '}
          <Button color="primary" className="px-4" onClick={() => {toggle(); toggleEditModal()}}>Edit</Button>{' '}
          <Button color="danger" className="px-4" onClick={() => {toggle(); toggleDeleteModal()}}>Delete</Button>
        </ModalFooter>
      </Modal>

      {/* Delete Confirmation Modal */}
      <DeleteConfirmationModal isOpen={isDeleteModalOpen} toggle={toggleDeleteModal} onConfirm={handleDelete} selectedUser={selectedUser} />
      <EditBeneficiaryModal isOpen={isEditModalOpen} toggle={toggleEditModal} onConfirm={handleEdit} selectedUser={selectedUser} />
    </>
  );
};

BeneficiaryModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  selectedUser: PropTypes.object, // Can be null
};

export default BeneficiaryModal;
