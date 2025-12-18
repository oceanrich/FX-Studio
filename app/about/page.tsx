'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <main className="pt-20">
      <section className="min-h-screen py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-light tracking-wide">
              {t.about.title}
            </h1>
            <p className="text-xl text-gray-600 italic">
              {t.about.slogan}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <p>{t.about.paragraph1}</p>
            <p>{t.about.paragraph2}</p>
            <p>{t.about.paragraph3}</p>
          </div>

          {/* Services */}
          <div className="pt-12 space-y-6">
            <h2 className="text-3xl font-light tracking-wide">{t.about.servicesTitle}</h2>
            <ul className="space-y-3 text-lg text-gray-700">
              <li>• {t.about.services.commercial}</li>
              <li>• {t.about.services.brand}</li>
              <li>• {t.about.services.portrait}</li>
              <li>• {t.about.services.editorial}</li>
              <li>• {t.about.services.creative}</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

