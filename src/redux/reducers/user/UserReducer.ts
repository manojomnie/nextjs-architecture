import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
  } from "../../actions/user/UserActionType";
  
  import { UserActions, UserState } from "../../../types/user/UserType";
  
  const initialState: UserState = {
    pending: false,
    userData: {id: '', email: '', firstName: '' , lastName: '' , username: '', token:'', image: ''},
    error: null,
  };
  
  const UserReducer = (state = initialState, action: UserActions) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        return {
          ...state,
          pending: true,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          pending: false,
          userData: action.payload.userData,
          error: null,
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          pending: false,
          token: "",
          error: action.payload.error,
        };    

      default:
        return {
          ...state,
        };
    }
  };
  
  export default UserReducer;