import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const GA_ID = 'G-MEN6CDFHQ4';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Neue Montreal n'est pas sur Google Fonts (police payante).
// Plus Jakarta Sans est la meilleure alternative libre — même géométrie, même caractère éditorial.
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Atelier Digital Genève · Sites web pour commerces locaux',
    template: '%s | Atelier Digital Genève',
  },
  description:
    'Je crée des sites web modernes pour les commerces de Genève. Rapide, professionnel, et fait pour attirer de nouveaux clients. Devis gratuit.',
  keywords: [
    'site web Genève',
    'création site web Genève',
    'agence web Genève',
    'site internet commerce Genève',
    'web designer Genève',
  ],
  authors: [{ name: 'Atelier Digital Genève' }],
  openGraph: {
    type: 'website',
    locale: 'fr_CH',
    siteName: 'Atelier Digital Genève',
    title: 'Atelier Digital Genève · Sites web pour commerces locaux',
    description:
      'Je crée des sites web modernes pour les commerces de Genève. Rapide, professionnel, et fait pour attirer de nouveaux clients.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atelier Digital Genève',
    description: 'Sites web modernes pour les commerces de Genève.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Atelier Digital Genève',
  description:
    'Création de sites web modernes pour les commerces de Genève. Rapide, professionnel, fait pour attirer de nouveaux clients.',
  url: 'https://atelierdigitalgeneve.ch',
  telephone: '+41763316183',
  email: 'contact@atelierdigitalgeneve.ch',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Genève',
    addressRegion: 'GE',
    postalCode: '1200',
    addressCountry: 'CH',
  },
  areaServed: {
    '@type': 'City',
    name: 'Genève',
  },
  priceRange: 'CHF 299 – CHF 990',
  currenciesAccepted: 'CHF',
  paymentAccepted: 'Virement bancaire',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Forfaits création de sites web',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Forfait Starter',
        description: 'Site web une page, mobile responsive, formulaire de contact, livré en 5 jours.',
        price: '299',
        priceCurrency: 'CHF',
      },
      {
        '@type': 'Offer',
        name: 'Forfait Standard',
        description: "Site web jusqu'à 5 pages, SEO local Genève, galerie photos, livré en 7 jours.",
        price: '599',
        priceCurrency: 'CHF',
      },
      {
        '@type': 'Offer',
        name: 'Forfait Pro',
        description: 'Site web pages illimitées, réservation en ligne, blog, livré en 14 jours.',
        price: '990',
        priceCurrency: 'CHF',
      },
    ],
  },
};

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Atelier Digital Genève',
  url: 'https://atelierdigitalgeneve.ch',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${plusJakarta.variable} h-full antialiased`}>
      <head>
        {/* Schema.org — LocalBusiness + WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        {/* Google Analytics — chargé après l'interactivité pour ne pas ralentir la page */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
