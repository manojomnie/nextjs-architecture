import axios from "axios";
import { all, call, put, takeLatest } from "@redux-saga/core/effects";

import {
  loginFailure,
  loginSuccess,
} from "../../actions/user/UserAction";
import { GET_USER_INFO, LOGIN_REQUEST } from "../../actions/user/UserActionType";
import { IUser, IUserInfo } from "../../../types/user/UserType";

const login = async (payload: { email: string; password: string }) => {
  const { data } = await axios.post<IUserInfo>(
    "https://dummyjson.com/auth/login",
    { username: payload.email, password: payload.password },
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
  return data;
};

function* loginSaga(action: any) {
  try {
    const response:  IUserInfo  = yield call(login, {
      email: action.payload.values.email,
      password: action.payload.values.password,
    });
    yield put(
      loginSuccess({
        userData: response,
      })
    );
    action.payload.callback(response.token,"");
  } catch (e: any) {
    yield put(
      loginFailure({
        //error: e.message,
        error: e.response.data.message,
      })
    );
    //console.log ('error-->' + JSON.stringify(e.response.data) + 'error-->' + e.response.data.message );
    action.payload.callback("",e.response.data.message);
  }
}





function* userSaga() {
  yield all([takeLatest(LOGIN_REQUEST, loginSaga)]);
}

export default userSaga;