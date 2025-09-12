'use client'

import React, { createContext, useContext, useState } from 'react';

// Define notification types
export const NOTIFICATION_TYPES = {
    SUCCESS: 'success',
    ERROR: 'error',
    WARNING: 'warning',
    INFO: 'info',
};

const NotificationContext = createContext();

export function NotificationProvider({ children }) {
    const [notifications, setNotifications] = useState([]);

    // Add a new notification
    const showNotification = (message, type = NOTIFICATION_TYPES.INFO, duration = 5000, title = '') => {
        const id = Date.now().toString();
        const newNotification = {
            id,
            message,
            type,
            title,
        };

        setNotifications((prevNotifications) => [...prevNotifications, newNotification]);

        // Auto-dismiss after duration
        if (duration > 0) {
            setTimeout(() => {
                dismissNotification(id);
            }, duration);
        }

        return id;
    };

    // Dismiss a notification by ID
    const dismissNotification = (id) => {
        setNotifications((prevNotifications) =>
            prevNotifications.filter((notification) => notification.id !== id)
        );
    };

    return (
        <NotificationContext.Provider value={{ notifications, showNotification, dismissNotification }}>
            {children}
        </NotificationContext.Provider>
    );
}

export const useNotification = () => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('useNotification must be used within a NotificationProvider');
    }
    return context;
};
