import type { Metadata } from 'next';
import Link from 'next/link';
import ServicesGrid from '@/components/ServicesGrid';
import CTASection from '@/components/CTASection';
import FadeIn from '@/components/FadeIn';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Combien de temps faut-il pour créer mon site ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Selon le forfait, entre 5 et 14 jours ouvrables. Le forfait Starter est livré en 5 jours, le forfait Standard en 7 jours, et le forfait Pro en 14 jours.',
      },
    },
    {
      '@type': 'Question',
      name: 'Est-ce que je garde la propriété de mon site ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Absolument. Votre site vous appartient à 100%. Si vous décidez d'arrêter l'hébergement mensuel, je vous transmets tous les fichiers de votre site.",
      },
    },
    {
      '@type': 'Question',
      name: "Que comprend l'hébergement mensuel ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "L'hébergement mensuel inclut : le nom de domaine (.ch ou .com), l'hébergement sécurisé avec HTTPS, les mises à jour techniques, le support par email, et les petites modifications de contenu (textes, horaires, etc.).",
      },
    },
    {
      '@type': 'Question',
      name: 'Est-ce que vous pouvez reprendre mon site existant ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, je peux reprendre et moderniser votre site existant. Contactez-moi pour un audit gratuit de votre site actuel.",
      },
    },
    {
      '@type': 'Question',
      name: 'Le site sera-t-il visible sur Google ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui ! Chaque site est optimisé pour le référencement local à Genève (SEO local). Je soumets votre site à Google et configure votre fiche Google My Business si vous ne l'avez pas encore.",
      },
    },
    {
      '@type': 'Question',
      name: 'Puis-je modifier le contenu moi-même après la livraison ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui. Les petites modifications (textes, horaires, photos, prix) sont incluses dans le forfait mensuel, sans surcoût. Pour des changements plus importants, je m'occupe de tout. Il vous suffit de m'envoyer un message.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: 'Services & Tarifs',
  description:
    'Découvrez nos forfaits de création de sites web pour les commerces genevois. Starter CHF 299, Standard CHF 599, Pro CHF 990. Devis gratuit.',
};

const faqs = [
  {
    question: 'Combien de temps faut-il pour créer mon site ?',
    answer:
      'Selon le forfait, entre 5 et 14 jours ouvrables. Le forfait Starter est livré en 5 jours, le forfait Standard en 7 jours, et le forfait Pro en 14 jours. Tout commence par un échange pour bien comprendre votre commerce.',
  },
  {
    question: 'Est-ce que je garde la propriété de mon site ?',
    answer:
      "Absolument. Votre site vous appartient à 100%. Si vous décidez d'arrêter l'hébergement mensuel, je vous transmets tous les fichiers de votre site.",
  },
  {
    question: "Que comprend l'hébergement mensuel ?",
    answer:
      "L'hébergement mensuel inclut : le nom de domaine (.ch ou .com), l'hébergement sécurisé avec HTTPS, les mises à jour techniques, le support par email, et les petites modifications de contenu (textes, horaires, etc.).",
  },
  {
    question: 'Est-ce que vous pouvez reprendre mon site existant ?',
    answer:
      'Oui, je peux reprendre et moderniser votre site existant. Contactez-moi pour un audit gratuit de votre site actuel.',
  },
  {
    question: 'Le site sera-t-il visible sur Google ?',
    answer:
      "Oui ! Chaque site est optimisé pour le référencement local à Genève (SEO local). Je soumets votre site à Google et configure votre fiche Google My Business si vous ne l'avez pas encore.",
  },
  {
    question: 'Puis-je modifier le contenu moi-même après la livraison ?',
    answer:
      "Oui. Les petites modifications (textes, horaires, photos, prix) sont incluses dans le forfait mensuel, sans surcoût. Pour des changements plus importants, je m'occupe de tout. Il vous suffit de m'envoyer un message.",
  },
];

const process = [
  {
    step: '01',
    title: 'Échange gratuit',
    description: "On se parle 20-30 minutes par téléphone ou en présentiel à Genève pour comprendre votre commerce et vos besoins.",
  },
  {
    step: '02',
    title: 'Devis et maquette',
    description: 'Je vous envoie un devis détaillé et une première maquette de votre site sous 24h.',
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
    <div className="pt-16 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Hero ── */}
      <section className="bg-slate-900 py-20 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-slate-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
            Tarifs clairs
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 tracking-tight leading-[1.05]">
            Services &{' '}
            <span className="text-red-500">Forfaits</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
            Des forfaits adaptés à chaque commerce genevois. Pas de frais cachés, tout est inclus.
          </p>
        </div>
      </section>

      {/* ── Services grid ── */}
      <ServicesGrid />

      {/* ── Process ── */}
      <section className="py-24 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">
              Un processus simple et transparent, de la première discussion à la mise en ligne.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {process.map((step, i) => (
              <FadeIn key={step.step} delay={i * 0.08}>
                <div className="relative bg-white rounded-2xl p-6 border border-slate-100 shadow-sm group hover:border-red-100 hover:bg-red-50/30 transition-all duration-300 h-full">
                  <div className="text-4xl font-bold text-slate-100 group-hover:text-red-100 transition-colors leading-none mb-4 select-none">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 tracking-tight">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Questions fréquentes
            </h2>
          </FadeIn>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FadeIn key={faq.question} delay={i * 0.05}>
                <details className="group bg-[#f8f8f8] rounded-2xl border border-slate-100 overflow-hidden">
                  <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none font-semibold text-slate-900 hover:bg-slate-100 transition-colors gap-4">
                    <span>{faq.question}</span>
                    <svg
                      className="w-5 h-5 text-slate-400 transition-transform duration-300 group-open:rotate-180 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 pt-2 text-slate-600 leading-relaxed border-t border-slate-100 text-sm">
                    {faq.answer}
                  </div>
                </details>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3} className="text-center mt-10">
            <p className="text-slate-500 mb-4">Vous avez d&apos;autres questions ?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-red-600/20"
            >
              Contactez-moi
            </Link>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
