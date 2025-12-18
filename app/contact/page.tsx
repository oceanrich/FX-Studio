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
                  <svg className="w-10 h-10 text-gray-700" fill="currentColor" viewBox="0 0 1024 1024">
                    <path d="M664.250054 368.541681c10.015098 0 19.892049 0.732687 29.67281 1.795902-26.647917-122.810047-159.358451-214.077703-310.826188-214.077703-169.353083 0-308.085774 114.232694-308.085774 259.274068 0 83.708494 46.165436 152.460344 123.281791 205.78483l-30.80868 91.730191 107.688651-53.455469c38.558178 7.53665 69.459978 15.308009 107.924362 15.308009 9.66308 0 19.230993-0.470721 28.752858-1.225921-6.025227-20.36584-9.521864-41.723264-9.521864-63.862493C402.328693 476.632491 517.908058 368.541681 664.250054 368.541681zM498.62897 285.87389c23.200398 0 38.557154 15.120372 38.557154 38.061874 0 22.846334-15.356756 38.156018-38.557154 38.156018-23.107277 0-46.260603-15.309684-46.260603-38.156018C452.368366 300.994262 475.522716 285.87389 498.62897 285.87389zM283.016307 362.090758c-23.107277 0-46.402843-15.309684-46.402843-38.156018 0-22.941502 23.295566-38.061874 46.402843-38.061874 23.081695 0 38.46301 15.120372 38.46301 38.061874C321.479317 346.782098 306.098002 362.090758 283.016307 362.090758zM945.448458 606.151333c0-121.888048-123.258255-221.236753-261.683954-221.236753-146.57838 0-262.015505 99.348706-262.015505 221.236753 0 122.06508 115.437126 221.200938 262.015505 221.200938 30.66644 0 61.617359-7.609305 92.423993-15.262961l84.513836 45.786813-23.178909-76.17082C899.379213 735.776599 945.448458 674.90216 945.448458 606.151333zM598.803483 567.994292c-15.332197 0-30.807656-15.096836-30.807656-30.501688 0-15.190981 15.47546-30.477129 30.807656-30.477129 23.295566 0 38.558178 15.286148 38.558178 30.477129C637.361661 552.897456 622.099049 567.994292 598.803483 567.994292zM768.25071 567.994292c-15.213493 0-30.594809-15.096836-30.594809-30.501688 0-15.190981 15.381315-30.477129 30.594809-30.477129 23.107277 0 38.558178 15.286148 38.558178 30.477129C806.808888 552.897456 791.357987 567.994292 768.25071 567.994292z"/>
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

