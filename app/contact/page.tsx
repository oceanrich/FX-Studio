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
                  <svg className="w-8 h-8 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.5 4C5.36 4 2 6.69 2 10c0 1.89 1.08 3.56 2.78 4.66-.17.39-.73 1.82-1.14 2.76-.04.09-.02.19.04.27.06.08.15.12.25.12.57 0 2.15-.52 3.32-1.01.66.13 1.36.2 2.09.2.21 0 .42-.01.62-.02-.09-.39-.14-.79-.14-1.21 0-3.31 3.13-6 7-6 .26 0 .51.02.76.04C17.13 6.19 13.63 4 9.5 4zm-2 5.5c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm4 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1z"/>
                    <path d="M16.5 11c-3.03 0-5.5 2.02-5.5 4.5s2.47 4.5 5.5 4.5c.57 0 1.13-.07 1.65-.2.75.32 2.21.78 2.66.78.08 0 .16-.03.21-.09.05-.06.07-.14.04-.21-.26-.6-.72-1.89-.88-2.28 1.25-.77 2.07-1.99 2.07-3.35 0-2.48-2.47-4.65-5.75-4.65zm-2.5 5.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75zm3.5 0c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75z"/>
                  </svg>
                </div>
                <div className="flex-grow">
                  <p className="text-sm text-gray-500 mb-1">{t.contact.wechat}</p>
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

