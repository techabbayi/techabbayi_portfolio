import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Lokeswara Muthumula | techabbayi',
    short_name: 'techabbayi',
    description: 'Official portfolio of Lokeswara Muthumula — Programmer, Cyber Activist & Founder of AKMULTIVISION Multimedia Services, Creator of Sr Digital Telugu.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#4ade80',
    icons: [
      {
        src: '/profile.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
