import React, { useEffect, useState } from "react";
import { Button, Col, Container, Input, Row } from "reactstrap";
import Select from "react-select";
import BeneficiaryModal from "../../components/Dashboard/modals/BeneficiaryModal";
import AddBeneficiaryModal from "../../components/Dashboard/modals/AddBeneficiaryModal";
import CountrySelect from "../../components/Common/CountrySelect";
import QuickTransferCard from "../../components/Dashboard/QuickTransferCard";
import RecentTransactionCard from "../../components/Dashboard/RecentTransactionCard";
import ReactSelect from "../../components/Common/ReactSelect";
import { values } from "lodash";

const users = [
  { id: 1, label: "John Doe", value: "John Doe" },
  { id: 2, label: "Jane Smith", value: "Jane Smith" },
  { id: 3, label: "Samuel Green", value: "Samuel Green" },
  { id: 4, label: "Rachel Adams", value: "Rachel Adams" },
];


const TransferToMobileMoney = (props) => {
  const [amount, setAmount] = useState("");
  const [selectedUser, setSelectedUser] = useState(null); // To manage selected user
  const [isUserConfirmModalOpen, setIsUserConfirmModalOpen] = useState(false); // Modal visibility state
  const [addBeneficiaryModal, setAddBeneficiaryModal] = useState(false);

  const toggleConfirmModal = () => setIsUserConfirmModalOpen(!isUserConfirmModalOpen);
  const toggleAddBeneficiaryModal = () => setAddBeneficiaryModal(!addBeneficiaryModal);
  
  // Set the document title
  useEffect(() => {
    document.title = "Softieons | Dashboard";
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setIsUserConfirmModalOpen(true);
  };
  
  const selectedCountry = (selectedGroup) => {
    console.log('selectedGroup', selectedGroup);
  }

  const handleSelectedUser = (selectedUser) => {
    setSelectedUser(selectedUser);
    handleUserClick(selectedUser)
  }

  return (
    <React.Fragment>
      <Container fluid className="page-content">
        <Row>
          <Col xxl={9} className="pe-lg-4 d-flex flex-column justify-content-between">
            <div className="mb-4">
              {/* Country select with flags */}
              <div className="d-xl-flex justify-content-between align-items-center mb-4">
                <h2 className="font-size-22">Transfer To Mobile Money</h2>
                <button className="btn btn-primary w-md text-center h-25" onClick={() => setAddBeneficiaryModal(true)}> Add Beneficiary Details </button>
              </div>

              <CountrySelect selectedCountry={selectedCountry}/>

              <div className="mb-3">
                <ReactSelect options={users} placeholder="Select Beneficiary*" isMulti={false} selectedUser={handleSelectedUser}/>
              </div>

              <Input placeholder="Enter Amount in USD" type="text" value={amount} onChange={(e) => setAmount(e.target.value)} className={`form-control bg-light border-light ${amount <= 0 ? "mb-3" : "mb-1"}`} />
              <div size="lg" className={`w-100 text-start mb-3 p-2 rounded-2 border g-2 ${amount <= 0 ? "d-none" : ""}`} >
                <div className="d-flex justify-content-between align-items-center">
                  <Row className="w-100">
                    <Col xs={6} md={4}><span className="font-size-12 mb-0 text-dark fw-semibold text-nowrap">Fee(USD) <div className="text-muted fw-normal">0</div></span></Col>
                    <Col xs={6} md={4}><span className="font-size-12 mb-0 text-dark fw-semibold text-nowrap">Net Amount In USD <div className="text-muted fw-normal">100</div></span></Col>
                    <Col xs={6} md={4} className="text-md-end"><span className="font-size-12 mb-0 text-dark fw-semibold text-nowrap">Debit In (XOF) <div className="text-muted fw-normal">65,500</div></span></Col>
                  </Row>
                </div>
              </div>

              <textarea placeholder="Account Description" className="form-control bg-light mb-3 border-light" />

              <div className="d-flex align-content-center justify-content-between gap-1">
                <p className="font-size-11 pe-xl-5">
                  Once a new amount is entered or payment method is changed, the exchange rate and fees will be recalculated.
                </p>
                <Button type="submit" className='text-nowrap' color="primary"> Submit </Button>
              </div>
            </div>
          </Col>
          <Col xxl={3} className="pt-4 pt-xxl-0 border-start border-dark border-opacity-25 ps-lg-4 quick-transfer-column">
            <Container fluid className="p-0">
              <div className="d-none d-xxl-block">
                <h4 className="font-size-18">Quick Transfer</h4>
                <QuickTransferCard />
              </div>
              <h4 className="font-size-18">Recent Transaction</h4>
              <RecentTransactionCard />
            </Container>
          </Col>
        </Row>
      </Container>
      {/* Use BeneficiaryModal component */}
      <BeneficiaryModal isOpen={isUserConfirmModalOpen} toggle={toggleConfirmModal} selectedUser={selectedUser} />
      <AddBeneficiaryModal isOpen={addBeneficiaryModal} toggle={toggleAddBeneficiaryModal}/>
    </React.Fragment>
  );
};

export default TransferToMobileMoney;
