'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link'
import Image from 'next/image';
import { useEffect } from 'react';

export default function Header() {
  const t = useTranslations('Header');
  const locale = useLocale();
  useEffect(() => {
    console.log(locale)
  })

  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className='max-w-[150px]'>
          <Image className='w-full' src="/logo.png" alt="Logo" width={150} height={150} />
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {['about', 'services', 'emea', 'insights', 'contact'].map((section) => (
            <Link
              key={section}
              href={`/#${section}`}
              scroll={false} // disable Next.js default
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(section)?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}
              className="nav-link text-gray-600"
            >
              {t(section)}
            </Link>
          ))}

        </div>
        <div className="lang-toggle flex space-x-2">
          <Link
            href={"/en"}
            className={`lang-toggle-btn ${locale === 'en' ? 'font-bold bg-[#C0A062]' : ''}`}
          >
            EN
          </Link>
          <Link
            href={"/ar"}
            className={`lang-toggle-btn ${locale === 'ar' ? 'font-bold bg-[#C0A062]' : ''}`}
          >
            AR
          </Link>
        </div>
      </nav>
    </header>
  );
};
