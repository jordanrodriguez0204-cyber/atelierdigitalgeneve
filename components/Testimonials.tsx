import Link from 'next/link';

const placeholders = [
  {
    id: 1,
    icon: '🍽️',
    title: 'Votre commerce pourrait être ici',
    bg: 'bg-red-50',
    border: 'border-red-100',
    iconBg: 'bg-red-100',
  },
  {
    id: 2,
    icon: '✂️',
    title: 'Votre commerce pourrait être ici',
    bg: 'bg-slate-50',
    border: 'border-slate-200',
    iconBg: 'bg-slate-100',
  },
  {
    id: 3,
    icon: '🛒',
    title: 'Votre commerce pourrait être ici',
    bg: 'bg-red-50',
    border: 'border-red-100',
    iconBg: 'bg-red-100',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block bg-red-50 text-red-600 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            Clients
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Ils nous feront confiance
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Nous sommes en train de construire notre portfolio. Contactez-nous pour être parmi nos premiers clients à Genève.
          </p>
        </div>

        {/* Placeholder cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {placeholders.map((p) => (
            <div
              key={p.id}
              className={`${p.bg} rounded-2xl p-8 border ${p.border} flex flex-col items-center text-center`}
            >
              <div className={`w-16 h-16 ${p.iconBg} rounded-2xl flex items-center justify-center text-3xl mb-5`}>
                {p.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{p.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                Nous sommes en train de construire notre portfolio. Contactez-nous pour être parmi nos premiers clients à Genève.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors"
              >
                Devenir client pilote
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
