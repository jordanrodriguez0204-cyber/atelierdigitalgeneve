import Link from 'next/link';
import TrimMarks from '@/components/visual/TrimMarks';

/**
 * Footer global · refonte DA atelier.
 *
 * Wordmark en Fraunces serif, kickers de colonnes en label-serif italique
 * bourgogne, trim marks aux 4 coins, folio en pied. Garde la structure
 * (brand block + 4 colonnes + bandeau légal) qui marchait, juste l'habille.
 */

const navLinks = [
  { href: '/',              label: 'Accueil' },
  { href: '/services',      label: 'Services & Tarifs' },
  { href: '/realisations',  label: 'Réalisations' },
  { href: '/a-propos',      label: 'À propos' },
  { href: '/contact',       label: 'Contact' },
];

const demos = [
  { href: 'https://restaurant.atelierdigitalgeneve.ch',       commerce: 'Restaurant', forfait: 'Standard' },
  { href: 'https://coiffeur.atelierdigitalgeneve.ch',         commerce: 'Coiffeur',   forfait: 'Starter' },
  { href: 'https://boutique.atelierdigitalgeneve.ch',         commerce: 'Boutique',   forfait: 'Pro' },
  { href: 'https://les-amis-asia-dinner-website.vercel.app',  commerce: 'Les Amis',   forfait: 'Standard' },
  { href: 'https://cocina-de-chanyz.vercel.app',              commerce: 'Cocina de Chanyz', forfait: 'Sur mesure' },
];

const columns = [
  { num: '01', kicker: 'Navigation' },
  { num: '02', kicker: 'Réalisations' },
  { num: '03', kicker: 'Contact' },
  { num: '04', kicker: 'Disponibilité' },
] as const;

function ColumnKicker({ num, kicker }: { num: string; kicker: string }) {
  return (
    <div className="mb-6 flex items-baseline gap-3">
      <span
        className="text-[12px] italic text-[#E8B4B4]"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        Sect. {num}
      </span>
      <span className="h-px w-6 bg-white/15" aria-hidden="true" />
      <span className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-white/40">
        {kicker}
      </span>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="grain relative overflow-hidden bg-[#0C0B09] text-white">
      {/* Trim marks aux 4 coins du footer */}
      <TrimMarks inset={20} size={14} color="text-white/15" />

      {/* Trait haut fin */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
      />

      <div className="mx-auto max-w-7xl px-5 pb-10 pt-20 sm:px-8 lg:px-10">
        {/* Folio en haut */}
        <p className="folio mb-8 text-white/30">
          DOC. {year}.{String(new Date().getMonth() + 1).padStart(2, '0')} · Atelier Digital Genève
        </p>

        {/* ── Brand statement · wordmark seul, pas de CTA (déjà dans <CTASection /> juste au-dessus) ── */}
        <div className="border-b border-white/[0.07] pb-14">
          <p
            className="mb-4 text-[13px] italic text-[#E8B4B4]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Studio
          </p>
          <h2
            className="text-[clamp(32px,5vw,60px)] leading-[1.0] tracking-[-0.03em] text-white"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
          >
            Atelier Digital
            <br />
            <span className="italic text-white/35" style={{ fontWeight: 500 }}>
              Genève
            </span>
            <span className="text-[#7B1616]">.</span>
          </h2>
        </div>

        {/* ── Grille 4 colonnes ── */}
        <div className="grid grid-cols-2 gap-10 border-b border-white/[0.07] py-14 md:grid-cols-4">
          {/* Navigation */}
          <div>
            <ColumnKicker num={columns[0].num} kicker={columns[0].kicker} />
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit text-[13px] text-white/50 transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Réalisations */}
          <div>
            <ColumnKicker num={columns[1].num} kicker={columns[1].kicker} />
            <nav className="flex flex-col gap-2.5">
              {demos.map((d) => (
                <a
                  key={d.href}
                  href={d.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-fit items-baseline gap-2 text-[13px] text-white/50 transition-colors duration-200 hover:text-white"
                >
                  <span>{d.commerce}</span>
                  <span
                    className="text-[11px] italic text-white/30"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {d.forfait}
                  </span>
                  <svg
                    className="h-2.5 w-2.5 self-center opacity-0 transition-opacity group-hover:opacity-40"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <ColumnKicker num={columns[2].num} kicker={columns[2].kicker} />
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:contact@atelierdigitalgeneve.ch"
                className="w-fit text-[13px] text-white/50 transition-colors duration-200 hover:text-white"
              >
                contact@atelierdigitalgeneve.ch
              </a>
              <a
                href="tel:+41763316183"
                className="w-fit text-[13px] text-white/50 transition-colors duration-200 hover:text-white"
              >
                +41 76 331 61 83
              </a>
              <span className="text-[13px] text-white/30">Genève, Suisse</span>
            </div>
          </div>

          {/* Disponibilité */}
          <div>
            <ColumnKicker num={columns[3].num} kicker={columns[3].kicker} />
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-emerald-500" />
                <span className="text-[13px] font-medium text-white/60">
                  Disponible ce mois
                </span>
              </div>
              <p className="mt-1 text-[12px] leading-snug text-white/30">
                2 créneaux restants.
                <br />
                Réponse sous 24h.
              </p>
            </div>
          </div>
        </div>

        {/* ── Bandeau légal ── */}
        <div className="flex flex-col items-start justify-between gap-3 pt-7 sm:flex-row sm:items-center">
          <p className="text-[12px] text-white/25">
            © {year} Atelier Digital Genève
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/mentions-legales"
              className="text-[12px] text-white/25 transition-colors duration-200 hover:text-white/60"
            >
              Mentions légales &amp; CGV
            </Link>
            <span className="text-xs text-white/10" aria-hidden="true">·</span>
            <span
              className="text-[12px] italic text-white/30"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Fait à Genève
            </span>
          </div>
        </div>

        {/* Folio final en pied */}
        <p className="folio mt-6 text-center text-[10px] text-white/20">
          PL. 99 · ADG/GE · ÉDITION {year}
        </p>
      </div>
    </footer>
  );
}
