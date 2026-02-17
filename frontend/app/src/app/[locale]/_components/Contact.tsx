'use client';

import { useTranslations } from 'next-intl';
import { Mail, Github, Twitter } from 'lucide-react';

export default function Contact() {
  const t = useTranslations('Contact');

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('title')}
            </h2>
            <p className="text-gray-400 text-base max-w-xl mx-auto leading-relaxed">
              {t('description')}
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Email */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 sm:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-5 h-5 text-blue-400" />
                <h3 className="text-sm font-semibold text-white">{t('emailLabel')}</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <span className="text-xs text-gray-500 block mb-1">{t('emailPersonalLabel')}</span>
                  <a
                    href={`mailto:${t('emailPersonal')}`}
                    className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    {t('emailPersonal')}
                  </a>
                </div>
                <div>
                  <span className="text-xs text-gray-500 block mb-1">{t('emailBusinessLabel')}</span>
                  <a
                    href={`mailto:${t('emailBusiness')}`}
                    className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    {t('emailBusiness')}
                  </a>
                </div>
              </div>
            </div>

            {/* GitHub */}
            <a
              href={`https://github.com/${t('github')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-2">
                <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                <h3 className="text-sm font-semibold text-white">{t('githubLabel')}</h3>
              </div>
              <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                {t('github')}
              </p>
            </a>

            {/* X (Twitter) */}
            <a
              href={`https://x.com/${t('twitter').replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-2">
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                <h3 className="text-sm font-semibold text-white">{t('twitterLabel')}</h3>
              </div>
              <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                {t('twitter')}
              </p>
            </a>

            {/* Qiita */}
            <a
              href={`https://qiita.com/${t('qiita').replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors group sm:col-span-2"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors font-bold text-sm flex items-center justify-center">
                  Q
                </span>
                <h3 className="text-sm font-semibold text-white">{t('qiitaLabel')}</h3>
              </div>
              <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                {t('qiita')}
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
