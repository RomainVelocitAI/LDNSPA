'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Waves, Activity, Zap, Timer } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const swimSpaProducts = [
  {
    id: 1,
    name: 'AquaFitness Pro XL',
    description: 'Le spa de nage ultime pour les athlètes exigeants',
    dimensions: '5.8m x 2.3m x 1.5m',
    swimSystem: 'Contre-courant 6 turbines',
    price: 'À partir de 34 990€',
    image: '/spa-nage.jpg',
    features: [
      'Système de nage contre-courant réglable',
      'Zone spa séparée avec 20 jets',
      'Entraînement aquatique programmable',
      'Système de purification UV-C',
      'Application de coaching intégrée'
    ]
  },
  {
    id: 2,
    name: 'Dual Zone Wellness',
    description: 'Double zone : nage sportive et relaxation spa',
    dimensions: '4.5m x 2.3m x 1.3m',
    swimSystem: 'Jets de nage PowerStream',
    price: 'À partir de 26 990€',
    image: '/spa-nage.jpg',
    features: [
      'Zone de nage indépendante',
      'Zone spa avec température séparée',
      'Système de résistance variable',
      'Barres d\'exercices intégrées',
      'Éclairage chromothérapie'
    ]
  },
  {
    id: 3,
    name: 'Compact Swimmer',
    description: 'Solution de nage compacte pour espaces réduits',
    dimensions: '3.8m x 2.2m x 1.2m',
    swimSystem: 'TurboSwim 3 jets',
    price: 'À partir de 18 990€',
    image: '/spa-nage.jpg',
    features: [
      'Design compact optimisé',
      'Système de nage performant',
      'Sièges de massage intégrés',
      'Miroir de nage subaquatique',
      'Couverture automatique incluse'
    ]
  }
];

const benefits = [
  {
    icon: <Waves className="w-8 h-8" />,
    title: 'Natation illimitée',
    description: 'Nagez sans limite dans un espace réduit grâce au contre-courant'
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: 'Fitness aquatique',
    description: 'Entraînement complet à faible impact pour tous les niveaux'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Récupération active',
    description: 'Idéal pour la rééducation et la récupération sportive'
  },
  {
    icon: <Timer className="w-8 h-8" />,
    title: 'Utilisation 4 saisons',
    description: 'Profitez de votre spa de nage toute l\'année'
  }
];

const workoutPrograms = [
  {
    name: 'Endurance',
    duration: '30-45 min',
    intensity: 'Modérée',
    description: 'Programme cardio pour améliorer votre endurance'
  },
  {
    name: 'Interval Training',
    duration: '20-30 min',
    intensity: 'Élevée',
    description: 'Alternance haute/basse intensité pour brûler des calories'
  },
  {
    name: 'Aqua Fitness',
    duration: '25-35 min',
    intensity: 'Variable',
    description: 'Exercices variés pour renforcement musculaire'
  },
  {
    name: 'Récupération',
    duration: '15-20 min',
    intensity: 'Faible',
    description: 'Mouvements doux pour la récupération active'
  }
];

export default function SpaDeNagePage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[60vh] overflow-hidden mt-16 md:mt-20">
        <Image
          src="/spa-nage.jpg"
          alt="Spa de nage"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-teal-900/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Spas de Nage
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto"
            >
              L\'alliance parfaite entre fitness aquatique et relaxation
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
            <h2 className="text-4xl font-bold mb-4">Pourquoi Choisir un Spa de Nage ?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La solution 2-en-1 pour votre forme et votre bien-être
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
                <div className="bg-teal-100 text-teal-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workout Programs Section */}
      <section className="section-padding bg-gradient-to-r from-teal-50 to-blue-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Programmes d\'Entraînement</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des programmes adaptés à tous les objectifs fitness
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workoutPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2 text-teal-600">{program.name}</h3>
                <div className="flex justify-between text-sm text-gray-500 mb-3">
                  <span>{program.duration}</span>
                  <span className="font-medium">{program.intensity}</span>
                </div>
                <p className="text-gray-600">{program.description}</p>
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
            <h2 className="text-4xl font-bold mb-4">Nos Modèles de Spas de Nage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Technologies de pointe pour une expérience de nage exceptionnelle
            </p>
          </motion.div>

          <div className="space-y-16">
            {swimSpaProducts.map((product, index) => (
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
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-500">Dimensions</p>
                      <p className="font-semibold">{product.dimensions}</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-500">Système de nage</p>
                      <p className="font-semibold">{product.swimSystem}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <ArrowRight className="w-5 h-5 text-teal-600 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-teal-600">{product.price}</p>
                    <Link href="/contact" className="btn bg-teal-600 text-white hover:bg-teal-700">
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
      <section className="section-padding bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Transformez votre forme physique à domicile
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Découvrez le spa de nage adapté à vos objectifs sportifs et bien-être
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn bg-white text-teal-600 hover:bg-gray-100">
                Essai gratuit en showroom
              </Link>
              <Link href="/guide" className="btn border-2 border-white text-white hover:bg-white/10">
                Guide d\'achat spa de nage
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