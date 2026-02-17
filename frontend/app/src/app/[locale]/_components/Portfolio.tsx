'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import {
  Globe,
  Smartphone,
  Cpu,
  Network,
  Brain,
  Bot,
  ChevronDown,
  ExternalLink,
  Play,
  ImageIcon,
} from 'lucide-react';

interface ProjectItem {
  title: string;
  description: string;
  detail: string;
  tags: string[];
  link?: string;
  status?: string;
}

interface PortfolioCategory {
  key: string;
  icon: React.ReactNode;
  title: string;
  summary: string;
  items: ProjectItem[];
  accentColor: string;
  accentBg: string;
}

function AccordionPanel({ category }: { category: PortfolioCategory }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const t = useTranslations('Portfolio');

  const updateHeight = useCallback(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [updateHeight]);

  // Re-measure after images/content load
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(updateHeight, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen, updateHeight]);

  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden transition-all hover:border-slate-600/50">
      {/* Collapsed header — always visible */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-4 p-5 md:p-6 text-left group cursor-pointer"
        aria-expanded={isOpen}
      >
        {/* Icon */}
        <span
          className={`${category.accentColor} ${category.accentBg} p-2.5 rounded-lg shrink-0`}
        >
          {category.icon}
        </span>

        {/* Title + summary */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-white text-sm md:text-base">
            {category.title}
          </h3>
          <p className="text-xs md:text-sm text-slate-400 mt-0.5 truncate">
            {category.summary}
          </p>
        </div>

        {/* Project count badge */}
        <span className="text-[11px] px-2.5 py-1 rounded-full bg-slate-700/80 text-slate-400 font-medium shrink-0">
          {category.items.length} projects
        </span>

        {/* Chevron */}
        <ChevronDown
          className={`w-5 h-5 text-slate-500 transition-transform duration-300 shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Expandable content */}
      <div
        className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
        style={{ maxHeight: isOpen ? `${contentHeight}px` : '0px' }}
      >
        <div ref={contentRef} className="px-5 md:px-6 pb-6 space-y-5">
          {/* Divider */}
          <div className="border-t border-slate-700/50" />

          {category.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/40 border border-slate-700/30 rounded-lg p-5 space-y-4"
            >
              {/* Project header */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm md:text-base font-semibold text-white">
                      {item.title}
                    </h4>
                    {item.status && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-700 text-slate-400 whitespace-nowrap">
                        {item.status}
                      </span>
                    )}
                  </div>
                  <p className="text-xs md:text-sm text-slate-400 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-blue-400 transition-colors shrink-0 p-1"
                    aria-label={`Visit ${item.title}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-[10px] md:text-[11px] px-2 py-0.5 rounded-md bg-slate-800 ${category.accentColor} border border-slate-700/50 font-medium`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Detailed description */}
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                {item.detail}
              </p>

              {/* Media placeholders */}
              <div className="grid grid-cols-2 gap-3">
                {/* Thumbnail placeholder */}
                <div className="aspect-video bg-slate-800 border border-slate-700/50 rounded-lg flex flex-col items-center justify-center gap-2 text-slate-600">
                  <ImageIcon className="w-6 h-6" />
                  <span className="text-[10px]">Screenshot</span>
                </div>
                {/* Video placeholder */}
                <div className="aspect-video bg-slate-800 border border-slate-700/50 rounded-lg flex flex-col items-center justify-center gap-2 text-slate-600">
                  <Play className="w-6 h-6" />
                  <span className="text-[10px]">Demo Video</span>
                </div>
              </div>

              {/* Link */}
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-blue-400/70 hover:text-blue-400 transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  {item.link
                    .replace('https://', '')
                    .replace('http://', '')}
                </a>
              )}
            </div>
          ))}

          {/* Collapse button at bottom */}
          <button
            onClick={() => setIsOpen(false)}
            className="w-full text-center text-xs text-slate-500 hover:text-slate-300 transition-colors py-2 cursor-pointer"
          >
            {t('collapse')} ↑
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const t = useTranslations('Portfolio');

  const categories: PortfolioCategory[] = [
    {
      key: 'web',
      icon: <Globe className="w-5 h-5" />,
      title: t('webTitle'),
      summary: t('webSummary'),
      accentColor: 'text-blue-400',
      accentBg: 'bg-blue-500/10',
      items: [
        {
          title: t('webItem1Title'),
          description: t('webItem1Desc'),
          detail: t('webItem1Detail'),
          tags: t('webItem1Tags').split(','),
          status: t('webItem1Status'),
        },
        {
          title: t('webItem2Title'),
          description: t('webItem2Desc'),
          detail: t('webItem2Detail'),
          tags: t('webItem2Tags').split(','),
          link: 'https://www.kupac.org/ja/',
        },
      ],
    },
    {
      key: 'native',
      icon: <Smartphone className="w-5 h-5" />,
      title: t('nativeTitle'),
      summary: t('nativeSummary'),
      accentColor: 'text-green-400',
      accentBg: 'bg-green-500/10',
      items: [
        {
          title: t('nativeItem1Title'),
          description: t('nativeItem1Desc'),
          detail: t('nativeItem1Detail'),
          tags: t('nativeItem1Tags').split(','),
          link: 'https://4hack.jp/',
        },
        {
          title: t('nativeItem2Title'),
          description: t('nativeItem2Desc'),
          detail: t('nativeItem2Detail'),
          tags: t('nativeItem2Tags').split(','),
          status: t('nativeItem2Status'),
        },
      ],
    },
    {
      key: 'system',
      icon: <Cpu className="w-5 h-5" />,
      title: t('systemTitle'),
      summary: t('systemSummary'),
      accentColor: 'text-purple-400',
      accentBg: 'bg-purple-500/10',
      items: [
        {
          title: t('systemItem1Title'),
          description: t('systemItem1Desc'),
          detail: t('systemItem1Detail'),
          tags: t('systemItem1Tags').split(','),
          link: 'https://github.com/OsawaKousei/Basys3-Hack-PC',
        },
        {
          title: t('systemItem2Title'),
          description: t('systemItem2Desc'),
          detail: t('systemItem2Detail'),
          tags: t('systemItem2Tags').split(','),
          link: 'https://github.com/OsawaKousei/TinyUSDWebGPUSample',
        },
      ],
    },
    {
      key: 'infra',
      icon: <Network className="w-5 h-5" />,
      title: t('infraTitle'),
      summary: t('infraSummary'),
      accentColor: 'text-amber-400',
      accentBg: 'bg-amber-500/10',
      items: [
        {
          title: t('infraItem1Title'),
          description: t('infraItem1Desc'),
          detail: t('infraItem1Detail'),
          tags: t('infraItem1Tags').split(','),
        },
        {
          title: t('infraItem2Title'),
          description: t('infraItem2Desc'),
          detail: t('infraItem2Detail'),
          tags: t('infraItem2Tags').split(','),
          status: t('infraItem2Status'),
        },
      ],
    },
    {
      key: 'ai',
      icon: <Brain className="w-5 h-5" />,
      title: t('aiTitle'),
      summary: t('aiSummary'),
      accentColor: 'text-pink-400',
      accentBg: 'bg-pink-500/10',
      items: [
        {
          title: t('aiItem1Title'),
          description: t('aiItem1Desc'),
          detail: t('aiItem1Detail'),
          tags: t('aiItem1Tags').split(','),
          status: t('aiItem1Status'),
        },
        {
          title: t('aiItem2Title'),
          description: t('aiItem2Desc'),
          detail: t('aiItem2Detail'),
          tags: t('aiItem2Tags').split(','),
        },
      ],
    },
    {
      key: 'robotics',
      icon: <Bot className="w-5 h-5" />,
      title: t('roboticsTitle'),
      summary: t('roboticsSummary'),
      accentColor: 'text-cyan-400',
      accentBg: 'bg-cyan-500/10',
      items: [
        {
          title: t('roboticsItem1Title'),
          description: t('roboticsItem1Desc'),
          detail: t('roboticsItem1Detail'),
          tags: t('roboticsItem1Tags').split(','),
          link: 'https://github.com/OsawaKousei/2DRoboPrac_ws',
        },
        {
          title: t('roboticsItem2Title'),
          description: t('roboticsItem2Desc'),
          detail: t('roboticsItem2Detail'),
          tags: t('roboticsItem2Tags').split(','),
          link: 'https://github.com/OsawaKousei/standalone_auto_drive_ws',
        },
      ],
    },
  ];

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('title')}
            </h2>
            <p className="text-slate-400 text-base max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>

          {/* Accordion panels */}
          <div className="space-y-3">
            {categories.map((category) => (
              <AccordionPanel key={category.key} category={category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
