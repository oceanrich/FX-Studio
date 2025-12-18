'use client';

import { useState } from 'react';
import Image from 'next/image';

const images = [
  '00bf5818074e8969e2f21fb43cb59ef2.JPG',
  '084c34a5118919ffaab1d5b5c619e972.JPG',
  '0d9f7636ba28175b04f5dd99ab3a3c04.JPG',
  '1529d688ff719f4892218995167d8928.JPG',
  '167dd99ff9602081737ec90a7622d97b.JPG',
  '1d6c98837c192c24ea5af55e36044aeb.JPG',
  '1e3582477ae3bb5470c4ca5bf517d86f.JPG',
  '2bbcffbba833733153f083e6e4de1364.JPG',
  '3ba0c5ae1063b340170cafc5ccb87928.JPG',
  '3ca3c1d07338226662249e1dcb7c9da5.JPG',
  '4f36dfb23f44282d28739999544300b6.JPG',
  '52f52206092ffbfc04e611033f49e1dd.JPG',
  '538a6efff8574ecf46a37df6e9d17e69.JPG',
  '575a7398884524fa79baeed5d324adfe.JPG',
  '58653028cf310dac6f0097897c9439d9.jpg',
  '5a17d9ff4f117d999a33bb1857bf1eb0.JPG',
  '6ddbe1fb3c9adae288554b6323a7f7ec.JPG',
  '7bdd27c9bf6722385ee1a2c8557865dd.jpg',
  '886d3d621c0d312947896480bda8396d.JPG',
  '8a3f4bfc45b8be1f8f47ac8de45e9178.JPG',
  '8a455e1810950c2138001e0738d354b2.JPG',
  '8a76b4cd7475aa5d732849f101f7f17e.jpg',
  '9236fcf738baa6e56545dd3f0ed69191.JPG',
  '9910b0031ef5a048e17e97cde3f8e41e.jpg',
  '9c21d91cb24286034ca5e09063018966.JPG',
  'a0bde7033aeab966d328cb93c7ce1f47.JPG',
  'a745f4a28b4adf92d95b4f4d43f66f19.JPG',
  'aa8a93ac117aca03d3b321959c45617b.JPG',
  'ad1d58e2a083635ba8a12256fba77d87.JPG',
  'aed30a29c0a5a9e0042faf1fadbe7e5c.JPG',
  'bc3ca6323a855a2bfd65305fe63482b8.JPG',
  'c23ced6b969ef73d3b9e9f336d437acb.JPG',
  'c3e253b2800e4e9ee510612904032111.jpg',
  'c53ab2c2be752c10233e45c388caf697.JPG',
  'cf00bf0b766789b8754d2ff3bd8e5d6f.JPG',
  'd820b9efe299d64337ad7dfee60a4bb2.jpg',
  'daed625a18675d2368e07d4ee37c786f.jpg',
  'e13e6f422c7d285a177b95ff10989f77.JPG',
  'e85d6752aba07eb440a347e97703aa86.JPG',
  'f592629d186ac3c5a2d76edff7fca97b.JPG',
  'f91cc11981771c49f137772196b5219e.jpg',
  'fb90c659e11d85bc517c451b27adba40.JPG',
  'ffe04a1b2a2a9b871bdaf0b03d137752.JPG',
];

import { useLanguage } from '../contexts/LanguageContext';

export default function Portfolio() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const { t } = useLanguage();

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-light tracking-wide">
            {t.portfolio.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.portfolio.subtitle}
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 lg:px-12 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <button
                key={image}
                onClick={() => openLightbox(index)}
                className="group relative aspect-[3/4] overflow-hidden bg-gray-100 cursor-pointer"
              >
                <img
                  src={`/images/${image}`}
                  alt={`Portfolio image ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
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
              src={`/images/${images[currentImage]}`}
              alt={`Portfolio image ${currentImage + 1}`}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm">
            {currentImage + 1} / {images.length}
          </div>
        </div>
      )}
    </main>
  );
}

