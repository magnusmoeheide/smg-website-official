// filepath: src/services/api.js
import axios from 'axios';
import { auth } from '../auth';
import { authorize, refreshAccessToken } from './authService';
import { getAccessToken, getRefreshToken } from './tokenService';

// Add event emitter for notifications
export const apiEvents = {
    // Store event listeners
    listeners: {},

    // Subscribe to an event
    on(event, callback) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(callback);
    },

    // Emit an event
    emit(event, data) {
        if (this.listeners[event]) {
            this.listeners[event].forEach(callback => callback(data));
        }
    }
};

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
    }
});

// Request interceptor
api.interceptors.request.use(
    async (config) => {
        const accessToken = getAccessToken();
        if (accessToken) {
            config.headers.Authorization = accessToken;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
    (response) => response.data,
    async (error) => {
        const originalRequest = error.config;

        // If error is 401 and we haven't retried yet
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                // First try refresh token if available
                const refreshToken = getRefreshToken();
                if (refreshToken) {
                    try {
                        await refreshAccessToken(refreshToken);
                        originalRequest.headers.Authorization = getAccessToken();
                        return api(originalRequest);
                    } catch (refreshError) {
                        console.log('Refresh token failed, trying Firebase fallback');
                        // Continue to Firebase fallback
                    }
                }

                // Fallback to Firebase token (either if refresh token is not available or refresh failed)
                const currentUser = auth.currentUser;
                if (currentUser) {
                    const firebaseToken = await currentUser.getIdToken(true);
                    await authorize(currentUser.email, 'teacher', firebaseToken);
                    originalRequest.headers.Authorization = getAccessToken();
                    return api(originalRequest);
                } else {
                    throw new Error('No authentication method available');
                }
            } catch (tokenError) {
                apiEvents.emit('tokenRefreshed', {
                    success: false,
                    error: 'Action required: please log in again',
                });
                console.error('Could not refresh authentication:', tokenError);
            }
        }

        // Handle other errors
        apiEvents.emit('tokenRefreshed', {
            success: false,
            error: error.response?.data?.message || 'An error occurred',
        });
        console.error('API error:', error);
        return Promise.reject(error);
    }
);

export default api;