/* tudo o que for usado dentro de componentes (imagens, fontes,etc) deve ser importado desta forma, no momento do build havera otimizaçoes para esteconteudo  */
import { useState } from "react";
import logo from "../../assets/logo-react.png";
import Menu from "././Menu/Menu";

//importando modulo css para o componente cabecalho
import estilos from "./Cabecalho.module.css";

export default function Cabecalho() {
  // aqui definimos uma chamada de uma função especial do react: useState. Esta e outras funções iniciadas com o prefixo 'use' são conhecidos como react hooks
  //no cado do useState, usando desestruturação,criamos uma constate que representa o valor do state (titulo) e uma função responsavel por atualizar o useState(setTitulo)
  const [titulo, setTitulo] = useState();

  return (
    <header className={estilos.topoSite}>
      <h1 onClick={() => alert("ola!!")} className={estilos.titulo}>
        <img className={estilos.logo} src={logo} alt="" /> {titulo}✌️
      </h1>
      <hr />
      <Menu />
    </header>
  );
}
