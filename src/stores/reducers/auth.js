import {
    LOGIN_SUCCESSFULL,
    LOGIN_FAILED,
    LOG_OUT_FINISH,
    CHANGE_PASSWORD_SUCCESSFULL,
    CHANGE_PASSWORD_START,
  } from '../actions/auth';
  
  const initialState = {
    isUserLogged: null,
    isChangePassword: null,
    errors: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_SUCCESSFULL: {
        return {
          ...state,
          isUserLogged: !!action.payload,
          errors: null,
        };
      }
      case LOGIN_FAILED: {
        return { ...state, errors: action.payload };
      }
      case LOG_OUT_FINISH: {
        return {
          ...initialState,
        };
      }
      case CHANGE_PASSWORD_START: {
        return {
          ...state,
          isChangePassword: null,
          errors: null,
        };
      }
      case CHANGE_PASSWORD_SUCCESSFULL: {
        return {
          ...state,
          isChangePassword: !!action.payload,
          errors: null,
        };
      }
      default:
        return state;
    }
  };
  
  export default authReducer;