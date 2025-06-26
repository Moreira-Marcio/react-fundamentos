type SaudacaoProps = {
  nome?: string;
  classe: string;
};

export default function Saudacao({
  nome = "visitante", //caso nome não seja informado (opcional ), visitante sera usado
  classe,
}: SaudacaoProps) {
  return (
    <>
      <p className={`my-2 ${classe}`}>
        Bem-vindo(a) <b>{nome}</b>
      </p>
    </>
  );
}
