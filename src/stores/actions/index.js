export const LOADING = 'GENERAL_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_SUCCESS = 'SET_SUCCESS';
export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';
export const SET_NOT_FOUND_ENTITY = 'SET_NOT_FOUND_ENTITY'
export const SET_FOUND_ENTITY = 'SET_FOUND_ENTITY'

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

export const setNotFoundEntity = entity => ({
  type: SET_NOT_FOUND_ENTITY,
  payload: entity,
})

export const setFoundEntity = entity => ({
  type: SET_FOUND_ENTITY,
  payload: entity,
})