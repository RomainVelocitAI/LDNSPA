'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Droplets, Sparkles, Heart, Battery } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const spaProducts = [
  {
    id: 1,
    name: 'Spa Jacuzzi J-495',
    description: 'Le summum du luxe avec 9 places et système de massage avancé',
    capacity: '7-9 personnes',
    jets: '65 jets',
    price: 'À partir de 24 990€',
    image: '/photo-1603991488459-73de26c7c4f8.jpg',
    features: [
      'Système de filtration ProClarity',
      'Éclairage LED multicolore',
      'Cascade illuminée',
      'Système audio Bluetooth premium',
      'Isolation PowerPro complète'
    ]
  },
  {
    id: 2,
    name: 'Spa Compact Urban',
    description: 'Solution parfaite pour les espaces restreints',
    capacity: '2-3 personnes',
    jets: '25 jets',
    price: 'À partir de 7 990€',
    image: '/photo-1603991488459-73de26c7c4f8.jpg',
    features: [
      'Design compact optimisé',
      'Jets thérapeutiques ciblés',
      'Couverture isolante incluse',
      'Panneau de contrôle digital',
      'Économe en énergie'
    ]
  },
  {
    id: 3,
    name: 'Spa Familial Oasis',
    description: 'Espace de détente idéal pour toute la famille',
    capacity: '5-6 personnes',
    jets: '45 jets',
    price: 'À partir de 15 990€',
    image: '/photo-1603991488459-73de26c7c4f8.jpg',
    features: [
      'Places allongées ergonomiques',
      'Zone enfants sécurisée',
      'Aromathérapie intégrée',
      'Système de massage varié',
      'Garantie structure 10 ans'
    ]
  }
];

const benefits = [
  {
    icon: <Droplets className="w-8 h-8" />,
    title: 'Hydrothérapie',
    description: 'Massage thérapeutique par jets d\'eau pour soulager les tensions'
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Santé cardiovasculaire',
    description: 'Amélioration de la circulation sanguine et réduction de la pression artérielle'
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Relaxation profonde',
    description: 'Réduction du stress et amélioration de la qualité du sommeil'
  },
  {
    icon: <Battery className="w-8 h-8" />,
    title: 'Récupération sportive',
    description: 'Accélération de la récupération musculaire après l\'effort'
  }
];

const technologies = [
  {
    name: 'Système de filtration ProClarity',
    description: 'Eau cristalline avec filtration 5 étapes et traitement UV'
  },
  {
    name: 'Jets PowerPro',
    description: 'Massage personnalisable avec jets directionnels haute performance'
  },
  {
    name: 'Isolation SmartSeal',
    description: 'Conservation optimale de la chaleur pour une efficacité énergétique maximale'
  },
  {
    name: 'Contrôle SmartTub',
    description: 'Gestion à distance via application mobile pour un contrôle total'
  }
];

export default function SpasPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[60vh] overflow-hidden mt-16 md:mt-20">
        <Image
          src="/photo-1585351923007-bf6a01cb19de.jpg"
          alt="Spa de luxe"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-cyan-900/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Spas & Jacuzzis
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto"
            >
              L&apos;excellence du bien-être aquatique à domicile
            </motion.p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Les Bienfaits du Spa</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une expérience thérapeutique complète pour votre corps et votre esprit
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-cyan-100 text-cyan-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding bg-gradient-to-r from-cyan-50 to-blue-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Technologies Innovantes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les dernières innovations pour une expérience spa incomparable
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3 text-cyan-600">{tech.name}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Notre Collection de Spas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des spas d&apos;exception pour créer votre oasis de détente personnelle
            </p>
          </motion.div>

          <div className="space-y-16">
            {spaProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col lg:flex-row gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:w-1/2">
                  <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover hover:scale-110 transition-transform duration-700"
                      priority={index === 0}
                    />
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <h3 className="text-3xl font-bold mb-4">{product.name}</h3>
                  <p className="text-lg text-gray-600 mb-6">{product.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-500">Capacité</p>
                      <p className="font-semibold">{product.capacity}</p>
                    </div>
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-500">Jets</p>
                      <p className="font-semibold">{product.jets}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <ArrowRight className="w-5 h-5 text-cyan-600 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-cyan-600">{product.price}</p>
                    <Link href="/contact" className="btn bg-cyan-600 text-white hover:bg-cyan-700">
                      Demander un devis
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Créez votre espace de détente ultime
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Bénéficiez de conseils personnalisés et d&apos;un accompagnement sur mesure pour votre projet spa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn bg-white text-cyan-600 hover:bg-gray-100">
                Obtenir une consultation gratuite
              </Link>
              <Link href="/showroom" className="btn border-2 border-white text-white hover:bg-white/10">
                Visiter notre showroom
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}