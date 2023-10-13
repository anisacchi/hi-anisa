import { Nunito } from 'next/font/google';
import { Footer, Header, Navbar } from '@/components';
import './globals.css';
import { ThemeContextProvider } from '@/context/ThemeContext';

const nunito = Nunito({
  subsets: ['latin'],
  display: 'fallback',
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
          className={`${nunito.variable} font-nunito relative min-h-screen flex flex-col justify-between dark:bg-neutral-800 dark:text-neutral-100`}
        >
					<Header />
          {/* <Navbar /> */}
          {children}
          <Footer />
        </body>
      </ThemeContextProvider>
    </html>
  );
}
