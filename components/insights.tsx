import { useTranslations } from "next-intl";
import Image from "next/image"

export default function Insights() {
  const t = useTranslations('InsightsSection');
  return (
    <section id="insights" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">{t("title")}</h2>
          <p className="mt-2 text-gray-600">{t("paragraph")}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
            <Image className="w-full" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" alt="Logo" width={250} height={250} />
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">{t("items.0.title")}</h3>
              <p className="text-gray-600 text-sm mb-4">{t("items.0.paragraph")}</p>
              <a href="#" className="text-[#C0A062] font-semibold hover:underline">
                {t("items.0.button")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};
