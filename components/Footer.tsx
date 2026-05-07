import Link from 'next/link';
import Logo from '@/components/Logo';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo + Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Logo size={36} />
              <div>
                <p className="font-bold text-white">Atelier Digital Genève</p>
                <p className="text-xs text-slate-400">Votre présence en ligne</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Je crée des sites web modernes et efficaces pour les commerces genevois. Professionnel, rapide, et fait pour attirer de nouveaux clients.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="font-semibold text-white mb-4">Navigation</h3>
            <nav className="space-y-2">
              {[
                { href: '/', label: 'Accueil' },
                { href: '/services', label: 'Services & Tarifs' },
                { href: '/portfolio', label: 'Portfolio' },
                { href: '/a-propos', label: 'À propos' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-slate-400 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Genève, Suisse</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contact@atelierdigitalgeneve.ch" className="hover:text-white transition-colors">
                  contact@atelierdigitalgeneve.ch
                </a>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.95V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+41763316183" className="hover:text-white transition-colors">
                  +41 76 331 61 83
                </a>
              </div>
            </div>
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-sm">
            © {year} Atelier Digital Genève. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/mentions-legales"
              className="text-slate-600 hover:text-slate-400 text-xs transition-colors"
            >
              Mentions légales & CGV
            </Link>
            <span className="text-slate-700 text-xs">·</span>
            <p className="text-slate-600 text-xs">Fait avec ❤️ à Genève</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
