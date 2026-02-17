'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/navigation';

export default function Header() {
  const t = useTranslations('Header');
  const pathname = usePathname();

  return (
    <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-6 h-20 flex items-center">
        <nav className="flex justify-between items-center w-full">
          <div className="text-xl font-bold text-blue-400">{t('company')}</div>
          <div className="hidden md:flex space-x-8 items-center">
            <a
              href="#contents"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              {t('solutions')}
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              {t('about')}
            </a>
            <a
              href="#contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              {t('contact')}
            </a>
            {/* 言語切り替え */}
            <div className="flex space-x-2 ml-4">
              <Link
                href={pathname}
                locale="ja"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                JP
              </Link>
              <span className="text-gray-500">|</span>
              <Link
                href={pathname}
                locale="en"
                className="text-gray-300 hover:text-white transition-colors text-sm"
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
