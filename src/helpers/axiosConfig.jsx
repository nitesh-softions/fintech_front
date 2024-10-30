// axiosConfig.js
import axios from "axios";
import { logoutUser } from "../store/actions";
import { getCookie } from "../utils/CommonFunctions";

const API_URL = import.meta.env.VITE_API_URL || "http://194.238.16.24/";

const axiosApi = axios.create({
  baseURL: API_URL,
});

// Response interceptor for error handling
axiosApi.interceptors.response.use(
  (response) => {
    // Return the response if it's successful
    return response;
  },
  (error) => {
    // Handle errors
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error("Error Response Status:", error.response.status);
      console.error("Error Response Data:", error.response.data);

      switch (error.response.status) {
        case 401:
          // Handle unauthorized access (e.g., redirect to login)
          console.error("Unauthorized access - redirecting to login.");
          logoutUser();
          break;
        case 403:
          console.error("Forbidden access - you don't have permission.");
          break;
        case 404:
          console.error("Resource not found - redirecting to not found page.");
          break;
        case 500:
          console.error("Internal server error - something went wrong.");
          break;
        default:
          console.error("An unexpected error occurred:", error.response.data);
          break;
      }
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received:", error.request);
    } else {
      // Something happened in setting up the request
      console.error("Error Message:", error.message);
    }
    return Promise.reject(error); // Reject the promise to be handled in the calling code
  }
);

export default axiosApi;
