// DeleteConfirmationModal.js
import React from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import PropTypes from "prop-types";
import infoGif from "../../assets/images/gifs/delete-confirmation.gif";

const DeleteConfirmationModal = ({ isOpen, toggle, onConfirm, selectedUser }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} className="modal-dialog-centered modal-sm">
      <ModalBody className="text-center position-relative">
        <div className="rounded-circle bg-white border border-2 border-danger position-absolute top-0 start-50 translate-middle" style={{ height: '70px', width: '70px' }}>
          <img src={infoGif} alt="" height={68}/>
        </div>
        <h4 className="font-size-20 text-danger mt-4">Are you sure</h4>
        <p>You want to delete the beneficiary <span className="fw-semibold">{selectedUser ? selectedUser.name : "this user"}</span>?</p>
        <div className="d-flex justify-content-center gap-2">
          <Button color="secondary" className="w-100" onClick={toggle}>Cancel</Button>
          <Button color="danger" className="w-100" onClick={onConfirm}>Delete</Button>{' '}
        </div>
      </ModalBody>
    </Modal>
  );
};

DeleteConfirmationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  selectedUser: PropTypes.object, // Can be null
};

export default DeleteConfirmationModal;
