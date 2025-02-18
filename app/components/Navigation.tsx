'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 shadow-md' : 'bg-black/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg" // You'll need to add this logo
              alt="Nhà Hàng Việt Logo"
              width={50}
              height={50}
              className="h-12 w-auto"
            />
            <span className={`ml-2 font-playfair text-xl ${
              isScrolled ? 'text-[--color-primary]' : 'text-white'
            }`}>
              Nhà Hàng Việt
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              ['Home', '/'],
              ['Menu', '/menu'],
              ['Our Story', '/story'],
              ['Contact', '/contact'],
            ].map(([title, url]) => (
              <Link
                key={title}
                href={url}
                className={`font-vietnam text-sm tracking-wider hover:text-[--color-secondary] transition-colors ${
                  isScrolled ? 'text-[--color-primary]' : 'text-white'
                }`}
              >
                {title}
              </Link>
            ))}
            <Link
              href="/reservations"
              className={`px-6 py-2 border-2 rounded-full font-vietnam text-sm
              transition-all hover:bg-[--color-secondary] hover:border-[--color-secondary]
              ${isScrolled 
                ? 'border-[--color-primary] text-[--color-primary] hover:text-white' 
                : 'border-white text-white'}`}
            >
              Book a Table
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
          >
            <span className={`block w-6 h-0.5 mb-1.5 transition-all ${
              isScrolled ? 'bg-[--color-primary]' : 'bg-white'
            }`}></span>
            <span className={`block w-6 h-0.5 mb-1.5 transition-all ${
              isScrolled ? 'bg-[--color-primary]' : 'bg-white'
            }`}></span>
            <span className={`block w-6 h-0.5 transition-all ${
              isScrolled ? 'bg-[--color-primary]' : 'bg-white'
            }`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          {[
            ['Home', '/'],
            ['Menu', '/menu'],
            ['Our Story', '/story'],
            ['Contact', '/contact'],
          ].map(([title, url]) => (
            <Link
              key={title}
              href={url}
              className="block px-3 py-2 text-[--color-primary] font-vietnam text-sm hover:bg-gray-50"
            >
              {title}
            </Link>
          ))}
          <div className="px-3 py-3">
            <Link
              href="/reservations"
              className="block w-full px-6 py-2 border-2 border-[--color-primary] 
                text-[--color-primary] rounded-full font-vietnam text-sm
                transition-all hover:bg-[--color-secondary] hover:text-white 
                hover:border-[--color-secondary]"
            >
              Book a Table
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 