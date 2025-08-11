import { useTranslations } from "next-intl";
import StatCounter from "./startCounter";

export default function EmeaHub() {
  const t = useTranslations('EmeaHubSection');
  return (
    <section id="insights" className="py-20">
      <div className="container mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">{t('title')}</h2>
        <p className="mt-2 text-gray-600 max-w-3xl mx-auto">{t('paragraph')}</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center container mx-auto">
        <StatCounter target={3} label={t('items.0')} />
        <StatCounter target={100} label={t('items.1')} />
        <StatCounter target={19} label={t('items.2')} />
        <StatCounter target={7} label={t('items.3')} />
      </div>
    </section >
  )
};
