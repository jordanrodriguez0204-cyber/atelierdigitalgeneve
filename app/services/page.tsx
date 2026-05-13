import type { Metadata } from 'next';
import Link from 'next/link';
import ServicesGrid from '@/components/ServicesGrid';
import CTASection from '@/components/CTASection';
import SectionLabel from '@/components/visual/SectionLabel';
import TrimMarks from '@/components/visual/TrimMarks';

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
        text: 'Oui, je peux reprendre et moderniser votre site existant. Contactez-moi pour un audit gratuit de votre site actuel.',
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

export default function ServicesPage() {
  return (
    <div className="bg-white pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Hero éditorial ── */}
      <section className="relative overflow-hidden bg-[#0C0B09] px-4 py-24">
        <TrimMarks inset={20} size={16} color="text-white/20" />

        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[#7B1616]/12 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-3xl text-center">
          <p className="folio mb-6 text-white/35">
            TARIFS 2026 — Atelier Digital Genève
          </p>

          <SectionLabel variant="dark" className="justify-center">
            Services &amp; Forfaits
          </SectionLabel>

          <h1
            className="mt-6 text-[clamp(40px,7vw,72px)] font-bold tracking-[-0.025em] text-white"
            style={{ fontFamily: 'var(--font-serif)', lineHeight: 1.02 }}
          >
            Trois forfaits,{' '}
            <span className="italic text-[#E8B4B4]" style={{ fontWeight: 500 }}>
              zéro surprise
            </span>
            <span className="text-[#7B1616]">.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/60 md:text-xl">
            Des forfaits adaptés à chaque commerce genevois. Tout est inclus,
            tout est dit.
          </p>

          <span
            className="construction-line mx-auto mt-8 block"
            style={{ filter: 'brightness(1.4)' }}
          />
        </div>
      </section>

      {/* ── Grille des 3 fiches ── */}
      <ServicesGrid />

      {/* ── Process — chiffres serif XL en filigrane (cohérence /realisations) ── */}
      <section className="border-t border-slate-100 bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <header className="mb-14 max-w-2xl">
            <SectionLabel number="01">Process</SectionLabel>
            <h2
              className="mt-4 text-3xl tracking-tight text-slate-900 md:text-4xl"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
            >
              Comment ça marche
            </h2>
            <span className="construction-line mt-4 block" />
            <p className="mt-5 text-slate-500">
              Un processus simple et transparent, de la première discussion à
              la mise en ligne<span className="accent-square ml-1" />
            </p>
          </header>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: '01', title: 'Échange gratuit', desc: 'On se parle 20-30 min par téléphone ou en présentiel à Genève pour comprendre votre commerce.' },
              { n: '02', title: 'Devis et maquette', desc: 'Je vous envoie un devis détaillé et une première maquette sous 24h.' },
              { n: '03', title: 'Création du site', desc: 'Je crée votre site avec vos textes, vos photos, votre identité. Vous validez chaque étape.' },
              { n: '04', title: 'Mise en ligne', desc: 'Votre site est mis en ligne, soumis à Google, et votre domaine est configuré.' },
            ].map((step) => (
              <div
                key={step.n}
                className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-[#FAFAF8]/40 p-6 transition-colors duration-300 hover:border-[#7B1616]/15 hover:bg-[#7B1616]/[0.025]"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-2 -top-6 select-none text-[110px] leading-none text-slate-100 transition-colors duration-500 group-hover:text-[#7B1616]/15"
                  style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
                >
                  {step.n}
                </span>

                <div className="relative">
                  <p className="label-serif text-[12px]">Étape {step.n}</p>
                  <h3 className="mt-3 text-[17px] font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ — feuillet annexe Q.01 / Q.02 ── */}
      <section className="grain border-t border-slate-100 bg-[#FAFAF8] py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <header className="mb-12 text-center">
            <SectionLabel className="justify-center">
              Feuillet annexe
            </SectionLabel>
            <h2
              className="mt-4 text-3xl tracking-tight text-slate-900 md:text-4xl"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
            >
              Questions fréquentes
            </h2>
            <span className="construction-line mx-auto mt-4 block" />
          </header>

          {/* Trim line en haut du feuillet */}
          <div className="trim-line mb-2 w-full" />

          <div className="divide-y divide-[#0C0B09]/[0.08]">
            {faqs.map((faq, i) => {
              const num = `Q.${String(i + 1).padStart(2, '0')}`;
              return (
                <details key={faq.question} className="group">
                  <summary className="flex cursor-pointer list-none items-baseline gap-4 py-5 transition-colors hover:bg-white/40">
                    <span
                      className="shrink-0 text-[13px] italic text-[#7B1616]"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {num}
                    </span>
                    <span className="flex-1 text-[16px] font-semibold leading-snug text-slate-900">
                      {faq.question}
                    </span>
                    <svg
                      className="h-4 w-4 shrink-0 text-slate-400 transition-transform duration-300 group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="pb-5 pl-12 pr-8 text-[14.5px] leading-relaxed text-slate-600">
                    {faq.answer}
                  </p>
                </details>
              );
            })}
          </div>

          {/* Trim line en bas */}
          <div className="trim-line mt-2 w-full" />

          <div className="mt-10 text-center">
            <p className="mb-4 text-slate-500">
              Vous avez d&apos;autres questions&nbsp;?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#7B1616] px-6 py-3 font-semibold text-white shadow-lg shadow-[#7B1616]/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#5C1010]"
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
