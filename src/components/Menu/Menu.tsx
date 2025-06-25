import estiloNav from "./Menu.module.css";

export default function Menu() {
  return (
    <nav className={estiloNav.links}>
      <a href="">Home</a>
      <a href="">Sobre</a>
      <a href="">Contato</a>
    </nav>
  );
}
