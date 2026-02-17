import { setRequestLocale } from 'next-intl/server';
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Vision from "./_components/Vision";
import Portfolio from "./_components/Portfolio";
import Timeline from "./_components/Timeline";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      <Hero />
      <div className="section-divider"></div>
      <Vision />
      <div className="section-divider"></div>
      <Portfolio />
      <div className="section-divider"></div>
      <Timeline />
      <div className="section-divider"></div>
      <Contact />
      <Footer />
    </div>
  );
}
