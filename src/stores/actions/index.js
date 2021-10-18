export const LOADING = 'GENERAL_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_SUCCESS = 'SET_SUCCESS';
export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';

export const setIsLoading = isLoading => ({
  type: LOADING,
  payload: isLoading,
});

export const setError = error => ({
  type: SET_ERROR,
  payload: error,
});

export const setSuccess = () => ({
  type: SET_SUCCESS,
  payload: {},
});

export const hideNotification = () => ({
  type: HIDE_NOTIFICATION,
  payload: null,
});
