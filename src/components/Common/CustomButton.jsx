import React from 'react'


const CustomButton = ({ btn_icon, btn_bottom_icon, btn_heading, onClick }) => {
    let Icon1 = btn_icon
    let Icon2 = btn_bottom_icon
  return (
    <>
        <button onClick={onClick} className="btn btn-soft-primary waves-effect waves-light card rounded-4 w-100 h-100 position-relative overflow-visible shadow">
            <div className="card-body p-1 p-lg-3">
                <h5 className="d-flex flex-column justify-content-center align-items-center mb-0">
                    <Icon1 />
                    <span className='mt-3 font-size-15'>{btn_heading}</span>
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