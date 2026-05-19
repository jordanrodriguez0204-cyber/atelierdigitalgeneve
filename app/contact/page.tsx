import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import CalendlyEmbed from '@/components/CalendlyEmbed';
import SectionLabel from '@/components/visual/SectionLabel';
import TrimMarks from '@/components/visual/TrimMarks';

export const metadata: Metadata = {
  title: 'Contact · Devis gratuit',
  description:
    'Demandez votre devis gratuit pour la création de votre site web à Genève. Réponse sous 24h. Premier échange gratuit et sans engagement.',
};

const contactBlocks = [
  {
    label: 'Email',
    value: 'contact@atelierdigitalgeneve.ch',
    href: 'mailto:contact@atelierdigitalgeneve.ch',
  },
  {
    label: 'Téléphone',
    value: '+41 76 331 61 83',
    href: 'tel:+41763316183',
  },
  {
    label: 'Localisation',
    value: 'Genève, Suisse',
    href: null,
  },
  {
    label: 'Délai de réponse',
    value: 'Sous 24 heures',
    href: null,
  },
];

export default function ContactPage() {
  // Date du jour formatée "JJ.MM.AAAA" pour le tampon "REÇU"
  const today = new Date();
  const dateStamp = `${String(today.getDate()).padStart(2, '0')}.${String(today.getMonth() + 1).padStart(2, '0')}.${today.getFullYear()}`;

  return (
    <div className="bg-white pt-16">
      {/* ── Hero éditorial ── */}
      <section className="relative overflow-hidden bg-[#0C0B09] px-4 py-24">
        <TrimMarks inset={20} size={16} color="text-white/20" />

        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[#7B1616]/12 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-3xl text-center">
          <p className="folio mb-6 text-white/35">
            FORMULAIRE · REÇU {dateStamp}
          </p>

          <SectionLabel variant="dark" className="justify-center">
            Gratuit &amp; sans engagement
          </SectionLabel>

          <h1
            className="mt-6 text-[clamp(40px,7vw,72px)] font-bold tracking-[-0.025em] text-white"
            style={{ fontFamily: 'var(--font-serif)', lineHeight: 1.02 }}
          >
            Parlons de{' '}
            <span className="italic text-[#E8B4B4]" style={{ fontWeight: 500 }}>
              votre projet
            </span>
            <span className="text-[#7B1616]">.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/60 md:text-xl">
            Premier échange gratuit. Devis envoyé sous 24h. Aucune obligation.
          </p>

          <span
            className="construction-line mx-auto mt-8 block"
            style={{ filter: 'brightness(1.4)' }}
          />
        </div>
      </section>

      {/* ── Calendly ── */}
      <section className="border-t border-slate-100 bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <header className="mb-10 text-center">
            <SectionLabel number="01" className="justify-center">
              Réservation directe
            </SectionLabel>
            <h2
              className="mt-4 text-3xl tracking-tight text-slate-900 md:text-4xl"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
            >
              Choisissez un créneau
            </h2>
            <span className="construction-line mx-auto mt-4 block" />
            <p className="mt-5 text-slate-500">
              Appel téléphonique de 20 min ou rencontre à Genève. Choisissez ce
              qui vous convient<span className="accent-square ml-1" />
            </p>
          </header>
          <CalendlyEmbed />
        </div>
      </section>

      {/* ── Form + adresse expéditeur ── */}
      <section className="grain border-t border-slate-100 bg-[#FAFAF8] py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            {/* ── Adresse expéditeur (gauche) ── */}
            <aside className="lg:col-span-2">
              <SectionLabel number="02">Coordonnées</SectionLabel>
              <h2
                className="mt-4 text-2xl tracking-tight text-slate-900 md:text-3xl"
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
              >
                À l&apos;attention de
              </h2>
              <span className="construction-line mt-3 block" />

              {/* Bloc adresse style "expéditeur enveloppe" */}
              <div className="mt-8 space-y-1 text-slate-700">
                <p
                  className="text-[15px] font-semibold tracking-tight text-[#0C0B09]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Jordan Rodriguez
                </p>
                <p className="text-[14px]">Atelier Digital Genève</p>
                <p className="text-[14px] text-slate-500">Genève · Suisse</p>
              </div>

              {/* Bloc moyens de contact */}
              <div className="mt-10 space-y-5">
                {contactBlocks.map((info) => (
                  <div key={info.label}>
                    <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="mt-1 inline-block text-[15px] font-medium text-slate-900 transition-colors hover:text-[#7B1616]"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-[15px] font-medium text-slate-900">
                        {info.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Déroulement · 4 étapes */}
              <div className="mt-12">
                <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Comment ça se passe
                </p>
                <ol className="mt-4 space-y-3">
                  {[
                    "Vous remplissez ce formulaire (ou m'appelez directement)",
                    'Je vous rappelle dans les 24h pour un échange de 20-30 min',
                    'Je vous envoie un devis détaillé et une maquette',
                    'Si ça vous convient, on démarre. Site en ligne en 7 jours',
                  ].map((step, i) => (
                    <li
                      key={step}
                      className="flex items-baseline gap-3 text-[14px] text-slate-700"
                    >
                      <span
                        className="shrink-0 text-[12px] italic text-[#7B1616]"
                        style={{ fontFamily: 'var(--font-serif)' }}
                      >
                        0{i + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>

            {/* ── Formulaire (droite) ── */}
            <div className="lg:col-span-3">
              <div className="relative rounded-2xl bg-white p-8 ring-1 ring-black/[0.06] shadow-[0_4px_32px_rgba(0,0,0,0.06)] md:p-10">
                {/* Trim marks dans les coins de la fiche */}
                <span className="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l border-t border-[#0C0B09]/15" />
                <span className="pointer-events-none absolute right-3 top-3 h-3 w-3 border-r border-t border-[#0C0B09]/15" />
                <span className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b border-l border-[#0C0B09]/15" />
                <span className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b border-r border-[#0C0B09]/15" />

                {/* Tampon date en haut à droite */}
                <p
                  className="folio absolute right-6 top-5 text-right text-[10px]"
                  aria-hidden="true"
                >
                  REÇU · {dateStamp}
                </p>

                <SectionLabel number="03">Formulaire</SectionLabel>
                <h2
                  className="mt-3 text-2xl tracking-tight text-slate-900 md:text-3xl"
                  style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
                >
                  Demander un devis gratuit
                </h2>
                <p className="mb-8 mt-3 text-[14px] text-slate-500">
                  Remplissez ce formulaire et je vous réponds sous 24h.
                </p>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
