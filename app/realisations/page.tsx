import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import ProjectGrid from '@/components/realisations/ProjectGrid';
import Testimonial from '@/components/realisations/Testimonial';
import { realisations, demos, testimonials } from '@/lib/realisations';

export const metadata: Metadata = {
  title: 'Réalisations',
  description:
    "Sites web créés pour des commerces de Genève par Atelier Digital Genève. Restaurants, boutiques, salons : des sites qui ramènent des clients.",
  openGraph: {
    title: 'Réalisations · Atelier Digital Genève',
    description:
      'Sites web créés pour des commerces de Genève. Restaurants, boutiques, salons.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://atelierdigitalgeneve.ch/realisations',
  },
};

/**
 * /realisations — page portfolio "narrative" pour les prospects.
 *
 * Structure :
 *   1. Hero court (pas d'animation framer-motion : cf. CLAUDE.md sur le bug
 *      Next 16 + Turbopack qui fige les motion.X sur le critical path).
 *   2. Section "Réalisations" — vrais projets clients, filtre par secteur.
 *   3. Section "Modèles & démos" — 3 sites de démonstration ADG.
 *   4. Section "Témoignages" — masquée tant que length(testimonials) < 2.
 *   5. CTA final (réutilise <CTASection /> du site).
 */
export default function RealisationsPage() {
  const showTestimonials = testimonials.length >= 2;

  return (
    <div className="bg-white pt-16">
      {/* ── Hero court ── */}
      <section className="relative overflow-hidden bg-slate-900 px-4 py-20 text-center">
        {/* Glow subtil */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-red-600/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
            Réalisations
          </div>
          <h1 className="mb-5 text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl">
            Nos <span className="text-red-500">réalisations</span>
          </h1>
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-slate-400 md:text-xl">
            Des sites qui ramènent des clients aux commerces de Genève.
          </p>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-3xl px-4">
          <div className="grid grid-cols-3 divide-x divide-slate-100">
            <div className="py-6 text-center">
              <div className="text-2xl font-bold text-slate-900 md:text-3xl">
                {realisations.length + demos.length}
              </div>
              <div className="mt-0.5 text-xs font-semibold text-slate-700">
                Sites livrés
              </div>
              <div className="text-xs text-slate-400">à Genève</div>
            </div>
            <div className="py-6 text-center">
              <div className="text-2xl font-bold text-slate-900 md:text-3xl">7j</div>
              <div className="mt-0.5 text-xs font-semibold text-slate-700">
                Délai moyen
              </div>
              <div className="text-xs text-slate-400">de livraison</div>
            </div>
            <div className="py-6 text-center">
              <div className="text-2xl font-bold text-slate-900 md:text-3xl">100%</div>
              <div className="mt-0.5 text-xs font-semibold text-slate-700">
                Satisfaction
              </div>
              <div className="text-xs text-slate-400">garantie</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section Réalisations clients ── */}
      <section className="bg-[#f8f8f8] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mb-10 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
              Projets clients
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Des commerces déjà en ligne
            </h2>
            <p className="mt-3 text-slate-500">
              Filtrez par secteur d&apos;activité. Chaque site est en production
              et reçoit du trafic réel.
            </p>
          </header>

          <ProjectGrid realisations={realisations} />
        </div>
      </section>

      {/* ── Section Modèles & démos ── */}
      <section className="border-t border-slate-100 bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mb-10 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
              Modèles &amp; démos
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              À quoi ressemble chaque forfait
            </h2>
            <p className="mt-3 text-slate-500">
              Trois sites de démonstration pour visualiser le rendu d&apos;un
              forfait Starter, Standard ou Pro avant de se lancer.
            </p>
          </header>

          <ProjectGrid realisations={demos} isDemo hideFilter />
        </div>
      </section>

      {/* ── Section Témoignages — masquée tant que < 2 ── */}
      {showTestimonials && (
        <section
          id="temoignages"
          className="border-t border-slate-100 bg-slate-50 py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <header className="mb-10 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
                Témoignages
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Ce qu&apos;ils en disent
              </h2>
            </header>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
              {testimonials.map((t, idx) => (
                <Testimonial key={`${t.auteur}-${idx}`} testimonial={t} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Process ── */}
      <section className="border-t border-slate-100 bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
              Process
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              De l&apos;idée au site en 4 étapes
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: '01', title: 'Échange gratuit', desc: '20 min par téléphone pour comprendre votre projet.' },
              { n: '02', title: 'Devis sous 24h', desc: 'Devis fixe + première maquette. Aucune surprise.' },
              { n: '03', title: 'Création', desc: 'Je construis votre site. Vous validez chaque étape.' },
              { n: '04', title: 'Mise en ligne', desc: 'Votre site est live. Je soumets tout à Google.' },
            ].map((step) => (
              <div
                key={step.n}
                className="group relative rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-all duration-300 hover:border-red-100 hover:bg-red-50/30"
              >
                <div className="mb-4 select-none text-4xl font-bold leading-none text-slate-100 transition-colors group-hover:text-red-100">
                  {step.n}
                </div>
                <h3 className="mb-2 font-bold text-slate-900">{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="border-t border-slate-100 bg-slate-50 py-16">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
            Prochaine étape
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Votre commerce, le prochain en ligne
          </h2>
          <p className="mb-8 text-lg text-slate-500">
            Devis gratuit · Livraison en 7 jours · Satisfaction garantie
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-red-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-red-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-red-600/30"
            >
              Demander un devis gratuit
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-8 py-4 text-lg font-semibold text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
            >
              Voir les tarifs
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
