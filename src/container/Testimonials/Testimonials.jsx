import { useTranslation } from 'react-i18next';
import { images } from '../../constants';



export default function Testimonials() {
    const { t } = useTranslation();
    const testimonials = [
        {
            name: 'Hans Petter',
            description: t('testimonial1Text'),
            image: images.graduation,
        },
        {
            name: 'Erik Larsen',
            description: t('testimonial2Text'),
            image: images.graduation,
        },
    ]
  return (
    <div className="bg-white pt-24 sm:pt-32" id="testimonials">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-smg_orange">{t("Testimonials")}</h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            {t("testimonialsTitle")}
          </p>
        </div>
        <div className="mx-auto mt-16 sm:mt-20 lg:mt-24 flex gap-16 flex-col lg:flex-row justify-center items-center">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial bg-gray-50 shadow">
              <img
                src={testimonial.image}
                alt="Testimonial"
                className="testimonial-image"
              />
              <p className="testimonial-text">{testimonial.description}</p>
              <p className="testimonial-name">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="trustpilot-widget center mt-20"
        data-locale="en-GB"
        data-template-id="5419b6a8b0d04a076446a9ad"
        data-businessunit-id="6431713917cc990a6d1b67ae"
        data-style-height="24px"
        data-style-width="100%"
        data-theme="light"
        data-min-review-count="10"
        data-without-reviews-preferred-string-id="3"
        data-style-alignment="center"
      >
        <a
          href="https://uk.trustpilot.com/review/klassekartgenerator.no"
          target="_blank"
          rel="noreferrer"
        >
          Trustpilot
        </a>
      </div>
    </div>
  )
}
