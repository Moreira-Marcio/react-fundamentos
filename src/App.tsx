import Cabecalho from "./Cabecalho";

export default function App() {
  return (
    <>
      <Cabecalho />

      <main>
        <section>
          <h2>Seja bem vindo aos fundamentos de react!!</h2>
          <p>Este é um exemplo de aplicação React.</p>
          <article>
            <h3>Artigo de exemplo 01</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis optio at fuga inventore accusamus eligendi!
            </p>
          </article>
          <article>
            <h3>Artigo de exemplo 02</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis optio at fuga inventore accusamus eligendi!
            </p>
          </article>
          <article>
            <h3>Artigo de exemplo 03</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis optio at fuga inventore accusamus eligendi!
            </p>
          </article>
        </section>
      </main>
      <footer>
        <h2>Pequeno site criado com react</h2>
        <p>desenvolvido por Marcio Moreira</p>
      </footer>
    </>
  );
}
