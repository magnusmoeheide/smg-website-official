import { useTranslation } from "react-i18next"
  
  export default function Footer() {
    const { t } = useTranslation()
    const navigation = {
        main: [
            { name: t("headerHome"), href: '/' },
            { name: t("headerAbout"), href: '/#about' },
            { name: t("headerPricing"), href: '/#pricing' },
            { name: t("headerFaq"), href: '/#faq' },
            { name: t("headerGuide"), href: '/pages/guide' },
        ],
    }
    return (
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
          <nav aria-label="Footer" className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6">
            {navigation.main.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-600 hover:text-gray-900">
                {item.name}
              </a>
            ))}
            <a href={`mailto:${t("contactEmail")}`} className="text-gray-600 hover:text-gray-900">
                {t("contactButton")}
            </a>
            <a href="/terms" className="text-gray-600 hover:text-gray-900">{t("termsButton")}</a>
          </nav>
          <div className="mt-10 flex justify-center gap-x-10">
          </div>
          <p className="mt-10 text-center text-sm/6 text-gray-600">&copy; 2025 {t("address")} |{" "}
            <a
              href="https://w2.brreg.no/enhet/sok/detalj.jsp?orgnr=932761173"
              target="_blank"
              rel="noreferrer"
            >
              Magnus Heide AS.
            </a>{" "}
            All rights reserved.</p>
        </div>
      </footer>
    )
  }
  