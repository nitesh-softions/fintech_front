import React, { useState } from 'react'
import { Button, Col, Form, Input, Row } from 'reactstrap'
import CountrySelect from '../../CountrySelect'
import ReactSelect from '../../ReactSelect';

const AddMobileMoney = () => {
  const [selectedState, setSelectedState] = useState("");
  const [amount, setAmount] = useState("");
  const selectedCountry = (selectedGroup) => {
    console.log('selectedGroup', selectedGroup);
    setSelectedState(selectedGroup.code)
  }
  return (
    <>
        <Form>
            <CountrySelect selectedCountry={selectedCountry}/>
            <div className="d-flex">
                <Input placeholder="Country Code" type="text" value={selectedState} className="form-control bg-light mb-3 border-light w-fit" disabled/>
                <Input placeholder="Enter Mobile Number" type="text" className="form-control bg-light mb-3 border-light ms-2" />
            </div>
            <div className='mb-3'>
              <ReactSelect isMulti={false} placeholder="Select Channel *"/>
            </div>
            <Input placeholder="Enter Amount in USD" type="text" value={amount} onChange={(e) => setAmount(e.target.value)} className={`form-control bg-light border-light ${amount <= 0 ? "mb-3" : "mb-1"}`} />
            <div size="lg" className={`w-100 text-start mb-3 p-2 rounded-2 border g-2 ${amount <= 0 ? "d-none" : ""}`} >
              <div className="d-flex justify-content-between align-items-center">
                <Row className="w-100">
                  <Col xs={6} md={4}><span className="font-size-12 mb-0 text-dark fw-semibold text-nowrap">Fee(USD) <div className="text-muted fw-normal">0</div></span></Col>
                  <Col xs={6} md={4}><span className="font-size-12 mb-0 text-dark fw-semibold text-nowrap">Net Amount In USD <div className="text-muted fw-normal">100</div></span></Col>
                  <Col xs={6} md={4}><span className="font-size-12 mb-0 text-dark fw-semibold text-nowrap">Debit In (XOF) <div className="text-muted fw-normal">65,500</div></span></Col>
                </Row>
              </div>
            </div>
            <Input placeholder="Beneficiary Name" type="text" className="form-control bg-light mb-3 border-light" />
            <textarea placeholder="Account Description" className="form-control bg-light mb-3 border-light" />
            <div className="d-flex align-content-center justify-content-between gap-1">
              <p className="font-size-11 pe-xl-5">
                Once a new amount is entered or payment method is changed, the exchange rate and fees will be recalculated.
              </p>
              <Button type="submit" className='text-nowrap' color="primary"> Add Money </Button>
            </div>
        </Form>
    </>
  )
}

export default AddMobileMoney