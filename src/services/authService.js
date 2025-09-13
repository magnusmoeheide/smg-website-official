// filepath: src/services/authService.js
import axios from 'axios';

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

// New: Exchange Firebase ID token for an HttpOnly session cookie
export async function sessionLogin(idToken) {
    try {
        // Obtain CSRF token (always call; backend will set cookie and return it)
        let csrfToken;
        try {
            const res = await authApi.get('/session/csrf', { withCredentials: true });
            // axios returns data under res.data for this instance
            csrfToken = res?.data?.csrfToken;
        } catch { }
        await authApi.post('/sessionLogin', { idToken, csrfToken }, { withCredentials: true });
        if (typeof window !== 'undefined' && window.dispatchEvent) {
            window.dispatchEvent(new Event('auth-session-changed'));
        }
    } catch (error) {
        console.error('Error creating session cookie:', error);
        throw error;
    }
}

export async function sessionLogout() {
    try {
        await authApi.post('/sessionLogout', {}, { withCredentials: true });
        if (typeof window !== 'undefined' && window.dispatchEvent) {
            window.dispatchEvent(new Event('auth-session-changed'));
        }
    } catch (error) {
        console.error('Error clearing session cookie:', error);
        // swallow errors
    }
}
