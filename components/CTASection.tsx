import Link from 'next/link';
import TrimMarks from '@/components/visual/TrimMarks';

/**
 * Section CTA finale (utilisée sur Home, Services, et possiblement autres).
 *
 * Refonte DA atelier · Server Component (drop framer-motion sur ce qui était
 * une animation reveal au scroll, remplacée par Tailwind animate-in côté CSS).
 * Le glow bourgogne remplace l'ancien gradient vermillon.
 */

const trustItems = [
  { label: 'Devis gratuit',     sub: 'Sans engagement' },
  { label: 'Livraison 7 jours', sub: 'Garanti' },
  { label: 'Réponse sous 24h',  sub: 'Toujours' },
];

export default function CTASection() {
  return (
    <section className="grain relative overflow-hidden bg-[#0C0B09]">
      <TrimMarks inset={24} size={16} color="text-white/15" />

      {/* Atmosphère · glow bourgogne */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute bottom-0 left-1/2 h-[400px] w-[700px] -translate-x-1/2 translate-y-1/2 opacity-25"
          style={{
            background: 'radial-gradient(ellipse, rgba(123,22,22,0.55) 0%, transparent 65%)',
            filter: 'blur(80px)',
          }}
        />
        {/* Trait haut fin */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 md:py-36 lg:px-10">
        <div className="max-w-4xl">
          {/* Folio en haut */}
          <p className="folio mb-6 text-white/35">
            DOC. 2026.05 · Prochaine étape
          </p>

          {/* Label éditorial */}
          <p
            className="mb-8 text-[13px] italic text-[#E8B4B4] animate-in fade-in duration-700"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Travaillons ensemble
          </p>

          {/* Headline en Fraunces serif (2 lignes) */}
          <h2
            className="mb-10 text-[clamp(36px,6vw,72px)] font-bold tracking-[-0.025em] text-white animate-in fade-in slide-in-from-bottom-3 duration-1000"
            style={{ fontFamily: 'var(--font-serif)', lineHeight: 1.03 }}
          >
            <span className="block">Votre site web,</span>
            <span className="block italic" style={{ fontWeight: 500 }}>
              en ligne en 7 jours
              <span className="text-[#7B1616]">.</span>
            </span>
          </h2>

          {/* Construction line */}
          <span
            className="construction-line mb-10 block"
            style={{ filter: 'brightness(1.4)' }}
          />

          {/* Description */}
          <p
            className="mb-12 max-w-xl text-[17px] leading-relaxed text-white/55 animate-in fade-in duration-1000"
            style={{ animationDelay: '200ms', animationFillMode: 'backwards' }}
          >
            Premier échange gratuit, par téléphone ou en présentiel à Genève.
            Devis fixe, aucune surprise sur la facture
            <span className="accent-square ml-1" />
          </p>

          {/* CTAs */}
          <div
            className="mb-16 flex animate-in fade-in slide-in-from-bottom-2 flex-col items-start gap-3 duration-1000 sm:flex-row"
            style={{ animationDelay: '350ms', animationFillMode: 'backwards' }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-[14px] font-semibold tracking-tight text-[#0C0B09] shadow-[0_2px_20px_rgba(255,255,255,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#F5F1EA]"
            >
              Demander un devis gratuit
              <svg
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
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
              href="/realisations"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-[14px] font-medium text-white/65 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:text-white"
            >
              Voir les réalisations
            </Link>
          </div>

          {/* Trust items · ligne épurée */}
          <div
            className="flex animate-in fade-in flex-wrap gap-x-8 gap-y-4 border-t border-white/[0.07] pt-8 duration-1000"
            style={{ animationDelay: '500ms', animationFillMode: 'backwards' }}
          >
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center gap-2.5">
                <span aria-hidden="true" className="h-[5px] w-[5px] bg-[#7B1616]" />
                <span className="text-[13px] font-medium text-white/60">
                  {item.label}
                  <span className="ml-1.5 text-white/30">· {item.sub}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
