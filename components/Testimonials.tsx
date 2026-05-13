import Link from 'next/link';
import SectionLabel from '@/components/visual/SectionLabel';

/**
 * Section Engagements + teaser portfolio sur la home — refonte DA atelier.
 *
 * Server Component (drop framer-motion).
 *
 * Bloc 1 — "Mes engagements" : 3 cards style Process avec chiffres XL Fraunces
 *   en filigrane, drop des icônes décoratives.
 * Bloc 2 — Teaser portfolio : 3 mini-cards (au lieu des 5 d'avant) puis CTA
 *   forte vers /realisations. Élimine le doublon avec la page Réalisations.
 *
 * Le nom "Testimonials" est historique — il n'y a pas de témoignages dedans.
 * Renommer impliquerait de toucher l'import dans `app/page.tsx`. On le laisse
 * pour ne pas multiplier les changements.
 */

const guarantees = [
  {
    title: 'Livré en 7 jours',
    description:
      "Votre site est en ligne en une semaine. Pas de mois d'attente, pas de projets qui traînent. Je m'engage sur un délai précis.",
  },
  {
    title: 'Satisfaction garantie',
    description:
      "Je travaille jusqu'à ce que vous soyez 100% satisfait. Des révisions illimitées pendant la phase de création, sans surcoût.",
  },
  {
    title: 'Un interlocuteur unique',
    description:
      "Pas de chef de projet, pas d'intermédiaire. Vous avez mon numéro direct et je réponds sous 24h, toujours.",
  },
];

/** Teaser : on garde 3 démos (les forfaits officiels Starter / Standard / Pro)
 *  pour rester court. Les 2 autres (Cocina, Les Amis) restent dans /realisations. */
const teaserDemos = [
  {
    sect: 'RESTAURATION',
    name: 'Bistrot du Lac',
    forfait: 'Standard',
    href: 'https://restaurant.atelierdigitalgeneve.ch',
  },
  {
    sect: 'BEAUTÉ & BIEN-ÊTRE',
    name: 'Salon Émeraude',
    forfait: 'Starter',
    href: 'https://coiffeur.atelierdigitalgeneve.ch',
  },
  {
    sect: 'COMMERCE',
    name: 'Atelier Maison',
    forfait: 'Pro',
    href: 'https://boutique.atelierdigitalgeneve.ch',
  },
];

export default function Testimonials() {
  return (
    <>
      {/* ════════════════════════════════════════════════════════════════
          Bloc 1 — Mes engagements
          ════════════════════════════════════════════════════════════════ */}
      <section className="border-t border-slate-100 bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <header className="mb-14 max-w-2xl">
            <SectionLabel number="03">Mes engagements</SectionLabel>
            <h2
              className="mt-4 text-3xl tracking-tight text-slate-900 md:text-4xl"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
            >
              Ce que je vous garantis
              <span className="text-[#7B1616]">.</span>
            </h2>
            <span className="construction-line mt-4 block" />
            <p className="mt-5 text-slate-500">
              Des engagements clairs, tenus à chaque projet
              <span className="accent-square ml-1" />
            </p>
          </header>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {guarantees.map((g, idx) => {
              const num = String(idx + 1).padStart(2, '0');
              return (
                <div
                  key={g.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-[#FAFAF8]/40 p-7 transition-colors duration-300 hover:border-[#7B1616]/15 hover:bg-[#7B1616]/[0.025]"
                >
                  {/* Chiffre serif XL en filigrane */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-2 -top-6 select-none text-[110px] leading-none text-slate-100 transition-colors duration-500 group-hover:text-[#7B1616]/15"
                    style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
                  >
                    {num}
                  </span>

                  <div className="relative">
                    <p className="label-serif text-[12px]">Engagement {num}</p>
                    <h3 className="mt-3 text-[18px] font-bold tracking-tight text-slate-900">
                      {g.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-slate-500">
                      {g.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          Bloc 2 — Teaser portfolio (vers /realisations)
          ════════════════════════════════════════════════════════════════ */}
      <section className="grain border-t border-slate-100 bg-[#FAFAF8] py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <header className="mb-12 max-w-2xl">
            <SectionLabel number="04">Sites en ligne</SectionLabel>
            <h2
              className="mt-4 text-3xl tracking-tight text-slate-900 md:text-4xl"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
            >
              Un aperçu de l&apos;atelier
              <span className="text-[#7B1616]">.</span>
            </h2>
            <span className="construction-line mt-4 block" />
            <p className="mt-5 text-slate-500">
              Trois sites en production, à l&apos;échelle des forfaits. Le book
              complet vit sur la page Réalisations.
            </p>
          </header>

          {/* Mini-cards éditoriales — pas de mockups image ici (réservés à /realisations),
              juste des plaques typographiques propres. */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-5">
            {teaserDemos.map((d, idx) => {
              const num = String(idx + 1).padStart(2, '0');
              return (
                <a
                  key={d.name}
                  href={d.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col rounded-2xl bg-white p-6 ring-1 ring-black/[0.06] shadow-[0_2px_24px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(0,0,0,0.10)] hover:ring-[#7B1616]/15"
                >
                  {/* Trim marks dans les coins */}
                  <span className="pointer-events-none absolute left-2.5 top-2.5 h-2.5 w-2.5 border-l border-t border-[#0C0B09]/15" />
                  <span className="pointer-events-none absolute right-2.5 top-2.5 h-2.5 w-2.5 border-r border-t border-[#0C0B09]/15" />
                  <span className="pointer-events-none absolute bottom-2.5 left-2.5 h-2.5 w-2.5 border-b border-l border-[#0C0B09]/15" />
                  <span className="pointer-events-none absolute bottom-2.5 right-2.5 h-2.5 w-2.5 border-b border-r border-[#0C0B09]/15" />

                  <p
                    className="text-[12px] italic text-[#7B1616]"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {num}
                  </p>

                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Sect. {d.sect}
                  </p>

                  <h3
                    className="mt-3 text-[20px] leading-tight tracking-tight text-slate-900 transition-colors group-hover:text-[#7B1616]"
                    style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
                  >
                    {d.name}
                  </h3>

                  <p
                    className="mt-1 text-[12px] italic text-slate-500"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    Forfait {d.forfait}
                  </p>

                  {/* Indicateur de lien externe */}
                  <span className="mt-5 flex items-center justify-between border-t border-[#0C0B09]/[0.08] pt-3 text-[11px] font-medium uppercase tracking-[0.12em] text-slate-400 transition-colors group-hover:text-[#7B1616]">
                    <span>Voir le site</span>
                    <svg
                      className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </span>
                </a>
              );
            })}
          </div>

          {/* CTA forte vers /realisations */}
          <div className="mt-12 text-center">
            <Link
              href="/realisations"
              className="group inline-flex items-center gap-3 rounded-2xl border border-[#0C0B09]/15 bg-white px-7 py-4 text-[15px] font-medium tracking-tight text-[#0C0B09] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#7B1616] hover:bg-[#7B1616] hover:text-white"
            >
              <span>Voir toutes les réalisations</span>
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <p className="folio mt-4 text-[10px]">
              Réalisations clients · Sites de démonstration · Process complet
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
