'use client';

import HeroSlider from "./components/HeroSlider";
import Link from "next/link";
import { useLanguage } from "./contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main>
      <HeroSlider slogan={t.home.slogan} />
      
      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide px-4">
            {t.home.heroTitle}
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            {t.home.heroDescription}
          </p>
          <Link
            href="/portfolio"
            className="inline-block px-10 md:px-12 py-3 md:py-4 bg-black text-white text-xs md:text-sm tracking-widest uppercase hover:bg-gray-800 transition-colors"
          >
            {t.home.viewPortfolio}
          </Link>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-light tracking-wide text-center mb-10 md:mb-16">
            {t.home.featuredWork}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {['0d9f7636ba28175b04f5dd99ab3a3c04.JPG', '3ca3c1d07338226662249e1dcb7c9da5.JPG', '00bf5818074e8969e2f21fb43cb59ef2.JPG'].map((img, i) => (
              <Link
                key={i}
                href="/portfolio"
                className="group relative aspect-[3/4] overflow-hidden bg-gray-200 rounded-sm"
              >
                <img
                  src={`/images/commercial/${img}`}
                  alt={`Featured work ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
