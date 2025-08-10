'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function Services() {
  const t = useTranslations('ServicesSection');
  const tShared = useTranslations('Shared');

  const services = tShared.raw('servicesData') as {
    icon: string;
    title: string;
    headline: string;
    body: string;
    points: string[];
  }[];

  const [selectedService, setSelectedService] = useState(0);

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            {t('title')}
          </h2>
          <p className="mt-2 text-gray-600">{t('paragraph')}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Service list */}
          <div
            id="service-cards"
            className="w-full lg:w-1/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => setSelectedService(index)}
                className={`service-card bg-gray-50 p-6 rounded-lg cursor-pointer flex items-center gap-4 ${selectedService === index ? 'border border-[#C0A062] shadow-md' : ''
                  }`}
              >
                <div className="text-3xl">{service.icon}</div>
                <div>
                  <h3 className="font-bold text-lg">{service.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Selected service details */}
          <div
            id="service-content-display"
            className="w-full lg:w-2/3 bg-gray-50 p-8 rounded-lg min-h-[400px]"
          >
            <div className="content-fade-in">
              <h3 className="text-2xl font-bold text-[#C0A062] mb-2">
                {services[selectedService].headline}
              </h3>
              <p className="text-gray-600 mb-6">
                {services[selectedService].body}
              </p>
              <ul className="space-y-3">
                {services[selectedService].points.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#C0A062] mx-3 mt-1">✔</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
;