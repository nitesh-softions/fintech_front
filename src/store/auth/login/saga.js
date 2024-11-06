import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// Login Redux States
import { LOGIN_USER, LOGOUT_USER, SOCIAL_LOGIN } from "./actionTypes";
import { apiError, loginSuccess, logoutUserSuccess } from "./actions";

//Include Both Helper File with needed methods
import { postLogin } from "../../../helpers/backend_helper";
import { encryptData } from "../../../utils/CommonFunctions";


function* loginUser({ payload: { user, history } }) {
  let data = { email: user.email, password: user.password }
  
  try {
    const response = yield call(postLogin, data);

    // Store the token securely
    const token = encryptData(JSON.parse(response).token);
    const user = encryptData(JSON.parse(response));
    // Set the token as a cookie
    document.cookie = `token=${token}; Secure; SameSite=Strict; path=/;`;
    document.cookie = `user=${user}; Secure; SameSite=Strict; path=/;`;

    yield put(loginSuccess(JSON.parse(response)));

    history('/dashboard');
  } catch (error) {
    yield put(apiError(error.response.data));
  }
}

function* logoutUser({ payload: { history } }) {
  try {
    document.cookie = `token=; Max-Age=0; path=/;`; 
    document.cookie = `user=; Max-Age=0; path=/;`; 

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
