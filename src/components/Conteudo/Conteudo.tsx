import Artigo from "./Artigo/Artigo";
import DicaDoDia from "./DicaDoDia/DicaDoDia";
import estilos from "./Conteudo.module.css";
import AvisoImportante from "./AvisoImportante/AvisoImportante";

export default function Conteudo() {
  return (
    <main>
      <section
        className={`${estilos.principal} ${estilos.arredondada} ${estilos.sombra}`}
      >
        <h2 className="font-bold text-lg">
          Seja bem vindo aos fundamentos de react!!
        </h2>
        <p>Este é um exemplo de aplicação React.</p>
        <Artigo />
        <Artigo />
        <Artigo />
      </section>

      <DicaDoDia />
      <AvisoImportante />
    </main>
  );
}
