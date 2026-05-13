import Link from 'next/link';
import type { Service } from '@/lib/types';

/**
 * Grille des 3 forfaits — refonte phase 3 DA "fiches d'atelier".
 *
 * Chaque forfait est traité comme une fiche papier avec :
 * - une languette d'onglet en haut (couleur subtile par forfait)
 * - un numéro 01/02/03 en label-serif italique
 * - le prix en Fraunces serif grand, /mois en exposant éditorial
 * - les features avec puces bourgogne fines (carrés accent)
 * - une légère rotation alternée pour le côté "fiches posées sur un bureau"
 *
 * Server Component (drop framer-motion).
 */

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

export default function ServicesGrid() {
  return (
    <section className="grain bg-[#FAFAF8] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Trio de fiches — légèrement décalées comme posées sur un bureau */}
        <div className="grid grid-cols-1 items-stretch gap-8 pt-6 md:grid-cols-3 lg:gap-10">
          {services.map((service, idx) => {
            const num = String(idx + 1).padStart(2, '0');
            // Rotation alternée subtile pour le rendu "fiches posées"
            const rotation = idx === 0 ? '-0.4deg' : idx === 1 ? '0deg' : '0.5deg';
            const yOffset = idx === 1 ? '-12px' : '0';

            return (
              <article
                key={service.name}
                style={{ transform: `rotate(${rotation}) translateY(${yOffset})` }}
                className={`group relative flex flex-col rounded-2xl bg-white pb-7 pt-10 ring-1 transition-shadow duration-500 ${
                  service.recommended
                    ? 'ring-[#7B1616]/15 shadow-[0_24px_64px_rgba(123,22,22,0.16)] hover:shadow-[0_32px_72px_rgba(123,22,22,0.22)]'
                    : 'ring-black/[0.07] shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_64px_rgba(0,0,0,0.12)]'
                }`}
              >
                {/* Languette d'onglet en haut */}
                <span
                  aria-hidden="true"
                  className={`absolute -top-3 left-8 inline-flex h-7 items-center rounded-t-md px-3 text-[10px] font-semibold uppercase tracking-[0.18em] ${
                    service.recommended
                      ? 'bg-[#7B1616] text-white shadow-[0_-2px_4px_rgba(0,0,0,0.05)]'
                      : 'bg-[#0C0B09] text-white shadow-[0_-2px_4px_rgba(0,0,0,0.05)]'
                  }`}
                >
                  Forfait {num}
                </span>

                {/* Badge "Le plus vendu" pour Standard */}
                {service.recommended && (
                  <span className="absolute -top-3 right-6 inline-flex h-7 items-center rounded-md bg-[#FAFAF8] px-3 text-[10px] font-medium italic text-[#7B1616] ring-1 ring-[#7B1616]/15">
                    <span style={{ fontFamily: 'var(--font-serif)' }}>
                      Le plus vendu
                    </span>
                  </span>
                )}

                {/* Trim marks dans les coins de la fiche */}
                <span className="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l border-t border-[#0C0B09]/15" />
                <span className="pointer-events-none absolute right-3 top-3 h-3 w-3 border-r border-t border-[#0C0B09]/15" />
                <span className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b border-l border-[#0C0B09]/15" />
                <span className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b border-r border-[#0C0B09]/15" />

                <div className="flex flex-1 flex-col px-7">
                  {/* Nom du forfait */}
                  <h3
                    className="text-3xl tracking-tight text-[#0C0B09]"
                    style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
                  >
                    {service.name}
                  </h3>
                  <p className="mt-2 min-h-[3rem] text-[14px] leading-snug text-slate-500">
                    {service.description}
                  </p>

                  {/* Construction line sous l'intro */}
                  <span className="construction-line my-5 block" />

                  {/* Prix en Fraunces grand */}
                  <div className="mb-2">
                    <div className="flex items-baseline gap-2">
                      <span
                        className="text-[44px] font-bold leading-none tracking-tight tabular-nums text-[#0C0B09]"
                        style={{ fontFamily: 'var(--font-serif)' }}
                      >
                        CHF {service.price}
                      </span>
                      <span
                        className="text-[12px] italic text-slate-400"
                        style={{ fontFamily: 'var(--font-serif)' }}
                      >
                        à la création
                      </span>
                    </div>
                    <p className="mt-2 text-[13px] text-slate-500">
                      + <span className="font-medium text-[#0C0B09] tabular-nums">CHF {service.monthly}</span>{' '}
                      <span className="text-slate-400">/mois — hébergement &amp; support</span>
                    </p>
                  </div>

                  {/* Hairline divider */}
                  <div className="my-6 h-px bg-[#0C0B09]/[0.08]" />

                  {/* Features */}
                  <ul className="mb-8 flex-1 space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-baseline gap-3 text-[14px] text-slate-700"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1 h-[5px] w-[5px] shrink-0 bg-[#7B1616]"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className={`group/btn flex w-full items-center justify-between rounded-xl px-4 py-[13px] text-[13px] font-medium tracking-tight transition-colors duration-300 ${
                      service.recommended
                        ? 'bg-[#7B1616] text-white hover:bg-[#5C1010]'
                        : 'bg-[#0C0B09] text-white hover:bg-[#7B1616]'
                    }`}
                  >
                    <span>{service.cta}</span>
                    <svg
                      className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>

                  {/* Folio en pied de fiche */}
                  <p className="folio mt-5 text-center text-[10px]">
                    PL. {num} · TARIFS 2026 · ADG/GE
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-12 text-center text-[14px] text-slate-500">
          Tous les forfaits incluent un devis gratuit et sans engagement<span className="accent-square ml-1" />
        </p>
      </div>
    </section>
  );
}
