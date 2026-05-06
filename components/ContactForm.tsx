'use client';

import { useState } from 'react';
import type { ContactFormData } from '@/lib/types';
import { isSupabaseConfigured } from '@/lib/supabase/client';

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
  commerce_type: '',
  message: '',
};

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

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
      if (isSupabaseConfigured()) {
        // Real Supabase submission
        const { createClient } = await import('@/lib/supabase/client');
        const supabase = createClient();
        const { error } = await supabase.from('leads').insert([
          {
            nom: formData.nom,
            email: formData.email,
            telephone: formData.telephone || null,
            commerce_type: formData.commerce_type || null,
            message: formData.message || null,
          },
        ]);
        if (error) throw error;
      } else {
        // Simulate success when Supabase not configured
        await new Promise((resolve) => setTimeout(resolve, 800));
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
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Message envoyé !</h3>
        <p className="text-slate-600 mb-6">
          Merci pour votre message. Je vous réponds dans les 24 heures.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-red-600 hover:underline text-sm font-medium"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Error message */}
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
          {errorMessage}
        </div>
      )}

      {/* Nom */}
      <div>
        <label htmlFor="nom" className="block text-sm font-medium text-slate-700 mb-1.5">
          Nom complet <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="nom"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          required
          placeholder="Jean Dupont"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-slate-900 placeholder-slate-400 transition"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="jean@moncommerce.ch"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-slate-900 placeholder-slate-400 transition"
        />
      </div>

      {/* Telephone */}
      <div>
        <label htmlFor="telephone" className="block text-sm font-medium text-slate-700 mb-1.5">
          Téléphone
        </label>
        <input
          type="tel"
          id="telephone"
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
          placeholder="+41 79 123 45 67"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-slate-900 placeholder-slate-400 transition"
        />
      </div>

      {/* Type de commerce */}
      <div>
        <label htmlFor="commerce_type" className="block text-sm font-medium text-slate-700 mb-1.5">
          Type de commerce
        </label>
        <select
          id="commerce_type"
          name="commerce_type"
          value={formData.commerce_type}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-slate-900 transition bg-white"
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
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="Décrivez votre projet, vos besoins, vos questions..."
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-slate-900 placeholder-slate-400 transition resize-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-xl transition-all duration-150 flex items-center justify-center gap-2 shadow-md hover:shadow-lg shadow-red-600/20"
      >
        {status === 'loading' ? (
          <>
            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
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
            Envoi en cours...
          </>
        ) : (
          <>
            Envoyer ma demande
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </>
        )}
      </button>

      <p className="text-slate-400 text-xs text-center">
        Gratuit, sans engagement. Je vous réponds sous 24h.
      </p>
    </form>
  );
}
