type Props = {
  nome: string;
};

export default function Saudacao(props: Props) {
  return (
    <>
      <h2 className="font-bold text-lg">fundamentos de react!!</h2>
      <p className="my-2">
        Bem-vindo(a) <b>{props.nome}</b>
      </p>
    </>
  );
}
