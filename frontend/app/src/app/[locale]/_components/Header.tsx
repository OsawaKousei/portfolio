'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link, usePathname } from '@/navigation';

export default function Header() {
  const t = useTranslations('Header');
  const pathname = usePathname();

  return (
    <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700/30 sticky top-0 z-50">
      <div className="container mx-auto px-6 h-16 flex items-center">
        <nav className="flex justify-between items-center w-full">
          <a href="#" className="flex items-center gap-2.5 text-lg font-bold text-white tracking-tight">
            <span className="relative w-8 h-8 rounded-lg overflow-hidden border border-slate-600/60">
              <Image
                src="/icon.jpg"
                alt="Kosei Osawa icon"
                fill
                sizes="32px"
                className="object-cover"
              />
            </span>
            {t('name')}
          </a>
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#vision"
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              {t('vision')}
            </a>
            <a
              href="#portfolio"
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              {t('projects')}
            </a>
            <a
              href="#timeline"
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              {t('timeline')}
            </a>
            <a
              href="#contact"
              className="text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              {t('contact')}
            </a>
            {/* Language switcher */}
            <div className="flex items-center gap-1.5 ml-2 text-xs">
              <Link
                href={pathname}
                locale="ja"
                className="text-slate-500 hover:text-white transition-colors px-1.5 py-0.5 rounded"
              >
                JP
              </Link>
              <span className="text-slate-600">|</span>
              <Link
                href={pathname}
                locale="en"
                className="text-slate-500 hover:text-white transition-colors px-1.5 py-0.5 rounded"
              >
                EN
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
