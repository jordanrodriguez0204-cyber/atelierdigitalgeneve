import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import CalendlyEmbed from '@/components/CalendlyEmbed';
import FadeIn from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'Contact — Devis gratuit',
  description:
    'Demandez votre devis gratuit pour la création de votre site web à Genève. Réponse sous 24h. Premier échange gratuit et sans engagement.',
};

const contactInfo = [
  {
    title: 'Email',
    value: 'contact@atelierdigitalgeneve.ch',
    href: 'mailto:contact@atelierdigitalgeneve.ch',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Téléphone',
    value: '+41 76 331 61 83',
    href: 'tel:+41763316183',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.95V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: 'Localisation',
    value: 'Genève, Suisse',
    href: null,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Délai de réponse',
    value: 'Sous 24 heures',
    href: null,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <div className="pt-16 bg-white">

      {/* ── Hero ── */}
      <section className="bg-slate-900 py-20 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-slate-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            Gratuit &amp; Sans engagement
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 tracking-tight leading-[1.05]">
            Parlons de{' '}
            <span className="text-red-500">votre projet</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
            Premier échange gratuit. Devis envoyé sous 24h. Aucune obligation.
          </p>
        </div>
      </section>

      {/* ── Calendly ── */}
      <section className="py-20 bg-[#f8f8f8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-10">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Réservation directe</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-3">
              Choisissez un créneau
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Appel téléphonique de 20 min ou rencontre à Genève — choisissez ce qui vous convient.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <CalendlyEmbed />
          </FadeIn>
        </div>
      </section>

      {/* ── Contact section ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left: Info */}
            <FadeIn from="left" className="lg:col-span-2 space-y-8">
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Déroulement</p>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">
                  Comment ça se passe ?
                </h2>
                <div className="space-y-4">
                  {[
                    { step: '1', text: "Vous m'envoyez ce formulaire (ou m'appelez directement)" },
                    { step: '2', text: 'Je vous rappelle dans les 24h pour un échange de 20-30 min' },
                    { step: '3', text: 'Je vous envoie un devis détaillé et une maquette' },
                    { step: '4', text: 'Si ça vous convient, on démarre — votre site en ligne en 7 jours' },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-3">
                      <div className="w-7 h-7 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                        {item.step}
                      </div>
                      <p className="text-slate-600 leading-relaxed text-sm">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact info */}
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-slate-100 text-red-600 rounded-xl flex items-center justify-center shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                        {info.title}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-slate-900 font-medium hover:text-red-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-slate-900 font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust indicators */}
              <div className="bg-[#f8f8f8] rounded-2xl p-5 border border-slate-100 space-y-3">
                {[
                  { bg: 'bg-green-100', color: 'text-green-600', text: 'Réponse garantie sous 24h' },
                  { bg: 'bg-red-100', color: 'text-red-600', text: 'Devis gratuit & sans engagement' },
                  { bg: 'bg-slate-200', color: 'text-slate-600', text: 'Interlocuteur unique, basé à Genève' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className={`w-8 h-8 ${item.bg} rounded-lg flex items-center justify-center shrink-0`}>
                      <svg className={`w-4 h-4 ${item.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-slate-700 text-sm font-medium">{item.text}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Right: Form */}
            <FadeIn from="right" delay={0.1} className="lg:col-span-3">
              <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-[0_4px_32px_rgba(0,0,0,0.07)]">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">Formulaire de contact</p>
                <h2 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">
                  Demander un devis gratuit
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Remplissez ce formulaire et je vous réponds sous 24h.
                </p>
                <ContactForm />
              </div>
            </FadeIn>

          </div>
        </div>
      </section>
    </div>
  );
}
