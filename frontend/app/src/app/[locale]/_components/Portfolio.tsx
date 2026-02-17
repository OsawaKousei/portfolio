'use client';

import { useTranslations } from 'next-intl';
import { Globe, Smartphone, Cpu, Network, Brain, Bot } from 'lucide-react';

interface ProjectItem {
  title: string;
  description: string;
  link?: string;
  status?: string;
}

interface PortfolioCategory {
  key: string;
  icon: React.ReactNode;
  title: string;
  items: ProjectItem[];
  accentColor: string;
}

export default function Portfolio() {
  const t = useTranslations('Portfolio');

  const categories: PortfolioCategory[] = [
    {
      key: 'web',
      icon: <Globe className="w-5 h-5" />,
      title: t('webTitle'),
      accentColor: 'text-blue-400 border-blue-500/30',
      items: [
        {
          title: t('webItem1Title'),
          description: t('webItem1Desc'),
          status: t('webItem1Status'),
        },
        {
          title: t('webItem2Title'),
          description: t('webItem2Desc'),
          link: 'https://www.kupac.org/ja/',
        },
      ],
    },
    {
      key: 'native',
      icon: <Smartphone className="w-5 h-5" />,
      title: t('nativeTitle'),
      accentColor: 'text-green-400 border-green-500/30',
      items: [
        {
          title: t('nativeItem1Title'),
          description: t('nativeItem1Desc'),
          link: 'https://4hack.jp/',
        },
        {
          title: t('nativeItem2Title'),
          description: t('nativeItem2Desc'),
          status: t('nativeItem2Status'),
        },
      ],
    },
    {
      key: 'system',
      icon: <Cpu className="w-5 h-5" />,
      title: t('systemTitle'),
      accentColor: 'text-purple-400 border-purple-500/30',
      items: [
        {
          title: t('systemItem1Title'),
          description: t('systemItem1Desc'),
          link: 'https://github.com/OsawaKousei/Basys3-Hack-PC',
        },
        {
          title: t('systemItem2Title'),
          description: t('systemItem2Desc'),
          link: 'https://github.com/OsawaKousei/TinyUSDWebGPUSample',
        },
      ],
    },
    {
      key: 'infra',
      icon: <Network className="w-5 h-5" />,
      title: t('infraTitle'),
      accentColor: 'text-amber-400 border-amber-500/30',
      items: [
        {
          title: t('infraItem1Title'),
          description: t('infraItem1Desc'),
        },
        {
          title: t('infraItem2Title'),
          description: t('infraItem2Desc'),
          status: t('infraItem2Status'),
        },
      ],
    },
    {
      key: 'ai',
      icon: <Brain className="w-5 h-5" />,
      title: t('aiTitle'),
      accentColor: 'text-pink-400 border-pink-500/30',
      items: [
        {
          title: t('aiItem1Title'),
          description: t('aiItem1Desc'),
          status: t('aiItem1Status'),
        },
        {
          title: t('aiItem2Title'),
          description: t('aiItem2Desc'),
        },
      ],
    },
    {
      key: 'robotics',
      icon: <Bot className="w-5 h-5" />,
      title: t('roboticsTitle'),
      accentColor: 'text-cyan-400 border-cyan-500/30',
      items: [
        {
          title: t('roboticsItem1Title'),
          description: t('roboticsItem1Desc'),
          link: 'https://github.com/OsawaKousei/2DRoboPrac_ws',
        },
        {
          title: t('roboticsItem2Title'),
          description: t('roboticsItem2Desc'),
          link: 'https://github.com/OsawaKousei/standalone_auto_drive_ws',
        },
      ],
    },
  ];

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('title')}
            </h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>

          {/* Categories grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div
                key={category.key}
                className={`bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:${category.accentColor.split(' ')[1]} transition-all group`}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <span className={category.accentColor.split(' ')[0]}>
                    {category.icon}
                  </span>
                  <h3 className="font-semibold text-white text-sm">
                    {category.title}
                  </h3>
                </div>

                {/* Project items */}
                <div className="space-y-4">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="border-l-2 border-gray-800 pl-4 group-hover:border-gray-700 transition-colors">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-sm font-medium text-gray-200">
                          {item.title}
                        </h4>
                        {item.status && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-800 text-gray-500 whitespace-nowrap shrink-0">
                            {item.status}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-blue-400/70 hover:text-blue-400 mt-1.5 inline-block transition-colors"
                        >
                          →{' '}
                          {item.link.replace('https://', '').replace('http://', '')}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
