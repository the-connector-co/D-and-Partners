'use client';

import clsx from 'clsx';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useState } from 'react';

export default function LangToggle() {
  const locale = useLocale();
  const isArabic = locale === 'ar';
  const nextLocale = isArabic ? 'en' : 'ar';

  const router = useRouter();
  const pathname = usePathname();
  const [animatingArabic, setAnimatingArabic] = useState(isArabic);

  const handleToggle = () => {
    setAnimatingArabic(!isArabic);
    setTimeout(() => {
      router.push(`/${nextLocale}${pathname.replace(/^\/(ar|en)/, '')}`);
    }, 300);
  };

  return (
    <button
      onClick={handleToggle}
      className="relative w-full max-w-24 bg-black/10 rounded-full cursor-pointer px-4 py-2 select-none"
    >
      {/* Toggle Circle */}
      <div
        className={clsx(
          'absolute right-[2px] top-[4px] h-8 w-[47%] bg-[#C0A062] rounded-full shadow-md transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]',
          animatingArabic
            ? '-translate-x-full'
            : 'translate-x-0'
        )}
      />

      {/* Labels */}
      <div className="relative flex justify-between w-full font-bold">
        <span
          className={clsx(
            'transition-colors duration-300',
            animatingArabic ? 'opacity-100' : 'opacity-50 text-black'
          )}
        >
          AR
        </span>
        <span
          className={clsx(
            'transition-colors duration-300',
            animatingArabic ? 'opacity-50' : 'opacity-100 text-black'
          )}
        >
          EN
        </span>
      </div>
    </button>
  );
}
