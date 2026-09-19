import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ThemeProvider } from '@/components/theme-provider';
import { siteUrl, siteDescription } from '@/lib/site';
import './globals.css';
const geist = localFont({ src: './fonts/geist-latin.woff2', variable: '--font-geist', weight: '100 900', display: 'swap' });
const geistMono = localFont({ src: './fonts/geist-mono-latin.woff2', variable: '--font-geist-mono', weight: '100 900', display: 'swap', preload: false });
export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: 'Bima Adityo Kurniawan | Full-Stack Developer',
  description: siteDescription,
  applicationName: 'Bima Adityo — Developer Portfolio',
  authors: [{ name: 'Bima Adityo Kurniawan', url: siteUrl.href }],
  alternates: { canonical: '/' },
  openGraph: { type: 'website', locale: 'en_US', url: '/', title: 'Bima Adityo Kurniawan | Full-Stack Developer', description: siteDescription, siteName: 'Bima Adityo Kurniawan', images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Bima Adityo Kurniawan — Full-Stack Developer. Web applications, backend systems, and developer tools.' }] },
  twitter: { card: 'summary_large_image', title: 'Bima Adityo Kurniawan | Full-Stack Developer', description: siteDescription, images: ['/og-image.png'] },
  robots: { index: true, follow: true },
  icons: { icon: '/icon.svg' }
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${geist.variable} ${geistMono.variable}`} suppressHydrationWarning><body><ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>{children}</ThemeProvider></body></html>;
}
