//import Artigo from "./Artigo/Artigo";
import DicaDoDia from "./DicaDoDia/DicaDoDia";
import estilos from "./Conteudo.module.css";
import AvisoImportante from "./AvisoImportante/AvisoImportante";
import Saudacao from "./Saudacao";
import cursos from "../../data/cursos";
import ListaCursos from "./ListaCursos/ListaCursos";
import { useState } from "react";

export default function Conteudo() {
  //definindo o state para categoria ativa/selecionada podendo ser null(valor padrão inicialda)
  const [categoriaAtiva, setCategoriaAtiva] = useState<null | string>(null);

  const categorias = Array.from(
    new Set(cursos.map((curso) => curso.categoria))
  );

  return (
    <main className={estilos.conteudo}>
      <section
        className={`${estilos.principal} ${estilos.arredondada} ${estilos.sombra}`}
      >
        <h2 className="font-bold text-lg">fundamentos de react!!</h2>
        <Saudacao nome="Marcio" classe="bg-emerald-100" />
        <Saudacao classe="bg-red-100" />
        <p>Este é um exemplo de aplicação React.</p>

        {categorias.map((categoria) => {
          return (
            <button
              onClick={() => setCategoriaAtiva(categoria)}
              className="rounded py-1 px-2 mr-1 my-1 bg-amber-200 hover:bg-green-300"
            >
              {categoria}
            </button>
          );
        })}

        {categoriaAtiva && (
          <>
            <button
              onClick={() => setCategoriaAtiva(null)}
              className="px-2 py-1 border rounded bg-red-300"
            >
              limpar
            </button>

            <p>
              Categoria selecionada: <b>{categoriaAtiva}</b>
            </p>
          </>
        )}
        <ListaCursos categoria={categoriaAtiva} />
      </section>

      <DicaDoDia />
      <AvisoImportante />
    </main>
  );
}
