'use client';

import { useState } from 'react';
import type { ContactFormData } from '@/lib/types';

/**
 * Formulaire de contact · refonte phase 4 DA "fiche de prise de RDV".
 *
 * - Inputs avec underline-only (pas de borders complètes, pas de coins
 *   arrondis) · donne le sentiment d'une fiche papier qu'on remplit au stylo.
 * - Labels en small caps tracés (.label utility).
 * - Focus en bourgogne (cohérence brand).
 * - Bouton submit traité comme un tampon : encadré bourgogne, légère rotation
 *   au hover comme si on appuyait.
 * - Logique React intacte (state, fetch /api/contact, success/error states).
 */

const commerceTypes = [
  'Restaurant / Café',
  'Coiffure / Beauté',
  'Boutique / Mode',
  'Épicerie / Alimentation',
  'Artisan / Métier',
  'Services professionnels',
  'Santé / Bien-être',
  'Autre',
];

const initialFormData: ContactFormData = {
  nom: '',
  email: '',
  telephone: '',
  nom_commerce: '',
  commerce_type: '',
  message: '',
};

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const fieldClass =
  'w-full bg-transparent border-0 border-b border-[#0C0B09]/15 rounded-none px-0 py-3 text-[15px] text-[#0C0B09] placeholder-slate-400 transition-colors focus:outline-none focus:border-[#7B1616]';

const labelClass =
  'block text-[10.5px] font-semibold uppercase tracking-[0.16em] text-slate-500 mb-1.5';

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Une erreur est survenue.');
      }

      setStatus('success');
      setFormData(initialFormData);
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error ? err.message : 'Une erreur est survenue. Veuillez réessayer.'
      );
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-emerald-200/60 bg-emerald-50/40 p-10 text-center">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
          <svg
            className="h-7 w-7 text-emerald-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3
          className="text-2xl text-slate-900"
          style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
        >
          Demande reçue
          <span className="text-[#7B1616]">.</span>
        </h3>
        <p className="mx-auto mt-3 max-w-sm text-slate-600">
          Votre demande a bien été reçue. Jordan vous contactera dans les 24h.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-[13px] font-medium italic text-[#7B1616] underline-offset-4 hover:underline"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Envoyer un autre message →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7" noValidate>
      {/* Erreur */}
      {status === 'error' && (
        <div className="rounded-xl border border-rose-200/70 bg-rose-50/40 px-4 py-3 text-sm text-rose-800">
          {errorMessage}
        </div>
      )}

      {/* Nom */}
      <div>
        <label htmlFor="nom" className={labelClass}>
          Nom complet <span className="text-[#7B1616]">*</span>
        </label>
        <input
          type="text"
          id="nom"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          required
          placeholder="Jean Dupont"
          className={fieldClass}
        />
      </div>

      {/* Nom du commerce */}
      <div>
        <label htmlFor="nom_commerce" className={labelClass}>
          Nom du commerce
        </label>
        <input
          type="text"
          id="nom_commerce"
          name="nom_commerce"
          value={formData.nom_commerce}
          onChange={handleChange}
          placeholder="Le Bistrot du Parc"
          className={fieldClass}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClass}>
          Email <span className="text-[#7B1616]">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="jean@moncommerce.ch"
          className={fieldClass}
        />
      </div>

      {/* Téléphone */}
      <div>
        <label htmlFor="telephone" className={labelClass}>
          Téléphone
        </label>
        <input
          type="tel"
          id="telephone"
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
          placeholder="+41 79 123 45 67"
          className={fieldClass}
        />
      </div>

      {/* Type de commerce */}
      <div>
        <label htmlFor="commerce_type" className={labelClass}>
          Type de commerce
        </label>
        <select
          id="commerce_type"
          name="commerce_type"
          value={formData.commerce_type}
          onChange={handleChange}
          className={`${fieldClass} appearance-none bg-[length:14px_14px] bg-[right_0_center] bg-no-repeat pr-8`}
          style={{
            backgroundImage:
              'url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%237B1616%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27><polyline points=%276 9 12 15 18 9%27/></svg>")',
          }}
        >
          <option value="">Sélectionnez votre activité</option>
          {commerceTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="Décrivez votre projet, vos besoins, vos questions…"
          className={`${fieldClass} resize-none`}
        />
      </div>

      {/* Bouton submit · traité comme un tampon */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="group/stamp relative inline-flex w-full items-center justify-center gap-3 rounded-xl border-2 border-[#7B1616] bg-[#7B1616] px-6 py-4 text-[14px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_4px_18px_rgba(123,22,22,0.22)] transition-all duration-200 hover:rotate-[-0.6deg] hover:bg-[#5C1010] disabled:cursor-not-allowed disabled:bg-[#7B1616]/60"
        >
          {status === 'loading' ? (
            <>
              <svg
                className="h-5 w-5 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Envoi en cours…
            </>
          ) : (
            <>
              Envoyer ma demande
              <span className="accent-square" style={{ background: 'white' }} />
            </>
          )}
        </button>

        <p className="folio mt-3 text-center text-[10px]">
          Gratuit · Sans engagement · Réponse sous 24h
        </p>
      </div>
    </form>
  );
}
