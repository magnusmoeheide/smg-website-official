// src/contexts/AuthContext.js
import React, { createContext, useContext } from 'react';
import { useApiAuth } from '../hooks/useApiAuth';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const { userInfo, subscription, error } = useApiAuth();

    const value = {
        // Cookie-session only auth state
        isAuthenticated: !!userInfo,
        userInfo,
        subscription
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}
