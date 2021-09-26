export const LOADING = 'GENERAL_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const HIDE_ERROR = "HIDE_ERROR";

export const setIsLoading = isLoading => ({
  type: LOADING,
  payload: isLoading,
});

export const setError = error => ({
  type: SET_ERROR,
  payload: error,
});

export const hideError = () => (
  {
    type: HIDE_ERROR,
    payload: null
  }
);