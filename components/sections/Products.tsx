'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Droplets, Trees, Home } from 'lucide-react';
import Button from '@/components/ui/Button';

const products = [
  {
    id: 'spas',
    icon: Droplets,
    title: 'Spas & Jacuzzis',
    description: 'Détente absolue avec nos spas 2 à 8 places. Hydromassage thérapeutique, chromothérapie, système audio intégré.',
    price: 'À partir de 4 990€',
    features: ['Jets thérapeutiques', 'Économe en énergie', 'Connecté WiFi'],
    image: '/spa-product.jpg',
    badge: 'Best-seller',
    promotion: '-25% ce mois'
  },
  {
    id: 'saunas',
    icon: Home,
    title: 'Saunas',
    description: 'Saunas traditionnels finlandais et infrarouges. Bois noble, design personnalisable, technologie de pointe.',
    price: 'À partir de 3 490€',
    features: ['Bois de cèdre rouge', 'Poêle Harvia', 'Aromathérapie'],
    image: '/sauna.jpg',
    badge: 'Nouveau',
    promotion: 'Installation offerte'
  },
  {
    id: 'pergolas',
    icon: Trees,
    title: 'Pergolas Bioclimatiques',
    description: 'Créez un espace de vie extérieur unique. Lames orientables, éclairage LED, résistant aux cyclones.',
    price: 'À partir de 7 990€',
    features: ['Anti-cyclonique', 'Motorisée', 'Garantie 15 ans'],
    image: '/pergola.jpg',
    badge: 'Premium',
    promotion: 'Devis gratuit'
  },
  {
    id: 'swim-spa',
    icon: Sparkles,
    title: 'Spas de Nage',
    description: 'Le 2-en-1 parfait : natation à contre-courant et zone de relaxation. Idéal pour les sportifs.',
    price: 'À partir de 14 990€',
    features: ['Nage à contre-courant', 'Zone spa séparée', 'Fitness aquatique'],
    image: '/spa-nage.jpg',
    badge: 'Innovation',
    promotion: 'Financement 0%'
  }
];

export default function Products() {
  return (
    <section className="section-padding">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-spa-ocean font-semibold text-sm uppercase tracking-wider">
            Notre gamme
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Découvrez nos solutions
            <br />
            <span className="text-spa-ocean">bien-être sur mesure</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chaque produit est sélectionné pour sa qualité exceptionnelle, 
            sa durabilité tropicale et son rapport qualité-prix imbattable.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-spa-ocean text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.badge}
                  </span>
                  {product.promotion && (
                    <span className="bg-spa-turquoise text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {product.promotion}
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-spa-ocean/10 rounded-lg flex items-center justify-center">
                    <product.icon className="text-spa-ocean" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {product.title}
                    </h3>
                    <p className="text-spa-ocean font-semibold">
                      {product.price}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-spa-ocean rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a href={`/${product.id}`}>
                  <Button variant="primary" className="w-full group">
                    En savoir plus
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-spa-ocean to-spa-turquoise rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">
            Offre exclusive : Pack Bien-Être Complet
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Spa + Pergola + Installation = <span className="line-through opacity-70">15 480€</span>
            {' '}<span className="text-3xl font-bold">11 990€</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-spa-ocean hover:bg-gray-100">
              Découvrir l'offre
            </Button>
            <Button variant="ghost" size="lg" className="text-white border-2 border-white hover:bg-white/10">
              Demander un devis
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}