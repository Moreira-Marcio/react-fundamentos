// ajuda a detectar uso de recursos obsoletos (apis,funçoes,padroes,etc)
import { StrictMode } from "react";
// usado para criar a 'raiz' da aplicação´ react a partir de um elemento html
import { createRoot } from "react-dom/client";
//importa componente principal da aplicação
// o componente app é o ponto de entrada da aplicaçãoi react
import App from "./App.tsx";

//seleciona o elemento  html root, cria raiz da aplicação e renderiza compnente app
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
