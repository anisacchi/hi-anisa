import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Nunito } from 'next/font/google';
import { ThemeContextProvider } from '@/context/ThemeContext';
import { locales } from '@/constants/locales';

import './globals.css';

const nunito = Nunito({
  subsets: ['latin'],
  display: 'fallback',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-nunito',
});

export const metadata: Metadata = {
  title: 'Anisa | Portfolio',
  description:
    'My name is Anisa Permatasari, a passionate web developer who also enjoy designing.',
  icons: [{ rel: 'icon', url: '/assets/favicon.ico' }],
};

type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  if (!locales.some((loc) => loc.id === locale)) notFound();

  return (
    <html lang={locale}>
      <ThemeContextProvider>
        <body
          className={`${nunito.className} relative h-screen min-h-screen flex flex-col bg-neutral-100 dark:bg-neutral-500 text-neutral-500 dark:text-neutral-100`}
        >
          {children}
        </body>
      </ThemeContextProvider>
    </html>
  );
}
