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
            TARIFS 2026 · Atelier Digital Genève
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

      {/* ── Refonte de site existant ── */}
      <section className="border-t border-slate-100 bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <header className="mb-12 max-w-2xl">
            <SectionLabel number="01">Vous avez déjà un site&nbsp;?</SectionLabel>
            <h2
              className="mt-4 text-3xl tracking-tight text-slate-900 md:text-4xl"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
            >
              La refonte
            </h2>
            <span className="construction-line mt-4 block" />
            <p className="mt-5 text-slate-500">
              Quand votre site date manifestement, qu&apos;il ne s&apos;ouvre plus
              correctement sur mobile ou que votre formulaire de contact ne
              reçoit plus rien. Je le refais sans toucher à ce qui marche
              déjà côté contenu<span className="accent-square ml-1" />
            </p>
          </header>

          {/* Fiche Refonte */}
          <article className="relative rounded-2xl bg-[#FAFAF8] p-8 ring-1 ring-black/[0.07] shadow-[0_4px_24px_rgba(0,0,0,0.05)] md:p-10">
            {/* Trim marks aux 4 coins */}
            <span className="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l border-t border-[#0C0B09]/15" />
            <span className="pointer-events-none absolute right-3 top-3 h-3 w-3 border-r border-t border-[#0C0B09]/15" />
            <span className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b border-l border-[#0C0B09]/15" />
            <span className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b border-r border-[#0C0B09]/15" />

            <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_320px]">
              {/* Description à gauche */}
              <div>
                <p className="label-serif text-[12px]">Sect. 01 / B</p>
                <h3
                  className="mt-2 text-2xl tracking-tight text-slate-900 md:text-3xl"
                  style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
                >
                  Design neuf, contenus préservés
                </h3>
                <span className="construction-line mt-3 block" />

                <p className="mt-5 text-[15px] leading-relaxed text-slate-600">
                  Vous avez déjà des textes, des photos, peut-être une fiche
                  Google plus ou moins maintenue. On garde tout ça&nbsp;:{' '}
                  <span className="font-medium text-slate-900">
                    le travail de l&apos;écriture et de la prise de photos a déjà
                    été fait
                  </span>
                  . Ce qu&apos;on refait, c&apos;est l&apos;écrin&nbsp;: design contemporain,
                  performance mobile, référencement Genève propre, et la
                  bascule technique de votre ancien hébergeur vers le mien.
                </p>

                <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                  Le résultat est strictement identique à un site neuf&nbsp;:
                  même qualité, même forfait mensuel, même fonctionnalités. Seule la
                  facture initiale est réduite parce que vous me fournissez la
                  matière première.
                </p>

                {/* Petit bloc "ce qui est inclus" */}
                <div className="mt-7">
                  <p className="label-serif text-[12px]">Inclus en plus</p>
                  <ul className="mt-3 space-y-2 text-[14px] text-slate-700">
                    <li className="flex items-baseline gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-1 h-[5px] w-[5px] shrink-0 bg-[#7B1616]"
                      />
                      Audit SEO de l&apos;existant et plan de mapping des URLs
                    </li>
                    <li className="flex items-baseline gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-1 h-[5px] w-[5px] shrink-0 bg-[#7B1616]"
                      />
                      Redirections 301 pour préserver votre référencement
                    </li>
                    <li className="flex items-baseline gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-1 h-[5px] w-[5px] shrink-0 bg-[#7B1616]"
                      />
                      Migration des contenus (textes, photos optimisées)
                    </li>
                    <li className="flex items-baseline gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-1 h-[5px] w-[5px] shrink-0 bg-[#7B1616]"
                      />
                      Bascule DNS coordonnée &amp; monitoring 7 jours
                    </li>
                  </ul>
                </div>
              </div>

              {/* Tarifs à droite */}
              <div className="relative rounded-xl bg-white p-6 ring-1 ring-black/[0.06]">
                <p className="label-serif text-[12px]">Tarifs Refonte</p>
                <h4
                  className="mt-1 text-[17px] tracking-tight text-slate-900"
                  style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
                >
                  Selon le forfait visé
                </h4>

                <div className="mt-5 space-y-4 text-[14px]">
                  <div className="space-y-3 text-slate-700">
                    <div>
                      <div className="flex items-baseline justify-between">
                        <span
                          className="italic"
                          style={{ fontFamily: 'var(--font-serif)' }}
                        >
                          Refonte Starter
                        </span>
                        <span className="tabular-nums font-medium">CHF 199</span>
                      </div>
                      <p className="mt-0.5 text-[11px] text-slate-400 line-through tabular-nums">
                        CHF 299 en création
                      </p>
                    </div>

                    <div>
                      <div className="flex items-baseline justify-between">
                        <span
                          className="italic"
                          style={{ fontFamily: 'var(--font-serif)' }}
                        >
                          Refonte Standard
                        </span>
                        <span className="tabular-nums font-medium">CHF 449</span>
                      </div>
                      <p className="mt-0.5 text-[11px] text-slate-400 line-through tabular-nums">
                        CHF 599 en création
                      </p>
                    </div>

                    <div>
                      <div className="flex items-baseline justify-between">
                        <span
                          className="italic"
                          style={{ fontFamily: 'var(--font-serif)' }}
                        >
                          Refonte Pro
                        </span>
                        <span className="tabular-nums font-medium">CHF 749</span>
                      </div>
                      <p className="mt-0.5 text-[11px] text-slate-400 line-through tabular-nums">
                        CHF 990 en création
                      </p>
                    </div>
                  </div>

                  <div className="trim-line w-full" />

                  <div className="text-[12.5px] leading-relaxed text-slate-500">
                    <p>
                      Le forfait mensuel reste identique (29, 49 ou 79 CHF
                      selon le niveau choisi).
                    </p>
                    <p className="mt-2">
                      L&apos;add-on Google My Business s&apos;applique de la même
                      manière que pour une création.
                    </p>
                  </div>
                </div>

                <p className="folio mt-6 text-center text-[10px]">
                  REFONTE · ADG/GE
                </p>
              </div>
            </div>
          </article>

          <p className="mt-8 text-center text-[13px] italic text-slate-500">
            Réduction d&apos;environ 33 % par rapport à la création, parce que
            les contenus existent déjà.
          </p>
        </div>
      </section>

      {/* ── Options & Add-ons ── */}
      <section className="border-t border-slate-100 bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <header className="mb-12 max-w-2xl">
            <SectionLabel number="02">Options &amp; add-ons</SectionLabel>
            <h2
              className="mt-4 text-3xl tracking-tight text-slate-900 md:text-4xl"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
            >
              Pour aller plus loin
            </h2>
            <span className="construction-line mt-4 block" />
            <p className="mt-5 text-slate-500">
              Des prestations complémentaires pour soigner votre présence en
              ligne au-delà du site<span className="accent-square ml-1" />
            </p>
          </header>

          {/* Fiche Add-on 01 · Google My Business */}
          <article className="relative rounded-2xl bg-[#FAFAF8] p-8 ring-1 ring-black/[0.07] shadow-[0_4px_24px_rgba(0,0,0,0.05)] md:p-10">
            {/* Trim marks aux 4 coins */}
            <span className="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l border-t border-[#0C0B09]/15" />
            <span className="pointer-events-none absolute right-3 top-3 h-3 w-3 border-r border-t border-[#0C0B09]/15" />
            <span className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b border-l border-[#0C0B09]/15" />
            <span className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b border-r border-[#0C0B09]/15" />

            <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_320px]">
              {/* Description à gauche */}
              <div>
                <p className="label-serif text-[12px]">Add-on 01</p>
                <h3
                  className="mt-2 text-2xl tracking-tight text-slate-900 md:text-3xl"
                  style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
                >
                  Google My Business
                </h3>
                <span className="construction-line mt-3 block" />
                <p className="mt-5 text-[15px] leading-relaxed text-slate-600">
                  La fiche officielle de votre commerce sur Google Maps et
                  dans la barre latérale des résultats Google.{' '}
                  <span className="font-medium text-slate-900">
                    75 % des recherches locales
                  </span>{' '}
                  passent par là avant d&apos;arriver sur un site.
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                  Je m&apos;occupe du setup complet (photos, description SEO,
                  horaires, attributs) puis de la maintenance mensuelle (réponses
                  aux avis, posts, mises à jour).
                </p>
                <p className="mt-5 text-[13px] italic text-slate-500">
                  D&apos;autres add-ons à venir (photos pro, rédaction blog,
                  formation CMS).
                </p>
              </div>

              {/* Tarifs à droite · fiche éditoriale */}
              <div className="relative rounded-xl bg-white p-6 ring-1 ring-black/[0.06]">
                <p className="label-serif text-[12px]">Tarifs</p>
                <h4
                  className="mt-1 text-[17px] tracking-tight text-slate-900"
                  style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
                >
                  Selon votre forfait
                </h4>

                <div className="mt-5 space-y-4 text-[14px]">
                  <div>
                    <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Setup initial
                    </p>
                    <div className="mt-2 space-y-1.5 text-slate-700">
                      <div className="flex items-baseline justify-between">
                        <span
                          className="italic"
                          style={{ fontFamily: 'var(--font-serif)' }}
                        >
                          Starter
                        </span>
                        <span className="tabular-nums">CHF 180 <span className="text-[12px] text-slate-400">one-shot</span></span>
                      </div>
                      <div className="flex items-baseline justify-between">
                        <span
                          className="italic"
                          style={{ fontFamily: 'var(--font-serif)' }}
                        >
                          Standard
                        </span>
                        <span className="text-[#7B1616]">inclus</span>
                      </div>
                      <div className="flex items-baseline justify-between">
                        <span
                          className="italic"
                          style={{ fontFamily: 'var(--font-serif)' }}
                        >
                          Pro
                        </span>
                        <span className="text-[#7B1616]">inclus</span>
                      </div>
                    </div>
                  </div>

                  <div className="trim-line w-full" />

                  <div>
                    <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Gestion mensuelle
                    </p>
                    <div className="mt-2 space-y-1.5 text-slate-700">
                      <div className="flex items-baseline justify-between">
                        <span
                          className="italic"
                          style={{ fontFamily: 'var(--font-serif)' }}
                        >
                          Starter
                        </span>
                        <span className="tabular-nums">+ CHF 20 <span className="text-[12px] text-slate-400">/mois</span></span>
                      </div>
                      <div className="flex items-baseline justify-between">
                        <span
                          className="italic"
                          style={{ fontFamily: 'var(--font-serif)' }}
                        >
                          Standard
                        </span>
                        <span className="tabular-nums">+ CHF 15 <span className="text-[12px] text-slate-400">/mois</span></span>
                      </div>
                      <div className="flex items-baseline justify-between">
                        <span
                          className="italic"
                          style={{ fontFamily: 'var(--font-serif)' }}
                        >
                          Pro
                        </span>
                        <span className="text-[#7B1616]">incluse</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Petit folio en pied de la fiche tarifs */}
                <p className="folio mt-6 text-center text-[10px]">
                  ADD-ON 01 · ADG/GE
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ── Process · chiffres serif XL en filigrane (cohérence /realisations) ── */}
      <section className="border-t border-slate-100 bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <header className="mb-14 max-w-2xl">
            <SectionLabel number="03">Process</SectionLabel>
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

      {/* ── FAQ · feuillet annexe Q.01 / Q.02 ── */}
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
