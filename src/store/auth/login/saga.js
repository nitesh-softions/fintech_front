import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// Login Redux States
import { LOGIN_USER, LOGOUT_USER, SOCIAL_LOGIN } from "./actionTypes";
import { apiError, loginSuccess, logoutUserSuccess } from "./actions";

//Include Both Helper File with needed methods
import { postLogin } from "../../../helpers/backend_helper";


function* loginUser({ payload: { user, history } }) {
  let data = { email: user.email, password: user.password }
  let base64Str = btoa(JSON.stringify(data));
  console.log({"data":base64Str});
  
  try {
    const response = yield call(postLogin, data);
    localStorage.setItem("authUser", JSON.stringify(response));
    yield put(loginSuccess(response));

    history('/dashboard');
  } catch (error) {
    yield put(apiError(error));
  }
}

function* logoutUser({ payload: { history } }) {
  try {
    localStorage.removeItem("authUser");

    // if (import.meta.env.VITE_APP_DEFAULTAUTH === "geopay") {
    //   // const response = yield call(fireBaseBackend.logout);
    //   yield put(logoutUserSuccess(response));
    // }
    history('/login');
  } catch (error) {
    yield put(apiError(error));
  }
}

function* socialLogin({ payload: { type, history } }) {
  try {
    if (import.meta.env.VITE_APP_DEFAULTAUTH === "geopay") {
      // const fireBaseBackend = getFirebaseBackend();
      // const response = yield call(fireBaseBackend.socialLoginUser, type);
      // if (response) {
      //   history("/dashboard");
      // } else {
      //   history("/login");
      // }
      // localStorage.setItem("authUser", JSON.stringify(response));
      // yield put(loginSuccess(response));
      // if(response)
      // history("/dashboard");
    }
  } catch (error) {
    yield put(apiError(error));
  }
}

function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser);
  yield takeLatest(SOCIAL_LOGIN, socialLogin);
  yield takeEvery(LOGOUT_USER, logoutUser);
}

export default authSaga;
