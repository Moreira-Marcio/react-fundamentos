/* tudo o que for usado dentro de componentes (imagens, fontes,etc) deve ser importado desta forma, no momento do build havera otimizaçoes para esteconteudo  */
import logo from "../assets/logo-react.png";
import Menu from "./Menu";

export default function Cabecalho() {
  return (
    <header>
      <h1>
        <img src={logo} alt="" /> Ola React! ✌️
      </h1>
      <hr />
      <Menu />
    </header>
  );
}
