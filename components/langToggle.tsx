'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useState } from 'react';
import clsx from 'clsx';

export default function LangToggle() {
  const locale = useLocale();
  const isArabic = locale === 'ar';
  const router = useRouter();
  const pathname = usePathname();

  const [animatingTo, setAnimatingTo] = useState(locale);

  const changeLanguage = (targetLocale: 'en' | 'ar') => {
    if (targetLocale === locale) return;

    // Animate highlight change first
    setAnimatingTo(targetLocale);

    // Wait until animation completes (200–300ms is typical)
    setTimeout(() => {
      router.push(`/${targetLocale}${pathname.replace(/^\/(ar|en)/, '')}`);
    }, 300);
  };

  return (
    <div className="lang-toggle flex space-x-2">
      <button
        onClick={() => changeLanguage('en')}
        className={clsx(
          'lang-toggle-btn m-0 transition-all duration-300',
          animatingTo === 'en' ? 'font-bold !bg-[#C0A062]' : ''
        )}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('ar')}
        className={clsx(
          'lang-toggle-btn m-0 transition-all duration-300',
          animatingTo === 'ar' ? 'font-bold !bg-[#C0A062]' : ''
        )}
      >
        AR
      </button>
    </div>
  );
}
