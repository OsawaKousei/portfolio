'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-bg" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/6 rounded-full blur-3xl" />

      {/* Background image placeholder */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img
          src="/hero-bg.png"
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
        {/* Main headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 tracking-tight">
          {t('headline')}
        </h1>

        {/* Japanese sub-headline */}
        <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          {t('headlineJa')}
        </p>

        {/* Name & Role */}
        <div className="mb-10">
          <div className="relative w-24 h-24 md:w-28 md:h-28 mx-auto mb-5">
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-slate-500/60 shadow-lg">
              <Image
                src="/face.jpg"
                alt="Kosei Osawa"
                fill
                sizes="(max-width: 768px) 96px, 112px"
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-md overflow-hidden border border-slate-500 bg-slate-800">
              <Image
                src="/icon.jpg"
                alt="Personal icon"
                fill
                sizes="32px"
                className="object-cover"
              />
            </div>
          </div>
          <h2 className="text-xl md:text-2xl font-semibold gradient-text mb-2">
            {t('name')}
          </h2>
          <p className="text-sm md:text-base text-slate-400">
            {t('role')}
          </p>
          <p className="text-sm text-slate-500 mt-1">
            {t('affiliation')}
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="bg-blue-600 text-white hover:bg-blue-500 transition-all px-8"
          >
            <a href="#portfolio">{t('ctaPrimary')}</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border border-slate-600 text-slate-300 bg-transparent hover:bg-slate-800 hover:text-white transition-all px-8"
          >
            <a href="#vision">{t('ctaSecondary')}</a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border-2 border-slate-500 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-slate-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}
