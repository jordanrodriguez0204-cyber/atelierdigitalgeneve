import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'À propos',
  description:
    'Atelier Digital Genève — je crée des sites web pour les commerces locaux de Genève. Freelance basé à Genève, disponible 7j/7, devis gratuit.',
};

const values = [
  {
    emoji: '🤝',
    title: 'Proximité',
    description:
      "Je suis votre voisin. Je me déplace, je vous rencontre, je comprends votre commerce avant d'écrire la première ligne de code.",
  },
  {
    emoji: '✅',
    title: 'Honnêteté',
    description:
      "Je vous dis ce que je peux faire et ce que je ne peux pas faire. Pas de promesses en l'air, pas de surprises sur la facture.",
  },
  {
    emoji: '🎯',
    title: 'Efficacité',
    description:
      'Des sites clairs, rapides, et efficaces. Votre site est livré en 7 jours — pas en 3 mois.',
  },
];

export default function AProposPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-slate-900 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-block bg-red-600/20 text-red-400 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              À propos
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Un développeur web genevois,<br className="hidden sm:block" /> à votre service
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed max-w-2xl">
              Je crée des sites web pour les commerces de Genève. Pas une grande agence froide — un interlocuteur unique, disponible, qui comprend votre quartier et vos clients.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Mon histoire</h2>
          <div className="space-y-5 text-slate-600 leading-relaxed text-lg">
            <p>
              Atelier Digital Genève est né d&apos;une conviction simple : les petits commerces genevois méritent une présence en ligne aussi soignée que les grandes enseignes — sans en avoir le budget.
            </p>
            <p>
              Tout a commencé avec des proches. Des amis restaurateurs, des membres de la famille avec de petites boutiques, des commerçants qui avaient besoin d&apos;un site mais ne savaient pas par où commencer. Je les ai aidés. J&apos;ai appris. Je me suis amélioré.
            </p>
            <p>
              Aujourd&apos;hui, je propose cette aide à tous les commerçants de Genève. Pas une agence froide et distante — un partenaire de proximité, joignable directement, qui connaît la ville et ses quartiers.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-600 rounded-3xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Ma mission</h2>
            <p className="text-red-100 text-xl leading-relaxed max-w-2xl mx-auto">
              Chaque commerce local mérite d&apos;être trouvé sur internet. Pas besoin d&apos;un budget énorme. Pas besoin de comprendre la technologie. Vous vous occupez de votre métier — je m&apos;occupe de votre présence en ligne.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Mes engagements</h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">
              Ce qui guide mon travail avec chaque client.
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

      {/* Why me */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">Pourquoi travailler avec moi</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-300 text-lg leading-relaxed">
              <div className="flex items-start gap-3">
                <span className="text-red-400 mt-1 shrink-0">✓</span>
                <span>Un seul interlocuteur du début à la fin</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 mt-1 shrink-0">✓</span>
                <span>Site livré en 7 jours, garanti</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 mt-1 shrink-0">✓</span>
                <span>Tarifs fixes, sans surprises</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 mt-1 shrink-0">✓</span>
                <span>Disponible par téléphone, 7j/7</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 mt-1 shrink-0">✓</span>
                <span>Basé à Genève, je connais votre marché</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 mt-1 shrink-0">✓</span>
                <span>Satisfaction garantie ou je retravaille</span>
              </div>
            </div>
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
            Un premier échange par téléphone, gratuit et sans engagement. Je vous réponds sous 24h.
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
