import estilos from "./Artigo.module.css";
import type { Curso } from "../../../types/Curso";

type ArtigoProps = {
  dados: Curso;
};

export default function Artigo({ dados }: ArtigoProps) {
  const { titulo, preco, categoria } = dados;
  return (
    <article className={estilos.artigo}>
      <h3>Titulo: {titulo} </h3>
      <p>Categoria: {categoria}</p>
      <p>Preço: {preco}</p>
    </article>
  );
}
