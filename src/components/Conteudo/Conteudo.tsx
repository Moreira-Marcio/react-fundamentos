import Artigo from "./Artigo/Artigo";
import DicaDoDia from "./DicaDoDia/DicaDoDia";
import estilos from "./Conteudo.module.css";
import AvisoImportante from "./AvisoImportante/AvisoImportante";
import Saudacao from "./Saudacao";
import cursos from "../../data/cursos";

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
        {/* {faça a logica necessaria para apresentar o componente artigo e passar para ele os dados de cada curso proveniente de cursos} */}

        {cursos.map((curso) => {
          return <Artigo dados={curso} key={curso.id} />;
        })}
      </section>

      <DicaDoDia />
      <AvisoImportante />
    </main>
  );
}
