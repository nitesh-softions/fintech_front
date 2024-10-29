import CryptoJS from "crypto-js";

// Function to encrypt data
export const encryptData = (data) => {
    const secretKey = import.meta.env.VITE_API_SECRET_KEY;
    const key = CryptoJS.enc.Base64.parse(secretKey);
    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    }).toString();
    return encrypted;
};

// Function to decrypt data
export const decryptData = (encryptedData) => {
    const secretKey = import.meta.env.VITE_API_SECRET_KEY;
    const key = CryptoJS.enc.Base64.parse(secretKey);
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    const decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);
    return decryptedText;
};

// Utility function to get a cookie value by name
export const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
  
    if (parts.length === 2) return parts.pop().split(';').shift();
  };
  
