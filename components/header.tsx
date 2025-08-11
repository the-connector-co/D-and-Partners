'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link'
import Image from 'next/image';
import LangToggle from './langToggle';

export default function Header() {
  const t = useTranslations('Header');

  return (
    <header dir='ltr' className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div
          className="max-w-[150px] cursor-pointer"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <Image className="w-full" src="/logo.png" alt="Logo" width={150} height={150} />
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {['about', 'services', 'insights', 'contact'].map((section) => (
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

        <LangToggle />
      </nav>
    </header>
  );
};
