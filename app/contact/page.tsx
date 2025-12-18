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
                    <path d="M8.5 5C4.4 5 1 7.9 1 11.5c0 2.1 1.2 4 3.2 5.2-.2.8-.7 2.5-1 3.2 0 0 0 .1.1.1.1 0 3.2-2 3.9-2.4.6.1 1.2.2 1.8.2 4.1 0 7.5-2.9 7.5-6.5S12.6 5 8.5 5zm-.4 8.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9zm3.5 0c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9zm4.5-3.3c-.1 0-.2 0-.3-.1-2.9-.9-5.9-.5-8.5.8-.2.1-.5 0-.6-.2-.1-.2 0-.5.2-.6 2.8-1.4 6.1-1.9 9.3-.9.2.1.4.3.3.6 0 .3-.2.4-.4.4z"/>
                    <path d="M22.5 15.5c0-3.1-3-5.6-6.7-5.6-3.7 0-6.7 2.5-6.7 5.6s3 5.6 6.7 5.6c.5 0 1-.1 1.5-.2.5.3 2.8 1.7 2.8 1.7s0-.1.1-.1c-.2-.5-.6-1.7-.7-2.3 1.4-.9 2.3-2.2 2.3-3.7zm-8.4-.9c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7zm3.5 0c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7z"/>
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

