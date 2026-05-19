import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import ProjectGrid from '@/components/realisations/ProjectGrid';
import Testimonial from '@/components/realisations/Testimonial';
import SectionLabel from '@/components/visual/SectionLabel';
import TrimMarks from '@/components/visual/TrimMarks';
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
 * /realisations · page portfolio narrative (phase 2 DA).
 *
 * Structure :
 *   1. Hero éditorial sombre avec TrimMarks + folio + label serif
 *   2. Stats "tampon" · encart légèrement décalé
 *   3. Section Réalisations clients (avec filtre onglets d'index)
 *   4. Section Modèles & démos (sans filtre)
 *   5. Section Témoignages (conditionnelle)
 *   6. Process bloc avec chiffres Fraunces XL en filigrane
 *   7. CTA final
 *
 * PAS de watermark "A" · réservé à la home pour rester unique.
 */
export default function RealisationsPage() {
  const showTestimonials = testimonials.length >= 2;

  return (
    <div className="bg-white pt-16">
      {/* ── Hero court éditorial ── */}
      <section className="relative overflow-hidden bg-[#0C0B09] px-4 py-24">
        <TrimMarks inset={20} size={16} color="text-white/20" />

        {/* Glow chaud subtil */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[#7B1616]/12 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-3xl text-center">
          <p className="folio mb-6 text-white/35">
            DOC. 2026.05 · Portfolio de l&apos;atelier
          </p>

          <SectionLabel variant="dark" className="justify-center">
            Réalisations
          </SectionLabel>

          <h1
            className="mt-6 text-[clamp(40px,7vw,72px)] font-bold tracking-[-0.025em] text-white"
            style={{ fontFamily: 'var(--font-serif)', lineHeight: 1.02 }}
          >
            Nos{' '}
            <span className="italic text-[#E8B4B4]" style={{ fontWeight: 500 }}>
              réalisations
            </span>
            <span className="text-[#7B1616]">.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/60 md:text-xl">
            Des sites qui ramènent des clients aux commerces de Genève.
          </p>

          {/* Construction line en dessous */}
          <span
            className="construction-line mx-auto mt-8 block"
            style={{ filter: 'brightness(1.4)' }}
          />
        </div>
      </section>

      {/* ── Stats en "tampon" · encart légèrement décalé ── */}
      <section className="relative -mt-8 bg-transparent">
        <div className="mx-auto max-w-3xl px-4">
          <div
            className="relative rounded-2xl bg-[#FAFAF8] px-6 py-5 shadow-[0_20px_48px_rgba(0,0,0,0.14)] ring-1 ring-black/[0.07]"
            style={{ transform: 'rotate(-0.6deg)' }}
          >
            <TrimMarks inset={8} size={10} color="text-stone-300" />
            <p className="folio mb-3 text-center text-[10px] text-slate-400">
              REGISTRE · {new Date().toLocaleString('fr-FR', { month: 'long', year: 'numeric' }).toUpperCase()}
            </p>
            <div className="grid grid-cols-3 divide-x divide-[#0C0B09]/[0.08]">
              <div className="px-2 text-center sm:px-4">
                <div
                  className="text-[24px] font-bold leading-none tracking-tight tabular-nums text-[#0C0B09] sm:text-[28px]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {realisations.length + demos.length}
                </div>
                <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.12em] text-slate-500">
                  Sites livrés
                </div>
              </div>
              <div className="px-2 text-center sm:px-4">
                <div
                  className="text-[24px] font-bold leading-none tracking-tight tabular-nums text-[#0C0B09] sm:text-[28px]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  7j
                </div>
                <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.12em] text-slate-500">
                  Délai moyen
                </div>
              </div>
              <div className="px-2 text-center sm:px-4">
                <div
                  className="text-[24px] font-bold leading-none tracking-tight tabular-nums text-[#0C0B09] sm:text-[28px]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  100%
                </div>
                <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.12em] text-slate-500">
                  Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section Réalisations clients ── */}
      <section className="grain bg-[#FAFAF8] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mb-12 max-w-2xl">
            <SectionLabel number="01">Projets clients</SectionLabel>
            <h2
              className="mt-4 text-3xl tracking-tight text-slate-900 md:text-4xl"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
            >
              Des commerces déjà en ligne
            </h2>
            <span className="construction-line mt-4 block" />
            <p className="mt-5 text-slate-500">
              Filtrez par secteur d&apos;activité. Chaque site est en production
              et reçoit du trafic réel<span className="accent-square ml-1" />
            </p>
          </header>

          <ProjectGrid realisations={realisations} />
        </div>
      </section>

      {/* ── Section Modèles & démos ── */}
      <section className="border-t border-slate-100 bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mb-12 max-w-2xl">
            <SectionLabel number="02">Modèles &amp; démos</SectionLabel>
            <h2
              className="mt-4 text-3xl tracking-tight text-slate-900 md:text-4xl"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
            >
              À quoi ressemble chaque forfait
            </h2>
            <span className="construction-line mt-4 block" />
            <p className="mt-5 text-slate-500">
              Trois sites de démonstration pour visualiser le rendu d&apos;un
              forfait Starter, Standard ou Pro avant de se lancer.
            </p>
          </header>

          <ProjectGrid realisations={demos} isDemo hideFilter />
        </div>
      </section>

      {/* ── Section Témoignages · masquée tant que < 2 ── */}
      {showTestimonials && (
        <section
          id="temoignages"
          className="grain border-t border-slate-100 bg-[#FAFAF8] py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <header className="mb-12 text-center">
              <SectionLabel number="03" className="justify-center">
                Témoignages
              </SectionLabel>
              <h2
                className="mt-4 text-3xl tracking-tight text-slate-900 md:text-4xl"
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
              >
                Ce qu&apos;ils en disent
              </h2>
              <span className="construction-line mx-auto mt-4 block" />
            </header>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
              {testimonials.map((t, idx) => (
                <Testimonial key={`${t.auteur}-${idx}`} testimonial={t} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Process · chiffres Fraunces XL en filigrane ── */}
      <section className="border-t border-slate-100 bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <header className="mb-14 max-w-2xl">
            <SectionLabel number={showTestimonials ? '04' : '03'}>
              Process
            </SectionLabel>
            <h2
              className="mt-4 text-3xl tracking-tight text-slate-900 md:text-4xl"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
            >
              De l&apos;idée au site en 4 étapes
            </h2>
            <span className="construction-line mt-4 block" />
          </header>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: '01', title: 'Échange gratuit', desc: '20 min par téléphone pour comprendre votre projet.' },
              { n: '02', title: 'Devis sous 24h', desc: 'Devis fixe + première maquette. Aucune surprise.' },
              { n: '03', title: 'Création', desc: 'Je construis votre site. Vous validez chaque étape.' },
              { n: '04', title: 'Mise en ligne', desc: 'Votre site est live. Je soumets tout à Google.' },
            ].map((step) => (
              <div
                key={step.n}
                className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-[#FAFAF8]/40 p-6 transition-colors duration-300 hover:border-[#7B1616]/15 hover:bg-[#7B1616]/[0.025]"
              >
                {/* Chiffre serif géant en filigrane */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-2 -top-6 select-none text-[110px] leading-none text-slate-100 transition-colors duration-500 group-hover:text-[#7B1616]/15"
                  style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
                >
                  {step.n}
                </span>

                <div className="relative">
                  <p className="label-serif text-[12px]">Étape {step.n}</p>
                  <h3 className="mt-3 text-[17px] font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="border-t border-slate-100 bg-[#FAFAF8] py-16">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <SectionLabel className="justify-center">
            Prochaine étape
          </SectionLabel>
          <h2
            className="mt-4 text-3xl tracking-tight text-slate-900 md:text-4xl"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
          >
            Votre commerce, le prochain en ligne
            <span className="text-[#7B1616]">.</span>
          </h2>
          <p className="mb-8 mt-5 text-lg text-slate-500">
            Devis gratuit · Livraison en 7 jours · Satisfaction garantie
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#7B1616] px-8 py-4 text-lg font-bold text-white shadow-lg shadow-[#7B1616]/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#5C1010] hover:shadow-[#7B1616]/30"
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
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
