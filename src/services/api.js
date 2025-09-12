// filepath: src/services/api.js
import axios from 'axios';
// Cookie-based session only; no bearer tokens

let baseApiUrl;
if (process.env.NODE_ENV === 'development') {
    baseApiUrl = 'http://localhost:3001/api';
} else {
    baseApiUrl = 'https://api.klassekartgenerator.no/api';
}

const API_URL = process.env.API_BASE_URL ? process.env.API_BASE_URL : baseApiUrl;

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true, // allow sending/receiving cookies for session auth
});

// Basic response pass-through returning response.data
api.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error)
);

export default api;
