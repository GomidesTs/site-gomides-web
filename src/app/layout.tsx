import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// import { footerConfig } from '@/config';

import { Container } from '@/components/Container';
// import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title:
    'GomidesWeb | Moldando experiências digitais por meio de design excepcional.',
  metadataBase: new URL('https://www.gomidesweb.com.br/'),
  alternates: {
    canonical: '/',
    languages: {
      'pt-br': '/pt-br'
    }
  },
  openGraph: {
    images: './favicon.ico'
  },
  keywords: [
    'Sucesso digital',
    'Design e desenvolvimento web',
    'Presença online',
    'Fortalecer presença online',
    'Site em Ponte Nova'
  ],
  authors: [
    { name: 'Tulio Gomides' },
    { name: 'Tiago Gomides', url: 'https://tiagogomides.com.br/' }
  ],
  description:
    'Crie um legado digital com nosso design web personalizado e SEO avançado. Destaque-se e alcance o sucesso online!',
  publisher: 'https://vercel.com/',
  robots: 'index, follow'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={inter.className}>
      <body className="bg-white-300">
        <Container>{children}</Container>
        {/* <Footer items={footerConfig} /> */}
      </body>
    </html>
  );
}
