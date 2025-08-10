'use client';

import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('ContactSection');
  const tShared = useTranslations('Shared');

  // Get services array from translations
  const services = tShared.raw('servicesData') as {
    icon: string;
    title: string;
    headline: string;
    body: string;
    points: string[];
  }[];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">{t('title')}</h2>
          <p className="mt-2 text-gray-600">{t('paragraph')}</p>
        </div>

        <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <form>
            {/* Name & Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder={t('inputs.name')}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C0A062]"
              />
              <input
                type="text"
                placeholder={t('inputs.company')}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C0A062]"
              />
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="email"
                placeholder={t('inputs.email')}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C0A062]"
              />
              <input
                type="tel"
                placeholder={t('inputs.phone')}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C0A062]"
              />
            </div>

            {/* Service Dropdown */}
            <div className="mb-4">
              <select
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C0A062] bg-white"
                defaultValue=""
              >
                <option value="" disabled>
                  {t('inputs.service')}
                </option>
                {services.map((service, index) => (
                  <option key={index} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div className="mb-4">
              <textarea
                placeholder={t('inputs.message')}
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C0A062]"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#C0A062] text-white font-bold py-3 px-8 rounded-md hover:bg-[#a98c56] transition-colors"
            >
              {t('button')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
