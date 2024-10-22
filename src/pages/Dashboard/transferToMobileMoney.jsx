import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Select from "react-select";
import BeneficiaryModal from "../../components/Dashboard/modals/BeneficiaryModal";
import AddBeneficiaryModal from "../../components/Dashboard/modals/AddBeneficiaryModal";
import CountrySelect from "../../components/Common/CountrySelect";
import QuickTransferCard from "../../components/Dashboard/QuickTransferCard";
import RecentTransactionCard from "../../components/Dashboard/RecentTransactionCard";

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Samuel Green" },
  { id: 4, name: "Rachel Adams" },
];

const TransferToMobileMoney = (props) => {
  const [searchTerm, setSearchTerm] = useState(""); // To manage search input
  const [selectedUser, setSelectedUser] = useState(null); // To manage selected user
  const [isUserConfirmModalOpen, setIsUserConfirmModalOpen] = useState(false); // Modal visibility state
  const [addBeneficiaryModal, setAddBeneficiaryModal] = useState(false);

  const toggleConfirmModal = () => setIsUserConfirmModalOpen(!isUserConfirmModalOpen);
  const toggleAddBeneficiaryModal = () => setAddBeneficiaryModal(!addBeneficiaryModal);
  
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Set the document title
  useEffect(() => {
    document.title = "Softieons | Dashboard";
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setIsUserConfirmModalOpen(true);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const selectedCountry = (selectedGroup) => {
    console.log('selectedGroup', selectedGroup);
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
              <div className="position-relative search-2 col-md-6 ms-md-auto">
                <input type="text" className="form-control" placeholder="Search users..." value={searchTerm} onChange={handleSearchChange} />
                <span className="bx bx-search-alt position-absolute font-size-20 opacity-50" />
              </div>
              <ul className="list-group mt-3">
                {filteredUsers.map(user => (
                  <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center" onClick={() => handleUserClick(user)} style={{ cursor: "pointer" }}>
                    {user.name}
                  </li>
                ))}
              </ul>
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
