'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <main className="pt-20">
      <section className="min-h-screen py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          {/* Header */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-light tracking-wide">
              {t.contact.title}
            </h1>
            <p className="text-xl text-gray-600">
              {t.contact.subtitle}
            </p>
          </div>

          {/* Contact Info */}
          <div className="pt-12 space-y-8 text-lg text-gray-700">
            <p>{t.contact.description}</p>
            
            <div className="pt-8 space-y-4">
              <p className="text-2xl font-light">
                {t.contact.comingSoon}
              </p>
              <p className="text-gray-500">
                {t.contact.comingSoonDesc}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

