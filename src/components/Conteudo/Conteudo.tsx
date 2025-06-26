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
        <Artigo
          titulo="Front-End"
          texto="texto qualquer sobre lfront"
          numero={1}
        />
        <Artigo
          titulo="Back-end"
          texto="texto qualquer sobre back"
          numero={2}
        />
        <Artigo titulo="Mobile" texto="texto qualque sobre mobile" numero={3} />
      </section>

      <DicaDoDia />
      <AvisoImportante />
    </main>
  );
}
