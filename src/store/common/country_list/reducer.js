// reducer.js
import { COUNTRY_LIST, COUNTRY_LIST_SUCCESS, API_ERROR } from "./actionTypes";

const initialState = {
  countries: null,
  error: "",
  loading: false,
};

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTRY_LIST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case COUNTRY_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        countries: action.payload,
        error: "",
      };
    case API_ERROR:
      return { 
        ...state, 
        loading: false,
        error: action.payload || "Failed to fetch country list",
      };
    default:
      return state;
  }
};

export default countryReducer;
