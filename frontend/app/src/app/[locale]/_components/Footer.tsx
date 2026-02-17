'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold text-blue-400 mb-4">Company</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {t('companyDescription')}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('services')}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#contents" className="hover:text-white transition-colors">{t('reportSupport')}</a></li>
                <li><a href="#contents" className="hover:text-white transition-colors">{t('mobileAppDev')}</a></li>
                <li><a href="#contents" className="hover:text-white transition-colors">{t('techSolutions')}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('companyInfo')}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">{t('aboutUs')}</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">{t('contactUs')}</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              {t('copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
