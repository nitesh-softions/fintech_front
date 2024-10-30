import axiosApi from "./axiosConfig";
import { decryptData, encryptData } from "../utils/CommonFunctions";


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
