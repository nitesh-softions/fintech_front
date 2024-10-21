import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Select from "react-select";
import BeneficiaryModal from "../../components/Dashboard/modals/BeneficiaryModal";
import AddBeneficiaryModal from "../../components/Dashboard/modals/AddBeneficiaryModal";
import CountrySelect from "../../components/Common/CountrySelect";

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
        <Row className="h-100">
          <Col className="d-flex flex-column">
            <div className="card rounded-4 h-100 border-1">
              <div className="card-body">
                <div className="mb-4">
                  {/* Country select with flags */}
                  <div className="d-xl-flex justify-content-end mb-3">
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
              </div>
            </div>
          </Col>
          <Col className="d-flex flex-column">
            <div className="card rounded-4 h-100 border-1">
              <div className="card-body">
                <h4 className="font-size-18">Recent Transactions</h4>
                <div className="table-responsive">
                  <table className="table table-borderless mb-0">
                    <thead>
                      <tr>
                        <th className="border-bottom text-muted opacity-75">Servicer Name</th>
                        <th className="border-bottom text-muted opacity-75">Mobile No</th>
                        <th className="border-bottom text-muted opacity-75">Amount</th>
                        <th className="border-bottom text-muted opacity-75">Transaction Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-bottom">
                        <td>Google Play</td>
                        <td>9874563210</td>
                        <td>50,000</td>
                        <td className="fw-bold text-success">Done</td>
                      </tr>
                      <tr className="border-bottom">
                        <td>Google Play</td>
                        <td>9874563210</td>
                        <td>50,000</td>
                        <td className="fw-bold text-warning">Pending</td>
                      </tr>
                      <tr className="border-bottom">
                        <td>Google Play</td>
                        <td>9874563210</td>
                        <td>50,000</td>
                        <td className="fw-bold text-success">Done</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
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
