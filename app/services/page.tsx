import type { Metadata } from 'next';
import Link from 'next/link';
import ServicesGrid from '@/components/ServicesGrid';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Services & Tarifs',
  description:
    'Découvrez mes forfaits de création de sites web pour les commerces genevois. Vitrine CHF 490, Commerce CHF 890, Premium CHF 1490. Devis gratuit.',
};

const faqs = [
  {
    question: 'Combien de temps faut-il pour créer mon site ?',
    answer:
      'Selon le forfait, entre 5 et 10 jours ouvrables. Le forfait Vitrine est livré en 5 jours, le forfait Commerce en 7 jours, et le forfait Premium en 10 jours. Tout commence par un échange pour bien comprendre votre commerce.',
  },
  {
    question: 'Est-ce que je garde la propriété de mon site ?',
    answer:
      'Absolument. Votre site vous appartient à 100%. Si vous décidez d\'arrêter l\'hébergement mensuel, je vous transmets tous les fichiers de votre site.',
  },
  {
    question: 'Que comprend l\'hébergement mensuel ?',
    answer:
      'L\'hébergement mensuel inclut : le nom de domaine (.ch ou .com), l\'hébergement sécurisé avec HTTPS, les mises à jour techniques, le support par email, et les petites modifications de contenu (textes, horaires, etc.).',
  },
  {
    question: 'Est-ce que vous pouvez reprendre mon site existant ?',
    answer:
      'Oui, je peux reprendre et moderniser votre site existant. Contactez-moi pour un audit gratuit de votre site actuel.',
  },
  {
    question: 'Le site sera-t-il visible sur Google ?',
    answer:
      'Oui ! Chaque site est optimisé pour le référencement local à Genève (SEO local). Je soumets votre site à Google et configure votre fiche Google My Business si vous ne l\'avez pas encore.',
  },
  {
    question: 'Puis-je modifier le contenu moi-même après la livraison ?',
    answer:
      'Pour les forfaits Commerce et Premium, je configure un tableau de bord simple pour modifier vos textes et photos vous-même. Pour le forfait Vitrine, les modifications sont incluses dans le forfait mensuel.',
  },
];

const process = [
  {
    step: '01',
    title: 'Échange gratuit',
    description: 'On se parle 30 minutes par téléphone ou vidéo pour comprendre votre commerce et vos besoins.',
  },
  {
    step: '02',
    title: 'Devis et maquette',
    description: 'Je vous envoie un devis détaillé et une première maquette de votre site sous 48h.',
  },
  {
    step: '03',
    title: 'Création du site',
    description: 'Je crée votre site avec vos textes, vos photos, et votre identité. Vous validez chaque étape.',
  },
  {
    step: '04',
    title: 'Mise en ligne',
    description: 'Votre site est mis en ligne, soumis à Google, et votre domaine est configuré.',
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-slate-900 py-20 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-red-600/20 text-red-400 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            Tarifs clairs
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
            Services & Forfaits
          </h1>
          <p className="text-slate-400 text-xl leading-relaxed">
            Des forfaits adaptés à chaque commerce genevois. Pas de frais cachés, tout est inclus.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <ServicesGrid />

      {/* Process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Comment ça marche ?</h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">
              Un processus simple et transparent, de la première discussion à la mise en ligne.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step) => (
              <div key={step.step} className="bg-white rounded-2xl p-6 border border-slate-200 text-center">
                <div className="w-12 h-12 bg-red-600 text-white rounded-xl flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Questions fréquentes</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none font-semibold text-slate-900 hover:bg-slate-100 transition-colors">
                  {faq.question}
                  <svg
                    className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-4 pt-2 text-slate-600 leading-relaxed border-t border-slate-200">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-slate-500 mb-4">Vous avez d&apos;autres questions ?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Contactez-moi
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
