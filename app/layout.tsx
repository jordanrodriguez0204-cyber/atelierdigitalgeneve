import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
    default: 'Atelier Digital Genève — Sites web pour commerces locaux',
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
    title: 'Atelier Digital Genève — Sites web pour commerces locaux',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
