type SaudacaoProps = {
  nome?: string;
  classe: string;
};

export default function Saudacao({
  nome = "visitante",
  classe,
}: SaudacaoProps) {
  function exemploEvento() {
    alert("evento chamada de callback externa");
  }

  return (
    <p className={`my-2 ${classe}`}>
      Bem-vindo(a) <b onClick={exemploEvento}>{nome}</b>
    </p>
  );
}
