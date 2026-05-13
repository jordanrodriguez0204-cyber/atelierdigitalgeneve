import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import MethodSection from '@/components/MethodSection';
import ProblemSolution from '@/components/ProblemSolution';
import ServicesGrid from '@/components/ServicesGrid';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Atelier Digital Genève · Sites web pour commerces locaux',
  description:
    'Je crée des sites web modernes pour les commerces de Genève. Rapide, professionnel, et fait pour attirer de nouveaux clients. Devis gratuit.',
};

/**
 * Home — séquence de sections.
 *
 *   Hero           → la promesse (H1 Fraunces + watermark A + CTAs)
 *   MethodSection  → Sect. 01 — La méthode (blueprint d'architecte)
 *   ProblemSolution→ Sect. 02 — Pourquoi agir maintenant
 *   ServicesGrid   → 3 fiches Starter / Standard / Pro (sans numéro)
 *   Testimonials   → Sect. 03 (Engagements) + Sect. 04 (Sites en ligne)
 *   CTASection     → CTA finale (sans numéro)
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MethodSection />
      <ProblemSolution />
      <ServicesGrid />
      <Testimonials />
      <CTASection />
    </>
  );
}
