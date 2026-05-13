import SectionLabel from '@/components/visual/SectionLabel';

/**
 * Bloc "problème vs solution" sur la home — refonte DA atelier.
 *
 * Server Component (drop framer-motion).
 * - Carte gauche (problème) : fond blanc, libellés en label-serif, bullets
 *   marquées par une croix `✕` fine bourgogne.
 * - Carte droite (solution) : fond ink sombre, bourgogne en accent, bullets
 *   avec carré accent bourgogne.
 * - Pas d'icônes rondes décoratives — l'identité est portée par la typo et
 *   les marques d'atelier.
 */

const problems = [
  'Vos concurrents captent vos clients potentiels',
  "Aucune réservation en dehors des heures d'ouverture",
  'Pas de vitrine pour vos produits et services',
];

const solutions = [
  'Nouveaux clients 24h/24, 7j/7',
  'Réservations en ligne automatiques',
  'Site visible sur Google Genève',
];

export default function ProblemSolution() {
  return (
    <section className="grain border-t border-slate-100 bg-[#FAFAF8] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-14 max-w-2xl">
          <SectionLabel number="01">Pourquoi agir maintenant</SectionLabel>
          <h2
            className="mt-4 text-3xl tracking-tight text-slate-900 md:text-4xl"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
          >
            Chaque jour sans site,{' '}
            <span className="italic text-[#7B1616]" style={{ fontWeight: 500 }}>
              c&apos;est un client perdu
            </span>
            <span className="text-[#7B1616]">.</span>
          </h2>
          <span className="construction-line mt-4 block" />
        </header>

        {/* Cards problème / solution */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* ── Problème ── */}
          <article className="relative rounded-2xl bg-white p-8 ring-1 ring-black/[0.07] shadow-[0_2px_24px_rgba(0,0,0,0.05)] md:p-10">
            {/* Trim marks dans les coins */}
            <span className="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l border-t border-[#0C0B09]/15" />
            <span className="pointer-events-none absolute right-3 top-3 h-3 w-3 border-r border-t border-[#0C0B09]/15" />
            <span className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b border-l border-[#0C0B09]/15" />
            <span className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b border-r border-[#0C0B09]/15" />

            <p
              className="text-[13px] italic text-[#7B1616]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Le problème
            </p>

            <h3
              className="mt-3 text-2xl tracking-tight text-slate-900 md:text-[28px]"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
            >
              Sans site web, vous êtes invisible
            </h3>

            <p className="mt-5 text-[15px] leading-relaxed text-slate-600">
              Aujourd&apos;hui, vos clients cherchent sur Google avant de
              pousser votre porte. S&apos;ils ne vous trouvent pas, ils vont
              chez le voisin.
            </p>

            <div className="my-6 h-px bg-[#0C0B09]/[0.08]" />

            <ul className="space-y-3">
              {problems.map((p) => (
                <li
                  key={p}
                  className="flex items-baseline gap-3 text-[14px] text-slate-700"
                >
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-[12px] text-slate-400"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    ✕
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </article>

          {/* ── Solution ── */}
          <article className="relative overflow-hidden rounded-2xl bg-[#0C0B09] p-8 shadow-[0_24px_64px_rgba(0,0,0,0.18)] md:p-10">
            {/* Glow chaud */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 translate-x-1/2 translate-y-1/2 rounded-full bg-[#7B1616]/14 blur-2xl"
            />

            {/* Trim marks dans les coins */}
            <span className="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l border-t border-white/20" />
            <span className="pointer-events-none absolute right-3 top-3 h-3 w-3 border-r border-t border-white/20" />
            <span className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b border-l border-white/20" />
            <span className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b border-r border-white/20" />

            <div className="relative">
              <p
                className="text-[13px] italic text-[#E8B4B4]"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                La solution
              </p>

              <h3
                className="mt-3 text-2xl tracking-tight text-white md:text-[28px]"
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
              >
                Votre présence en ligne de A à Z
              </h3>

              <p className="mt-5 text-[15px] leading-relaxed text-white/65">
                Je m&apos;occupe de tout — design, textes, mise en ligne, SEO
                local. Vous vous concentrez sur votre commerce.
              </p>

              <div className="my-6 h-px bg-white/10" />

              <ul className="space-y-3">
                {solutions.map((s) => (
                  <li
                    key={s}
                    className="flex items-baseline gap-3 text-[14px] text-white/80"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1 h-[5px] w-[5px] shrink-0 bg-[#E8B4B4]"
                    />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
