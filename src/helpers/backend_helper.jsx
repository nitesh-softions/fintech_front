import axios from "axios";
import { del, get, post, put } from "./api_helper";
import * as url from "./url_helper";

// Login Method
const postLogin = data => {
  return post(url.POST_LOGIN, data); // Return the promise from post
};



// Common APIs
const getCountryList = () => {
  return get(url.GET_COUNTRY_LIST);
};

export {
  postLogin,
  getCountryList,
};
