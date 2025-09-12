'use client'

import { useEffect, useCallback, useRef } from 'react';
import { useNotification, NOTIFICATION_TYPES } from '../contexts/NotificationContext';

export function ApiNotificationListener() {
  const { showNotification } = useNotification();
  const callbackRef = useRef(null);

  // Use useCallback to maintain the same function reference
  const handleSessionChanged = useCallback(() => {
    showNotification(
      'Authentication session updated',
      NOTIFICATION_TYPES.SUCCESS,
      3000,
      'Authentication'
    );
  }, [showNotification]);

  useEffect(() => {
    // Store the callback reference for cleanup
    callbackRef.current = handleSessionChanged;
    if (typeof window !== 'undefined') {
      window.addEventListener('auth-session-changed', handleSessionChanged);
    }
    return () => {
      if (typeof window !== 'undefined' && callbackRef.current) {
        window.removeEventListener('auth-session-changed', callbackRef.current);
      }
    };
  }, [handleSessionChanged]);

  return null; // This component doesn't render anything
}
