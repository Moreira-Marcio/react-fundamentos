import Artigo from "../Artigo/Artigo";
import estilos from "./ListaCursos.module.css";
import cursos from "../../../data/cursos";

export default function ListaCursos() {
  return (
    <div className={estilos.artigos}>
      {cursos.map((curso) => {
        return <Artigo dados={curso} key={curso.id} />;
      })}
    </div>
  );
}
