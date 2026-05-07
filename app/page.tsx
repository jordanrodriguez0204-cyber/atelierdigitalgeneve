import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import ProblemSolution from '@/components/ProblemSolution';
import ServicesGrid from '@/components/ServicesGrid';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Atelier Digital Genève — Sites web pour commerces locaux',
  description:
    'Je crée des sites web modernes pour les commerces de Genève. Rapide, professionnel, et fait pour attirer de nouveaux clients. Devis gratuit.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSolution />
      <ServicesGrid />
      <Testimonials />
      <CTASection />
    </>
  );
}
