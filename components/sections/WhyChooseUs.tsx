'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Wrench, Award, Clock, ThumbsUp } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Garantie 10 ans",
    description: "La plus longue garantie du marché. Nous croyons en la qualité de nos produits.",
    stat: "100%",
    statLabel: "tranquillité"
  },
  {
    icon: Users,
    title: "15 ans d'expertise",
    description: "Leader incontesté du spa à La Réunion avec plus de 2000 installations réussies.",
    stat: "2347+",
    statLabel: "clients satisfaits"
  },
  {
    icon: Wrench,
    title: "SAV 7j/7",
    description: "Intervention sous 24h. Notre équipe technique reste à votre écoute toute l'année.",
    stat: "24h",
    statLabel: "délai max"
  },
  {
    icon: Award,
    title: "Marques Premium",
    description: "Partenariat exclusif avec les meilleures marques mondiales de spa et sauna.",
    stat: "Top 3",
    statLabel: "mondial"
  },
  {
    icon: Clock,
    title: "Installation 48h",
    description: "De la commande à la première baignade en 48h chrono. Tout inclus.",
    stat: "48h",
    statLabel: "chrono"
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction garantie",
    description: "30 jours pour changer d'avis. Remboursement intégral sans justification.",
    stat: "30j",
    statLabel: "satisfait ou remboursé"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-spa-ocean font-semibold text-sm uppercase tracking-wider">
            Pourquoi nous choisir
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            6 raisons qui font de LDN SPA
            <br />
            <span className="text-spa-ocean">le choix évident</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contrairement aux autres vendeurs qui disparaissent après la vente, 
            nous construisons une relation durable avec chaque client. 
            Voici ce qui nous rend uniques.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-spa-ocean to-spa-turquoise rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="text-white" size={28} />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {feature.description}
              </p>

              {/* Stat */}
              <div className="flex items-baseline gap-2 pt-4 border-t border-gray-100">
                <span className="text-3xl font-bold text-spa-ocean">
                  {feature.stat}
                </span>
                <span className="text-sm text-gray-500">
                  {feature.statLabel}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-spa-ocean/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Prêt à transformer votre quotidien ?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Rejoignez les milliers de Réunionnais qui ont fait le choix du bien-être à domicile. 
              Consultation gratuite et sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Prendre rendez-vous
              </button>
              <button className="btn-secondary">
                Télécharger la brochure
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}