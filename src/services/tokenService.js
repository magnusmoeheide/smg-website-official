// filepath: src/services/tokenService.js
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

const ACCESS_TOKEN_KEY = 'accessToken';
const REFRESH_TOKEN_KEY = 'refreshToken';
const USER_ROLE_KEY = 'userRole';

export function setTokens(accessToken, refreshToken, role) {
    // Set HTTP-only cookies in production
    const secureCookie = process.env.NODE_ENV !== 'development';
    Cookies.set(ACCESS_TOKEN_KEY, `Bearer ${accessToken}`, {
        secure: secureCookie,
        sameSite: 'Lax',
        expires: getTokenExpiry(accessToken)
    });

    if (refreshToken) {
        Cookies.set(REFRESH_TOKEN_KEY, `Bearer ${refreshToken}`, {
            secure: secureCookie,
            sameSite: 'Lax',
            // Set longer expiry for refresh token
            expires: 30 // days
        });
    }

    if (role) {
        localStorage.setItem(USER_ROLE_KEY, role);
    }
}

export function getAccessToken() {
    return Cookies.get(ACCESS_TOKEN_KEY);
}

export function getRefreshToken() {
    return Cookies.get(REFRESH_TOKEN_KEY);
}

export function getUserRole() {
    return localStorage.getItem(USER_ROLE_KEY);
}

export function clearTokens() {
    Cookies.remove(ACCESS_TOKEN_KEY);
    Cookies.remove(REFRESH_TOKEN_KEY);
    localStorage.removeItem(USER_ROLE_KEY);
}

export function isTokenExpired(token) {
    if (!token) return true;

    try {
        const tokenValue = token.replace('Bearer ', '');
        const decoded = jwtDecode(tokenValue);
        const currentTime = Date.now() / 1000;

        return decoded.exp < currentTime;
    } catch (error) {
        return true;
    }
}

function getTokenExpiry(token) {
    try {
        const tokenValue = token.replace('Bearer ', '');
        const decoded = jwtDecode(tokenValue);
        // Convert to days
        return new Date(decoded.exp * 1000);
    } catch (error) {
        // Default to 1 hour if can't decode
        return new Date(Date.now() + 60 * 60 * 1000);
    }
}