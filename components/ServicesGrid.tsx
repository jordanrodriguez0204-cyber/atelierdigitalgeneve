'use client';

import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import type { Service } from '@/lib/types';

const services: Service[] = [
  {
    name: 'Starter',
    price: 299,
    monthly: 29,
    description: 'Idéal pour se lancer avec une présence en ligne simple et efficace.',
    features: [
      'Site 1 page',
      'Mobile responsive',
      'Formulaire de contact',
      'Google Maps',
      'Livré en 5 jours',
    ],
    cta: 'Choisir Starter',
  },
  {
    name: 'Standard',
    price: 599,
    monthly: 49,
    description: 'Le forfait complet pour développer votre clientèle à Genève.',
    features: [
      "Jusqu'à 5 pages",
      'Galerie photos',
      'SEO Genève inclus',
      'Formulaire de contact avancé',
      'Livré en 7 jours',
    ],
    recommended: true,
    cta: 'Choisir Standard',
  },
  {
    name: 'Pro',
    price: 990,
    monthly: 79,
    description: 'Pour les commerces ambitieux qui veulent dominer leur marché local.',
    features: [
      'Pages illimitées',
      'Réservation en ligne (Calendly)',
      'Blog / actualités',
      'Statistiques visiteurs',
      'Support prioritaire',
      'Livré en 14 jours',
    ],
    cta: 'Choisir Pro',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

function CheckIcon({ recommended }: { recommended?: boolean }) {
  return (
    <svg
      className={`w-5 h-5 shrink-0 mt-0.5 ${recommended ? 'text-red-400' : 'text-red-600'}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Forfaits</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Des tarifs transparents, sans surprises
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Choisissez le forfait adapté à votre commerce. Pas de frais cachés, pas de mauvaises surprises.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {services.map((service) => (
            <motion.div
              key={service.name}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.25, ease: 'easeOut' } }}
              className={`relative rounded-3xl p-8 flex flex-col h-full transition-shadow duration-500 ${
                service.recommended
                  ? 'bg-slate-900 shadow-[0_24px_64px_rgba(0,0,0,0.18)]'
                  : 'bg-white border border-slate-100 shadow-[0_2px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_64px_rgba(0,0,0,0.10)]'
              }`}
            >
              {/* Recommended glow */}
              {service.recommended && (
                <div
                  className="absolute bottom-0 right-0 w-48 h-48 bg-red-600/15 rounded-full translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none"
                  aria-hidden="true"
                />
              )}

              {/* Popular badge */}
              {service.recommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 bg-red-600 text-white text-[11px] font-bold tracking-wider uppercase px-4 py-1.5 rounded-full shadow-md shadow-red-600/30">
                    ⭐ Recommandé
                  </span>
                </div>
              )}

              <div className="relative">
                {/* Service name */}
                <h3 className={`text-xl font-bold mb-1 tracking-tight ${service.recommended ? 'text-white' : 'text-slate-900'}`}>
                  {service.name}
                </h3>
                <p className={`text-sm mb-6 ${service.recommended ? 'text-slate-400' : 'text-slate-500'}`}>
                  {service.description}
                </p>

                {/* Price */}
                <div className="mb-7">
                  <div className="flex items-end gap-2">
                    <span className={`text-4xl font-extrabold tracking-tight ${service.recommended ? 'text-white' : 'text-slate-900'}`}>
                      CHF {service.price}
                    </span>
                    <span className={`text-sm mb-1.5 ${service.recommended ? 'text-slate-400' : 'text-slate-400'}`}>
                      création
                    </span>
                  </div>
                  <div className={`text-sm mt-1 ${service.recommended ? 'text-slate-500' : 'text-slate-400'}`}>
                    + CHF {service.monthly}/mois hébergement
                  </div>
                </div>

                {/* Divider */}
                <div className={`h-px mb-7 ${service.recommended ? 'bg-white/10' : 'bg-slate-100'}`} />

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <CheckIcon recommended={service.recommended} />
                      <span className={`text-sm ${service.recommended ? 'text-slate-300' : 'text-slate-700'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/contact"
                  className={`block text-center font-semibold py-3.5 px-6 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 ${
                    service.recommended
                      ? 'bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-600/30'
                      : 'bg-slate-900 hover:bg-red-600 text-white'
                  }`}
                >
                  {service.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust note */}
        <motion.p
          className="text-center text-slate-400 text-sm mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.4 }}
        >
          Tous les forfaits incluent un devis gratuit et sans engagement.{' '}
          <Link href="/contact" className="text-red-600 hover:underline">
            Contactez-moi
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
