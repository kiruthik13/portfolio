const API_BASE_URL = import.meta.env.PROD
    ? 'https://portfolio-f5t8.onrender.com/api'
    : 'http://localhost:5000/api';

export default API_BASE_URL;
