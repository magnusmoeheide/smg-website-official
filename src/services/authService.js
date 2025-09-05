// filepath: src/services/authService.js
import axios from 'axios';
import { setTokens, getRefreshToken } from './tokenService';

let baseApiUrl;
if (process.env.NODE_ENV === 'development') {
    baseApiUrl = 'http://localhost:3001/api';
} else {
    baseApiUrl = 'https://api.klassekartgenerator.no/api';
}

const API_URL = process.env.API_BASE_URL ? process.env.API_BASE_URL : baseApiUrl;

// Create a separate axios instance for auth calls to avoid circular dependency
const authApi = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

export async function authorize(email, role, firebaseToken) {
    try {
        const response = await authApi.post('/login',
            { email },
            {
                headers: {
                    'authorization': `Bearer ${firebaseToken}`,
                    'x-user-role': role,
                }
            }
        );

        const { accessToken, refreshToken } = response.data;
        setTokens(accessToken, refreshToken, role);

        return response.data;
    } catch (error) {
        console.error('Error authorizing user:', error);
        throw error;
    }
}

export async function refreshAccessToken() {
    const refreshToken = getRefreshToken();
    if (!refreshToken) throw new Error('No refresh token available');

    try {
        const response = await authApi.post('/token',
            { token: refreshToken.replace('Bearer ', '') }
        );

        const { accessToken, expired } = response.data;
        setTokens(accessToken);

        return { expired };
    } catch (error) {
        console.error('Error refreshing token:', error);
        throw error;
    }
}