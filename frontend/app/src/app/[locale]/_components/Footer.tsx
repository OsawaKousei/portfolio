'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="border-t border-slate-700/30 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="text-lg font-bold text-white mb-3">Kousei Osawa</div>
              <p className="text-slate-500 text-sm leading-relaxed">
                {t('description')}
              </p>
            </div>
            {/* Sections */}
            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">{t('sections')}</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#vision" className="text-slate-500 hover:text-white transition-colors">{t('vision')}</a></li>
                <li><a href="#portfolio" className="text-slate-500 hover:text-white transition-colors">{t('projects')}</a></li>
                <li><a href="#timeline" className="text-slate-500 hover:text-white transition-colors">{t('timeline')}</a></li>
                <li><a href="#contact" className="text-slate-500 hover:text-white transition-colors">{t('contact')}</a></li>
              </ul>
            </div>
            {/* Links */}
            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">{t('links')}</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://github.com/OsawaKousei" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                    {t('github')}
                  </a>
                </li>
                <li>
                  <a href="https://x.com/sawa__622" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                    {t('twitter')}
                  </a>
                </li>
                <li>
                  <a href="https://qiita.com/N622" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                    {t('qiita')}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700/30 pt-8 text-center">
            <p className="text-slate-600 text-xs">
              {t('copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
