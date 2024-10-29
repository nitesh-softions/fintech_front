import axios from "axios";
import { decryptData, encryptData } from "../utils/CommonFunctions";
import { logoutUser } from "../store/actions";

const API_URL = import.meta.env.VITE_API_URL || "http://194.238.16.24/";

const axiosApi = axios.create({
  baseURL: API_URL,
});

// Add a response interceptor to check if the user is logged in
axiosApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle unauthorized errors
      console.error("Unauthorized access - logging out...");
      logoutUser(); // Call your logout function to remove user data and redirect
    }
    return Promise.reject(error);
  }
);


// Decrypt data from GET requests if necessary
export async function get(url, config = {}) {
  return await axiosApi.get(url, { ...config }).then((response) => {
    return decryptData(response.data);
  });
}


export async function post(url, data, config = {}) {
  const encryptedData = encryptData(data); // Encrypt data before sending
  const payload = { encrypted_data: encryptedData };

  return axiosApi
    .post(url, payload, { ...config })
    .then((response) => {
      const decryptedData = decryptData(response.data?.response); // Decrypt data after receiving
      console.log('decryptedData: ', decryptedData);
      return decryptedData;
    });
}

export async function put(url, data, config = {}) {
  const encryptedData = encryptData(data);
  return axiosApi
    .put(url, encryptedData, { ...config })
    .then((response) => decryptData(response.data));
}

export async function del(url, config = {}) {
  return await axiosApi.delete(url, { ...config }).then((response) => {
    return decryptData(response.data);
  });
}
