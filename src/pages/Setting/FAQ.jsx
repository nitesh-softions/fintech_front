import PropTypes from "prop-types";
import React, { useState } from "react";
import { Button, Card, CardBody, Col, Container, DropdownItem, DropdownMenu, DropdownToggle, Form, Input, Label, Row, UncontrolledCollapse, UncontrolledDropdown } from "reactstrap";

//i18n
import { withTranslation } from "react-i18next";

import SVGIcons from "../../components/Common/SVGIcons";

const collapsibleData = [
  { id: 'toggler1', question: 'How to create a account?', ans: 'Open the Tradebase app to get started and follow the steps. Tradebase doesn’t charge a fee to create or maintain your Tradebase account.'},
  { id: 'toggler2', question: 'How to add a payment method by this app?', ans: 'Open the Tradebase app to get started and follow the steps. Tradebase doesn’t charge a fee to create or maintain your Tradebase account.'},
  { id: 'toggler3', question: 'What Time Does The Stock Market Open?', ans: 'Open the Tradebase app to get started and follow the steps. Tradebase doesn’t charge a fee to create or maintain your Tradebase account.'},
  { id: 'toggler4', question: 'How to add a payment', ans: 'Open the Tradebase app to get started and follow the steps. Tradebase doesn’t charge a fee to create or maintain your Tradebase account.'}
];

const FAQ = props => {
  const [openStates, setOpenStates] = useState({});

  const handleToggle = (id) => {
    setOpenStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle the open state for the given id
    }));
  };
  //meta title
  document.title = "Geopay | FAQ";

  return (
    <React.Fragment>
      <div className="d-flex flex-column position-relative mb-3">
          <span className="d-block d-sm-none">
            <h2 className="mb-3 font-size-18 text-secondary text-center">Frequently Asked Question</h2>
          </span>
          <h3 className="font-size-18 text-dark text-center">How can i help you?</h3>
          <div className="app-search m-auto col-12 col-md-6">
            <div className="position-relative">
              <input type="text" className="form-control rounded-3" placeholder={props.t("Search for your question") + "..."} />
              <span className="bx bx-search-alt" />
            </div>
          </div>

          <div>
            {collapsibleData.map(({ id, question, ans }) => (
              <div key={id} className="rounded-2 border mb-2">
                <div onClick={() => handleToggle(id)} className="w-100 text-start mb-1 p-2 px-3 g-2" id={id}>
                  <div className="d-flex justify-content-between align-items-center">
                    <h3 className="font-size-14 fw-semibold text-dark text-center mb-0">{question}</h3>

                    {openStates[id] ? 
                      <SVGIcons.FaMinus className={`text-secondary p-1 rounded-circle font-size-18 transition-transform`} style={{ minWidth: '20px', height: '20px' }} />
                      : 
                      <SVGIcons.FaPlus className={`text-secondary p-1 rounded-circle font-size-18 transition-transform`} style={{ minWidth: '20px', height: '20px' }} />
                    }
                  </div>
                </div>
                <UncontrolledCollapse toggler={`#${id}`}>
                  <Card className="mb-0">
                    <CardBody className="p-3 pt-1">
                      <span className="font-size-13 text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed dignissimos esse fuga! Minus, alias.</span>
                    </CardBody>
                  </Card>
                </UncontrolledCollapse>
              </div>
            ))}
          </div>
      </div>
    </React.Fragment>
  );
};

FAQ.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
};

export default withTranslation()(FAQ);
