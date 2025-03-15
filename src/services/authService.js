// src/services/authService.js
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

// API base URL - replace with your actual API URL
const API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3001/api' : 'https://api.klassekartgenerator.no/api';

/**
 * Refreshes the access token using a refresh token
 * @param {string} refreshToken - The refresh token
 * @returns {Promise<boolean>} - Whether the session has expired
 */
export async function refreshAccessToken(refreshToken) {
    try {
        const response = await fetch(`${API_URL}/token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token: refreshToken.replace('Bearer ', '') }),
        });

        if (!response.ok) {
            throw new Error(`HTTP Error refreshing access token: ${response.status}`);
        }

        const data = await response.json();
        const newAccessToken = data.accessToken;

        Cookies.set('accessToken', `Bearer ${newAccessToken}`, {
            secure: process.env.NODE_ENV !== 'development',
            sameSite: 'Lax'
        });

        return data.expired;
    } catch (error) {
        console.error('Error refreshing access token:', error);
        throw error;
    }
}

/**
 * Authorizes a user using Firebase token
 * @param {string} email - User's email
 * @param {string} role - User's role
 * @param {string} firebaseToken - Firebase auth token
 * @returns {Promise<object>} - Auth data including tokens
 */
export async function authorize(email, role, firebaseToken) {
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${firebaseToken}`,
                'x-user-role': role,
            },
            body: JSON.stringify({ email }),
        });

        if (!response.ok) {
            throw new Error(`HTTP Error authorizing user: ${response.status}`);
        }

        const data = await response.json();
        const token = data.accessToken;
        const { refreshToken } = data;

        Cookies.set('accessToken', `Bearer ${token}`, {
            secure: process.env.NODE_ENV !== 'development',
            sameSite: 'Lax'
        });

        Cookies.set('refreshToken', `Bearer ${refreshToken}`, {
            secure: process.env.NODE_ENV !== 'development',
            sameSite: 'Lax'
        });

        return data;
    } catch (error) {
        console.error('Error authorizing user:', error);
        throw error;
    }
}

/**
 * Starts the timer to refresh access token before it expires
 * @param {Function} setSessionExpired - State setter for session expiration
 */
export function startAccessTokenTimer(setSessionExpired) {
    const refreshToken = Cookies.get('refreshToken') ?? '';
    const accessToken = Cookies.get('accessToken')?.split(' ')[1] ?? '';

    if (!accessToken) {
        console.warn('No access token found to start timer');
        return;
    }

    try {
        const decodedToken = jwtDecode(accessToken);
        // Calculate the time to refresh 30 seconds before the token expires
        const expiryTime = (decodedToken.exp ?? 0) * 1000;
        const currentTime = Date.now();
        const refreshTime = expiryTime - currentTime - 30000; // 30 seconds before expiry

        if (refreshTime <= 0) {
            // Token already expired or will expire very soon
            refreshAccessToken(refreshToken)
                .then((expired) => {
                    if (expired) {
                        setSessionExpired(true);
                    } else {
                        startAccessTokenTimer(setSessionExpired);
                    }
                })
                .catch(() => {
                    setSessionExpired(true);
                });
            return;
        }

        // Set timeout to refresh token
        setTimeout(() => {
            refreshAccessToken(refreshToken)
                .then((expired) => {
                    if (expired) {
                        setSessionExpired(true);
                    } else {
                        startAccessTokenTimer(setSessionExpired);
                    }
                })
                .catch(() => {
                    setSessionExpired(true);
                });
        }, refreshTime);
    } catch (error) {
        console.error('Error starting access token timer:', error);
        setSessionExpired(true);
    }
}

/**
 * Makes an authenticated API request
 * @param {string} endpoint - API endpoint
 * @param {object} options - Fetch options
 * @returns {Promise<any>} - API response
 */
export async function apiRequest(endpoint, options = {}) {
    const accessToken = Cookies.get('accessToken');

    if (!accessToken) {
        throw new Error('No access token available');
    }

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': accessToken,
        ...(options.headers || {})
    };

    const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers
    });

    if (response.status === 401) {
        // Try to refresh the token
        const refreshToken = Cookies.get('refreshToken');
        if (refreshToken) {
            const expired = await refreshAccessToken(refreshToken);

            if (!expired) {
                // Try the request again with the new token
                const newAccessToken = Cookies.get('accessToken');
                const newResponse = await fetch(`${API_URL}${endpoint}`, {
                    ...options,
                    headers: {
                        ...headers,
                        'Authorization': newAccessToken
                    }
                });

                return handleResponse(newResponse);
            }
        }

        // If we got here, we couldn't refresh the token
        throw new Error('Authentication failed');
    }

    return handleResponse(response);
}

/**
 * Handles API response
 * @param {Response} response - Fetch response
 * @returns {Promise<any>} - Parsed response
 */
async function handleResponse(response) {
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API Error (${response.status}): ${errorText}`);
    }

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
        return response.json();
    }

    return response.text();
}