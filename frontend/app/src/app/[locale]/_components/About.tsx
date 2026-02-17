'use client';

import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('About');

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* ヘッダーセクション */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('title')}
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              {t('description')}
            </p>
          </div>

          {/* 統計情報 */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2024</div>
              <div className="text-gray-600 text-sm">{t('stats.foundedYear')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600 text-sm">{t('stats.projects')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-600 text-sm">{t('stats.members')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">7/24</div>
              <div className="text-gray-600 text-sm">{t('stats.support')}</div>
            </div>
          </div>

          {/* サービスの特徴 */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">{t('features.technology.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('features.technology.description')}
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">{t('features.practicality.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('features.practicality.description')}
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">{t('features.quality.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('features.quality.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
