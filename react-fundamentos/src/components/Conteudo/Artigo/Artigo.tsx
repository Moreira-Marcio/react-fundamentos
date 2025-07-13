import estilos from "./Artigo.module.css";
import type { Curso } from "../../../types/Curso";
import { useState } from "react";

type ArtigoProps = {
  dados: Curso;
};

export default function Artigo({ dados }: ArtigoProps) {
  const { titulo, preco, categoria } = dados;

  const [destaque, setDestaque] = useState("whiteSmoke");

  const alternarArtigo = () => {
    setDestaque((destaque) => {
      return destaque === "whiteSmoke" ? "yellowgreen" : "whiteSmoke";
    });
  };
  return (
    <article
      onClick={alternarArtigo}
      className={estilos.artigo}
      style={{ backgroundColor: destaque }}
    >
      <h3> {titulo} </h3>
      <p>Categoria: {categoria}</p>
      <p>Preço: {preco}</p>
    </article>
  );
}
