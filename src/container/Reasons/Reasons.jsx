import { useTranslation } from 'react-i18next';
import { images } from '../../constants';


export default function Reasons() {
    const { t } = useTranslation();
    const features = [
      {
        name: t("reason1Title"),
        description: t("reason1Text"),
        image: images.clock,
      },
      {
        name: t("reason2Title"),
        description: t("reason2Text"),
        image: images.profits,
      },
      {
        name: t("reason3Title"),
        description: t("reason3Text"),
        image: images.battery,
      },
    ]
  return (
    <div className="bg-white pb-24 sm:pb-32" id="reasons">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-smg_orange">{t("yourBenefits")}</h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            {t("reasonsTitle")}
          </p>
        </div>
        <div className="mx-auto mt-16 sm:mt-20 lg:mt-24 flex gap-16 flex-col lg:flex-row justify-center items-center">
          <div className="grid grid-cols-1 gap-y-8 lg:w-2/3">
            {features.map((feature) => (
                <div className="max-w-2xl lg:max-w-none overflow-hidden rounded-lg bg-gray-50 shadow">
                    <div className="px-4 py-5 sm:p-6">

                        <div key={feature.name} className="flex flex-col">
                            <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900">
                                <img src={feature.image} alt="" className="w-12 h-12" />
                                {feature.name}
                            </dt>
                            <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
                            <p className="flex-auto">{feature.description}</p>
                            </dd>
                        </div>

                    </div>
                </div>
            ))}
          </div>
          <div className="w-60 lg:w-1/3">
            <img src={images.teacher} alt="Reasons" className='object-contain' />
          </div>
        </div>
      </div>
    </div>
  )
}
