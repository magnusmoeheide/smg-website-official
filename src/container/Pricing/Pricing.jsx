'use client'

import { useEffect, useMemo, useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'
import { useTranslation } from 'react-i18next'
import { tiers } from '../../constants/subscriptionTiers'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Pricing() {
    const { t } = useTranslation()
    const frequencies = useMemo(() => [
        { value: 'monthly', label: t('monthly'), priceSuffix: t('monthSuffix') },
        { value: 'yearly', label: t('yearly'), priceSuffix: t('yearSuffix') },
    ], [t])
    const [frequency, setFrequency] = useState(frequencies[1])
    const filteredTiers = tiers.filter(tier => frequency.value !== 'monthly' || tier.price.monthly)

    useEffect(() => {
        setFrequency(prev => frequencies.find(f => f.value === prev.value) || frequencies[1])
    }, [frequencies])

    return (
      <div className="bg-white pt-24 sm:pt-32" id="pricing">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base/7 font-semibold text-smg_orange">{t("pricing")}</h2>
            <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
              {t("pricingTitle")}
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-600 sm:text-xl/8">
              {t("pricingText")}
          </p>
          <div className="mt-16 flex justify-center">
            <fieldset aria-label="Payment frequency">
              <RadioGroup
                value={frequency}
                onChange={setFrequency}
                className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs/5 font-semibold ring-1 ring-inset ring-gray-200"
              >
                {frequencies.map((option) => (
                  <Radio
                    key={option.value}
                    value={option}
                    className="cursor-pointer rounded-full px-2.5 py-1 text-gray-500 data-[checked]:bg-smg_orange data-[checked]:text-white"
                  >
                    {option.label}
                  </Radio>
                ))}
              </RadioGroup>
            </fieldset>
          </div>
          <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
            {filteredTiers.map((tier) => {
                const tierName = t(`tiers.${tier.slug}.name`)
                const tierDescription = t(`tiers.${tier.slug}.description`)
                const tierFeatures = t(`tiers.${tier.slug}.features`, { returnObjects: true })
                return (
              <div
                key={tier.id}
                className={classNames(
                  tier.mostPopular ? 'ring-2 ring-smg_orange' : 'ring-1 ring-gray-200',
                  'rounded-3xl p-8',
                )}
              >
                <h3
                  id={tier.id}
                  className={classNames(
                    tier.mostPopular ? 'text-smg_orange' : 'text-gray-900',
                    'text-lg/8 font-semibold',
                  )}
                >
                  {tierName}
                </h3>
                <p className="mt-4 text-sm/6 text-gray-600">{tierDescription}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-semibold tracking-tight text-gray-900">
                    {tier.price[frequency.value]}
                  </span>
                  <span className="text-sm/6 font-semibold text-gray-600">{frequency.priceSuffix}</span>
                </p>
                <a
                  href={`/pricing/${tier.slug}?frequency=${frequency.value}`}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.mostPopular
                      ? 'bg-smg_orange text-white shadow-sm hover:bg-smg_orange_light'
                      : 'text-smg_orange ring-1 ring-inset ring-orange-200 hover:ring-orange-300',
                    'mt-6 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-smg_orange',
                  )}
                >
                    {t('pricingCTA')}
                </a>
                <p className="text-xs text-gray-400 pt-2">{t("plan1Comment")}</p>
                <ul className="mt-8 space-y-3 text-sm/6 text-gray-600">
                  {tierFeatures.map((feature, index) => (
                    <li key={index} className="flex gap-x-3">
                      <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-smg_orange" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )})}
          </div>
        </div>
      </div>
    )
}
