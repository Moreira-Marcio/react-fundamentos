import Artigo from "./Artigo/Artigo";
import DicaDoDia from "./DicaDoDia/DicaDoDia";
import estilos from "./Conteudo.module.css";
import AvisoImportante from "./AvisoImportante/AvisoImportante";
import Saudacao from "./Saudacao";

export default function Conteudo() {
  return (
    <main className={estilos.conteudo}>
      <section
        className={`${estilos.principal} ${estilos.arredondada} ${estilos.sombra}`}
      >
        <h2 className="font-bold text-lg">fundamentos de react!!</h2>
        <Saudacao nome="Marcio" classe="bg-emerald-100" />
        <Saudacao classe="bg-red-100" />
        <p>Este é um exemplo de aplicação React.</p>
        <Artigo titulo="Front-End" numero={1} data={new Date()}>
          <p>
            Front-end é muito bacana, a gente usa o html, css e o javascript
          </p>
          <p>texto qualquer sobre 3</p>
        </Artigo>

        <Artigo titulo="Back-end" numero={2}>
          <p>É importante estudar</p>
          <ul>
            <li>PHP</li>
            <li>SQL</li>
            <li>Orientação objeto</li>
            <p>e muito mais</p>
          </ul>
        </Artigo>

        <Artigo titulo="Mobile" numero={3}>
          <details>
            <summary>Conheça as tecnologias mais usadas</summary>
            <ol className="*:list-decimal *ml-7">
              <li>JavaScript</li>
              <li>Libs e Frameworks</li>
            </ol>
          </details>
        </Artigo>
      </section>

      <DicaDoDia />
      <AvisoImportante />
    </main>
  );
}
