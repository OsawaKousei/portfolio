'use client';
import { useEffect } from 'react';

export default function RootPage() {
  useEffect(() => {
    const lang = navigator.language.split('-')[0];
    const supportedLocales = ['ja', 'en'];
    const target = supportedLocales.includes(lang) ? lang : 'ja'; // デフォルトはja
    window.location.replace(`/${target}/`);
  }, []);

  return (
    <html>
      <head>
        <meta name="robots" content="noindex, follow" />
        <noscript><meta httpEquiv="refresh" content="0; url=/en/" /></noscript>
      </head>
      <body style={{ backgroundColor: '#fff' }} />
    </html>
  );
}
