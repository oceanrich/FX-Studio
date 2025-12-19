'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';
import { usePathname } from 'next/navigation';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const menuItems = [
    { href: '/portfolio', label: t.nav.portfolio },
    { href: '/about', label: t.nav.about },
    { href: '/contact', label: t.nav.contact },
  ];

  const menuContent = (
    <>
      {/* 遮罩层 */}
      <div
        className={`fixed inset-0 bg-black/50 z-[100] md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      />

      {/* 菜单面板 */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-[101] md:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="flex flex-col h-full">
          {/* 顶部关闭按钮 */}
          <div className="flex items-center justify-between p-6 border-b">
            <span className="text-lg font-light tracking-wide">Menu</span>
            <button
              onClick={closeMenu}
              className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-black transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* 菜单项 */}
          <nav className="flex-1 px-6 py-8">
            <ul className="space-y-6">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className={`block text-lg font-light tracking-wide transition-colors ${
                      pathname === item.href
                        ? 'text-black font-medium'
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* 汉堡按钮 */}
      <button
        onClick={toggleMenu}
        className="md:hidden relative w-10 h-10 text-black focus:outline-none"
        aria-label="Toggle menu"
      >
        <div className="absolute w-6 h-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <span
            className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
              isOpen ? 'rotate-45 top-2' : 'top-0'
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out top-2 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
              isOpen ? '-rotate-45 top-2' : 'top-4'
            }`}
          />
        </div>
      </button>

      {/* 使用 Portal 渲染菜单到 body */}
      {mounted && createPortal(menuContent, document.body)}
    </>
  );
}



