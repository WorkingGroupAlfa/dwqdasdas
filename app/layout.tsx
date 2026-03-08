import './globals.css';
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/config';
import { BackgroundParallax } from '@/components/background-parallax';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.companyName,
    template: `%s | ${siteConfig.companyName}`
  },
  description: 'Premium climate service website for installation, cleaning, HVAC and heat pump solutions.',
  applicationName: siteConfig.companyName
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sl">
      <body className="site-shell">
        <BackgroundParallax />
        {children}
      </body>
    </html>
  );
}
