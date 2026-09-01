import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YagaCalls Signal Studio (Internal Tool)',
  description: 'Internal Quantitative Position Forecast Generator',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'none',
      'max-snippet': -1,
    },
  },
};

export default function SignalStudioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
