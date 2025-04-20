'use client'
import { useParams, useSearchParams, useNavigate } from 'react-router-dom'
import { useState, useEffect, useMemo } from 'react'
import { CheckIcon, ArrowLeftIcon } from '@heroicons/react/20/solid'
import { tiers } from '../../../constants/subscriptionTiers'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../../../contexts/authContext'
import Login from '../../Login/Login'
import { signOut } from 'firebase/auth'
import { auth } from '../../../auth'
import { clearTokens } from '../../../services/tokenService'

export default function PricingDetail() {
  const { slug } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { isAuthenticated, currentUser, subscription, userInfo } = useAuth()

  const [loginOpen, setLoginOpen] = useState(false)

  const selectedTier = tiers.find((tier) => tier.slug === slug)

  // Determine available frequencies based on selectedTier pricing
  const availableFrequencies = useMemo(() => {
    const frequencies = []
    if (selectedTier?.price.monthly) frequencies.push('monthly')
    if (selectedTier?.price.yearly) frequencies.push('yearly')
    return frequencies
  }, [selectedTier?.price])

  // Get frequency from URL param if valid
  const urlFrequency = searchParams.get('frequency')
  const defaultFrequency = availableFrequencies.includes(urlFrequency) ? urlFrequency : availableFrequencies[0]
  const [frequency, setFrequency] = useState(defaultFrequency)

  // Update frequency state if URL param changes
  useEffect(() => {
    if (availableFrequencies.includes(urlFrequency)) {
      setFrequency(urlFrequency)
    }
  }, [urlFrequency, availableFrequencies])

  // Check if the current subscription is a trial
  const isTrialSubscription = useMemo(() => {
    return subscription?.isTrial === true
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
    // Handle school plan restrictions
    if (isSchoolPlan) {
      if (!hasSchool) return t('createSchoolFirst')
      if (!isSchoolAdmin) return t('contactSchoolAdmin')
    }
    
    // Handle plan type switching restrictions
    if ((isCurrentTeacherPlan && isSchoolPlan) || (isCurrentSchoolPlan && selectedTier?.slug === 'teacher')) {
      return t('cannotSwitchPlanType')
    }
    
    // Handle regular subscription status
    if (isCurrentPlan) return t('currentPlan')
    if (isUpgrade) return t('upgradePlan')
    return selectedTier?.slug === 'teacher' ? t('payWithVipps') : t('selectPlan')
  }

  // Determine if the action button should be disabled
  const isActionButtonDisabled = useMemo(() => {
    // Current non-trial plan
    if (isCurrentPlan && !isTrialSubscription) return true
    
    // School plan restrictions
    if (isSchoolPlan && (!hasSchool || !isSchoolAdmin)) return true
    
    // Plan type switching restrictions
    if ((isCurrentTeacherPlan && isSchoolPlan) || (isCurrentSchoolPlan && selectedTier?.slug === 'teacher')) return true
    
    return false
  }, [isCurrentPlan, isTrialSubscription, isSchoolPlan, hasSchool, isSchoolAdmin, isCurrentTeacherPlan, isCurrentSchoolPlan, selectedTier])

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
        <div className="mx-auto mt-8 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-12 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-3xl font-semibold tracking-tight text-gray-900">
              {tierName}
            </h3>
            <p className="mt-6 text-base/7 text-gray-600">
              {selectedTier.slug === 'teacher'
                ? t('exclusiveVippsPayment')
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
                      <span className="text-sm/6 font-semibold tracking-wide text-gray-600">
                        {frequency === 'monthly' ? t('monthSuffix') : t('yearSuffix')}
                      </span>
                    </p>
                    {/* Price including VAT */}
                    <p className="mt-2 text-sm text-gray-600">
                      {t('priceInclVAT', { price: computePriceVAT(price) })}
                    </p>
                    {isAuthenticated && currentUser ? (
                      <a
                        href={isActionButtonDisabled ? "#" : "/"}
                        className={`mt-10 block w-full rounded-md px-3 py-2 text-center text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-smg_orange ${
                          isActionButtonDisabled
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-smg_orange text-white hover:bg-smg_orange_light'
                        }`}
                        aria-disabled={isActionButtonDisabled}
                        onClick={(e) => isActionButtonDisabled && e.preventDefault()}
                      >
                        {getActionButtonText()}
                      </a>
                    ) : (
                      <button
                        onClick={() => setLoginOpen(true)}
                        className="mt-10 block w-full rounded-md bg-smg_orange px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-smg_orange_light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-smg_orange"
                      >
                        {t('loginToContinue')}
                      </button>
                    )}
                  </>
                ) : (
                  <>
                    <p className="text-base font-semibold text-gray-600">{t('payInvoice')}</p>
                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                      <span className="text-5xl font-semibold tracking-tight text-gray-900 whitespace-nowrap">{price}</span>
                      <span className="text-sm/6 font-semibold tracking-wide text-gray-600">
                        {frequency === 'monthly' ? t('monthSuffix') : t('yearSuffix')}
                      </span>
                    </p>
                    {/* Price including VAT */}
                    <p className="mt-2 text-sm text-gray-600">
                      {t('priceInclVAT', { price: computePriceVAT(price) })}
                    </p>
                    {isAuthenticated && currentUser ? (
                      <a
                        href={isActionButtonDisabled ? "#" : "/"}
                        className={`mt-10 block w-full rounded-md px-3 py-2 text-center text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-smg_orange ${
                          isActionButtonDisabled
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-smg_orange text-white hover:bg-smg_orange_light'
                        }`}
                        aria-disabled={isActionButtonDisabled}
                        onClick={(e) => isActionButtonDisabled && e.preventDefault()}
                      >
                        {getActionButtonText()}
                      </a>
                    ): (
                      <button
                        onClick={() => setLoginOpen(true)}
                        className="mt-10 block w-full rounded-md bg-smg_orange px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-smg_orange_light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-smg_orange"
                      >
                        {t('loginToContinue')}
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
                      {isTrialSubscription && ` (${t('trial')})`}
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