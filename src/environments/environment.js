const BASE_URL = 'http://localhost:8080';
const API = '/api';
const API_USERS = '/users';
const API_AUTHENTICATIONS = '/authentications';
const API_TOKENS = '/confirmation_tokens'

export const API_URL = `${BASE_URL}${API}`;
export const API_AUTH_URL = `${API_URL}${API_USERS}`;
export const API_AUTHENTICATIONS_URL = `${API_URL}${API_AUTHENTICATIONS}`;
export const API_CONFIRMATION_TOKEN_URL = `${API_URL}${API_TOKENS}`;


export const API_OFFICE_BRANCHES = `${API_URL}/office_branches`;