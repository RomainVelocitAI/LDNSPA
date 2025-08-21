'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Marie-Claire Hoarau",
    location: "Saint-Pierre",
    product: "Spa 6 places",
    rating: 5,
    text: "Nous avons économisé 3500€ par an en abonnements spa. Le modèle est parfait pour notre famille. Installation impeccable en seulement 2 jours. Service après-vente au top!",
    date: "Il y a 2 mois",
    verified: true
  },
  {
    id: 2,
    name: "Jean-Marc Payet",
    location: "Saint-Denis",
    product: "Spa de nage",
    rating: 5,
    text: "Je nage tous les matins depuis 6 mois. Plus besoin de piscine municipale! Économies d'énergie remarquables grâce au système éco. LDN SPA a transformé mon quotidien.",
    date: "Il y a 3 semaines",
    verified: true
  },
  {
    id: 3,
    name: "Sophie Lebreton",
    location: "Saint-Gilles",
    product: "Sauna finlandais",
    rating: 5,
    text: "Le sauna a résisté au cyclone Belal sans aucun dommage! Qualité exceptionnelle et SAV hyper réactif. Mes douleurs articulaires ont disparu. Meilleur investissement santé.",
    date: "Il y a 1 mois",
    verified: true
  },
  {
    id: 4,
    name: "Patrick Fontaine",
    location: "Le Tampon",
    product: "Pack Spa + Pergola",
    rating: 5,
    text: "L'équipe LDN a créé notre oasis de détente. Prix 30% moins cher que la concurrence pour une qualité supérieure. Nos amis sont jaloux! On recommande à 200%.",
    date: "Il y a 2 semaines",
    verified: true
  },
  {
    id: 5,
    name: "Nathalie Robert",
    location: "Saint-Paul",
    product: "Spa 4 places",
    rating: 5,
    text: "Fini le stress après le travail! Installation nickel, équipe professionnelle. Le spa consomme moins qu'annoncé. Mon mari et moi sommes ravis. Merci LDN SPA!",
    date: "Il y a 1 mois",
    verified: true
  },
  {
    id: 6,
    name: "David Maillot",
    location: "Saint-Leu",
    product: "Pergola bioclimatique",
    rating: 5,
    text: "La pergola a transformé notre terrasse en véritable pièce à vivre. Résistance cyclonique testée et approuvée! Le système motorisé est un régal. Excellent rapport qualité-prix.",
    date: "Il y a 3 mois",
    verified: true
  }
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-spa-ocean font-semibold text-sm uppercase tracking-wider">
            Témoignages clients
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            2 347 familles nous font confiance
            <br />
            <span className="text-spa-ocean">Découvrez pourquoi</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="text-yellow-500 fill-current" size={24} />
              ))}
            </div>
            <p className="text-lg font-semibold">
              4.9/5 basé sur 1 847 avis vérifiés
            </p>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Quote Icon */}
              <Quote className="text-spa-ocean/20 mb-4" size={32} />

              {/* Rating */}
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="text-yellow-500 fill-current" size={16} />
                ))}
                {testimonial.verified && (
                  <span className="ml-2 text-xs text-green-600 font-semibold">
                    ✓ Achat vérifié
                  </span>
                )}
              </div>

              {/* Text */}
              <p className="text-gray-700 mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600">
                  {testimonial.location} • {testimonial.product}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {testimonial.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="btn-primary">
            Voir tous les avis
          </button>
        </motion.div>
      </div>
    </section>
  );
}