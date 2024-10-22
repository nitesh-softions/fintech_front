import React, { useState } from "react";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { Modal, ModalBody, } from "reactstrap";
import { IoClose } from "react-icons/io5";

import QuickPaySlider from "../../Common/QuickPaySlider";

const QuickPayModal = ({ onDelete }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);


  return (
    <div className="d-xxl-none">
      {/* Button to trigger the modal */}
      <FaMoneyBillTransfer onClick={toggle} className="btn btn-secondary shadow-lg position-fixed bottom-0 end-0 mb-5 me-4 me-lg-5 rounded-circle" style={{ width: "45px", height: "45px" }}/>

      {/* Delete confirmation modal */}
      <Modal isOpen={modal} className="modal-dialog-centered quick-pay-modal">
        <ModalBody className="bg-primary py-4 rounded-4 quick-transfer-card w-100 h-100 position-relative mb-0 text-white">
          <div className="d-flex justify-content-end">
            <IoClose onClick={toggle} className="font-size-24"/>
          </div>
          <QuickPaySlider />
        </ModalBody>
      </Modal>
    </div>  
  );
};

export default QuickPayModal;
