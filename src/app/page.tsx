export default function Home() {
  return (
    <main className="mt-60">
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
          Com a nossa expertise em desenvolvimento tecnológico, criamos soluções
          exclusivas que se adaptam perfeitamente às suas necessidades,
          garantindo uma presença online única e de alto desempenho.
        </p>
      </div>

      <div className="relative mt-28 h-px w-full bg-blue-500/80 before:absolute before:-top-1 before:right-0 before:h-1 before:w-8 before:bg-blue-500/80 lg:mt-28"></div>
    </main>
  );
}
