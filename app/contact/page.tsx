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
            
            <div className="pt-12 space-y-8 max-w-lg mx-auto">
              {/* Email */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-grow">
                  <p className="text-sm text-gray-500 mb-1">{t.contact.email}</p>
                  <a 
                    href="mailto:aaronshue73@outlook.com"
                    className="text-lg font-medium text-black hover:text-gray-600 transition-colors"
                  >
                    aaronshue73@outlook.com
                  </a>
                </div>
              </div>

              {/* WeChat */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center">
                    <span className="text-xl font-medium text-gray-700">微</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="text-sm text-gray-500 mb-1">WeChat / {t.contact.wechat}</p>
                  <p className="text-lg font-medium text-black">
                    Aaronshue_73
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

