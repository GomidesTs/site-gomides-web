export default function Cookies() {
  return (
    <main className="mt-16 flex flex-col gap-3">
      <h1 className="mb-4 text-3xl">Aviso de Cookies</h1>

      <h3 className="text-xl font-bold uppercase">O que são cookies?</h3>

      <p>
        Cookies são pequenos arquivos que registram e armazenam informações
        sobre a sua atividade ao visitar um site. Certos cookies podem coletar
        dados pessoais, por exemplo, se você optar por clicar em &ldquo;lembrar
        de mim&rdquo; ao fazer login, um cookie poderá armazenar seu e-mail e
        nome de usuário.
      </p>

      <h3 className="text-xl font-bold uppercase">Como usamos cookies?</h3>

      <p>
        Utilizamos cookies com o objetivo de tornar sua visita ao nosso site
        mais agradável e obter informações sobre como ele está sendo utilizado,
        para que possamos otimizá-lo para visitantes como você. É importante
        destacar que não vendemos espaço publicitário, portanto, não utilizamos
        cookies de anunciantes (conhecidos como cookies de terceiros).
      </p>

      <h3 className="text-xl font-bold uppercase">
        Que tipos de cookies podemos usar?
      </h3>

      <ol className="m-auto flex w-[90%] list-decimal flex-col gap-3 xl:w-full">
        <li>
          <span className="font-medium uppercase">Cookies necessários:</span>{' '}
          Esses cookies são essenciais para o correto funcionamento do site e
          garantem a segurança e a integridade da sua visita.
        </li>
        <li>
          <span className="font-medium uppercase">Cookies de desempenho:</span>{' '}
          Utilizamos esses cookies para coletar informações estatísticas sobre o
          uso do nosso site, a fim de melhorar seu desempenho e otimizá-lo.
        </li>
        <li>
          <span className="font-medium uppercase">Cookies de preferência:</span>{' '}
          Esses cookies coletam dados sobre as preferências do usuário e
          armazenam informações de idioma, localização, CEP, nome e e-mail do
          usuário, entre outros.
        </li>
        <li>
          <span className="font-medium uppercase">Cookies funcionais:</span>{' '}
          Oferecemos mais funcionalidades aos visitantes do nosso site, como
          serviços de chat, botões de compartilhamento de mídia social e login
          com mídia social, por meio desses cookies.
        </li>
        <li>
          <span className="font-medium uppercase">
            Cookies de publicidade/rastreamento:
          </span>{' '}
          Esses cookies são utilizados para coletar informações e possibilitar a
          criação de anúncios e publicações personalizadas para fins de
          marketing.
        </li>
      </ol>

      <p>
        Para mais informações sobre o uso de cookies de terceiros, entre em
        contato conosco através do e-mail gomidesweb@gmail.com.
      </p>

      <h3 className="text-xl font-bold uppercase">
        Como desabilitar os cookies?
      </h3>

      <p>
        É possível desabilitar os cookies alterando as configurações do seu
        navegador de internet. No entanto, é importante ressaltar que, ao
        desabilitar todos os cookies, alguns recursos oferecidos pelo site podem
        não funcionar corretamente. Consulte as instruções do seu navegador para
        saber como ajustar e alterar as configurações de cookies.
      </p>

      <p>
        Se você tiver dúvidas ou desejar obter mais informações sobre nossa
        Política de Privacidade, entre em contato conosco através do e-mail
        gomidesweb@gmail.com.
      </p>
    </main>
  );
}
