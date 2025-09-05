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
import { updateSchoolSubscription } from '../../../services/subscriptionService'

export default function PricingDetail() {
  const { slug } = useParams()
  
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { isAuthenticated, currentUser, subscription, userInfo } = useAuth()

  const [loginOpen, setLoginOpen] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [showBillingForm, setShowBillingForm] = useState(false)
  const [billingInfo, setBillingInfo] = useState({
    orgNumber: '',
    invoiceType: 'ehf',
    customerReference: '',
    invoiceEmail: ''
  })

  const selectedTier = tiers.find((tier) => tier.slug === slug)

  // Only yearly frequency is supported
  const [frequency] = useState('yearly')

  // Check if the current subscription is a trial
  const isTrialSubscription = useMemo(() => {
    return subscription?.planSlug === 'trial'
  }, [subscription])
  
  // Check if the current subscription matches the selected tier (but not if it's a trial)
  const isCurrentPlan = useMemo(() => {
    if (isTrialSubscription) return false
    return subscription?.planSlug === selectedTier?.slug
  }, [subscription, selectedTier, isTrialSubscription])

  // Check if the selected tier is a school plan
  const isSchoolPlan = useMemo(() => {
    return selectedTier?.slug?.startsWith('school')
  }, [selectedTier])

  // Check if current plan is a school plan
  const isCurrentSchoolPlan = useMemo(() => {
    return subscription?.planSlug?.startsWith('school')
  }, [subscription])

  // Check if current plan is a teacher plan
  const isCurrentTeacherPlan = useMemo(() => {
    return subscription?.planSlug === 'teacher'
  }, [subscription])

  // Check if user has a school
  const hasSchool = useMemo(() => {
    return userInfo?.school_id != null
  }, [userInfo])

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

  // Function to handle billing info changes
  const handleBillingInfoChange = (e) => {
    const { name, value } = e.target
    setBillingInfo((prev) => ({ ...prev, [name]: value }))
  }

  // Function to handle school plan subscription
  const handleSchoolSubscription = async (e) => {
    e.preventDefault()
    setIsProcessing(true)
    
    try {
      // Validate form
      if (!billingInfo.orgNumber) {
        alert(t('orgNumberRequired'))
        setIsProcessing(false)
        return
      }
      
      if (billingInfo.invoiceType === 'ehf' && !billingInfo.customerReference) {
        alert(t('customerReferenceRequired'))
        setIsProcessing(false)
        return
      }
      
      if (billingInfo.invoiceType === 'email' && !billingInfo.invoiceEmail) {
        alert(t('invoiceEmailRequired'))
        setIsProcessing(false)
        return
      }
      
      // Call subscription service
      await updateSchoolSubscription(selectedTier.slug, frequency, billingInfo)
      
      // Navigate to success page or show success message
      alert(t('subscriptionUpdateSuccess'))
      navigate('/')
    } catch (error) {
      console.error('Subscription error:', error)
      alert(t('subscriptionUpdateError'))
    } finally {
      setIsProcessing(false)
    }
  }

  // Function to handle subscription action based on plan type
  const handleSubscriptionAction = () => {
    if (isSchoolPlan) {
      setShowBillingForm(true)
    } else {
      return
    }
  }

  const tierName = selectedTier ? t(`tiers.${selectedTier.slug}.name`) : ''
  const tierDescription = selectedTier ? t(`tiers.${selectedTier.slug}.description`) : ''
  const tierFeatures = selectedTier ? t(`tiers.${selectedTier.slug}.features`, { returnObjects: true }) : []
  const price = selectedTier?.price[frequency]
  
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
    if (isCurrentPlan) return t('currentPlan')
    if (isSchoolPlan) {
      if (!hasSchool) return t('createSchoolFirst')
      if (!isSchoolAdmin) return t('contactSchoolAdmin')
    }
    if (!isSchoolPlan && hasSchool) return t('leaveSchoolFirst')
    if ((isCurrentTeacherPlan && isSchoolPlan) || (isCurrentSchoolPlan && selectedTier?.slug === 'teacher')) {
      return t('cannotSwitchPlanType')
    }
    if (isUpgrade) return t('upgradePlan')
    return selectedTier?.slug === 'teacher' ? t('checkout') : t('selectPlan')
  }

  // Determine if the action button should be disabled
  const isActionButtonDisabled = useMemo(() => {
    if (isCurrentPlan) return true
    if (isSchoolPlan && (!hasSchool || !isSchoolAdmin)) return true
    if (!isSchoolPlan && hasSchool) return true
    if ((isCurrentTeacherPlan && isSchoolPlan) || (isCurrentSchoolPlan && selectedTier?.slug === 'teacher')) return true
    
    return false
  }, [isCurrentPlan, isSchoolPlan, hasSchool, isSchoolAdmin, isCurrentTeacherPlan, isCurrentSchoolPlan, selectedTier])

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
        </div>
        
        {/* School subscription billing form */}
        {showBillingForm ? (
          <div className="mx-auto mt-8 max-w-2xl rounded-3xl ring-1 ring-gray-200 p-8">
            <h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">
              {t('billingInformation')}
            </h3>
            
            <form onSubmit={handleSchoolSubscription}>
              {/* Organization number */}
              <div className="mb-4">
                <label htmlFor="orgNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('organizationNumber')} *
                </label>
                <input
                  type="text"
                  id="orgNumber"
                  name="orgNumber"
                  value={billingInfo.orgNumber}
                  onChange={handleBillingInfoChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-smg_orange focus:ring-smg_orange sm:text-sm p-2 border"
                  required
                />
              </div>
              
              {/* Invoice type */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('invoiceType')} *
                </label>
                <div className="flex gap-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="invoiceType"
                      value="ehf"
                      checked={billingInfo.invoiceType === 'ehf'}
                      onChange={handleBillingInfoChange}
                      className="h-4 w-4 text-smg_orange focus:ring-smg_orange"
                    />
                    <span className="ml-2">{t('ehfInvoice')}</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="invoiceType"
                      value="email"
                      checked={billingInfo.invoiceType === 'email'}
                      onChange={handleBillingInfoChange}
                      className="h-4 w-4 text-smg_orange focus:ring-smg_orange"
                    />
                    <span className="ml-2">{t('emailInvoice')}</span>
                  </label>
                </div>
              </div>
              
              {/* Conditional fields based on invoice type */}
              {billingInfo.invoiceType === 'ehf' ? (
                <div className="mb-4">
                  <label htmlFor="customerReference" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('customerReference')} *
                  </label>
                  <input
                    type="text"
                    id="customerReference"
                    name="customerReference"
                    value={billingInfo.customerReference}
                    onChange={handleBillingInfoChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-smg_orange focus:ring-smg_orange sm:text-sm p-2 border"
                    required
                  />
                </div>
              ) : (
                <div className="mb-4">
                  <label htmlFor="invoiceEmail" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('invoiceEmail')} *
                  </label>
                  <input
                    type="email"
                    id="invoiceEmail"
                    name="invoiceEmail"
                    value={billingInfo.invoiceEmail}
                    onChange={handleBillingInfoChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-smg_orange focus:ring-smg_orange sm:text-sm p-2 border"
                    required
                  />
                </div>
              )}
              
              {/* Summary */}
              <div className="mt-6 p-4 bg-gray-50 rounded-md">
                <h4 className="font-medium text-gray-900">{t('orderSummary')}</h4>
                <p className="mt-1 text-sm text-gray-600">{tierName}</p>
                <p className="text-sm text-gray-600">
                  {price} {t('yearSuffix')}
                </p>
                <p className="text-sm text-gray-600">
                  {t('priceInclVAT', { price: computePriceVAT(price) })}
                </p>
              </div>
              
              {/* Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={() => setShowBillingForm(false)}
                  className="flex-1 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-smg_orange focus:ring-offset-2"
                >
                  {t('goBack')}
                </button>
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="flex-1 rounded-md bg-smg_orange px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-smg_orange_light focus:outline-none focus:ring-2 focus:ring-smg_orange focus:ring-offset-2 disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  {isProcessing ? t('processing') : t('confirmSubscription')}
                </button>
              </div>
            </form>
          </div>
        ) : (
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
                {t('trialInfo', { days: 30 })}
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
                      <p className="mt-6 flex items-baseline justify-center gap-x-2">
                        <span className="text-5xl font-semibold tracking-tight text-gray-900">{price}</span>
                        <span className="text-sm/6 font-semibold tracking-wide text-gray-600">{t('yearSuffix')}</span>
                      </p>
                      {/* Price including VAT */}
                      <p className="mt-2 text-sm text-gray-600">
                        {t('priceInclVAT', { price: computePriceVAT(price) })}
                      </p>
                      {isAuthenticated && currentUser && (
                        selectedTier.lookupKey?.[frequency] ? (
                          <form action="/create-checkout-session" method="POST" className="mt-10">
                            <input type="hidden" name="lookup_key" value={selectedTier.lookupKey[frequency]} />
                            <button
                              type="submit"
                              disabled={isActionButtonDisabled || isProcessing}
                              className={`block w-full rounded-md px-3 py-2 text-center text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-smg_orange ${
                                isActionButtonDisabled || isProcessing
                                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                  : 'bg-smg_orange text-white hover:bg-smg_orange_light'
                              }`}
                            >
                              {isProcessing ? t('processing') : getActionButtonText()}
                            </button>
                          </form>
                        ) : (
                        <button
                          onClick={() => setLoginOpen(true)}
                          disabled={isProcessing}
                          className="mt-10 block w-full rounded-md bg-smg_orange px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-smg_orange_light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-smg_orange disabled:bg-gray-300 disabled:cursor-not-allowed"
                        >
                          {isProcessing ? t('processing') : t('loginToContinue')}
                        </button>
                        ))}
                    </>
                  ) : (
                    <>
                      <p className="text-base font-semibold text-gray-600">{t('payInvoice')}</p>
                      <p className="mt-6 flex items-baseline justify-center gap-x-2">
                        <span className="text-5xl font-semibold tracking-tight text-gray-900 whitespace-nowrap">{price}</span>
                        <span className="text-sm/6 font-semibold tracking-wide text-gray-600">{t('yearSuffix')}</span>
                      </p>
                      {/* Price including VAT */}
                      <p className="mt-2 text-sm text-gray-600">
                        {t('priceInclVAT', { price: computePriceVAT(price) })}
                      </p>
                      {isAuthenticated && currentUser ? (
                        <button
                          onClick={isActionButtonDisabled ? undefined : handleSubscriptionAction}
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
                    </>
                  )}
                  <p className="mt-6 text-xs/5 text-gray-600">
                    {t('cancelInfo')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div>
          {isAuthenticated && currentUser && (
            <div className="mt-8 text-center">
              <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-lg bg-gray-50 px-4 py-2 text-sm text-gray-600">
                <span>{t('loggedInAs')}: </span>
                <span className="font-medium">{currentUser.email}</span>
                {subscription && (
                  <>
                    <span className="mx-1">|</span>
                    <span>{t('currentSubscription')}: </span>
                    <span className="font-medium">
                      {subscription.planSlug && t(`tiers.${subscription.planSlug}.name`)}
                      {/* {isTrialSubscription && ` (${t('trial')})`} */}
                    </span>
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
