import './globals.css';
import type { Metadata } from 'next';

import { footerConfig } from '@/config';

import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Gomides Web',
  description:
    'Construa um legado digital com a nossa ajuda: uma nova dimensão para a presença online da sua empresa. Nós somos especialistas em criar experiências únicas e marcantes que encantam seus clientes, através de serviços de design e desenvolvimento web totalmente personalizados. Deixe-nos trazer à vida a essência da sua marca e elevar sua presença online a um nível superior. Junte-se a nós na jornada para o sucesso digital e alcance novos patamares com um site feito especialmente para você!'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white-300">
        <Container>{children}</Container>
        <Footer items={footerConfig} />
      </body>
    </html>
  );
}
