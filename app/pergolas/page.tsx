'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sun, Cloud, Wind, TreePine } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const pergolaProducts = [
  {
    id: 1,
    name: 'Pergola Bioclimatique Premium',
    description: 'Lames orientables motorisées pour un contrôle parfait de l\'ensoleillement',
    dimensions: 'Sur mesure jusqu\'à 7m x 4m',
    material: 'Aluminium thermolaqué',
    price: 'À partir de 12 990€',
    image: '/pergola.jpg',
    features: [
      'Lames orientables 0-145°',
      'Capteurs météo automatiques',
      'Éclairage LED intégré',
      'Stores latéraux motorisés',
      'Structure garantie 15 ans'
    ]
  },
  {
    id: 2,
    name: 'Pergola Toile Rétractable',
    description: 'Solution flexible avec toile haute résistance rétractable',
    dimensions: 'Modèles de 3m x 3m à 6m x 4m',
    material: 'Structure aluminium, toile PVC',
    price: 'À partir de 6 990€',
    image: '/pergola.jpg',
    features: [
      'Toile imperméable et anti-UV',
      'Système de tension automatique',
      'Motorisation Somfy',
      'Chauffage infrarouge optionnel',
      'Installation rapide'
    ]
  },
  {
    id: 3,
    name: 'Pergola Bois Noble',
    description: 'Élégance naturelle avec bois exotique traité classe 4',
    dimensions: 'Personnalisable',
    material: 'Bois exotique IPÉ ou Douglas',
    price: 'À partir de 8 990€',
    image: '/pergola.jpg',
    features: [
      'Bois certifié FSC',
      'Traitement autoclave classe 4',
      'Canisse naturelle ou polycarbonate',
      'Ancrage béton renforcé',
      'Design sur mesure possible'
    ]
  }
];

const benefits = [
  {
    icon: <Sun className="w-8 h-8" />,
    title: 'Protection solaire',
    description: 'Contrôle optimal de la luminosité et protection UV'
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: 'Résistance intempéries',
    description: 'Conception robuste pour toutes les conditions météo'
  },
  {
    icon: <Wind className="w-8 h-8" />,
    title: 'Ventilation naturelle',
    description: 'Circulation d\'air optimisée pour un confort maximal'
  },
  {
    icon: <TreePine className="w-8 h-8" />,
    title: 'Extension naturelle',
    description: 'Agrandissement harmonieux de votre espace de vie'
  }
];

const configurations = [
  {
    title: 'Pergola Adossée',
    description: 'Fixée à la façade pour créer une extension de la maison',
    ideal: 'Terrasses attenantes'
  },
  {
    title: 'Pergola Autoportante',
    description: 'Structure indépendante pour aménager n\'importe quel espace',
    ideal: 'Jardins et piscines'
  },
  {
    title: 'Pergola Îlot',
    description: 'Installation autonome pour créer un espace détente unique',
    ideal: 'Grands espaces'
  }
];

export default function PergolasPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[60vh] overflow-hidden mt-16 md:mt-20">
        <Image
          src="/pergola.jpg"
          alt="Pergola moderne"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/60 to-emerald-900/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Pergolas & Vérandas
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto"
            >
              Créez votre oasis extérieure avec nos pergolas haut de gamme
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
            <h2 className="text-4xl font-bold mb-4">Avantages d\'une Pergola</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transformez votre extérieur en espace de vie supplémentaire
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
                <div className="bg-emerald-100 text-emerald-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Configurations Section */}
      <section className="section-padding bg-gradient-to-r from-emerald-50 to-green-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Types de Configuration</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choisissez la configuration idéale pour votre espace
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {configurations.map((config, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-semibold mb-3 text-emerald-600">{config.title}</h3>
                <p className="text-gray-600 mb-4">{config.description}</p>
                <p className="text-sm font-medium text-gray-500">
                  <span className="text-emerald-600">Idéal pour:</span> {config.ideal}
                </p>
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
            <h2 className="text-4xl font-bold mb-4">Nos Modèles de Pergolas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solutions sur mesure pour sublimer votre espace extérieur
            </p>
          </motion.div>

          <div className="space-y-16">
            {pergolaProducts.map((product, index) => (
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
                    />
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <h3 className="text-3xl font-bold mb-4">{product.name}</h3>
                  <p className="text-lg text-gray-600 mb-6">{product.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-500">Dimensions</p>
                      <p className="font-semibold">{product.dimensions}</p>
                    </div>
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-500">Matériaux</p>
                      <p className="font-semibold">{product.material}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <ArrowRight className="w-5 h-5 text-emerald-600 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-emerald-600">{product.price}</p>
                    <Link href="/contact" className="btn bg-emerald-600 text-white hover:bg-emerald-700">
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
      <section className="section-padding bg-gradient-to-r from-emerald-600 to-green-600 text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Prolongez votre espace de vie vers l\'extérieur
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Nos experts vous accompagnent dans la conception de votre pergola sur mesure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn bg-white text-emerald-600 hover:bg-gray-100">
                Étude personnalisée gratuite
              </Link>
              <Link href="/realisations" className="btn border-2 border-white text-white hover:bg-white/10">
                Voir nos réalisations
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