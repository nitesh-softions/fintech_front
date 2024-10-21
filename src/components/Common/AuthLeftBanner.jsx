import React from "react";
import PropTypes from "prop-types";
import authbannerstar from '../../assets/images/auth-banner-star.svg';
import ratings from "../../assets/images/ratings.svg";
import withRouter from "../../components/Common/withRouter";

// images
import avatar1 from '../../assets/images/users/avatar-1.jpg';
import avatar2 from '../../assets/images/users/avatar-2.jpg';
import avatar3 from '../../assets/images/users/avatar-3.jpg';
import avatar4 from '../../assets/images/users/avatar-4.jpg';

// scss style
import '../../assets/scss/custom/components/authentication.scss';

const AuthLeftBanner = (props) => {

    // Array of static image paths for user avatars
//    const userAvatars = [avatar1, avatar2, avatar3, avatar4];


    return (
        <React.Fragment>
            <div className="col-lg-6 d-none d-lg-flex align-items-center justify-content-center text-white auth-left-image-banner">
                <div className="position-absolute bottom-0 start-0 p-5">
                    <div className="relative h-full w-full text-white flex flex-col justify-end p-6">
                    <img src={authbannerstar} className="left-banner-text" alt="Banner star" />
                    <div className="mb-4">
                        <h1 className="text-2xl font-semibold mb-2">Very Good Works are waiting for you. Login now.</h1>
                        <p>Access your account to explore exclusive features, personalized content, and stay up-to-date with the latest updates.</p>
                    </div>

                    <div className="d-flex items-center align-items-center">
                        <div className="avatar-group">
                        <div className="avatar-group-item">
                            <a className="d-inline-block" id="member1" href="#">
                            <img src={avatar1} className="rounded-circle avatar-sm" alt="Avatar 1" />
                            </a>
                        </div>
                        <div className="avatar-group-item">
                            <a className="d-inline-block" id="member4" href="#">
                            <img src={avatar2} className="rounded-circle avatar-sm" alt="Avatar 2" />
                            </a>
                        </div>
                        <div className="avatar-group-item">
                            <a className="d-inline-block" id="member6" href="#">
                            <div className="avatar-sm">
                                <span className="avatar-title rounded-circle bg-success text-white font-size-16">A</span>
                            </div>
                            </a>
                        </div>
                        <div className="avatar-group-item">
                            <a className="d-inline-block" id="member8" href="#">
                            <img src={avatar3} className="rounded-circle avatar-sm" alt="Avatar 3" />
                            </a>
                        </div>
                        </div>

                        <div className="d-flex flex-column ms-2">
                        <div className="d-flex gap-2">
                            <img src={ratings} className="ratings" alt="Ratings" />
                            <img src={ratings} className="ratings" alt="Ratings" />
                            <img src={ratings} className="ratings" alt="Ratings" />
                            <img src={ratings} className="ratings" alt="Ratings" />
                            <img src={ratings} className="ratings" alt="Ratings" />
                        </div>
                        <span className="ml-4 text-sm">From 200+ reviews</span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default withRouter(AuthLeftBanner);

AuthLeftBanner.propTypes = {
  history: PropTypes.object,
};