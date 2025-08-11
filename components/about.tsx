import { useTranslations } from "next-intl";
import Image from "next/image";

export default function About() {
  const t = useTranslations('About');
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            {t('title')}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="">
            <h3 className="text-xl font-bold mb-4 text-[#C0A062]">
              {t('items.0.heading')}
            </h3>
            <p className="text-gray-600 mb-4">
              {t('items.0.paragraph')}
            </p>
            <h3 className="text-xl font-bold mb-4 text-[#C0A062]">
              {t('items.1.heading')}
            </h3>
            <p className="text-gray-600 mb-4">
              {t('items.1.paragraph')}
            </p>
            <h3 className="text-xl font-bold mb-4 text-[#C0A062]">
              {t('items.2.heading')}
            </h3>
            <p className="text-gray-600">
              {t('items.2.paragraph')}
            </p>
          </div>
          <div>
            <Image className="w-full h-full" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2232&auto=format&fit=crop" alt="Logo" width={250} height={250} />
          </div>
        </div>
      </div>
    </section>
  )
};