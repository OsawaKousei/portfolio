'use client';

import { useTranslations } from 'next-intl';

interface TimelineEvent {
  date: string;
  text: string;
}

export default function Timeline() {
  const t = useTranslations('Timeline');

  const events: TimelineEvent[] = [
    { date: t('e1Date'), text: t('e1Text') },
    { date: t('e2Date'), text: t('e2Text') },
    { date: t('e3Date'), text: t('e3Text') },
    { date: t('e4Date'), text: t('e4Text') },
    { date: t('e5Date'), text: t('e5Text') },
    { date: t('e6Date'), text: t('e6Text') },
    { date: t('e7Date'), text: t('e7Text') },
    { date: t('e8Date'), text: t('e8Text') },
    { date: t('e9Date'), text: t('e9Text') },
    { date: t('e10Date'), text: t('e10Text') },
  ];

  return (
    <section id="timeline" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('title')}
            </h2>
            <p className="text-slate-400 text-base">
              {t('subtitle')}
            </p>
          </div>

          {/* Timeline */}
          <div className="timeline-line pl-8 space-y-0">
            {events.map((event, index) => (
              <div
                key={index}
                className="relative pb-8 last:pb-0"
              >
                {/* Dot */}
                <div className="absolute left-[-25px] top-1 w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-500 z-10" />

                {/* Content */}
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                  <span className="text-xs font-mono text-blue-400 shrink-0 min-w-[70px]">
                    {event.date}
                  </span>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {event.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
