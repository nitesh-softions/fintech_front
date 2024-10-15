import { takeEvery, fork, put, all, call } from "redux-saga/effects"

//Account Redux states
import { REGISTER_USER } from "./actionTypes"
import { registerUserFailed } from "./actions"



// Is user register successfull then direct plot user in redux.
function* registerUser({ payload: { user } }) {
  console.log("using the following url for registration: ")
  try {
    console.log("Trying to register user (within try block)")
    if (import.meta.env.VITE_APP_DEFAULTAUTH === "ezipay") {
     
    }
  } catch (error) {
    console.log("There was an error registering: ", error)
    yield put(registerUserFailed(error))
  }
}

export function* watchUserRegister() {
  yield takeEvery(REGISTER_USER, registerUser)
}

function* accountSaga() {
  yield all([fork(watchUserRegister)])
}

export default accountSaga
