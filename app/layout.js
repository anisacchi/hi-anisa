import { Nunito } from 'next/font/google';
import './globals.css';
import { ThemeContextProvider } from '@/context/ThemeContext';

const nunito = Nunito({
  subsets: ['latin'],
  display: 'fallback',
	weight: ['300', '400', '500', '600', '700'],
  variable: '--font-nunito',
});

export const metadata = {
  title: 'Anisa | Portfolio',
  description:
    'My name is Anisa Permatasari, a passionate web developer who also enjoy designing.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
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
