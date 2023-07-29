import Image from 'next/image';

import { servicesConfig } from '@/config';

import { Services } from '@/components/Services';

export default function Home() {
  return (
    <main>
      <div className="flex h-screen flex-col items-center justify-center">
        <h1 className="text-center text-3xl font-bold text-blue-500">
          Uma nova dimensão para a presença online da sua empresa
        </h1>

        <p className="text-x mt-6">
          Crie uma experiência única e marcante para seus clientes com nossos
          serviços de design e desenvolvimento web totalmente personalizados.
        </p>

        <Image
          className="pt-8"
          src="/dimensions.svg"
          width={500}
          height={500}
          alt="Várias perspectivas"
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-6">
          <h2 className=" text-2xl font-bold text-blue-500">
            Código sob medida
          </h2>

          <p className="text-x">
            Com a nossa expertise em desenvolvimento tecnológico, criamos
            soluções exclusivas que se adaptam perfeitamente às suas
            necessidades, garantindo uma presença online única e de alto
            desempenho. Desde o design até a codificação do seu produto,
            personalizamos cada etapa para atender às suas necessidades
            específicas, transformando a sua realidade digital e alcançando um
            maior número de clientes satisfeitos.
          </p>
        </div>

        <Image
          className="mt-12"
          src="/code.svg"
          width={400}
          height={400}
          alt="Várias perspectivas"
        />
      </div>

      <div className="mt-64  flex flex-col items-center justify-center">
        <h2 className=" text-2xl font-bold text-blue-500">Serviços</h2>
        <div className="mt-8 flex flex-col gap-6">
          <Services items={servicesConfig} />
        </div>
      </div>

      <div className="flex flex-col-reverse items-center justify-center pt-64">
        <Image
          className="mt-12"
          src="/iPhone.svg"
          width={200}
          height={200}
          alt="Várias perspectivas"
        />

        <div>
          <h2 className="text-2xl font-bold text-blue-500">
            Entre em contato de forma rápida e direta
          </h2>
          <p className="text-x mt-6">
            Estamos prontos para atender suas dúvidas e oferecer soluções
            personalizadas. Converse com nossa equipe via WhatsApp e comece a
            transformar sua presença online hoje mesmo.
          </p>
        </div>
      </div>

      {/* <div className="flex  flex-col items-center justify-center">
        <h2>Trabalhos excepcionais e feedbacks positivos</h2>

        <p className="text-x">
          Confira alguns dos nossos projetos de sucesso e descubra como ajudamos
          empresas a alcançar seus objetivos online. Nossa paixão é criar
          resultados extraordinários para nossos clientes.
        </p>

        <div>depots</div>
      </div> */}

      <div className="flex flex-col items-center justify-center pt-64">
        <div>
          <h2 className=" text-2xl font-bold text-blue-500">
            Potencialize sua Presença Online
          </h2>

          <p className="text-x mt-6">
            Se você busca alcançar resultados extraordinários na era digital,
            nós podemos ajudar. Com nossa expertise em design e desenvolvimento
            web, oferecemos soluções sob medida para impulsionar sua presença
            online e atrair mais clientes.
          </p>
        </div>
        <Image
          className="mt-12"
          src="/grafo.svg"
          width={400}
          height={400}
          alt="Várias perspectivas"
        />
      </div>

      <div className="bg-cyan-300/50 mt-64 flex flex-col items-center justify-center rounded bg-white-100 px-4 py-8">
        <h2 className=" text-2xl font-bold text-blue-500">
          Faça parte da nossa galeria de sucessos
        </h2>

        <p className="mt-6">
          Queremos destacar o seu projeto e compartilhar o seu sucesso com o
          mundo! Ao escolher nossos serviços de design e desenvolvimento web,
          você terá a oportunidade de ter o seu projeto em nossa galeria de
          sucessos, mostrando como sua empresa alcançou resultados
          extraordinários
        </p>

        <button className="mt-8 w-2/4 rounded bg-blue-500 p-4 text-white-100">
          Fortaleca sua marca
        </button>
      </div>
    </main>
  );
}
