import axios from "axios";
import { del, get, post, put } from "./api_helper";
import * as url from "./url_helper";

// Gets the logged in user data from local session
const getLoggedInUser = () => {
  const user = localStorage.getItem("user");
  if (user) return JSON.parse(user);
  return null;
};

// Check if user is logged in
const isUserAuthenticated = () => {
  return getLoggedInUser() !== null;
};

// Login Method
const postLogin = data => {
  return post(url.POST_LOGIN, data); // Return the promise from post
};

// Edit profile
const postJwtProfile = data => post(url.POST_EDIT_JWT_PROFILE, data);

// Register Method
const postJwtRegister = (url, data) => {
  return axios
    .post(url, data)
    .then(response => {
      if (response.status >= 200 && response.status <= 299) return response.data; // Fixed condition
      throw response.data;
    })
    .catch(err => {
      let message;
      if (err.response && err.response.status) {
        switch (err.response.status) {
          case 404:
            message = "Sorry! The page you are looking for could not be found.";
            break;
          case 500:
            message = "Sorry! Something went wrong, please contact our support team.";
            break;
          case 401:
            message = "Invalid credentials.";
            break;
          default:
            message = err.message || "An unknown error occurred."; // Improved default error message
            break;
        }
      }
      throw message;
    });
};

// Post Social Login
export const postSocialLogin = data => post(url.SOCIAL_LOGIN, data);

export {
  getLoggedInUser,
  isUserAuthenticated,
  postLogin,
  postJwtRegister,
  postJwtProfile,
};
