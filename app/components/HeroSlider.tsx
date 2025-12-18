'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const heroImages = [
  '0d9f7636ba28175b04f5dd99ab3a3c04.JPG',
  '3ca3c1d07338226662249e1dcb7c9da5.JPG',
  '00bf5818074e8969e2f21fb43cb59ef2.JPG',
  '8a3f4bfc45b8be1f8f47ac8de45e9178.JPG',
];

export default function HeroSlider({ slogan }: { slogan: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen">
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={`/images/${image}`}
            alt={`FX Studio Photography ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
            quality={90}
          />
        </div>
      ))}

      {/* 中央内容 */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
        <div className="text-center space-y-4 px-6">
          <h1 className="text-5xl md:text-7xl font-light tracking-wider">
            <span className="font-bold">FX</span>{' '}
            <span>
              <span className="font-bold">S</span>
              <span className="font-light">tudio</span>
            </span>
          </h1>
          <p className="text-lg md:text-xl tracking-widest font-light opacity-90">
            {slogan}
          </p>
        </div>
      </div>

      {/* 滚动提示 */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-white animate-bounce">
          <span className="text-xs tracking-widest uppercase opacity-70">
            Scroll to explore
          </span>
          <svg
            className="w-6 h-6 opacity-70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* 轮播指示器 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* 渐变遮罩 */}
      <div className="absolute inset-0 bg-black/20 z-[1]" />
    </div>
  );
}

