import { useTranslation } from 'react-i18next';
import { images } from '../../constants';


export default function Features() {
    const { t } = useTranslation();
    const features = [
      {
        name: t("feature1Title"),
        description: t("feature1Text"),
        image: images.easyToUse,
      },
      {
        name: t("feature2Title"),
        description: t("feature2Text"),
        image: images.algorithm,
      },
      {
        name: t("feature3Title"),
        description: t("feature3Text"),
        image: images.privacy,
      },
    ]
  return (
    <div className="bg-white py-24 sm:py-32" id="about">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-smg_orange">{t("ourfeatures")}</h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            {t("featuresTitle")}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900">
                    <img src={feature.image} alt="" className="w-12 h-12" />
                    {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
