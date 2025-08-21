'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      lines: ['02.62.16.58.41', '06.92.65.51.63', 'SAV: 06.92.84.23.43'],
    },
    {
      icon: Mail,
      title: 'Email',
      lines: ['contactldnspa@gmail.com', 'Réponse sous 24h'],
    },
    {
      icon: MapPin,
      title: 'Showroom',
      lines: ['1 route principale', 'Zone industrielle n°2', '97410 Saint-Pierre'],
    },
    {
      icon: Clock,
      title: 'Horaires',
      lines: ['Lun-Ven: 8h30-17h30', 'Sam: 9h00-16h00', 'Dim: Sur rendez-vous'],
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-spa-ocean/5">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-spa-ocean font-semibold text-sm uppercase tracking-wider">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Votre projet bien-être
            <br />
            <span className="text-spa-ocean">commence ici</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Consultation gratuite • Devis personnalisé sous 24h • 
            Visite showroom sur rendez-vous • Garantie prix le plus bas
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Demandez votre devis gratuit
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-spa-ocean focus:border-transparent"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-spa-ocean focus:border-transparent"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-spa-ocean focus:border-transparent"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-2">
                  Produit qui vous intéresse
                </label>
                <select
                  id="product"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-spa-ocean focus:border-transparent"
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                >
                  <option value="">Sélectionnez un produit</option>
                  <option value="spa">Spa / Jacuzzi</option>
                  <option value="spa-nage">Spa de nage</option>
                  <option value="sauna">Sauna</option>
                  <option value="pergola">Pergola bioclimatique</option>
                  <option value="pack">Pack complet</option>
                  <option value="autre">Autre / Je ne sais pas</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Votre message (optionnel)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-spa-ocean focus:border-transparent"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Décrivez votre projet, vos besoins, vos questions..."
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  required
                  className="mt-1"
                />
                <label htmlFor="consent" className="text-sm text-gray-600">
                  J'accepte que mes données soient utilisées pour me recontacter dans le cadre de ma demande. 
                  Conformément au RGPD, vous disposez d'un droit d'accès et de suppression de vos données.
                </label>
              </div>

              <Button type="submit" size="lg" className="w-full group">
                Envoyer ma demande
                <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </form>

            {/* Trust Badges */}
            <div className="mt-6 pt-6 border-t flex items-center justify-center gap-6 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <CheckCircle size={16} className="text-green-600" />
                Sans engagement
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle size={16} className="text-green-600" />
                Réponse 24h
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle size={16} className="text-green-600" />
                100% gratuit
              </span>
            </div>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-spa-ocean/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-spa-ocean" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{info.title}</h4>
                      {info.lines.map((line, index) => (
                        <p key={index} className="text-sm text-gray-600">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Special Offer Card */}
            <div className="bg-gradient-to-r from-spa-ocean to-spa-turquoise rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Offre Découverte Exclusive
              </h3>
              <p className="mb-6 opacity-90">
                Visitez notre showroom et bénéficiez d'une remise immédiate de 500€ 
                sur votre première commande. Essai gratuit de nos spas sur place!
              </p>
              <Button variant="secondary" className="bg-white text-spa-ocean hover:bg-gray-100">
                Prendre rendez-vous
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="text-gray-400 mx-auto mb-2" size={48} />
                <p className="text-gray-600">Carte interactive</p>
                <p className="text-sm text-gray-500">Zone industrielle n°2, Saint-Pierre</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}