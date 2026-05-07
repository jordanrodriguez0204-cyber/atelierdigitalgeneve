import Link from 'next/link';
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

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-red-600 shrink-0 mt-0.5"
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block bg-red-50 text-red-600 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            Forfaits
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Des tarifs transparents, sans surprises
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Choisissez le forfait adapté à votre commerce. Pas de frais cachés, pas de mauvaises surprises.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {services.map((service) => (
            <div
              key={service.name}
              className={`relative rounded-2xl border-2 p-7 flex flex-col h-full ${
                service.recommended
                  ? 'border-red-600 bg-white shadow-xl shadow-red-600/10'
                  : 'border-slate-200 bg-white hover:border-slate-300 transition-colors'
              }`}
            >
              {/* Popular badge */}
              {service.recommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 bg-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                    ⭐ Recommandé
                  </span>
                </div>
              )}

              {/* Service name */}
              <h3 className="text-xl font-bold text-slate-900 mb-1">{service.name}</h3>
              <p className="text-slate-500 text-sm mb-5">{service.description}</p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-extrabold text-slate-900">
                    CHF {service.price}
                  </span>
                  <span className="text-slate-500 text-sm mb-1.5">création</span>
                </div>
                <div className="text-slate-500 text-sm mt-1">
                  + CHF {service.monthly}/mois (hébergement)
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <CheckIcon />
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="/contact"
                className={`block text-center font-semibold py-3 px-6 rounded-xl transition-all duration-150 ${
                  service.recommended
                    ? 'bg-red-600 hover:bg-red-700 text-white shadow-md hover:shadow-lg shadow-red-600/20'
                    : 'bg-slate-900 hover:bg-slate-800 text-white'
                }`}
              >
                {service.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Trust note */}
        <p className="text-center text-slate-400 text-sm mt-8">
          Tous les forfaits incluent un devis gratuit et sans engagement.{' '}
          <Link href="/contact" className="text-red-600 hover:underline">
            Contactez-moi
          </Link>
        </p>
      </div>
    </section>
  );
}
