'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-3">
      <span className="text-blue-400 font-mono text-sm font-semibold min-w-[60px] shrink-0">
        {label}
      </span>
      <span className="text-slate-400 text-sm leading-relaxed">{value}</span>
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
            <p className="text-slate-400 text-base max-w-3xl mx-auto leading-relaxed">
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
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/30 transition-colors">
              <div className="flex items-start justify-between gap-4 mb-4">
                <span className="text-xs font-mono text-blue-400 tracking-wider uppercase">
                  {t('kupacLabel')}
                </span>
                <span className="relative w-14 h-14 shrink-0 rounded-full overflow-hidden border border-slate-600/60 bg-white/90">
                  <Image
                    src="/KUPAC_logo.png"
                    alt="KUPAC logo"
                    fill
                    sizes="56px"
                    className="object-contain p-1"
                  />
                </span>
              </div>
              <h4 className="text-lg font-bold text-white mb-1">
                {t('kupacName')}
              </h4>
              <p className="text-sm text-slate-500 italic mb-4">
                {t('kupacTagline')}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {t('kupacDescription')}
              </p>
              <div className="space-y-3 border-t border-slate-700/50 pt-4">
                <StatItem label={t('kupacStat1Label')} value={t('kupacStat1Value')} />
                <StatItem label={t('kupacStat2Label')} value={t('kupacStat2Value')} />
                <StatItem label={t('kupacStat3Label')} value={t('kupacStat3Value')} />
              </div>
              <div className="mt-5 pt-4 border-t border-slate-700/50 flex flex-wrap gap-3">
                <a
                  href="https://www.kupac.org/ja/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs text-blue-300 hover:text-blue-200 transition-colors"
                >
                  {t('officialWebsite')} ↗
                </a>
              </div>
            </div>

            {/* KVT Card */}
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-cyan-500/30 transition-colors">
              <div className="flex items-start justify-between gap-4 mb-4">
                <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
                  {t('kvtLabel')}
                </span>
                <span className="relative w-14 h-14 shrink-0 rounded-lg overflow-hidden border border-slate-700/80 bg-black">
                  <Image
                    src="/KVT_logo.png"
                    alt="KVT logo"
                    fill
                    sizes="56px"
                    className="object-contain p-1.5"
                  />
                </span>
              </div>
              <h4 className="text-lg font-bold text-white mb-1">
                {t('kvtName')}
              </h4>
              <p className="text-sm text-slate-500 italic mb-4">
                {t('kvtTagline')}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {t('kvtDescription')}
              </p>
              <div className="space-y-3 border-t border-slate-700/50 pt-4">
                <StatItem label={t('kvtStat1Label')} value={t('kvtStat1Value')} />
                <StatItem label={t('kvtStat2Label')} value={t('kvtStat2Value')} />
                <StatItem label={t('kvtStat3Label')} value={t('kvtStat3Value')} />
              </div>
              <div className="mt-5 pt-4 border-t border-slate-700/50 flex flex-wrap gap-3">
                <a
                  href="https://www.kvt.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs text-cyan-300 hover:text-cyan-200 transition-colors"
                >
                  {t('officialWebsite')} ↗
                </a>
                <a
                  href="https://github.com/KyotoVLATech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs text-slate-300 hover:text-white transition-colors"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
