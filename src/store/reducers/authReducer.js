import {
    SIGNUP,
    SIGNUP_FAILURE,
    SIGNUP_SUCCESS,
    SIGNIN,
    SIGNIN_SUCCESS,
    SIGNIN_FAILURE,
    LOGOUT,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
  } from "../constants.js";

  const initialState = {
    user: {},
    isLoading: false,
    isError: false,
    error: {}
  };

  export default function authReducer(state = initialState, action) {
    switch (action.type) {
      case SIGNIN:
      case SIGNUP:
      case LOGOUT:
        return {
          ...state,
          isLoading: true,
          error : {}
        }

      case SIGNIN_SUCCESS:
      case SIGNUP_SUCCESS:
        return {
          ...state,
          user: action.payload,
          isLoading: false,
          isLogOut: false,
          isError: false,
          error : {}
        };

      case SIGNIN_FAILURE:
      case SIGNUP_FAILURE:
      case LOGOUT_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
          error: action.error
        };

      case LOGOUT_SUCCESS:
        return {
          ...state,
          user: {},
          isLoading: false,
          isError: false,
          error: {}
        };
      
      default:
        return state;
    }
  }