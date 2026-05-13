import Link from 'next/link';
import SectionLabel from '@/components/visual/SectionLabel';

/**
 * MethodSection — bande éditoriale entre Hero et ProblemSolution sur la home.
 *
 * Présente le blueprint `/public/illustrations/site-blueprint.svg` comme
 * preuve de méthode : chaque site ADG est dessiné comme un plan
 * d'architecte. Renforce le positionnement "atelier / craft" sans
 * sacrifier la conversion (le Hero juste au-dessus garde son rôle de vente).
 *
 * Server Component, zéro JS.
 */
export default function MethodSection() {
  return (
    <section className="grain border-t border-slate-100 bg-[#FAFAF8] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header éditorial */}
        <header className="mx-auto mb-12 max-w-2xl text-center">
          <SectionLabel number="01" className="justify-center">
            La méthode
          </SectionLabel>
          <h2
            className="mt-4 text-3xl tracking-tight text-slate-900 md:text-4xl"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
          >
            Chaque site est dessiné{' '}
            <span className="italic text-[#7B1616]" style={{ fontWeight: 500 }}>
              comme un plan
            </span>
            <span className="text-[#7B1616]">.</span>
          </h2>
          <span className="construction-line mx-auto mt-4 block" />
          <p className="mt-5 text-[15px] leading-relaxed text-slate-500">
            Sections nommées, cotes précises, rien laissé au hasard. Le côté
            éditorial sur le fond, l&apos;architecture sous le capot
            <span className="accent-square ml-1" />
          </p>
        </header>

        {/* Blueprint illustration */}
        <figure className="relative mx-auto max-w-5xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/illustrations/site-blueprint.svg"
            alt="Plan d'architecte d'un site Atelier Digital Genève : wireframe technique avec cotes 1440 px, sections numérotées 01 à 04 (navbar, hero, sections, footer), croix de repérage aux quatre coins, et cartouche d'atelier en bas à droite."
            className="h-auto w-full"
            loading="lazy"
            decoding="async"
          />
          <figcaption className="folio mt-3 text-center text-[10px]">
            PLANCHE N° 01 · ATELIER DIGITAL GENÈVE
          </figcaption>
        </figure>

        {/* Lien éditorial discret vers les vraies réalisations */}
        <div className="mt-12 text-center">
          <Link
            href="/realisations"
            className="group inline-flex items-baseline gap-2 text-[13px] italic text-[#7B1616] underline-offset-4 transition-colors hover:underline"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Voir tous les sites construits ainsi
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
