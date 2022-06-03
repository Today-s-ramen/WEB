const API_BASE_URL = process.env.NODE_ENV === 'development' ? '/' : process.env.REACT_APP_API_DOMAIN;

export default API_BASE_URL;
