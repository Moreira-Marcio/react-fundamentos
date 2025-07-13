import Artigo from "../Artigo/Artigo";
import estilos from "./ListaCursos.module.css";
import cursos from "../../../data/cursos";

type listaCursosProps = {
  categoria: null | string;
};

export default function ListaCursos({ categoria }: listaCursosProps) {
  const cursosPorCategoria = categoria
    ? cursos.filter((curso) => curso.categoria === categoria)
    : cursos;
  return (
    <>
      <p>
        Quantidade: <b>{cursosPorCategoria.length}</b>
      </p>
      <div className={estilos.artigos}>
        {cursosPorCategoria.map((curso) => {
          return <Artigo dados={curso} key={curso.id} />;
        })}
      </div>
    </>
  );
}
