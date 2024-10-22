import React from 'react'
import { Button, Form, Input } from 'reactstrap'

const AddNigeriaBank = () => {

  return (
    <>
        <Form>
            <Input placeholder="Enter Amount in USD (eg : 100 or eg : 0.0)" type="text" className="form-control bg-light mb-3 border-light" />
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

export default AddNigeriaBank