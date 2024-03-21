import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '@actions/user/UserActionType';

export interface IUser {
  token: string;
}
export interface IUserInfo {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  token: string;
  image: string;
}

export interface UserState {
  pending: boolean;
  userData: IUserInfo;
  error: string | null;
}

export interface LoginPayload {
  values: { email: string; password: string };
  callback: any;
}

export interface LoginSuccessPayload {
  userData: IUserInfo;
}

export interface LoginFailurePayload {
  error: string;
}

export interface LoginRequest {
  type: typeof LOGIN_REQUEST;
  payload: LoginPayload;
}

export type LoginSuccess = {
  type: typeof LOGIN_SUCCESS;
  payload: LoginSuccessPayload;
};

export type LoginFailure = {
  type: typeof LOGIN_FAILURE;
  payload: LoginFailurePayload;
};

export type UserActions = LoginRequest | LoginSuccess | LoginFailure;
