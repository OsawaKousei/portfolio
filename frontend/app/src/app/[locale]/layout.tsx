import { setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ReactNode } from 'react';
import { routing } from '@/navigation';
import '../globals.css';

const domain = 'https://example.com';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  
  return {
    title: messages.Metadata.title,
    description: messages.Metadata.description,
    alternates: {
      canonical: `${domain}/${locale}/`,
      languages: {
        ja: `${domain}/ja/`,
        en: `${domain}/en/`,
        'x-default': `${domain}/ja/`,
      },
    },
    openGraph: {
      title: messages.Metadata.title,
      description: messages.Metadata.description,
      url: `${domain}/${locale}/`,
      siteName: messages.Header.company,
      images: [
        {
          url: `${domain}/og-image.png`,
          width: 1200,
          height: 630,
          alt: messages.Metadata.title,
        },
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: messages.Metadata.title,
      description: messages.Metadata.description,
      images: [`${domain}/og-image.png`],
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  const messages = await getMessages();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const t = messages as any;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: t.Header?.company || 'Company Name',
    url: domain,
    logo: `${domain}/logo.png`,
    description: t.Metadata?.description,
  };

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
