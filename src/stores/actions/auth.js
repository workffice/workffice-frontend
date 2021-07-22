export const CREATE_START = 'CREATE_START';
export const CREATE_PENDING = 'CREATE_PENDING';
export const CREATE_FAILED = 'CREATE_FAILED';
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESSFULL = 'LOGIN_SUCCESSFULL';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOG_OUT_START = 'ON_LOG_OUT_START';
export const LOG_OUT_FINISH = 'LOG_OUT_FINISH';
export const CHANGE_PASSWORD_START = 'CHANGE_PASSWORD_START';
export const CHANGE_PASSWORD_SUCCESSFULL = 'CHANGE_PASSWORD_SUCCESSFULL';
export const CHANGE_PASSWORD_FAILED = 'CHANGE_PASSWORD_FAILED';
export const RECOVER_PASSWORD_START = 'RECOVER_PASSWORD_START';
export const RECOVER_PASSWORD_SUCCESSFULL = 'RECOVER_PASSWORD_SUCCESSFULL';
export const RECOVER_PASSWORD_FAILED = 'RECOVER_PASSWORD_FAILED';

export const createStart = (data) => ({
  type: CREATE_START,
  payload: data,
});

export const createPending = (data) => ({
  type: CREATE_PENDING,
  payload: data,
});

export const createfailed = (data) => ({
  type: CREATE_FAILED,
  payload: data,
});

export const loginStart = (data) => ({
  type: LOGIN_START,
  payload: data,
});

export const loginSuccesfull = (token) => ({
  type: LOGIN_SUCCESSFULL,
  payload: token,
});

export const loginFailed = (error) => ({
  type: LOGIN_FAILED,
  payload: error,
});

export const logoutStart = (payload) => ({
  type: LOG_OUT_START,
  payload,
});

export const logout = (payload) => ({
  type: LOG_OUT_FINISH,
  payload,
});

export const changePasswordStart = (data) => ({
  type: CHANGE_PASSWORD_START,
  payload: data,
});

export const changePasswordSuccesfull = (token) => ({
  type: CHANGE_PASSWORD_SUCCESSFULL,
  payload: token,
});

export const changePasswordFailed = (error) => ({
  type: CHANGE_PASSWORD_FAILED,
  payload: error,
});

export const recoverPasswordStart = (data) => ({
  type: RECOVER_PASSWORD_START,
  payload: data,
});

export const recoverPasswordSuccesfull = (data) => ({
  type: RECOVER_PASSWORD_SUCCESSFULL,
  payload: data,
});

export const recoverPasswordFailed = (error) => ({
  type: RECOVER_PASSWORD_FAILED,
  payload: error,
});
