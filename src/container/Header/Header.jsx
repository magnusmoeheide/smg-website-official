'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { images } from '../../constants'
import { useTranslation } from 'react-i18next'
import LanguageSelector from '../../LanguageSelector/LanguageSelector'

export default function Header() {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: t("headerHome"), href: '/' },
    { name: t("headerAbout"), href: '#about' },
    { name: t("headerPricing"), href: '#pricing' },
    { name: t("headerQA"), href: '#q&a' },
    { name: t("headerGuide"), href: '/pages/guide' },
  ]

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Klassekartgenerator</span>
            <img
              alt=""
              src={images[`${t("logo")}`]}
              className="h-8 w-auto"
            />
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="relative text-sm/6 font-semibold text-gray-900 group">
              {item.name}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-smg_orange transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-6">
          <div className="hidden lg:block">
            <LanguageSelector />
          </div>
          <a href={t("loginLink")} className="hidden text-sm/6 font-semibold text-gray-900 lg:block hover:text-smg_orange">
            {t("headerLogin")}
          </a>
          <a
            href={t("signupLink")}
            className="rounded-md bg-smg_orange px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-smg_orange_light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-smg_orange"
          >
            {t("headerSignup")}
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center gap-x-6">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Klassekartgenerator</span>
              <img
                alt=""
                src={images[`${t("logo")}`]}
                className="h-8 w-auto"
              />
            </a>
            <a
              href={t("signupLink")}
              className="ml-auto rounded-md bg-smg_orange px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-smg_orange_light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-smg_orange"
            >
              {t("headerSignup")}
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href={t("loginLink")}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 hover:text-smg_orange"
                >
                  {t("headerLogin")}
                </a>
              </div>
              <div className='py-6'>
                <LanguageSelector />
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
