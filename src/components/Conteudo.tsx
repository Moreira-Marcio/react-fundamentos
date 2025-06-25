import Artigo from "./Artigo";
import DicaDoDia from "./DicaDoDia/DicaDoDia";

export default function Conteudo() {
  return (
    <main>
      <section>
        <h2>Seja bem vindo aos fundamentos de react!!</h2>
        <p>Este é um exemplo de aplicação React.</p>
        <Artigo />
        <Artigo />
        <Artigo />
      </section>

      <DicaDoDia />
    </main>
  );
}
