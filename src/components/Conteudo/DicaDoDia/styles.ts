import styled from "styled-components";

//simulando uma mudança de tema
let tema: boolean = false;

export const StyledDicaDoDia = styled.section`
  //avaliando se o tema simulado é true (aplica verde) ou false (aplica azul)
  background-color: ${tema ? " #e8f5e9" : "lightblue"};
  border-left: 5px solid darkgreen;
  padding: 1rem;
  margin-top: 2rem;
  border-radius: 4px;

  h3 {
    margin-top: 0;
    color: darkgreen;
  }

  p {
    color: green;
    font-size: 1.1rem;
  }

  .site-oficial {
    background-color: white;
    text-align: center;
    padding: 0.4rem;
  }

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
