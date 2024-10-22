import React from 'react'
import { Button, Form, Input } from 'reactstrap'
import CountrySelect from '../../CountrySelect'

const AddMobileMoney = () => {
  const selectedCountry = (selectedGroup) => {
    console.log('selectedGroup', selectedGroup);
  }
  return (
    <>
        <Form>
            <CountrySelect selectedCountry={selectedCountry}/>
            <div className="col d-flex">
                <div className="col-2">
                <select className="form-control bg-light mb-3 border-light px-1">
                    <option>+123</option>
                </select>
                </div>
                <div className="col-10 d-flex">
                    <Input placeholder="Enter Mobile Number" type="text" className="form-control bg-light mb-3 border-light ms-2" />
                </div>
            </div>
            <Input placeholder="Enter Amount in USD" type="text" className="form-control bg-light mb-3 border-light" />
            <Input placeholder="Beneficiary Name" type="text" className="form-control bg-light mb-3 border-light" />
            <textarea placeholder="Account Descriptions" className="form-control bg-light mb-3 border-light" />
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