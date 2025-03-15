'use client'

import { useEffect } from 'react';
import { apiEvents } from '../services/api';
import { useNotification, NOTIFICATION_TYPES } from '../contexts/NotificationContext';

export function ApiNotificationListener() {
  const { showNotification } = useNotification();

  useEffect(() => {
    const handleTokenRefresh = (data) => {
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
    };

    // Subscribe to token refresh events
    apiEvents.on('tokenRefreshed', handleTokenRefresh);

    // Cleanup
    return () => {
      // This is a simplified cleanup - in a real implementation,
      // you'd need to maintain a reference to the callback to remove it
      apiEvents.listeners['tokenRefreshed'] = 
        apiEvents.listeners['tokenRefreshed']?.filter(cb => cb !== handleTokenRefresh) || [];
    };
  }, [showNotification]);

  return null; // This component doesn't render anything
}
