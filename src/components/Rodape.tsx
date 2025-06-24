import type { CSSProperties } from "react";

const estilosRodape: CSSProperties = {
  backgroundColor: "#222",
  color: "white",
  textAlign: "center",
  padding: "1rem",
};

export default function Rodape() {
  return (
    <>
      <footer style={estilosRodape}>
        <h2>Pequeno site criado com react</h2>
        <p style={{ color: "red", fontWeight: "bold" }}>
          desenvolvido por{" "}
          <b>
            <a href="">Marcio Moreira</a>
          </b>
        </p>
      </footer>
      <p className="outro-texto">qualquer coisa...</p>
    </>
  );
}
