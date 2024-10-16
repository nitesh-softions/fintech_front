import React from 'react'


const CustomButton = ({ btn_icon, btn_bottom_icon, btn_heading, onClick }) => {
    let Icon1 = btn_icon
    let Icon2 = btn_bottom_icon
  return (
    <>
        <button onClick={onClick} className="btn btn-soft-primary waves-effect waves-light card rounded-4 w-100 h-100 p-2 position-relative overflow-visible border border-dark border-opacity-10">
            <div className="card-body">
                <h5 className="d-flex justify-content-center align-items-center mb-0">
                    <span className='heading_icon position-absolute'>
                        <Icon1/>
                    </span>
                    <span className='mt-3'>{btn_heading}</span>
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

export default CustomButton