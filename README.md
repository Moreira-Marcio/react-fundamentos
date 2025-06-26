# Fundamentos do React

## 00_projeto-zerado

- remoção do css
- remoção da pasta assets
- simplificação do componente app.tsx e do main.tsx

## 01_usando-a-sintaxe-jsx-no-app

- construção de um componente unico (app.tsx)usando elementos HTML e Fragmento
- instalação do react developer tools

- referencias sobre componentes e jsx: https://react.dev/reference/react/Component

## 02_criando-e-organizando-componentes

- separação de trechos do App em novos componentes
- Exportação e importação dos componentes
- Uso de assets e importação de imagem
- Organização dos componentes em uma pasta dedicada

## 03_componentes-filhos-ou-internos

- Criação de um componente filho (menu)e importação/uso no pai(cabecalho)

- Criaçao de um componente filho (artigo) e importação/uso no pai (conteudo)

- Instalação da extenção ES7+ React

## 04_estilos

- CSS global usando seletores tradicionais
- CSS inline aplicando via style e escrevendo CSS IN JS (objeto com proipriedade CSS)

- CSS inline criando um objeto do tipo CSSProprieties e passando-o para style do componente

## 05_modulos-css

- Módulos CSS (CSS modules) são maneiras de escrever o CSS em arquivos separados de extensão. Há um **acoplamento** entre módulo e seu componente, permitindo um escopo bem definido sobre os estilos

-

## instalação

- npm install styled-components
- npm install --save-dev @types/styled-components
- extensão vc code styled-components

Ao trabalhar com Styled Components vocÊ pode criar regras com qualquer seletor e usar lógica JavaScript dentro do template stryng

## 06_styled-components

- Styled components é uma biblioteca (lib) muito usada com projetos react que permite escrever estilos CSS. Os estilos ficam aplicados ao componente en que foram decrarados

## 07-Tailwind

- Tailwind CSS é um framework CSS utilitário, que permite construir interfaces web diretamente na marcação HTML através de classes pré-definidas, sem a necessidade de escrever CSS personalizado. Ele oferece uma abordagem "utility-first", onde você aplica classes com funções específicas para estilizar seus elementos.

- Em suma, o Tailwind CSS é uma ferramenta poderosa que redefine a maneira como escrevemos CSS. Ele oferece uma abordagem altamente eficiente e flexível para o desenvolvimento front-end, priorizando a velocidade, o controle e a otimização, tornando-o uma escolha popular para muitos desenvolvedores modernos.

## 08_props

- props (abreviação de properties/propriedades) são poarametros que um componente pode receber

- elas funcionam como argumentos de uma função, que podem receber dados de um componente pai para um componente filho.

- props basicamente são uma forma de comunicação entre componentes
