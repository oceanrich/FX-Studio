'use client';

import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { portfolioImages, getImagePath, Category } from '../data/portfolio';

export default function Portfolio() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const { t } = useLanguage();

  // 根据分类筛选图片
  const filteredImages = selectedCategory === 'all'
    ? portfolioImages
    : portfolioImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide">
            {t.portfolio.title}
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            {t.portfolio.subtitle}
          </p>

          {/* 分类筛选 */}
          <div className="flex justify-center gap-2 md:gap-4 pt-6 md:pt-8 flex-wrap px-4">
            {(['all', 'commercial', 'portrait', 'wedding'] as Category[]).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm tracking-wide transition-all whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {t.portfolio.categories[category]}
              </button>
            ))}
          </div>

          {/* 图片计数 */}
          <p className="text-xs md:text-sm text-gray-500">
            {filteredImages.length} {filteredImages.length === 1 ? 'image' : 'images'}
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-4 sm:px-6 lg:px-12 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {filteredImages.map((image, index) => (
              <button
                key={`${image.category}-${image.filename}`}
                onClick={() => openLightbox(index)}
                className="group relative aspect-[3/4] overflow-hidden bg-gray-100 cursor-pointer rounded-sm"
              >
                <img
                  src={getImagePath(image)}
                  alt={`${image.category} photography ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* 分类标签 */}
                <div className="absolute top-3 md:top-4 left-3 md:left-4 z-10">
                  <span className="inline-block px-2 md:px-3 py-1 bg-black/70 backdrop-blur-sm text-white text-xs tracking-wide rounded-full">
                    {t.portfolio.categories[image.category]}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white text-4xl hover:opacity-70 transition-opacity z-10"
            aria-label="Close"
          >
            ×
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-6 text-white text-4xl hover:opacity-70 transition-opacity z-10"
            aria-label="Previous"
          >
            ‹
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-6 text-white text-4xl hover:opacity-70 transition-opacity z-10"
            aria-label="Next"
          >
            ›
          </button>

          {/* Image */}
          <div
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center px-20"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={getImagePath(filteredImages[currentImage])}
              alt={`Portfolio image ${currentImage + 1}`}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm">
            {currentImage + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </main>
  );
}
