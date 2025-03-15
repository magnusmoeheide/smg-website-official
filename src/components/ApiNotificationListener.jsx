'use client'

import { useEffect, useCallback, useRef } from 'react';
import { apiEvents } from '../services/api';
import { useNotification, NOTIFICATION_TYPES } from '../contexts/NotificationContext';

export function ApiNotificationListener() {
  const { showNotification } = useNotification();
  const callbackRef = useRef(null);

  // Use useCallback to maintain the same function reference
  const handleTokenRefresh = useCallback((data) => {
    if (data.success) {
      showNotification(
        `Authentication refreshed using ${data.method} method`,
        NOTIFICATION_TYPES.SUCCESS,
        5000,
        'Authentication Refreshed'
      );
    } else {
      showNotification(
        `Failed to refresh authentication: ${data.error || 'Unknown error'}`,
        NOTIFICATION_TYPES.ERROR,
        8000,
        'Authentication Error'
      );
    }
  }, [showNotification]);

  useEffect(() => {
    // Store the callback reference for cleanup
    callbackRef.current = handleTokenRefresh;
    
    // Subscribe to token refresh events
    apiEvents.on('tokenRefreshed', handleTokenRefresh);

    // Proper cleanup function
    return () => {
      // Remove only this specific listener
      if (apiEvents.listeners['tokenRefreshed'] && callbackRef.current) {
        apiEvents.listeners['tokenRefreshed'] = 
          apiEvents.listeners['tokenRefreshed'].filter(cb => cb !== callbackRef.current);
      }
    };
  }, [handleTokenRefresh]);

  return null; // This component doesn't render anything
}
