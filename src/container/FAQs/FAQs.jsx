import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next';


export default function FAQs() {
    const { t } = useTranslation();
    const faqs = [
      {
        question: t('qaQuestion1'),
        answer: t('qaAnswer1'),
      },
      {
        question: t('qaQuestion2'),
        answer: t('qaAnswer2'),
      },
      {
        question: t('qaQuestion3'),
        answer: t('qaAnswer3'),
      }
    ];
  return (
    <div className="bg-white" id="faq">
      <div className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:px-8 lg:pb-40">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            {t("qaTitle")}
          </h2>
          <dl className="mt-16 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="py-6 first:pt-0 last:pb-0">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base/7 font-semibold">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon aria-hidden="true" className="size-6 group-data-[open]:hidden" />
                      <MinusSmallIcon aria-hidden="true" className="size-6 group-[&:not([data-open])]:hidden" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base/7 text-gray-600">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
