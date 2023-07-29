import Image from 'next/image';

import { servicesConfig } from '@/config';

import { Button } from '@/components/Button';
import { Services } from '@/components/Services';

export default function Home() {
  return (
    <main>
      <div className="flex h-screen flex-col items-center justify-center">
        <h1 className="text-center text-3xl font-bold text-blue-500">
          Uma nova dimensão para a presença online da sua empresa
        </h1>

        <p className="text-x mt-6 text-center">
          Crie uma experiência única e marcante para seus clientes com nossos
          serviços de design e desenvolvimento web totalmente personalizados.
        </p>

        <Button text="Destaque-se" />

        <Image
          className="pt-24"
          src="/dimensions.svg"
          width={500}
          height={500}
          alt="Várias perspectivas"
        />
      </div>

      <div className="flex flex-col items-center justify-center xl:flex-row xl:gap-4">
        <div className="flex flex-col items-center justify-center xl:items-start">
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

          <Button text="Transforme agora" />
        </div>

        <Image
          className="mt-12"
          src="/code.svg"
          width={400}
          height={400}
          alt="Várias perspectivas"
        />
      </div>

      <div className="mt-64 flex flex-col items-center justify-center">
        <h2 className=" text-2xl font-bold text-blue-500">Serviços</h2>
        <div className="mt-8 flex flex-col gap-6 xl:flex-row">
          <Services items={servicesConfig} />
        </div>
      </div>

      <div className="flex flex-col-reverse items-center justify-center gap-6 pt-64 xl:flex-row xl:justify-around">
        <Image
          className="mt-12"
          src="/iPhone.svg"
          width={200}
          height={200}
          alt="Várias perspectivas"
        />

        <div className="xl:w-2/4">
          <h2 className="text-2xl font-bold text-blue-500">
            Entre em contato de forma rápida e direta
          </h2>

          <p className="text-x mt-6">
            Estamos prontos para atender suas dúvidas e oferecer soluções
            personalizadas. Converse com nossa equipe via WhatsApp e comece a
            transformar sua presença online hoje mesmo.
          </p>
          <div className="flex w-full items-end justify-center">
            <Button text="Solicite Ajuda" />
          </div>
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

      <div className="flex flex-col items-center justify-center pt-64 xl:flex-row xl:gap-6">
        <div className="flex flex-col items-center">
          <div>
            <h2 className="text-2xl font-bold text-blue-500">
              Potencialize sua Presença Online
            </h2>

            <p className="text-x mt-6">
              Se você busca alcançar resultados extraordinários na era digital,
              nós podemos ajudar. Com nossa expertise em design e
              desenvolvimento web, oferecemos soluções sob medida para
              impulsionar sua presença online e atrair mais clientes.
            </p>
          </div>
          <Button text="Cresça Online" />
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

        <Button text="Fortaleça sua Marca" />
      </div>
    </main>
  );
}
