'use client';

import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('Contact');

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('title')}
            </h2>
            <p className="text-gray-600 text-lg">
              {t('description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t('consultTitle')}
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('consult1')}
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('consult2')}
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('consult3')}
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('consult4')}
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {t('email')}
                  </h4>
                  <a
                    href="mailto:contact@company.com"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    contact@company.com
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {t('businessHours')}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {t('businessHoursValue')}
                    <br />
                    {t('businessHoursNote')}
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    {t('responseTime')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
