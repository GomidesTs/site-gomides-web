import Image from 'next/image';

import { socialConfig } from '@/config';

import { Social } from '@/components/Social';

import Iam from '@/image/iam.png';

export default function Redirect() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4">
      <div className="relative -z-10 overflow-hidden rounded-full bg-blue-300 p-2 transition duration-700 after:absolute after:-left-16 after:top-20 after:-z-10 after:block after:h-3 after:w-[400px] after:animate-spin after:bg-white-300 after:ease-in-out after:content-['']">
        <Image src={Iam} width={200} height={200} alt="Várias perspectivas" />
      </div>

      <h1 className="text-center text-2xl font-bold text-blue-500">
        Descubra a transformação do seu universo digital
      </h1>

      <div className="mt-12 w-full rounded bg-blue-100/20 px-4 pb-5 xl:w-1/2">
        <Social items={socialConfig} />
      </div>
    </main>
  );
}
