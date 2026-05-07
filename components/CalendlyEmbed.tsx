'use client';

import { useEffect } from 'react';

export default function CalendlyEmbed() {
  useEffect(() => {
    // Charge le script Calendly une seule fois
    const existing = document.getElementById('calendly-script');
    if (existing) return;

    const script = document.createElement('script');
    script.id = 'calendly-script';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // CSS Calendly
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    document.head.appendChild(link);
  }, []);

  return (
    <div
      className="calendly-inline-widget w-full rounded-2xl overflow-hidden border border-slate-200"
      data-url="https://calendly.com/jordan-rodriguez0204?hide_gdpr_banner=1&primary_color=dc2626"
      style={{ minWidth: '320px', height: '700px' }}
    />
  );
}
