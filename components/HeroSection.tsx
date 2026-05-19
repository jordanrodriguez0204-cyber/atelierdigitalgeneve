import Link from 'next/link';
import TrimMarks from '@/components/visual/TrimMarks';
import Watermark from '@/components/visual/Watermark';

/**
 * Hero de la home · refonte phase 2 DA "éditorial atelier".
 *
 * - Server Component (drop de framer-motion sur le critical path,
 *   cf. memory `framer_motion_nextjs16.md` · le hero reste figé en opacity 0
 *   sur Next 16 + Turbopack si on l'anime via framer).
 * - Animations via Tailwind `animate-in fade-in slide-in-from-bottom`,
 *   100% CSS, lisible sans JS.
 * - H1 traité en Fraunces serif comme un titre de revue.
 * - Watermark "A" XL bourgogne (exclusif à la home · signature de la page
 *   d'entrée, pas reproduit ailleurs sur le site).
 * - Croix de repérage `TrimMarks` aux 4 coins.
 * - Stats bar en fiches tabulaires : hairlines 0.5px, tabular-nums, carré
 *   accent en fin de bloc.
 */

const stats = [
  { value: '5', label: 'Sites livrés à Genève' },
  { value: '7j', label: 'Délai garanti' },
  { value: '100%', label: 'Satisfaction client' },
];

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[93vh] flex-col justify-between overflow-hidden bg-[#FAFAF8]">
      {/* ── Watermark "A" XL bourgogne · signature de la home ── */}
      <Watermark size={75} opacity={0.045} offsetX={28} offsetY={-4}>
        A
      </Watermark>

      {/* ── Croix de repérage aux 4 coins (motif atelier) ── */}
      <TrimMarks inset={24} size={16} color="text-stone-300" />

      {/* ── Glow chaud très subtil en haut à droite ── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute right-0 top-0 h-[640px] w-[640px] -translate-y-1/4 translate-x-1/3 opacity-[0.18]"
          style={{
            background:
              'radial-gradient(circle, rgba(123,22,22,0.16) 0%, transparent 65%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Grain papier · appliqué directement plutôt que via .grain pour ne
            pas occulter le watermark qui est aussi en position absolute. */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '240px 240px',
            mixBlendMode: 'multiply',
          }}
        />
      </div>

      {/* ── Contenu principal ── */}
      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pb-16 pt-32 sm:px-8 lg:px-10">
        <div className="max-w-4xl">
          {/* Folio en haut (référence atelier) */}
          <p className="folio mb-10 animate-in fade-in duration-700">
            DOC. 2026.05 · Atelier Digital Genève
          </p>

          {/* Badge disponibilité */}
          <div className="mb-10 animate-in fade-in slide-in-from-bottom-2 duration-700">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0C0B09]/[0.10] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#4A453F]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
              Disponible · 2 créneaux ce mois
            </span>
          </div>

          {/* ── Headline en Fraunces serif (titre de revue) ── */}
          <h1
            className="mb-10 animate-in fade-in slide-in-from-bottom-4 text-[clamp(52px,9vw,108px)] font-bold tracking-[-0.025em] text-[#0C0B09] duration-1000"
            style={{ fontFamily: 'var(--font-serif)', lineHeight: 0.98 }}
          >
            <span className="block">Votre commerce</span>
            <span className="block italic" style={{ fontWeight: 500 }}>
              mérite d&apos;être
            </span>
            <span className="block">
              trouvé<span className="text-[#7B1616]">.</span>
            </span>
          </h1>

          {/* Sous-titre sans-serif lead */}
          <p
            className="mb-10 max-w-xl animate-in fade-in slide-in-from-bottom-2 text-[18px] leading-relaxed text-[#8C837A] duration-1000 md:text-[20px]"
            style={{ animationDelay: '200ms', animationFillMode: 'backwards' }}
          >
            Je crée des sites web pour les commerces de Genève.{' '}
            <span className="font-medium text-[#4A453F]">Rapide, professionnel,</span>{' '}
            fait pour attirer de nouveaux clients<span className="accent-square ml-1" />
          </p>

          {/* Trait de construction sous le sous-titre */}
          <span
            className="construction-line mb-10 block animate-in fade-in duration-1000"
            style={{ animationDelay: '300ms', animationFillMode: 'backwards' }}
          />

          {/* CTAs */}
          <div
            className="flex animate-in fade-in slide-in-from-bottom-2 flex-col items-start gap-3 duration-1000 sm:flex-row sm:items-center"
            style={{ animationDelay: '400ms', animationFillMode: 'backwards' }}
          >
            {/* Primaire · dark editorial */}
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#0C0B09] px-7 py-3.5 text-[14px] font-semibold tracking-tight text-white shadow-[0_1px_2px_rgba(0,0,0,0.12),0_4px_16px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1C1B18] hover:shadow-[0_2px_4px_rgba(0,0,0,0.14),0_8px_28px_rgba(0,0,0,0.16)]"
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

            {/* Secondaire · ghost */}
            <Link
              href="/realisations"
              className="group inline-flex items-center gap-2 px-2 py-3.5 text-[14px] font-medium text-[#4A453F] transition-colors duration-200 hover:text-[#0C0B09]"
            >
              Voir les réalisations
              <svg
                className="h-3.5 w-3.5 opacity-50 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* ── Stats bar · bande de fiches tabulaires ──
          Hairlines 0.5px, tabular-nums, accent square en fin. */}
      <div
        className="relative animate-in fade-in slide-in-from-bottom-1 duration-1000"
        style={{ animationDelay: '600ms', animationFillMode: 'backwards' }}
      >
        {/* Trait de coupe en haut */}
        <div className="trim-line absolute inset-x-0 top-0" />

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex items-stretch divide-x divide-[#0C0B09]/[0.08]">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="flex-1 px-4 py-5 first:pl-0 sm:px-8"
              >
                <p className="label-serif mb-1 text-[12px]">
                  Stat. 0{i + 1}
                </p>
                <div
                  className="mb-1 text-[22px] font-bold leading-none tracking-tight tabular-nums text-[#0C0B09] sm:text-[26px]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {stat.value}
                </div>
                <div className="text-[11px] font-medium uppercase leading-tight tracking-[0.08em] text-[#8C837A]">
                  {stat.label}
                </div>
              </div>
            ))}

            {/* Mention sociale · alignée en bord droit */}
            <div className="hidden flex-1 items-center px-8 py-5 lg:flex">
              <p className="max-w-[200px] text-[12px] leading-snug text-[#8C837A]">
                Restaurant, coiffeur, boutique.{' '}
                <span className="font-medium text-[#4A453F]">
                  Des commerces genevois déjà en ligne
                </span>
                <span className="accent-square ml-1" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
