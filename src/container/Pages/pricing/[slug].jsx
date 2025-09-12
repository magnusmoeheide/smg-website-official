'use client'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect, useMemo } from 'react'
import { CheckIcon, ArrowLeftIcon } from '@heroicons/react/20/solid'
import { tiers } from '../../../constants/subscriptionTiers'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../../../contexts/authContext'
import Login from '../../Login/Login'
import { signOut } from 'firebase/auth'
import { auth } from '../../../auth'
import { clearTokens } from '../../../services/tokenService'
import api from '../../../services/api'

export default function PricingDetail() {
  const { slug } = useParams()
  
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { isAuthenticated, currentUser, subscription, userInfo } = useAuth()

  const [loginOpen, setLoginOpen] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [teacherHasActive, setTeacherHasActive] = useState(false)
  const [schoolHasActive, setSchoolHasActive] = useState(false)
  const [schoolSeatLimit, setSchoolSeatLimit] = useState(null)
  const [message, setMessage] = useState(null)
  const [schoolTeacherCount, setSchoolTeacherCount] = useState(null)

  // Create Stripe Checkout session and redirect
  const handleCreateCheckout = async (e) => {
    e?.preventDefault()
    if (!selectedTier?.lookupKey?.[frequency]) return
    setIsProcessing(true)
    try {
      const { url } = await api.post('/stripe/create-checkout-session', {
        lookup_key: selectedTier.lookupKey[frequency],
        owner_type: isSchoolPlan ? 'school' : 'teacher',
      })
      if (url) {
        window.location.href = url
      } else {
        throw new Error('No checkout URL returned')
      }
    } catch (err) {
      console.error('Failed to create checkout session', err)
      alert(t('subscriptionUpdateError'))
    } finally {
      setIsProcessing(false)
    }
  }

  // Success/Cancel/Failure messages from Stripe redirect
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search)
      if (params.get('success') === 'true') {
        setMessage({ type: 'success', text: t('checkoutSuccess') })
      } else if (params.get('canceled') === 'true') {
        setMessage({ type: 'canceled', text: t('checkoutCanceled') })
      } else if (params.get('error')) {
        setMessage({ type: 'error', text: t('checkoutFailed') })
      }
    } catch {}
  }, [t])

  // Use subscription flags from Auth context (Stripe-driven)
  useEffect(() => {
    if (subscription) {
      setTeacherHasActive(!!subscription.personalActive)
      setSchoolHasActive(!!subscription.schoolActive)
      if (subscription.seat_limit != null) setSchoolSeatLimit(subscription.seat_limit)
    }
  }, [subscription])

  // Fetch current active teacher count for the user's school (for seat-limit gating)
  useEffect(() => {
    const fetchCount = async () => {
      try {
        if (!isAuthenticated || !userInfo?.school_id) { setSchoolTeacherCount(null); return }
        const count = await api.get(`/teachers/activecount/${userInfo.school_id}`)
        setSchoolTeacherCount(Number(count))
      } catch (e) {
        console.error('Failed to fetch active teacher count', e)
        setSchoolTeacherCount(null)
      }
    }
    fetchCount()
  }, [isAuthenticated, userInfo?.school_id])

  const selectedTier = tiers.find((tier) => tier.slug === slug)

  // Only yearly frequency is supported
  const [frequency] = useState('yearly')

  // Check if the current subscription is a trial
  const isTrialSubscription = useMemo(() => {
    return subscription?.trialActive || subscription?.planSlug === 'trial'
  }, [subscription])
  
  // Check if the current subscription matches the selected tier (but not if it's a trial)
  const isCurrentPlan = useMemo(() => {
    if (!selectedTier) return false
    if (selectedTier.slug === 'teacher') return teacherHasActive
    if (selectedTier.slug?.startsWith('school')) {
      if (!schoolHasActive) return false
      const seatMap = { schoolS: 1, schoolM: 35, schoolL: 50 }
      const expected = seatMap[selectedTier.slug]
      if (!expected || !schoolSeatLimit) return false
      return Number(schoolSeatLimit) === Number(expected)
    }
    return false
  }, [selectedTier, teacherHasActive, schoolHasActive, schoolSeatLimit])

  // Check if the selected tier is a school plan
  const isSchoolPlan = useMemo(() => {
    return selectedTier?.slug?.startsWith('school')
  }, [selectedTier])

  // Seat limit for the currently selected school tier
  const selectedSeatLimit = useMemo(() => {
    if (!selectedTier?.slug?.startsWith('school')) return null
    const seatMap = { schoolS: 20, schoolM: 35, schoolL: 50 }
    return seatMap[selectedTier.slug] || null
  }, [selectedTier])

  // Check if current plan is a school plan
  const isCurrentSchoolPlan = useMemo(() => {
    return schoolHasActive
  }, [schoolHasActive])

  // Check if current plan is a teacher plan
  const isCurrentTeacherPlan = useMemo(() => {
    return teacherHasActive
  }, [teacherHasActive])

  // Check if user has a school
  const hasSchool = useMemo(() => {
    return userInfo?.school_id != null
  }, [userInfo])

  // Determine current plan label and whether we should route to app instead of checkout
  const currentPlanText = useMemo(() => {
    // Prefer active paid subscriptions over trial when both exist
    if (schoolHasActive) {
      const seatToSlug = { 20: 'schoolS', 35: 'schoolM', 50: 'schoolL' }
      const slugFromSeat = seatToSlug[Number(schoolSeatLimit)]
      return slugFromSeat ? t(`tiers.${slugFromSeat}.name`) : t('plan1Title')
    }
    if (teacherHasActive) return t('tiers.teacher.name')
    if (isTrialSubscription) return t('trial')
    return null
  }, [schoolHasActive, schoolSeatLimit, teacherHasActive, isTrialSubscription, t])

  // Allow purchasing during trial. Only treat as "open app" when a paid plan is active.
  const primaryActionIsOpenApp = isAuthenticated && (teacherHasActive || schoolHasActive)

  // Check if user is school admin
  const isSchoolAdmin = useMemo(() => {
    return userInfo?.role === 'admin'
  }, [userInfo])

  // Check if the selected tier is an upgrade from the current subscription
  const isUpgrade = useMemo(() => {
    if (!subscription || !selectedTier || isTrialSubscription) return false
    
    // Prevent upgrades between teacher and school plans
    if ((isCurrentTeacherPlan && isSchoolPlan) || (isCurrentSchoolPlan && selectedTier.slug === 'teacher')) {
      return false
    }
    
    // Get index of current plan and selected plan
    const currentTierIndex = tiers.findIndex(tier => tier.slug === subscription.planSlug)
    const selectedTierIndex = tiers.findIndex(tier => tier.slug === selectedTier.slug)
    
    // If selected tier has a higher index, it's an upgrade
    return selectedTierIndex > currentTierIndex
  }, [subscription, selectedTier, isTrialSubscription, isCurrentTeacherPlan, isSchoolPlan, isCurrentSchoolPlan])

  const tierName = selectedTier ? t(`tiers.${selectedTier.slug}.name`) : ''
  const tierDescription = selectedTier ? t(`tiers.${selectedTier.slug}.description`) : ''
  const tierFeatures = selectedTier ? t(`tiers.${selectedTier.slug}.features`, { returnObjects: true }) : []
  const price = selectedTier?.price[frequency]
  const originalPrice = selectedTier?.originalPrice?.[frequency]
  
  // Helper to compute price including 25% VAT
  const computePriceVAT = (priceStr) => {
    const numericPrice = parseFloat(priceStr.replace(/[^0-9.]/g, ''))
    const currency = priceStr.replace(/[0-9.]/g, '').trim()
    if (isNaN(numericPrice)) return priceStr
    return `${currency} ${(numericPrice * 1.25).toFixed(2)}`
  }

  // Logout function
  const logout = async () => {
    try {
      await signOut(auth)
      clearTokens()
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  // Get the appropriate button text based on subscription status
  const getActionButtonText = () => {
    if (primaryActionIsOpenApp) return t('goToApp')
    if (isCurrentPlan) return t('currentPlan')
    if (isSchoolPlan) {
      if (!hasSchool) return t('createSchoolFirst')
      if (!isSchoolAdmin) return t('contactSchoolAdmin')
    }
    if ((isCurrentTeacherPlan && isSchoolPlan) || (isCurrentSchoolPlan && selectedTier?.slug === 'teacher')) {
      return t('cannotSwitchPlanType')
    }
    if (!isSchoolPlan && hasSchool) return t('leaveSchoolFirst')
    if (isUpgrade) return t('upgradePlan')
    return t('checkout')
  }

  // Determine if the action button should be disabled
  const isActionButtonDisabled = useMemo(() => {
    if (primaryActionIsOpenApp) return false
    if (isCurrentPlan) return true
    if (isSchoolPlan && (!hasSchool || !isSchoolAdmin)) return true
    if (!isSchoolPlan && hasSchool) return true
    if ((isCurrentTeacherPlan && isSchoolPlan) || (isCurrentSchoolPlan && selectedTier?.slug === 'teacher')) return true
    // Seat-limit gating for school purchase: require plan >= current teacher count
    if (isSchoolPlan && selectedSeatLimit && schoolTeacherCount != null && schoolTeacherCount >= selectedSeatLimit) return true
    return false
  }, [primaryActionIsOpenApp, isCurrentPlan, isSchoolPlan, hasSchool, isSchoolAdmin, isCurrentTeacherPlan, isCurrentSchoolPlan, selectedTier, selectedSeatLimit, schoolTeacherCount])

  if (!selectedTier) {
    return <div>{t('tierNotFound')}</div>
  }
  
  return (
    <>
    <Login open={loginOpen} setOpen={setLoginOpen} />
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-7xl sm:text-center w-full">
          {/* Header with switch plan button */}
          <div className="flex items-center justify-center space-x-4 relative">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-sm text-gray-400 hover:text-smg_orange focus:outline-none absolute left-0"
            >
              <ArrowLeftIcon className="h-5 w-5" aria-hidden="true" />
              <span className="ml-1">{t('goBack')}</span>
            </button>
            <h2 className="text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-balance sm:text-6xl">
              {tierName} {t('planDetails')}
            </h2>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            {tierDescription}
          </p>
          {message && (
            <div className={`${message.type === 'success' ? 'bg-green-50 text-green-700' : message.type === 'canceled' ? 'bg-yellow-50 text-yellow-700' : 'bg-red-50 text-red-700'} mx-auto mt-6 max-w-2xl rounded-md p-3`}>
              <div className="flex items-center justify-between">
                <span>{message.text}</span>
                {message.type === 'success' && (
                  <a href={t('loginLink')} className="underline font-medium">{t('goToApp')}</a>
                )}
              </div>
            </div>
          )}
        </div>
        
        <div className="mx-auto mt-8 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-12 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-3xl font-semibold tracking-tight text-gray-900">
              {tierName}
            </h3>
            <p className="mt-6 text-base/7 text-gray-600">
              {selectedTier.slug === 'teacher'
                ? t('easyCardPayment')
                : t('invoicePayment')}
            </p>
            <p className="mt-4 text-base/7 text-gray-600">
              {selectedTier.slug === 'teacher'
                ? t('trialInfo', { days: 30 })
                : ''}
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm/6 font-semibold text-smg_orange">
                {t("whatIsIncluded")}
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul className="mt-8 grid grid-cols-1 gap-4 text-sm/6 text-gray-600 sm:grid-cols-2 sm:gap-6">
              {tierFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-smg_orange" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:shrink-0">
            <div className="h-full rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                {selectedTier.slug === 'teacher' ? (
                  <>
                    <p className="text-base font-semibold text-gray-600">{t('mobilePayment')}</p>
                    <div className="mt-6 text-center">
                      {originalPrice && (
                        <div className="flex items-center justify-center gap-x-2">
                          <span className="text-sm font-semibold tracking-tight text-gray-400 line-through">{originalPrice}</span>
                          <span className="ml-1 inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">
                            {/* Compute discount percent in a safe way */}
                            {(() => {
                              const p = parseFloat(String(price).replace(/[^0-9.]/g, ''))
                              const o = parseFloat(String(originalPrice).replace(/[^0-9.]/g, ''))
                              if (!isNaN(p) && !isNaN(o) && o > 0 && p < o) {
                                const pct = Math.round((1 - p / o) * 100)
                                return `-${pct}%`
                              }
                              return 'SALE'
                            })()}
                          </span>
                        </div>
                      )}
                      <p className="mt-1 flex items-baseline justify-center gap-x-1">
                        <span className="text-4xl font-semibold tracking-tight text-gray-900">{price}</span>
                        <span className="text-sm/6 font-semibold tracking-wide text-gray-600">{t('yearSuffix')}</span>
                      </p>
                    </div>
                    {/* Teacher price is VAT included; show note without extra total */}
                    <p className="mt-2 text-sm text-gray-600">{t('vatIncluded')}</p>
                    {isAuthenticated ? (
                      <>
                        <button
                          onClick={isActionButtonDisabled || isProcessing ? undefined : (primaryActionIsOpenApp ? () => { window.location.href = t('loginLink') } : handleCreateCheckout)}
                          disabled={isActionButtonDisabled || isProcessing}
                          className={`mt-6 block w-full rounded-md px-3 py-2 text-center text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-smg_orange ${
                            isActionButtonDisabled || isProcessing
                              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                              : 'bg-smg_orange text-white hover:bg-smg_orange_light'
                          }`}
                        >
                          {isProcessing ? t('processing') : getActionButtonText()}
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => setLoginOpen(true)}
                        disabled={isProcessing}
                        className="mt-10 block w-full rounded-md bg-smg_orange px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-smg_orange_light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-smg_orange disabled:bg-gray-300 disabled:cursor-not-allowed"
                      >
                        {isProcessing ? t('processing') : t('loginToContinue')}
                      </button>
                    )}
                  </>
                ) : (
                  <>
                    <p className="text-base font-semibold text-gray-600">{t('payInvoice')}</p>
                    <div className="mt-6 text-center">
                      {originalPrice && (
                        <div className="flex items-center justify-center gap-x-2">
                          <span className="text-sm font-semibold tracking-tight text-gray-400 line-through">{originalPrice}</span>
                          <span className="ml-1 inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">
                            {/* Compute discount percent in a safe way */}
                            {(() => {
                              const p = parseFloat(String(price).replace(/[^0-9.]/g, ''))
                              const o = parseFloat(String(originalPrice).replace(/[^0-9.]/g, ''))
                              if (!isNaN(p) && !isNaN(o) && o > 0 && p < o) {
                                const pct = Math.round((1 - p / o) * 100)
                                return `-${pct}%`
                              }
                              return 'SALE'
                            })()}
                          </span>
                        </div>
                      )}
                      <p className="mt-1 flex items-baseline justify-center gap-x-1">
                        <span className="text-4xl font-semibold tracking-tight text-gray-900 whitespace-nowrap">{price}</span>
                        <span className="text-sm/6 font-semibold tracking-wide text-gray-600">{t('yearSuffix')}</span>
                      </p>
                    </div>
                    {/* Price including VAT (schools show excl. VAT price, compute total shown below) */}
                    <p className="mt-2 text-sm text-gray-600">
                      {t('priceInclVAT', { price: computePriceVAT(price) })}
                    </p>
                    {isAuthenticated ? (
                      <button
                        onClick={isActionButtonDisabled ? undefined : (primaryActionIsOpenApp ? () => { window.location.href = t('loginLink') } : handleCreateCheckout)}
                        disabled={isActionButtonDisabled || isProcessing}
                        className={`mt-10 block w-full rounded-md px-3 py-2 text-center text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-smg_orange ${
                          isActionButtonDisabled || isProcessing
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-smg_orange text-white hover:bg-smg_orange_light'
                        }`}
                      >
                        {isProcessing ? t('processing') : getActionButtonText()}
                      </button>
                    ): (
                      <button
                        onClick={() => setLoginOpen(true)}
                        disabled={isProcessing}
                        className="mt-10 block w-full rounded-md bg-smg_orange px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-smg_orange_light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-smg_orange disabled:bg-gray-300 disabled:cursor-not-allowed"
                      >
                        {isProcessing ? t('processing') : t('loginToContinue')}
                      </button>
                    )}
                    {isSchoolPlan && selectedSeatLimit && schoolTeacherCount != null && schoolTeacherCount > selectedSeatLimit && (
                      <p className="mt-3 text-xs text-red-600">{`Your school has ${schoolTeacherCount} teachers. Choose a plan with at least ${schoolTeacherCount} seats.`}</p>
                    )}
                  </>
                )}
                <p className="mt-6 text-xs/5 text-gray-600">
                  {t('cancelInfo')}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          {isAuthenticated && (
            <div className="mt-8 text-center">
              <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-lg bg-gray-50 px-4 py-2 text-sm text-gray-600">
                <span>{t('loggedInAs')}: </span>
                <span className="font-medium">{(currentUser && currentUser.email) || (userInfo && userInfo.email) || ''}</span>
                {currentPlanText && (
                  <>
                    <span className="mx-1">|</span>
                    <span>{t('currentSubscription')}: </span>
                    <span className="font-medium">{currentPlanText}</span>
                  </>
                )}
                <span className="mx-1">|</span>
                <button 
                  onClick={() => logout()} 
                  className="text-smg_orange hover:text-smg_orange_light"
                >
                  {t('logout')}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  )
}
