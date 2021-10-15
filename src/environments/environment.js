// const BASE_URL = 'http://localhost:8080';
const BASE_URL = 'https://workffice-be.herokuapp.com'; //PROD
const API = '/api';
const API_USERS = '/users';
const API_AUTHENTICATIONS = '/authentications';
const API_TOKENS = '/confirmation_tokens'
const OFFICE_HOLDER = '/office_holders';


export const API_URL = `${BASE_URL}${API}`;
export const API_AUTH_URL = `${API_URL}${API_USERS}`; //localhost:8080/api/users
export const API_AUTHENTICATIONS_URL = `${API_URL}${API_AUTHENTICATIONS}`;
export const API_CONFIRMATION_TOKEN_URL = `${API_URL}${API_TOKENS}`;

// BACKOFFICE
export const API_OFFICE_HOLDERS = `${API_URL}${OFFICE_HOLDER}` // localhost:8080/api/office_holders

export const API_OFFICE_BRANCHES = `${API_URL}/office_branches`;
