'use client';

import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className="relative px-6 text-center h-[calc(100vh-80px)] flex items-center w-full">
      {/* 背景オーバーレイ */}
      <div className="absolute inset-0 z-0 bg-slate-900 opacity-70"></div>

      {/* 背景画像 */}
      <div className="absolute inset-0 z-0 opacity-50 mix-blend-overlay">
        <img
          src="/hero-bg.png"
          alt="Hero background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content with relative positioning to appear above overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          {t('title1')}
          <br />
          {t('title2')}
          <br />
          <span className="primary-text-light">{t('title3')}</span>{t('title4')}
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          {t('description1')}
          <br />
          {t('description2')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="bg-blue-600 text-white hover:bg-blue-700 hover:shadow-xl transition-all transform hover:scale-105"
          >
            <a href="#contents">{t('viewSolutions')}</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-gray-900 transition-all"
          >
            <a href="#contact">{t('consult')}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
