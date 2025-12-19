'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';
import MobileMenu from './MobileMenu';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="text-black hover:opacity-70 transition-opacity flex-shrink-0">
            <Logo className="scale-90 md:scale-100" />
          </Link>

          {/* 桌面端导航 */}
          <div className="hidden md:flex items-center gap-8 text-sm tracking-wide">
            <Link
              href="/portfolio"
              className="text-black hover:opacity-50 transition-opacity"
            >
              {t.nav.portfolio}
            </Link>
            <Link
              href="/about"
              className="text-black hover:opacity-50 transition-opacity"
            >
              {t.nav.about}
            </Link>
            <Link
              href="/contact"
              className="text-black hover:opacity-50 transition-opacity"
            >
              {t.nav.contact}
            </Link>
            <LanguageSwitcher />
          </div>

          {/* 移动端：语言切换 + 汉堡菜单 */}
          <div className="flex md:hidden items-center gap-4">
            <LanguageSwitcher />
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}

