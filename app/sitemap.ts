import { MetadataRoute } from 'next';
import { getCaseStudySlugs } from '@/lib/realisations';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://atelierdigitalgeneve.ch';
  const now = new Date();

  const caseStudyEntries: MetadataRoute.Sitemap = getCaseStudySlugs().map(
    (slug) => ({
      url: `${baseUrl}/realisations/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    }),
  );

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/realisations`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...caseStudyEntries,
  ];
}
