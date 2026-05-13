import Link from 'next/link';

const navLinks = [
  { href: '/',              label: 'Accueil' },
  { href: '/services',      label: 'Services & Tarifs' },
  { href: '/realisations',  label: 'Réalisations' },
  { href: '/portfolio',     label: 'Portfolio' },
  { href: '/a-propos',      label: 'À propos' },
  { href: '/contact',       label: 'Contact' },
];

const demos = [
  { href: 'https://restaurant.atelierdigitalgeneve.ch',       label: 'Restaurant · Standard' },
  { href: 'https://coiffeur.atelierdigitalgeneve.ch',         label: 'Coiffeur · Starter' },
  { href: 'https://boutique.atelierdigitalgeneve.ch',         label: 'Boutique · Pro' },
  { href: 'https://les-amis-asia-dinner-website.vercel.app',  label: 'Les Amis · Standard' },
  { href: 'https://cocina-de-chanyz.vercel.app',              label: 'Cocina de Chanyz · Sur mesure' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0C0B09] text-white relative overflow-hidden">

      {/* Ligne décorative en haut */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      {/* ── Brand statement — grande typographie éditoriale ── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-20 pb-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 pb-14 border-b border-white/[0.07]">

          {/* Nom en grand */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.20em] uppercase text-white/25 mb-4">
              Studio
            </p>
            <h2 className="text-[clamp(32px,5vw,60px)] font-bold text-white tracking-[-0.03em] leading-[1.0]">
              Atelier Digital<br />
              <span className="text-white/25">Genève</span>
            </h2>
          </div>

          {/* CTA condensé */}
          <div className="flex flex-col gap-3 lg:items-end">
            <p className="text-[14px] text-white/40 max-w-xs lg:text-right">
              Votre commerce mérite d&apos;être trouvé sur internet.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-white text-[#0C0B09]
                         text-[13px] font-semibold tracking-tight
                         px-6 py-3 rounded-full self-start lg:self-auto
                         hover:bg-[#F2F0EB] hover:-translate-y-0.5
                         transition-all duration-200"
            >
              Demander un devis gratuit
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>

        {/* ── Grid liens ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-14 border-b border-white/[0.07]">

          {/* Navigation */}
          <div>
            <p className="text-[10.5px] font-semibold tracking-[0.18em] uppercase text-white/25 mb-5">
              Navigation
            </p>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] text-white/45 hover:text-white transition-colors duration-200 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Sites démo */}
          <div>
            <p className="text-[10.5px] font-semibold tracking-[0.18em] uppercase text-white/25 mb-5">
              Réalisations
            </p>
            <nav className="flex flex-col gap-2.5">
              {demos.map((d) => (
                <a
                  key={d.href}
                  href={d.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-white/45 hover:text-white transition-colors duration-200 w-fit flex items-center gap-1.5 group"
                >
                  {d.label}
                  <svg className="w-2.5 h-2.5 opacity-0 group-hover:opacity-40 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10.5px] font-semibold tracking-[0.18em] uppercase text-white/25 mb-5">
              Contact
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:contact@atelierdigitalgeneve.ch"
                className="text-[13px] text-white/45 hover:text-white transition-colors duration-200 w-fit"
              >
                contact@atelierdigitalgeneve.ch
              </a>
              <a
                href="tel:+41763316183"
                className="text-[13px] text-white/45 hover:text-white transition-colors duration-200 w-fit"
              >
                +41 76 331 61 83
              </a>
              <span className="text-[13px] text-white/25">
                Genève, Suisse
              </span>
            </div>
          </div>

          {/* Disponibilité */}
          <div>
            <p className="text-[10.5px] font-semibold tracking-[0.18em] uppercase text-white/25 mb-5">
              Disponibilité
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span className="text-[13px] text-white/55 font-medium">Disponible ce mois</span>
              </div>
              <p className="text-[12px] text-white/25 leading-snug mt-1">
                2 créneaux restants.<br />Réponse sous 24h.
              </p>
            </div>
          </div>
        </div>

        {/* ── Copyright ── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-7">
          <p className="text-[12px] text-white/20">
            © {year} Atelier Digital Genève
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/mentions-legales"
              className="text-[12px] text-white/20 hover:text-white/50 transition-colors duration-200"
            >
              Mentions légales & CGV
            </Link>
            <span className="text-white/10 text-xs">·</span>
            <span className="text-[12px] text-white/15">Fait à Genève</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
