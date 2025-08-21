'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { CheckCircle, Star, TrendingUp, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-spa-ocean/10 via-white to-spa-turquoise/10" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-spa-turquoise/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-spa-ocean/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-spa-ocean/10 text-spa-ocean px-4 py-2 rounded-full mb-6">
              <Award size={16} />
              <span className="text-sm font-semibold">N°1 du Spa à La Réunion depuis 15 ans</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transformez votre jardin en 
              <span className="text-spa-ocean"> paradis de bien-être</span> en 
              <span className="text-spa-turquoise"> 48h chrono</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-600 mb-8">
              93% de nos clients économisent <strong>3 000€/an</strong> en frais de spa-club 
              tout en profitant d'un luxe privé illimité. Installation clé en main, 
              garantie 10 ans, SAV 7j/7.
            </p>

            {/* Benefits List */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-spa-ocean flex-shrink-0" size={20} />
                <span className="text-gray-700">Installation complète en 48h par nos experts certifiés</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-spa-ocean flex-shrink-0" size={20} />
                <span className="text-gray-700">Économisez jusqu'à 60% sur votre facture énergétique</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-spa-ocean flex-shrink-0" size={20} />
                <span className="text-gray-700">SAV réactif 7j/7 avec intervention sous 24h</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="group">
                Obtenir mon devis gratuit
                <TrendingUp className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button variant="secondary" size="lg">
                Voir le catalogue 2025
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-spa-ocean to-spa-turquoise border-2 border-white"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="text-yellow-500 fill-current" size={16} />
                  ))}
                  <span className="text-sm font-semibold ml-1">4.9/5</span>
                </div>
                <p className="text-sm text-gray-600">
                  <strong>2 347+ familles</strong> équipées à La Réunion
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/spa-hero.jpg"
                alt="Spa de luxe installé dans un jardin tropical"
                className="w-full h-auto"
              />
              {/* Overlay Badge */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-4 py-3 rounded-lg shadow-lg">
                <p className="text-sm font-semibold text-spa-ocean">Promo Été 2025</p>
                <p className="text-2xl font-bold text-gray-900">-25%</p>
                <p className="text-xs text-gray-600">Offre limitée</p>
              </div>
            </div>

            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl"
            >
              <p className="text-sm text-gray-600 mb-1">Livraison offerte</p>
              <p className="text-xl font-bold text-spa-ocean">Toute l'île</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-xl"
            >
              <p className="text-sm text-gray-600 mb-1">Garantie</p>
              <p className="text-xl font-bold text-spa-ocean">10 ans</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}