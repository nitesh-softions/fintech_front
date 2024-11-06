// actions.js
import {
  API_ERROR,
  COUNTRY_LIST,
  COUNTRY_LIST_SUCCESS,
} from "./actionTypes";

export const countryList = () => {
  return {
    type: COUNTRY_LIST,
  };
};

export const countryListSuccess = (country) => {
  return {
    type: COUNTRY_LIST_SUCCESS,
    payload: country,
  };
};

export const apiError = (error) => {
  return {
    type: API_ERROR,
    payload: error,
  };
};
