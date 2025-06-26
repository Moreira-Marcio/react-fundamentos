import estilos from "./Artigo.module.css";
import type { Curso } from "../../../types/Curso";

type ArtigoProps = {
  dados: Curso;
};

export default function Artigo({ dados }: ArtigoProps) {
  const { titulo, preco, categoria } = dados;
  return (
    <article className={estilos.artigo}>
      <h3>{titulo} </h3>
      <p>{categoria}</p>
      <p>{preco}</p>
    </article>
  );
}
