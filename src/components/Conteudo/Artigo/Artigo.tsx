import estilos from "./Artigo.module.css";

export default function Artigo() {
  return (
    <article className={estilos.artigo}>
      <h3>Artigo de exemplo 01</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis
        optio at fuga inventore accusamus eligendi!
      </p>
    </article>
  );
}
