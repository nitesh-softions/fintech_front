// saga.js
import { call, put, takeEvery } from "redux-saga/effects";
import { COUNTRY_LIST } from "./actionTypes";
import { apiError, countryListSuccess } from "./actions";

// Helper imports
import { getCountryList } from "../../../helpers/backend_helper";

function* countryList() {
  try {
    const response = yield call(getCountryList);

    yield put(countryListSuccess(response));
  } catch (error) {
    yield put(apiError(error.response?.data || "Failed to fetch country list"));
  }
}

function* countrySaga() {
  yield takeEvery(COUNTRY_LIST, countryList);
}

export default countrySaga;
