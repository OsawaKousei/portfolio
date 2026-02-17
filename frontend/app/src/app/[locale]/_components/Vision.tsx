'use client';

import { useTranslations } from 'next-intl';

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-3">
      <span className="text-blue-400 font-mono text-sm font-semibold min-w-[60px] shrink-0">
        {label}
      </span>
      <span className="text-gray-400 text-sm leading-relaxed">{value}</span>
    </div>
  );
}

export default function Vision() {
  const t = useTranslations('Vision');

  return (
    <section id="vision" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('title')}
            </h2>
            <p className="text-lg text-cyan-400 font-medium mb-6">
              {t('subtitle')}
            </p>
            <p className="text-gray-400 text-base max-w-3xl mx-auto leading-relaxed">
              {t('description')}
            </p>
          </div>

          {/* Strategy title */}
          <div className="text-center mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-white inline-flex items-center gap-3">
              <span className="w-8 h-px bg-gradient-to-r from-transparent to-blue-500" />
              {t('strategyTitle')}
              <span className="w-8 h-px bg-gradient-to-l from-transparent to-cyan-500" />
            </h3>
          </div>

          {/* Two engines grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* KUPAC Card */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-blue-500/30 transition-colors">
              <div className="mb-4">
                <span className="text-xs font-mono text-blue-400 tracking-wider uppercase">
                  {t('kupacLabel')}
                </span>
              </div>
              <h4 className="text-lg font-bold text-white mb-1">
                {t('kupacName')}
              </h4>
              <p className="text-sm text-gray-500 italic mb-4">
                {t('kupacTagline')}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {t('kupacDescription')}
              </p>
              <div className="space-y-3 border-t border-gray-800 pt-4">
                <StatItem label={t('kupacStat1Label')} value={t('kupacStat1Value')} />
                <StatItem label={t('kupacStat2Label')} value={t('kupacStat2Value')} />
                <StatItem label={t('kupacStat3Label')} value={t('kupacStat3Value')} />
              </div>
            </div>

            {/* KVT Card */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-cyan-500/30 transition-colors">
              <div className="mb-4">
                <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
                  {t('kvtLabel')}
                </span>
              </div>
              <h4 className="text-lg font-bold text-white mb-1">
                {t('kvtName')}
              </h4>
              <p className="text-sm text-gray-500 italic mb-4">
                {t('kvtTagline')}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {t('kvtDescription')}
              </p>
              <div className="space-y-3 border-t border-gray-800 pt-4">
                <StatItem label={t('kvtStat1Label')} value={t('kvtStat1Value')} />
                <StatItem label={t('kvtStat2Label')} value={t('kvtStat2Value')} />
                <StatItem label={t('kvtStat3Label')} value={t('kvtStat3Value')} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
