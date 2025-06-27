/* tudo o que for usado dentro de componentes (imagens, fontes,etc) deve ser importado desta forma, no momento do build havera otimizaçoes para esteconteudo  */
import logo from "../../assets/logo-react.png";
import Menu from "././Menu/Menu";

//importando modulo css para o componente cabecalho
import estilos from "./Cabecalho.module.css";

export default function Cabecalho() {
  return (
    <header className={estilos.topoSite}>
      <h1 onClick={() => alert("ola!!")} className={estilos.titulo}>
        <img className={estilos.logo} src={logo} alt="" /> Ola React! ✌️
      </h1>
      <hr />
      <Menu />
    </header>
  );
}
