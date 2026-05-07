import Link from 'next/link';

const guarantees = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Livré en 7 jours',
    description:
      "Votre site est en ligne en une semaine. Pas de mois d'attente, pas de projets qui traînent. Je m'engage sur un délai précis.",
    color: 'text-red-600',
    bg: 'bg-red-50',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Satisfaction garantie',
    description:
      "Je travaille jusqu'à ce que vous soyez 100% satisfait. Des révisions illimitées pendant la phase de création, sans surcoût.",
    color: 'text-slate-700',
    bg: 'bg-slate-50',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.95V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: 'Un interlocuteur unique',
    description:
      "Pas de chef de projet, pas d'intermédiaire. Vous avez mon numéro direct et je réponds sous 24h — toujours.",
    color: 'text-red-600',
    bg: 'bg-red-50',
  },
];

const demos = [
  {
    emoji: '🍽️',
    type: 'Restaurant',
    name: 'Bistrot du Lac',
    forfait: 'Standard — CHF 599',
    href: 'https://restaurant.atelierdigitalgeneve.ch',
  },
  {
    emoji: '✂️',
    type: 'Coiffeur',
    name: 'Studio Nuance',
    forfait: 'Starter — CHF 299',
    href: 'https://coiffeur.atelierdigitalgeneve.ch',
  },
  {
    emoji: '👗',
    type: 'Boutique',
    name: 'Elara',
    forfait: 'Pro — CHF 990',
    href: 'https://boutique.atelierdigitalgeneve.ch',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Guarantees ── */}
        <div className="text-center mb-14">
          <div className="inline-block bg-red-50 text-red-600 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            Mes engagements
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Ce que je vous garantis
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Des engagements clairs, tenus à chaque projet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {guarantees.map((g) => (
            <div
              key={g.title}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm"
            >
              <div className={`w-12 h-12 ${g.bg} ${g.color} rounded-xl flex items-center justify-center mb-5`}>
                {g.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{g.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{g.description}</p>
            </div>
          ))}
        </div>

        {/* ── Live demos ── */}
        <div className="text-center mb-10">
          <div className="inline-block bg-slate-200 text-slate-600 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            Sites en ligne
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Découvrez les réalisations
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Trois exemples concrets — cliquez pour visiter les sites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {demos.map((d) => (
            <a
              key={d.name}
              href={d.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-red-300 hover:shadow-md transition-all duration-200 flex items-center gap-4"
            >
              <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-2xl shrink-0 group-hover:bg-red-50 transition-colors">
                {d.emoji}
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                  {d.type}
                </p>
                <p className="font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                  {d.name}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">{d.forfait}</p>
              </div>
              <svg
                className="w-5 h-5 text-slate-300 group-hover:text-red-500 ml-auto shrink-0 transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition-colors text-sm"
          >
            Voir tous les détails du portfolio
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
