import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { images } from '../../constants'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'
import { sessionLogin } from '../../services/authService'

export default function FirebaseLoginDialog({ open, setOpen }) {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [mode, setMode] = useState('login'); // 'login' or 'forgotPassword'
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        
        try {
            const auth = getAuth();
            const cred = await signInWithEmailAndPassword(auth, email, password);
            // Exchange Firebase ID token for an HTTP-only session cookie
            const idToken = await cred.user.getIdToken();
            await sessionLogin(idToken);
            setOpen(false);
        } catch (error) {
            // Handle specific Firebase error codes
            switch (error.code) {
                case 'auth/invalid-email':
                    setError(t('errorInvalidEmail'));
                    break;
                case 'auth/user-disabled':
                    setError(t('errorAccountDisabled'));
                    break;
                case 'auth/user-not-found':
                    setError(t('errorUserNotFound'));
                    break;
                case 'auth/wrong-password':
                    setError(t('errorWrongPassword'));
                    break;
                case 'auth/too-many-requests':
                    setError(t('errorTooManyAttempts'));
                    break;
                default:
                    setError(t('errorSignIn') + `: ${error.message}`);
            }
        } finally {
            setLoading(false);
        }
    };
    
    const handleResetPassword = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');
        
        if (!email) {
            setError(t('errorEmailRequired'));
            setLoading(false);
            return;
        }
        
        try {
            const auth = getAuth();
            await sendPasswordResetEmail(auth, email);
            setSuccess(t('resetEmailSent'));
        } catch (error) {
            switch (error.code) {
                case 'auth/invalid-email':
                    setError(t('errorInvalidEmail'));
                    break;
                case 'auth/user-not-found':
                    setError(t('errorUserNotFound'));
                    break;
                case 'auth/too-many-requests':
                    setError(t('errorTooManyAttempts'));
                    break;
                default:
                    setError(t('errorResetPassword') + `: ${error.message}`);
            }
        } finally {
            setLoading(false);
        }
    };
    
    const switchToForgotPassword = (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setMode('forgotPassword');
    };
    
    const switchToLogin = (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setMode('login');
    };

    return (
    <>
    <Dialog open={open} onClose={() => {
        if (!loading) {
            setOpen(false);
            setTimeout(() => {
                setMode('login');
            }, 300);
        }
    }} className="relative z-10">
        <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <DialogPanel
                    transition
                    className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left min-w-[500px] shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-sm sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                >
                    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <img
                            alt="Logo"
                            src={images[`${t("logo")}`]}
                            className="mx-auto h-10 w-auto"
                            />
                            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                            {mode === 'login' ? 
                                t("signInToYourAccount") : 
                                t("resetYourPassword")}
                            </h2>
                        </div>
                
                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            {error && (
                                <div className="mb-4 p-3 rounded-md bg-red-50 border border-red-200">
                                    <p className="text-sm text-red-800">{error}</p>
                                </div>
                            )}
                            
                            {success && (
                                <div className="mb-4 p-3 rounded-md bg-green-50 border border-green-200">
                                    <p className="text-sm text-green-800">{success}</p>
                                </div>
                            )}
                            
                            {mode === 'login' ? (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                        {t("emailAddress")}
                                        </label>
                                        <div className="mt-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            autoComplete="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            disabled={loading}
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-smg_orange sm:text-sm/6"
                                        />
                                        </div>
                                    </div>
                        
                                    <div>
                                        <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                            {t("password")}
                                        </label>
                                        <div className="text-sm">
                                            <button onClick={switchToForgotPassword} className="font-semibold text-smg_orange hover:text-smg_orange_light">
                                                {t("forgotPassword")}
                                            </button>
                                        </div>
                                        </div>
                                        <div className="mt-2">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            required
                                            autoComplete="current-password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            disabled={loading}
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-smg_orange sm:text-sm/6"
                                        />
                                        </div>
                                    </div>
                        
                                    <div>
                                        <button
                                        type="submit"
                                        disabled={loading}
                                        className="flex w-full justify-center rounded-md bg-smg_orange px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-smg_orange_light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-smg_orange disabled:bg-smg_orange/70 disabled:cursor-not-allowed"
                                        >
                                            {loading ? t("signingIn") : t("signIn")}
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                <form onSubmit={handleResetPassword} className="space-y-6">
                                    <div>
                                        <p className="text-sm text-gray-600 mb-4">
                                            {t("resetPasswordInstructions")}
                                        </p>
                                        <label htmlFor="reset-email" className="block text-sm/6 font-medium text-gray-900">
                                            {t("emailAddress")}
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="reset-email"
                                                name="email"
                                                type="email"
                                                required
                                                autoComplete="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                disabled={loading || success}
                                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-smg_orange sm:text-sm/6"
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="flex space-x-3">
                                        <button
                                            type="button"
                                            onClick={switchToLogin}
                                            disabled={loading}
                                            className="flex w-1/2 justify-center rounded-md bg-gray-100 px-3 py-1.5 text-sm/6 font-medium text-gray-800 hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                                        >
                                            {t("backToLogin")}
                                        </button>
                                        
                                        <button
                                            type="submit"
                                            disabled={loading || success}
                                            className="flex w-1/2 justify-center rounded-md bg-smg_orange px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-smg_orange_light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-smg_orange disabled:bg-smg_orange/70 disabled:cursor-not-allowed"
                                        >
                                            {loading ? t("sending") : t("resetPassword")}
                                        </button>
                                    </div>
                                </form>
                            )}
                            
                            <p className="mt-10 text-center text-sm/6 text-gray-500">
                                {t("noAccount")}{' '}
                            <a href="https://app.klassekartgenerator.no/signup" className="font-semibold text-smg_orange hover:text-smg_orange_light">
                                {t("createAccount")}
                            </a>
                            </p>
                        </div>
                    </div>
                </DialogPanel>
            </div>
        </div>
    </Dialog>
    </>
    )
}
