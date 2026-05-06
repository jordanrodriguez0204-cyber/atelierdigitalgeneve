import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-red-600 px-8 py-14 text-center">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10" aria-hidden="true">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500 rounded-full -translate-y-1/2 opacity-50 blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-red-700 rounded-full translate-y-1/2 opacity-50 blur-2xl" />
          </div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <span>🚀</span>
              <span>Prêt à vous lancer ?</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
              Votre site web en ligne<br className="hidden sm:block" /> en moins de 7 jours
            </h2>

            <p className="text-red-100 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Demandez votre devis gratuit maintenant. Premier échange par téléphone ou vidéo, sans engagement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-red-600 font-bold text-lg px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Demander un devis gratuit
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 border-2 border-white/60 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                Voir les réalisations
              </Link>
            </div>

            <p className="text-red-200 text-sm mt-6">
              ✓ Devis gratuit · ✓ Sans engagement · ✓ Réponse sous 24h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
