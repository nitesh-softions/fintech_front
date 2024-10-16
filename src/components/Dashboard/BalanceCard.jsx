import React from 'react'


const BalanceCard = ({ btn_icon, btn_bottom_icon, btn_heading, onClick, btn_content }) => {
    let Icon1 = btn_icon
    let Icon2 = btn_bottom_icon
  return (
    <>
        <button onClick={onClick} className="card rounded-5 w-100 h-100 py-lg-3 position-relative border mb-0 bg-primary-subtle">
            <div className="card-body w-100">
                <h5 className="d-flex justify-content-between align-items-center mb-0">
                    <span className='text-start'>
                        <label>{btn_heading}</label>
                        <h1 className='font-size-24'>{btn_content}</h1>
                    </span>
                    <span className='heading_icon avatar-title rounded-circle bg-primary'>
                        <Icon1 className="text-white"/>
                    </span>
                </h5>
                {(Icon2 !== undefined && Icon2 !== null)?
                    <span className='bottom_icon'>
                        <Icon2/>
                    </span>
                    :
                    <></>
                }
            </div>
        </button>
    </>
  )
}

export default BalanceCard