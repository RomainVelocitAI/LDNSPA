'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail } from 'lucide-react';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Spas', href: '/spas' },
  { name: 'Saunas', href: '/saunas' },
  { name: 'Pergolas', href: '/pergolas' },
  { name: 'Spa de Nage', href: '/spa-de-nage' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-white/90 backdrop-blur-sm'
      )}
    >
      {/* Top Bar - Hidden on mobile */}
      <div className="hidden md:block bg-spa-ocean text-white py-2">
        <div className="container flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:0262165841" className="flex items-center gap-1 hover:text-spa-turquoise transition-colors">
              <Phone size={14} />
              <span>02.62.16.58.41</span>
            </a>
            <a href="tel:0692655163" className="flex items-center gap-1 hover:text-spa-turquoise transition-colors">
              <Phone size={14} />
              <span>06.92.65.51.63</span>
            </a>
          </div>
          <a href="mailto:contactldnspa@gmail.com" className="flex items-center gap-1 hover:text-spa-turquoise transition-colors">
            <Mail size={14} />
            <span className="hidden lg:inline">contactldnspa@gmail.com</span>
            <span className="lg:hidden">Email</span>
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-spa-ocean to-spa-turquoise rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-lg md:text-xl">LDN</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl md:text-2xl font-bold text-spa-ocean">LDN SPA</h1>
              <p className="text-xs text-gray-600 hidden md:block">L&apos;excellence du bien-être à La Réunion</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'font-medium transition-colors hover:text-spa-ocean whitespace-nowrap',
                  isScrolled ? 'text-gray-700' : 'text-gray-800'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden xl:flex items-center space-x-4">
            <Button variant="secondary" size="sm">
              Catalogue
            </Button>
            <Button variant="primary" size="sm">
              Devis Gratuit
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t">
            <div className="container py-4">
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="font-medium text-gray-700 hover:text-spa-ocean transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 space-y-2 border-t">
                  <Button variant="secondary" className="w-full">
                    Catalogue
                  </Button>
                  <Button variant="primary" className="w-full">
                    Devis Gratuit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}