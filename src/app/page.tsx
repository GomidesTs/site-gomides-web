export default function Home() {
  return (
    <main className="mt-60">
      <section>
        <h1 className="text-4xl font-bold text-blue-500 lg:text-8xl">
          Transforme <br />
          sua presença online
        </h1>

        <div className="mt-12 flex items-center justify-end gap-6 opacity-70 lg:mt-28">
          <div className="h-0.5 w-10 bg-gray-500" />
          <p className="text-center text-sm font-normal text-gray-300 lg:text-lg">
            Estratégia que transforma experiências
          </p>
        </div>

        <div className="mt-14 flex items-end justify-end lg:mt-28">
          <p className="w-11/12 text-left text-lg font-medium text-gray-300 lg:w-5/6 lg:text-4xl">
            Com a nossa expertise em desenvolvimento tecnológico, criamos
            soluções exclusivas que se adaptam perfeitamente às suas
            necessidades, garantindo uma presença online única e de alto
            desempenho.
          </p>
        </div>

        <div className="relative mt-28 h-px w-full bg-blue-500/80 before:absolute before:-top-1 before:right-0 before:h-1 before:w-8 before:bg-blue-500/80"></div>
      </section>
      <section className="mt-12 lg:mt-28">
        <div className="flex items-center justify-start gap-6 opacity-70">
          <div className="h-0.5 w-10 bg-gray-500" />
          <p className="text-center text-sm font-normal uppercase text-gray-300">
            Sobre nós
          </p>
        </div>

        <p className="mt-8 text-2xl text-black-500/80 lg:text-4xl">
          Na{' '}
          <span className="rounded bg-blue-300 px-1 py-0.5 text-white-300">
            GomidesWeb
          </span>{' '}
          revolucionamos sua marca com soluções digitais poderosas. Nossas
          interfaces inovadoras aprimoram a jornada do{' '}
          <span className="rounded bg-blue-300 px-1 py-0.5 text-white-300">
            cliente
          </span>{' '}
          agregando valor em cada passo. Do design à codificação, personalizamos
          cada etapa para{' '}
          <span className="rounded bg-blue-300 px-1 py-0.5 text-white-300">
            transformar
          </span>{' '}
          sua realidade online. Somos um estúdio de design baseado em Belo
          Horizonte - MG, especializados em criar websites incríveis.
        </p>

        <div className="mt-12 flex flex-col justify-between gap-6 lg:mt-28 lg:flex-row">
          <button className="rounded bg-blue-300 p-2 text-white-300">
            {' '}
            GomidesWeb {'>'}
          </button>

          <div className="lg:w-2/4">
            <div className="before:left-0-0 relative h-px w-32 bg-blue-500/50 before:absolute before:top-0 before:h-px before:w-8 before:bg-blue-500"></div>
            <p className="text-gray-300">
              Somos focados em criar experiências digitais únicas por meio da
              convergência entre design e tecnologia.
            </p>
          </div>
        </div>

        <div className="before:left-0-0 relative mt-28 h-px w-full bg-blue-500/80 before:absolute before:-top-1 before:h-1 before:w-8 before:bg-blue-500/80"></div>
      </section>

      <section className="mt-28">
        <div className="flex items-center justify-start gap-6 opacity-70">
          <div className="h-0.5 w-10 bg-gray-500" />
          <p className="text-center text-sm font-normal uppercase text-gray-300">
            Histórias de sucesso
          </p>
        </div>
      </section>
    </main>
  );
}
