import React, { useEffect, useState } from 'react'
import Footer from "../Footer/Footer"
import Hero from "../Hero/Hero"
import Features from "../Features/Features"
import Reasons from "../Reasons/Reasons"
import Pricing from "../Pricing/Pricing"
import Testimonials from "../Testimonials/Testimonials"
import FAQs from "../FAQs/FAQs"
import Blog from "../Blog/Blog"
import '../../styles/animations.css'
import FadeInSection from '../../components/FadeInSection'  // new import
import { useTranslation } from 'react-i18next'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'

const Home = () => {
  const { t } = useTranslation();
  const [message, setMessage] = useState(null);

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get('success') === 'true') {
        setMessage({ type: 'success', text: t('checkoutSuccess') });
      } else if (params.get('canceled') === 'true') {
        setMessage({ type: 'canceled', text: t('checkoutCanceled') });
      } else if (params.get('error')) {
        setMessage({ type: 'error', text: t('checkoutFailed') });
      }
      if (params.get('success') || params.get('canceled') || params.get('error')) {
        if (typeof window !== 'undefined') {
          const url = window.location.origin + window.location.pathname + window.location.hash;
          window.history.replaceState({}, document.title, url);
        }
      }
    } catch {}
  }, [t]);

  return (
    <div>
      {/* Stripe checkout status modal at root */}
      <Dialog open={!!message} onClose={() => setMessage(null)} className="relative z-50">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/30 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150"
        />
        <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-md sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="sm:flex sm:items-start">
                <div className={`mx-auto flex size-12 shrink-0 items-center justify-center rounded-full sm:mx-0 sm:size-10 ${
                  message?.type === 'success' ? 'bg-green-100' : message?.type === 'canceled' ? 'bg-yellow-100' : 'bg-red-100'
                }`}>
                  <svg className={`size-6 ${message?.type === 'success' ? 'text-green-600' : message?.type === 'canceled' ? 'text-yellow-600' : 'text-red-600'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {message?.type === 'success' ? (
                      <path d="M20 6L9 17l-5-5" />
                    ) : message?.type === 'canceled' ? (
                      <path d="M6 6l12 12M18 6L6 18" />
                    ) : (
                      <path d="M12 9v4m0 4h.01M12 5a7 7 0 100 14 7 7 0 000-14z" />
                    )}
                  </svg>
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3 className="text-base font-semibold leading-6 text-gray-900">
                    {message?.type === 'success' ? t('currentSubscription') : message?.type === 'canceled' ? t('checkoutCanceled') : t('checkoutFailed')}
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-600">{message?.text}</p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  onClick={() => setMessage(null)}
                  className="inline-flex w-full justify-center rounded-md bg-smg_orange px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-smg_orange_light sm:ml-3 sm:w-auto"
                >
                  {t('close')}
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      <FadeInSection>
        <Hero />
      </FadeInSection>
      <FadeInSection>
        <Features />
      </FadeInSection>
      <FadeInSection>
        <Reasons />
      </FadeInSection>
      <FadeInSection>
        <Pricing />
      </FadeInSection>
      <FadeInSection>
        <Testimonials />
      </FadeInSection>
      <FadeInSection>
        <FAQs />
      </FadeInSection>
      <FadeInSection>
        <Blog />
      </FadeInSection>
      <FadeInSection>
        <Footer />
      </FadeInSection>
    </div>
  )
}

export default Home
