import { Form } from '@/components/Form';

export default function Contact() {
  return (
    <main className="mt-12 lg:mt-60">
      <div className="flex items-center justify-start gap-6 opacity-70">
        <div className="h-0.5 w-10 bg-gray-500" />
        <p className="text-center text-sm font-normal uppercase tracking-wide text-gray-300">
          Vamos trabalhar
        </p>
      </div>

      <h1 className="mt-8 text-4xl font-bold text-blue-500 lg:mt-14 lg:text-8xl">
        Nossa equipe está pronta para ir além
      </h1>

      <div className="flex justify-end">
        <div className="mt-8 lg:mt-24 lg:w-2/4">
          <div className="before:left-0-0 relative h-px w-32 bg-blue-500/50 before:absolute before:top-0 before:h-px before:w-8 before:bg-blue-500"></div>
          <p className="text-gray-300">
            Estamos ansiosos para ouvir mais sobre o seu projeto. Conte pra
            gente todos os detalhes e deixe-nos transformar sua visão em
            realidade
          </p>
        </div>
      </div>

      <section className="mb-28">
        <h2 className="text-2xl text-blue-500 lg:mt-28 lg:text-5xl">
          Nos conte sobre sua ideia
        </h2>

        <p className="mt-2">
          Compartilhe conosco detalhes sobre seu projeto. Aguarde o nosso
          contato pelo WhatsApp e o tornaremos realidade juntos.
        </p>

        <div className="mt-14 flex flex-col gap-8 lg:flex-row">
          <Form />
          <div className="top-8 hidden w-2/5 lg:inline-block">
            <span>É bom saber</span>

            <h4>Como trabalhamos</h4>

            <ul className="sticky top-8 mt-6 flex list-disc flex-col gap-2">
              <li className="flex flex-col font-medium">
                Sempre temos tempo para conversar
                <span className="mt-2 text-sm text-gray-300">
                  Estamos aqui para te ajudar. Durante todo o processoestaremos
                  disponíveis para esclarecer dúvidas, receber sugestões e
                  trocar ideias.
                </span>
              </li>

              <li className="flex flex-col font-medium">
                Nosso processo
                <span className="mt-2 text-sm text-gray-300">
                  É extremamente importante seguirmos o cronograma do projeto e
                  o prazo estabelecido.
                </span>
              </li>

              <li className="flex flex-col font-medium">
                Aprovações
                <span className="mt-2 text-sm text-gray-300">
                  As entregas precisam ser aprovadas para passarmos para a
                  próxima etapa.
                </span>
              </li>

              <li className="flex flex-col font-medium">
                Somos parceiros
                <span className="mt-2 text-sm text-gray-300">
                  Estaremos sempre ao seu lado durante a construção do seu
                  projeto. Nosso time é seu time.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative mt-28 h-px w-full bg-blue-500/80 before:absolute before:-top-1 before:right-0 before:h-1 before:w-8 before:bg-blue-500/80"></div>
      </section>

      <section className="mb-8 mt-28">
        <div className="flex gap-2">
          <span className="-mt-14 text-8xl leading-none text-gray-300">
            &#8220;
          </span>

          <div className="flex flex-col gap-3">
            <p className="text-xl text-black-500/90 lg:text-4xl">
              Desde o atendimento personalizado até o desenvolvimento do
              projeto, só tenho elogios pelo excelente trabalho. O resultado
              superou minhas expectativas e o projeto ficou ainda melhor do que
              eu imaginava.
            </p>

            <p className="text-2xl font-medium text-black-500">
              Daniela Martin
            </p>

            <p className="text-sm text-black-500/50">Eng. Alimentos</p>
          </div>
        </div>

        <div className="relative mt-28 h-px w-full bg-blue-500/80 before:absolute before:-top-1 before:left-0 before:h-1 before:w-8 before:bg-blue-500/80"></div>
      </section>
    </main>
  );
}
