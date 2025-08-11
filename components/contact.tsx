'use client';

import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export default function Contact() {
  const t = useTranslations('ContactSection');
  const tShared = useTranslations('Shared');
  const tErrors = useTranslations('Errors'); // Errors translations

  // Get services array from translations
  const services = tShared.raw('servicesData') as {
    icon: string;
    title: string;
    headline: string;
    body: string;
    points: string[];
  }[];

  // Build schema with translated errors
  const contactSchema = z.object({
    name: z.string().min(2, tErrors('nameMin')),
    company: z.string().optional(),
    email: z.string().email(tErrors('invalidEmail')),
    phone: z.string().optional(),
    service: z.string().min(1, tErrors('serviceRequired')),
    message: z.string().min(10, tErrors('messageMin')),
  });

  type ContactFormValues = z.infer<typeof contactSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        // Handle server errors
        const errorData = await response.json();
        console.error('Error submitting form:', errorData);
        // You could also show an error message to the user here
        return;
      }

      // Optionally handle success
      const result = await response.json();
      console.log('Form submitted successfully:', result);
      // You can reset the form or show a success message here

    } catch (error) {
      console.error('Network error:', error);
      // Show a network error message to the user if needed
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">{t('title')}</h2>
          <p className="mt-2 text-gray-600">{t('paragraph')}</p>
        </div>

        <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name & Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <input
                  {...register('name')}
                  type="text"
                  placeholder={`${t('inputs.name')} *`}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C0A062]"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <input
                  {...register('company')}
                  type="text"
                  placeholder={t('inputs.company')}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C0A062]"
                />
                {errors.company && (
                  <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
                )}
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <input
                  {...register('email')}
                  type="email"
                  placeholder={`${t('inputs.email')} *`}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C0A062]"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <input
                  {...register('phone')}
                  type="text"
                  placeholder={t('inputs.phone')}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C0A062]"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>
            </div>

            {/* Service Dropdown */}
            <div className="mb-4">
              <select
                {...register('service')}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C0A062] bg-white"
                defaultValue=""
              >
                <option value="" disabled>
                  {t('inputs.service')}{" *"}
                </option>
                {services.map((service, index) => (
                  <option key={index} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
              )}
            </div>

            {/* Message */}
            <div className="mb-4">
              <textarea
                {...register('message')}
                placeholder={`${t('inputs.message')} *`}
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C0A062]"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
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
