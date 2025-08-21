import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">LDN SPA</h3>
              <p className="text-spa-turquoise text-sm">L'excellence du bien-être à La Réunion</p>
            </div>
            <p className="text-sm mb-6">
              Acteur majeur de l'univers du spa depuis plus de 15 ans. 
              Fort de notre expérience et de la confiance de nos clients, 
              nous proposons une large gamme de produits de qualité et un SAV réactif.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-spa-ocean transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-spa-ocean transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://youtube.com"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-spa-ocean transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-6">Nos Produits</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#spas" className="flex items-center gap-2 hover:text-spa-turquoise transition-colors">
                  <ChevronRight size={16} />
                  Spas & Jacuzzis
                </Link>
              </li>
              <li>
                <Link href="#spa-nage" className="flex items-center gap-2 hover:text-spa-turquoise transition-colors">
                  <ChevronRight size={16} />
                  Spas de nage
                </Link>
              </li>
              <li>
                <Link href="#saunas" className="flex items-center gap-2 hover:text-spa-turquoise transition-colors">
                  <ChevronRight size={16} />
                  Saunas
                </Link>
              </li>
              <li>
                <Link href="#pergolas" className="flex items-center gap-2 hover:text-spa-turquoise transition-colors">
                  <ChevronRight size={16} />
                  Pergolas bioclimatiques
                </Link>
              </li>
              <li>
                <Link href="#voiles" className="flex items-center gap-2 hover:text-spa-turquoise transition-colors">
                  <ChevronRight size={16} />
                  Voiles d'ombrage
                </Link>
              </li>
              <li>
                <Link href="#salles-bain" className="flex items-center gap-2 hover:text-spa-turquoise transition-colors">
                  <ChevronRight size={16} />
                  Espaces salle de bain
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#installation" className="flex items-center gap-2 hover:text-spa-turquoise transition-colors">
                  <ChevronRight size={16} />
                  Installation clé en main
                </Link>
              </li>
              <li>
                <Link href="#sav" className="flex items-center gap-2 hover:text-spa-turquoise transition-colors">
                  <ChevronRight size={16} />
                  SAV 7j/7
                </Link>
              </li>
              <li>
                <Link href="#entretien" className="flex items-center gap-2 hover:text-spa-turquoise transition-colors">
                  <ChevronRight size={16} />
                  Contrats d'entretien
                </Link>
              </li>
              <li>
                <Link href="#financement" className="flex items-center gap-2 hover:text-spa-turquoise transition-colors">
                  <ChevronRight size={16} />
                  Solutions de financement
                </Link>
              </li>
              <li>
                <Link href="#garantie" className="flex items-center gap-2 hover:text-spa-turquoise transition-colors">
                  <ChevronRight size={16} />
                  Garantie 10 ans
                </Link>
              </li>
              <li>
                <Link href="#showroom" className="flex items-center gap-2 hover:text-spa-turquoise transition-colors">
                  <ChevronRight size={16} />
                  Visite showroom
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-sm">1 route principale</p>
                  <p className="text-sm">Zone industrielle n°2</p>
                  <p className="text-sm">97410 Saint-Pierre</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-sm">02.62.16.58.41</p>
                  <p className="text-sm">06.92.65.51.63</p>
                  <p className="text-sm text-spa-turquoise">SAV: 06.92.84.23.43</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="flex-shrink-0 mt-1" size={18} />
                <p className="text-sm">contactldnspa@gmail.com</p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <p className="text-white font-semibold mb-2">Horaires</p>
              <p className="text-sm">Lun-Ven: 8h30-17h30</p>
              <p className="text-sm">Sam: 9h00-16h00</p>
              <p className="text-sm">Dim: Sur RDV</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-center md:text-left">
              © {currentYear} LDN SPA Réunion. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/mentions-legales" className="hover:text-spa-turquoise transition-colors">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="hover:text-spa-turquoise transition-colors">
                Confidentialité
              </Link>
              <Link href="/politique-cookies" className="hover:text-spa-turquoise transition-colors">
                Cookies
              </Link>
              <Link href="/cgv" className="hover:text-spa-turquoise transition-colors">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}