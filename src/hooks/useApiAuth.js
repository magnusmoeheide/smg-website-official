import { useEffect, useState } from 'react';
import api from '../services/api';

export function useApiAuth() {
    const [userInfo, setUserInfo] = useState(null);
    const [subscription, setSubscription] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function hydrateFromEmail(userEmail) {
            const teacher = await api.get(`/teachers/email/${userEmail}`);
            if (!teacher || teacher.length === 0) throw new Error('User not found in database');

            const admin = await api.get(`/admins/email/${userEmail}`);
            const isAdmin = admin.length > 0;

            // Update last login time
            api.get(`/teachers/ull/${teacher[0].id}`);

            // Stripe-based entitlement: compute trial/personal/school from teacher/school
            const now = new Date();
            const teacherRow = Array.isArray(teacher) ? teacher[0] : teacher?.data?.[0] || teacher;

            // Fetch school if present
            let schoolRow = null;
            if (teacherRow.school_id) {
                try {
                    const schoolRes = await api.get(`/schools/${teacherRow.school_id}`);
                    schoolRow = Array.isArray(schoolRes) ? schoolRes[0] : schoolRes?.data?.[0] || schoolRes;
                } catch {}
            }

            const trialEnd = teacherRow.trial_expires_at ? new Date(teacherRow.trial_expires_at) : null;
            const personalEnd = teacherRow.personal_subscription_current_period_end ? new Date(teacherRow.personal_subscription_current_period_end) : null;
            const schoolEnd = schoolRow?.subscription_current_period_end ? new Date(schoolRow.subscription_current_period_end) : null;

            const trialActive = !!trialEnd && trialEnd > now;
            const personalActive = !!teacherRow.has_active_personal_subscription && (!personalEnd || personalEnd > now);
            const schoolActive = !!schoolRow?.has_active_subscription && (!schoolEnd || schoolEnd > now);

            // Prefer paid subs over trial
            let planSlug = 'inactive';
            if (schoolActive) {
                const mapBySeat = { 20: 'schoolS', 35: 'schoolM', 50: 'schoolL' };
                planSlug = mapBySeat[Number(schoolRow?.seat_limit)] || 'schoolS';
            } else if (personalActive) {
                planSlug = 'teacher';
            } else if (trialActive) {
                planSlug = 'trial';
            }

            setSubscription({
                planSlug,
                trialActive,
                personalActive,
                schoolActive,
                seat_limit: schoolRow?.seat_limit ?? null,
                school_id: teacherRow.school_id ?? null,
                personal_period_end: teacherRow.personal_subscription_current_period_end ?? null,
                school_period_end: schoolRow?.subscription_current_period_end ?? null,
            });

            setUserInfo({
                id: teacherRow.id,
                name: teacherRow.name,
                email: teacherRow.email,
                role: isAdmin ? 'admin' : teacherRow.role,
                school_id: teacherRow.school_id,
                joined_on: teacherRow.created_at,
                admin_id: isAdmin ? (Array.isArray(admin) ? admin[0]?.id : admin?.data?.[0]?.id) : null,
            });
        }

        async function getUserInfo() {
            try {
                // Cookie session only
                const session = await api.get('/session/me').catch(() => null);
                if (session && session.email) {
                    await hydrateFromEmail(session.email);
                } else {
                    setUserInfo(null);
                    setSubscription(null);
                }
            } catch (error) {
                console.error(`Error getting user info: ${error}`);
                setError(error);
            }
        }
        getUserInfo();

        // Re-hydrate on session changes and when window gains focus
        const onChange = () => getUserInfo();
        if (typeof window !== 'undefined') {
            window.addEventListener('auth-session-changed', onChange);
            window.addEventListener('focus', onChange);
        }
        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('auth-session-changed', onChange);
                window.removeEventListener('focus', onChange);
            }
        };
    }, []);

    return {
        userInfo,
        subscription,
        error,
    };
}
