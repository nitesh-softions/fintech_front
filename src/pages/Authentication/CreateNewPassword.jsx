import PropTypes from "prop-types";
import React from "react";
import withRouter from "../../components/Common/withRouter";
import AuthLeftBanner from "../../components/Common/AuthLeftBanner";

// import images
import bgAuthOverlay from '../../assets/images/bgAuthOverlay.svg';


const CreateNewPassword = (props) => {
    return(
        <React.Fragment>
            <div className="container-fluid vh-100 overflow-hidden">
                <div className="row h-100">
                    {/* Left Section */}
                    <AuthLeftBanner/>

                    {/* <!-- Right Section --> */}
                    <form className="col-lg-6 d-flex flex-column justify-content-center align-items-center position-relative bg-white">
                        
                            {/* <!-- Top right corner watermark --> */}
                            <div className="position-absolute top-0 end-0 text-align d-flex justify-content-end w-100">
                                <img src={bgAuthOverlay} alt="Logo" className="img-fluid w-50 h-50"/>
                            </div>

                            {/* <!-- Create New Password Form Container --> */}
                            <div className="w-100 px-5 auth-container w-50">
                                <h3 className="text-center text-black mb-3">Create New Password</h3>
                                <p className="text-center text-secondary mb-4 ">Your new password must be different from previous used passwords.</p>
                                <div className="mb-4">
                                    <div className="mb-3">
                                        <label>Password</label>
                                        <div className="input-group">
                                            <input type="password" className="form-control border-0 bg-light"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="mb-3">
                                        <label>Confirm Password</label>
                                        <div className="input-group">
                                            <input type="password" className="form-control border-0 bg-light"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <p>if you didn't receive A code <label className="text-secondary">resend</label></p>
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-primary w-100 btn-login" type="button">Verify</button>
                                </div>
                            </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

CreateNewPassword.propTypes = {
    history: PropTypes.object,
};
  
export default withRouter(CreateNewPassword);