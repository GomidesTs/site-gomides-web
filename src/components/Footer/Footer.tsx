import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/components/Container';

import { FooterItems } from '@/models';

type FooterProps = {
  items: FooterItems;
};

export const Footer = ({ items }: FooterProps) => {
  return (
    <footer className="mt-64 flex flex-col items-center justify-center bg-white-100 py-6">
      <Image
        src="/logo.svg"
        width={50}
        height={50}
        alt="Picture of the author"
      />
      <p className="mt-2 text-center text-sm">
        Todos os Direitos Reservados CNPJ
        <br />
        48.4444.561/0001-06
      </p>

      <Container>
        <div className="mb-3 w-full border-b-2 border-blue-500 p-2">
          <p className="mt-4 text-center text-sm">
            Transformamos ideias em realidade digital.
            <br />
            Seu sucesso é nossa paixão.
          </p>
        </div>
        <div className="flex w-full list-none items-center justify-between text-sm">
          {items.mainFooter.map((item) => (
            <li key={item.text}>
              <Link href={item.url} target="_blank">
                {item.text}
              </Link>
            </li>
          ))}
        </div>
      </Container>
    </footer>
  );
};
