import { useEffect, useState } from 'react';
import { apiRequest, authorize, startAccessTokenTimer } from '../services/authService';

export function useApiAuth(user) {
    const [userInfo, setUserInfo] = useState(null);
    const [sessionExpired, setSessionExpired] = useState(false);
    const [subscription, setSubscription] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getUserInfo() {
            if (user) {
                try {
                    const userEmail = user.email ?? '';
                    const firebaseIdToken = await user.getIdToken();
                    await authorize(userEmail, 'teacher', firebaseIdToken);

                    const teacher = await apiRequest(`/teachers/email/${userEmail}`);
                    if (!teacher || teacher.length === 0) throw new Error('User not found in database');
                    const admin = await apiRequest(`/admins/email/${userEmail}`);
                    const isAdmin = admin.length > 0;

                    if (isAdmin) await authorize(userEmail, 'admin', firebaseIdToken);
                    startAccessTokenTimer(setSessionExpired);

                    apiRequest(`/teachers/ull/${teacher[0].id}`); // This is to update the last login time in the database

                    const subscription = teacher[0].school_id ? await apiRequest(`/subscriptions/school/latest/${teacher[0].school_id}`) : await apiRequest(`/subscriptions/user/latest/${teacher[0].id}`);
                    setSubscription({
                        status: subscription[0]?.status,
                        subscription_id: subscription[0]?.id,
                        plan_id: subscription[0]?.plan_id,
                        start_date: subscription[0]?.start_date,
                        end_date: subscription[0]?.end_date,
                        amount: subscription[0]?.amount,
                        school_id: subscription[0]?.school_id,
                    });

                    setUserInfo({
                        id: teacher[0].id,
                        name: teacher[0].name,
                        email: teacher[0].email,
                        role: isAdmin ? 'admin' : teacher[0].role,
                        school_id: teacher[0].school_id,
                        joined_on: teacher[0].created_at,
                        admin_id: isAdmin ? admin[0].id : null,
                    });
                } catch (error) {
                    console.error(`Error getting user info: ${error}`);
                    setError(error);
                }
            }
        }
        getUserInfo();
    }, [user]);

    return {
        userInfo,
        sessionExpired,
        subscription,
        error,
    };
}