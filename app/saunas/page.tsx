'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Thermometer, Users, Shield, Clock } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const saunaProducts = [
  {
    id: 1,
    name: 'Sauna Finlandais Traditionnel',
    description: 'Chaleur sèche intense pour une expérience authentique',
    capacity: '4-6 personnes',
    temperature: '80-100°C',
    price: 'À partir de 8 990€',
    image: '/sauna.jpg',
    features: ['Poêle à bois ou électrique', 'Bois de cèdre rouge', 'Bancs ergonomiques', 'Éclairage LED ambiance']
  },
  {
    id: 2,
    name: 'Sauna Infrarouge Premium',
    description: 'Technologie infrarouge pour une chaleur douce et pénétrante',
    capacity: '2-4 personnes',
    temperature: '40-60°C',
    price: 'À partir de 5 490€',
    image: '/sauna.jpg',
    features: ['Panneaux infrarouges carbone', 'Chromothérapie intégrée', 'Système audio Bluetooth', 'Contrôle digital']
  },
  {
    id: 3,
    name: 'Sauna Extérieur Barrel',
    description: 'Design tonneau unique pour votre jardin',
    capacity: '4-8 personnes',
    temperature: '70-90°C',
    price: 'À partir de 12 990€',
    image: '/sauna.jpg',
    features: ['Construction en épicéa nordique', 'Isolation renforcée', 'Terrasse intégrée', 'Résistant aux intempéries']
  }
];

const benefits = [
  {
    icon: <Thermometer className="w-8 h-8" />,
    title: 'Détoxification',
    description: 'Élimination des toxines par la transpiration intense'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Système immunitaire',
    description: 'Renforcement des défenses naturelles du corps'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Bien-être social',
    description: 'Moments de partage et de relaxation en famille'
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: 'Récupération',
    description: 'Soulagement des douleurs musculaires et articulaires'
  }
];

export default function SaunasPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[60vh] overflow-hidden mt-16 md:mt-20">
        <Image
          src="/sauna.jpg"
          alt="Sauna luxueux"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Saunas Premium
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto"
            >
              Découvrez notre collection exclusive de saunas haut de gamme
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
            <h2 className="text-4xl font-bold mb-4">Les Bienfaits du Sauna</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une tradition millénaire pour votre santé et votre bien-être
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
                <div className="bg-primary-100 text-primary-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
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
            <h2 className="text-4xl font-bold mb-4">Notre Gamme de Saunas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des modèles soigneusement sélectionnés pour répondre à tous vos besoins
            </p>
          </motion.div>

          <div className="space-y-16">
            {saunaProducts.map((product, index) => (
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
                      className="object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <h3 className="text-3xl font-bold mb-4">{product.name}</h3>
                  <p className="text-lg text-gray-600 mb-6">{product.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-500">Capacité</p>
                      <p className="font-semibold">{product.capacity}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-500">Température</p>
                      <p className="font-semibold">{product.temperature}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <ArrowRight className="w-5 h-5 text-primary-600 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-primary-600">{product.price}</p>
                    <Link href="/contact" className="btn-primary">
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
      <section className="section-padding bg-gradient-ocean text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Prêt à transformer votre espace bien-être ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Nos experts sont à votre disposition pour vous conseiller et créer votre sauna sur mesure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn bg-white text-primary-600 hover:bg-gray-100">
                Configurer mon sauna
              </Link>
              <Link href="/catalogue" className="btn border-2 border-white text-white hover:bg-white/10">
                Télécharger le catalogue
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