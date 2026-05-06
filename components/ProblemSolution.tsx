export default function ProblemSolution() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Problem */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full -translate-y-1/2 translate-x-1/2" aria-hidden="true" />
            <div className="relative">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900 text-white mb-5">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="inline-block bg-red-50 text-red-600 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                Le problème
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Sans site web, vous êtes invisible
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-6">
                Aujourd&apos;hui, vos clients cherchent sur Google avant de pousser votre porte. Sans site web, vous êtes invisible.
              </p>
              <ul className="space-y-3">
                {[
                  'Vos concurrents captent vos clients potentiels',
                  'Aucune réservation en dehors des heures d\'ouverture',
                  'Pas de vitrine pour vos produits et services',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-600">
                    <svg className="w-5 h-5 text-red-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Solution */}
          <div className="bg-red-600 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-red-700 rounded-full translate-y-1/2 translate-x-1/2" aria-hidden="true" />
            <div className="relative">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 text-white mb-5">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="inline-block bg-white/20 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                La solution
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Votre présence en ligne de A à Z
              </h2>
              <p className="text-red-100 text-lg leading-relaxed mb-6">
                Je crée votre présence en ligne de A à Z — design, textes, mise en ligne. Vous vous occupez de votre commerce, je m&apos;occupe du reste.
              </p>
              <ul className="space-y-3">
                {[
                  'Nouveaux clients 24h/24, 7j/7',
                  'Réservations en ligne automatiques',
                  'Site visible sur Google Genève',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white">
                    <svg className="w-5 h-5 text-white mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
