import { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS } from './UserActionType';
import {
  LoginPayload,
  LoginRequest,
  LoginSuccess,
  LoginSuccessPayload,
  LoginFailure,
  LoginFailurePayload,
} from '@types/user/UserType';

export const loginRequest = (payload: LoginPayload): LoginRequest => ({
  type: LOGIN_REQUEST,
  payload,
});

export const loginSuccess = (payload: LoginSuccessPayload): LoginSuccess => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginFailure = (payload: LoginFailurePayload): LoginFailure => ({
  type: LOGIN_FAILURE,
  payload,
});
