import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Redirections permanentes (301).
   * Garde-fou SEO quand on supprime une route — les anciens liens externes,
   * Google Search Console et marque-pages continuent à fonctionner.
   */
  async redirects() {
    return [
      {
        source: '/portfolio',
        destination: '/realisations',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
