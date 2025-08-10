'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { Link } from '../i18n/navigation';

export default function Hero() {
  const t = useTranslations('HeroSection');
  const pathname = usePathname();

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    // If already on the homepage, intercept click to smooth scroll
    if (pathname === '/') {
      e.preventDefault();
      handleScroll(id);
    }
  };

  // Smooth scroll when coming from another page with a hash
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => handleScroll(id), 100); // small delay for layout
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[80vh] flex items-center bg-white"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop')",
          opacity: 0.1,
        }}
      ></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
          {t('heading')}
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          {t('paragraph')}
        </p>

        <Link
          href="/#services"
          scroll={false}
          onClick={(e) => handleClick(e, 'services')}
          className="mt-8 inline-block bg-[#C0A062] text-white font-bold py-3 px-8 rounded-full hover:bg-[#a98c56] transition-colors"
        >
          {t('button')}
        </Link>
      </div>
    </section>
  );
}
