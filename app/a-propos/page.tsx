import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'À propos',
  description:
    'Atelier Digital Genève — une agence née à Genève, pour Genève. Nous aidons les petits commerces genevois à se démarquer grâce à une présence en ligne soignée.',
};

const values = [
  {
    emoji: '🤝',
    title: 'Proximité',
    description:
      'Nous sommes vos voisins. On se déplace, on vous rencontre, on comprend votre commerce.',
  },
  {
    emoji: '✅',
    title: 'Honnêteté',
    description:
      "On vous dit ce qu'on peut faire et ce qu'on ne peut pas faire. Pas de promesses en l'air.",
  },
  {
    emoji: '🎯',
    title: 'Simplicité',
    description:
      'Des sites clairs, efficaces, faciles à comprendre pour vous et vos clients.',
  },
];

export default function AProposPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-slate-900 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-red-600/20 text-red-400 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                À propos
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Une agence née à Genève, pour Genève
              </h1>
              <p className="text-slate-300 text-xl leading-relaxed">
                Nous aidons les petits commerces genevois à se démarquer grâce à une présence en ligne soignée.
              </p>
            </div>

            {/* Visual placeholder */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-64 h-64 rounded-3xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center relative overflow-hidden shadow-2xl">
                <div
                  className="absolute inset-0 opacity-20"
                  aria-hidden="true"
                  style={{
                    backgroundImage: `repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)`,
                    backgroundSize: '20px 20px',
                  }}
                />
                <span className="text-8xl relative z-10" role="img" aria-label="Atelier Digital Genève">
                  🏙️
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Notre histoire</h2>
          <div className="space-y-5 text-slate-600 leading-relaxed text-lg">
            <p>
              Atelier Digital Genève est né d&apos;une conviction simple : les petits commerces genevois méritent une présence en ligne aussi soignée que les grandes enseignes.
            </p>
            <p>
              Tout a commencé avec des proches. Des amis restaurateurs, des membres de la famille avec de petites boutiques, des particuliers qui avaient besoin d&apos;un site mais ne savaient pas par où commencer. On les a aidés. On a appris. On s&apos;est amélioré.
            </p>
            <p>
              Aujourd&apos;hui, nous souhaitons étendre cette aide à tous les commerçants de Genève et de la région. Pas une agence froide et distante — un partenaire de proximité qui comprend vos besoins, votre quartier, et vos clients.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-600 rounded-3xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Notre mission</h2>
            <p className="text-red-100 text-xl leading-relaxed max-w-2xl mx-auto">
              Nous croyons que chaque commerce local mérite d&apos;être trouvé sur internet. Pas besoin d&apos;un budget énorme. Pas besoin de comprendre la technologie. Vous vous occupez de votre métier — nous nous occupons de votre présence en ligne.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Nos valeurs</h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">
              Ce qui guide notre travail au quotidien avec chaque client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-slate-50 rounded-2xl p-7 border border-slate-200">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-2xl mb-5">
                  {value.emoji}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-500 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">Pourquoi nous choisir</h2>
            <p className="text-slate-300 text-xl leading-relaxed">
              Nous démarrons, et c&apos;est une force. Nos premiers clients bénéficient de tarifs préférentiels, d&apos;une attention maximale, et d&apos;un suivi personnalisé. Vous n&apos;êtes pas un numéro de dossier — vous êtes un partenaire.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Travaillons ensemble
          </h2>
          <p className="text-lg text-slate-500 mb-8">
            Un premier échange par téléphone ou vidéo, gratuit et sans engagement.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors shadow-lg shadow-red-600/20"
          >
            Prendre contact
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
