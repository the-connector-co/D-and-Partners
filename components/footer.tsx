import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations('Footer');
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p>{t('text')}</p>
        <p className="text-sm text-gray-400 mt-2">{t('location')}</p>
      </div>
    </footer>
  )
};