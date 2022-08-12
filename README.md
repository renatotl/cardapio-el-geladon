# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




M4 S1

Primeiramente, o que é o React?

O React é uma biblioteca JavaScript para criar interfaces de usuário e nos permite compor interfaces complexas a partir de trechos isolados de código, chamados componentes.

Esses componentes, mais do que trechos de código, são fragmentos da interface completa, cada um com seu próprio gerenciamento da lógica de interação entre a estrutura, o estilo e os dados, tornando simples a construção, reutilização e manutenção deles em uma aplicação.

Um bom exemplo mostrado na imagem acima é o componente de capa, reutilizado em partes diferentes da mesma aplicação.

É mais simples do que parece! Mas vamos por partes. Começando pela instalação de algumas extensões que auxiliarão o nosso desenvolvimento.


Quando trabalhamos com React, temos muitos trechos estruturais e de sintaxe do código que se repetem várias vezes. Eventualmente, você começa a pensar: “poderia ter uma forma melhor de fazer isso”, mas não se preocupe, podemos otimizar isso através de uma extensão.

As extensões do VSCode são muito úteis para auxiliar com o desenvolvimento de qualquer linguagem, exibindo erros, automatizando tarefas, nos mostrando possibilidades de melhorias.

Observaremos a extensão “ES7+ React/Redux/React-Native snippets”. Sim, é um nome enorme, mas ela nos dá um conjunto completo de snippets* ao escrever um código React.

*snippets são blocos de código reutilizáveis

Existem duas formas de instalar a extensão, a seguir:


Instalar extensão do React Developer Tools no Google Chrome


Durante o desenvolvimento é necessário validar e debugar o funcionamento do código, e essa tarefa pode ser feita de várias formas, como logs no projeto, extensões no editor, testes unitários e de integração e até mesmo extensões no browser utilizado para processar a aplicação. Esta última é a forma mais interativa e neste caso demonstraremos como instalar no Google Chrome.

debugar é o nome dado ao processo de identificar e remover qualquer tipo de erro existente no código-fonte de um programa.

A partir da loja de extensões do Google Chrome podemos realizar a busca pelo nome React Developer Tools ou seguir da maneira mais simples, clicando no link seguinte, que o redireciona diretamente para a página da extensão.

Criação do Projeto


Assumindo que você já tem o Node.JS instalado no seu computador, utilizaremos o npx para criar nossa aplicação React.

npx é uma ferramenta destinada a realizar a execução de pacotes hospedados no registro do npm, sem necessariamente esses pacotes estarem instalados localmente.

npm é um gerenciador de pacotes para o Node.JS, isso significa que o npm fará o download e gerenciamento das bibliotecas a serem utilizadas em um projeto Javascript.


Nosso projeto consistirá na criação do cardápio da paleteria El Geladon.

Para criar um projeto, em seu terminal execute o seguinte comando:

npx create-react-app cardapio-el-geladon

Note que o último parâmetro é o nome da nossa aplicação.

Em seguida, entraremos na pasta do projeto e iniciar a aplicação executando os comandos respectivamente:

cd cardapio-el-geladon
npm start

O navegador abrirá uma nova aba durante o processo e em seu terminal será provisionado um servidor local.

Em seu terminal aparecerá a URL utilizada para acessar a nossa aplicação em ambiente de desenvolvimento local, neste caso a URL http://localhost:3000.

Abrindo essa URL no browser teremos a seguinte visão:


Bom! Precisamos conhecer a arquitetura da nossa aplicação e começar a desenvolver os nossos próprios componentes do projeto.


Para abrir o projeto dentro do Visual Studio Code devemos seguir o seguinte caminho de menus clicando em Arquivo > Abrir Pasta, será aberto uma janela do explorador de arquivos do seu sistema operacional, encontre a pasta do projeto e clique em Selecionar pasta.

Com o projeto aberto em seu editor, visualizamos a seguinte tela:


Note que do lado esquerdo há uma estrutura das pastas do projeto, por esse explorador do Visual Studio Code poderemos navegar entre os arquivos do projeto de forma intuitiva, abrindo-os diretamente no editor.

O create-react-app gera para nós um projeto básico, contendo em sua raiz os arquivos .gitignore, package.json, README.md, yarn.lock ou package-lock.json, e também gera as pastas public e src, onde manteremos o código-fonte da nossa aplicação.

Dito isto, para simplificar nossa compreensão, vamos deletar todos os arquivos dentro da pasta src e criarmos os nossos próprios componentes.

Seu navegador apresentará um erro de compilação e seu terminal também acusará o mesmo problema, mas não se preocupe, é assim que aprenderemos a corrigir os diversos erros que o React identifica.

O erro descreve que houve uma falha de compilação devido à ausência do arquivo index.js ou index.jsx. Então, criaremos este arquivo.

ENOENT É uma abreviatura de Error NO ENTry (ou Error NO ENTity) e pode ser usado para mais do que arquivos/diretórios. É abreviado porque os compiladores da linguagem de programação C, no início dos tempos, não suportavam mais de 8 caracteres e símbolos, daí vem essa nomenclatura.

Selecione a pasta src com o cursor do mouse e clique no ícone de Novo Arquivo destacado na imagem abaixo, em seguida vamos nomeá-lo de index.js (posteriormente alteraremos para a extensão .jsx).

A partir desse ponto, provavelmente o erro no terminal será substituído por um aviso de sucesso de compilação e o navegador ficará em branco.

Para dar continuidade adicionaremos a estrutura básica de imports e preparar nossa aplicação para receber novos componentes.

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <React.StrictMode></React.StrictMode>,
  document.getElementById("root")
);

Os imports React e ReactDom são respectivamente a própria importação da biblioteca React e a importação de um DOM* referenciado por ela. Assim, o React mantém uma representação mais leve do DOM em memória referido como virtual DOM sendo leve e fácil de criar.


*DOM (Document Object Model): O Modelo de Documento por Objetos é uma convenção multiplataforma e independente de linguagem de programação, fiscalizada pela entidade World Wide Web Consortium, para representação e interação com objetos em documentos HTML, XHTML e, XML.

A seguir tem a declaração do que será renderizado no documento com a chamada ReactDOM.render() recebendo como primeiro parâmetro os componentes a serem renderizados, neste caso o <React.StrictMode />*, e como segundo parâmetro, em qual elemento HTML o conteúdo da nossa aplicação será anexado, neste caso o elemento com o atributo id root localizado em public/index.html.

*O modo estrito (<React.StrictMode />) é uma ferramenta para sinalizar potenciais problemas em uma aplicação. O StrictMode não renderiza nenhum elemento visível na interface. Ele ativa verificações e avisos adicionais para os seus descendentes.

Como todo tutorial, neste não poderia faltar o conhecido Hello World para iniciarmos de forma adequada. Insira a frase entre as tags <React.StrictMode>.

/* ... */
<React.StrictMode>Hello World</React.StrictMode>
/* ... */

Após recarregar a página, teremos a seguinte saída no navegador:

Agora que fizemos o ritual de iniciação e compreendemos como analisar erros, renderizar e criar a estrutura básica, podemos dar sequência com a criação de nossos componentes.

Assim como uma página web é constituída pela árvore de elementos do DOM, uma aplicação React é essencialmente uma árvore constituída de componentes.

Criaremos o componente inicial da aplicação, o Home.jsx, dentro da pasta src.

Atente-se em nomear os componentes com um padrão de escrita para diferenciá-los como componentes só de vê-los na lista de arquivos, existem uma série de convenções de nomenclaturas utilizadas por desenvolvedores, mas utilizarei aqui o padrão PascalCase, que consiste na primeira letra de cada palavra como maiúscula.

Os componentes são funções encapsulando e retornando o conteúdo a ser renderizado, que quando exportadas podem ser utilizadas em outros locais de forma simples e intuitiva.

Cada função recebe o nome do componente/nome do arquivo com a seguinte estrutura:

function Home() {
  return <div className="Home">Este é o componente Home</div>;
}

export default Home;

Note que o retorno é uma estrutura HTML, assim como escreveríamos para a criação de uma página web comum, porém é perceptível que o atributo className não existe na sintaxe HTML e isso é exclusivo do virtual DOM implementado pelo React.

Assim, todas as propriedades e atributos, incluindo manipuladores de eventos, devem estar em camelCase. Tendo como exemplo, o atributo HTML tabindex corresponde ao atributo tabIndex no React. As exceções são os atributos aria-* e data-*, os quais devem estar em lowercase, por exemplo, você pode manter aria-label como aria-label.

Os casos que diferem da regra como o className, utilizado semelhantemente ao atributo class no HTML, serão apresentados ao decorrer do nosso desenvolvimento.

Para podermos ver o nosso componente renderizado é necessário importá-lo e adicioná-lo no arquivo index.jsx.

import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);


É interessante que quando não há conteúdo a ser inserido entre as tags de componente, podemos usar a sintaxe de self-closing tags. ou seja, <Home></Home> é igual a <Home />.

Obteremos a seguinte saída:

Agora que sabemos componentizar estruturas, avançaremos com algumas alterações de estilo.

Crie na pasta src o arquivo Home.css:

.Home {
  position: relative;
  background-image: radial-gradient(
    farthest-corner at 40px 40px,
    #50c5ee 60%,
    rgba(0, 212, 255, 0.5) 100%
  );
  min-height: calc(100vh - 60px);
  margin: 15px;
  padding: 15px;
  border-radius: 20px;
  color: black;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
}

Importe o arquivo da seguinte maneira em seu arquivo Home.jsx:

...
import './Home.css';
...

E adicionaremos algumas estilizações globais criando o arquivo index.css na pasta src:

@import url("https://fonts.googleapis.com/css?family=Exo:400,700");

body,
html {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
  overflow: auto;
  background-color: rgb(53, 139, 190);
  font-family: sans-serif;
}

Importe o arquivo da seguinte maneira em seu arquivo index.js:


...
import './index.css';
...

Sinta-se livre para estilizar da maneira que quiser, ou alterar propriedades dos elementos, nosso objetivo é instruir o aprendizado do React, porém nossa aplicação necessita ser visualmente agradável. Dado esse disclaimer podemos continuar, se você estilizou conforme os arquivos acima exibidos, obteremos o seguinte resultado:


Com a página inicial preparada para receber novos componentes, podemos dar sequência com a renderização de dados.


Para podermos renderizar dados de forma dinâmica, ou seja, manter o estilo e usabilidade padronizado com a alternância de conteúdo, precisaremos de uma lista de objetos, que é normalmente recebida através de uma API*, mas no momento será simulada através de um arquivo criado por nós utilizando a lista em memória.

*API (Application Programming Interface ou Interface de Programação de Aplicativos) é um conjunto de rotinas e padrões de programação para acesso a um aplicativo de software ou plataforma baseado na Web.

Devemos definir as propriedades dos objetos da lista. O produto do cardápio é a Paleta Mexicana e apresentaremos sabor, preço, foto, título, descrição e a possibilidade de recheio.

Crie uma pasta dentro de src chamada mocks e adicione o arquivo paletas.js:

export const paletas = [
  {
    titulo: "Açaí com Leite Condensado",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: require("assets/images/acai-com-leite-condensado.png").default,
    preco: 10.0,
    sabor: "Açaí",
    recheio: "Leite Condensado",
    possuiRecheio: true,
  },
  {
    titulo: "Banana com Nutella",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: require("assets/images/banana-com-nutella.png").default,
    preco: 10.0,
    sabor: "Banana",
    recheio: "Nutella",
    possuiRecheio: true,
  },
  {
    titulo: "Chocolate Belga",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: require("assets/images/chocolate-belga.png").default,
    preco: 7.0,
    sabor: "Chocolate Belga",
    possuiRecheio: false,
  },
  {
    titulo: "Chocolate Belga com Brigadeiro",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: require("assets/images/chocolate-belga-com-brigadeiro.png").default,
    preco: 10.0,
    sabor: "Chocolate Belga",
    recheio: "Brigadeiro",
    possuiRecheio: true,
  },
  {
    titulo: "Chocolate Branco",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: require("assets/images/chocolate-branco.png").default,
    preco: 7.0,
    sabor: "Chocolate Branco",
    possuiRecheio: false,
  },
  {
    titulo: "Coco",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: require("assets/images/coco.png").default,
    preco: 7.0,
    sabor: "Coco",
    possuiRecheio: false,
  },
  {
    titulo: "Coco com Doce de Leite",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: require("assets/images/coco-com-doce-de-leite.png").default,
    preco: 10.0,
    sabor: "Coco",
    recheio: "Doce de Leite",
    possuiRecheio: true,
  },
  {
    titulo: "Cookies",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: require("assets/images/cookies.png").default,
    preco: 7.0,
    sabor: "Cookies",
    possuiRecheio: false,
  },
  {
    titulo: "Doce de Leite com Doce de Leite",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: require("assets/images/doce-de-leite-com-doce-de-leite.png").default,
    preco: 10.0,
    sabor: "Doce de Leite",
    recheio: "Doce de Leite",
    possuiRecheio: true,
  },
  {
    titulo: "Limão",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: require("assets/images/limao.png").default,
    preco: 7.0,
    sabor: "Limão",
    possuiRecheio: false,
  },
  {
    titulo: "Maracujá",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: require("assets/images/maracuja.png").default,
    preco: 7.0,
    sabor: "Maracujá",
    possuiRecheio: false,
  },
  {
    titulo: "Maracujá com Leite Condensado",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: require("assets/images/maracuja-com-leite-condensado.png").default,
    preco: 10.0,
    sabor: "Maracujá",
    recheio: "Leite Condensado",
    possuiRecheio: true,
  },
  {
    titulo: "Milho Verde",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: require("assets/images/milho-verde.png").default,
    preco: 7.0,
    sabor: "Milho Verde",
    possuiRecheio: false,
  },
  {
    titulo: "Morango",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: require("assets/images/morango.png").default,
    preco: 7.0,
    sabor: "Morango",
    possuiRecheio: false,
  },
  {
    titulo: "Morango com Leite Condensado",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: require("assets/images/morango-com-leite-condensado.png").default,
    preco: 10.0,
    sabor: "Morango",
    recheio: "Leite Condensado",
    possuiRecheio: true,
  },
  {
    titulo: "Morango com Nutella",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: require("assets/images/morango-com-nutella.png").default,
    preco: 10.0,
    sabor: "Morango",
    recheio: "Nutella",
    possuiRecheio: true,
  },
  {
    titulo: "Ninho com Nutella",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: require("assets/images/ninho-com-nutella.png").default,
    preco: 10.0,
    sabor: "Ninho",
    recheio: "Nutella",
    possuiRecheio: true,
  },
  {
    titulo: "Ninho com Ovomaltine",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: require("assets/images/ninho-com-ovomaltine.png").default,
    preco: 10.0,
    sabor: "Ninho",
    recheio: "Ovomaltine",
    possuiRecheio: true,
  },
  {
    titulo: "Uva",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: require("assets/images/uva.png").default,
    preco: 7.0,
    sabor: "Uva",
    possuiRecheio: false,
  },
];


Antes de dar sequência devemos salvar as imagens do projeto, crie dentro de src a pasta assets e dentro dela crie a pasta images.

https://drive.google.com/file/d/1Go6j2Jx-eZa5bGmLUObRn1QTGFQne2Qf/view?usp=sharing

Lista criada, hora de renderizar na tela.


Antes de continuarmos, seria interessante adicionarmos um arquivo de configuração chamado jsconfig.json. Nele podemos adicionar a opção de import absoluto, que nos permite fazer o import de arquivos e pastas que estarão a partir da pasta raiz escolhida como base, neste caso a src, sem a necessidade de realizar confusos imports com múltiplos pontos de retorno no diretório de arquivos.


Crie na raiz do projeto o arquivo jsconfig.json e adicione as seguintes linhas:

{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}

a past src esá sendo incluímo como raís do pj

Agora podemos dar sequência com a leitura da lista. Para organizar melhor e semanticamente quanto a responsabilidade e reutilização de cada componente, separaremos em um novo arquivo chamado PaletaLista.jsx na pasta src:


function PaletaLista() {
  return <div className="PaletaLista">Este é o componente PaletaLista</div>;
}

export default PaletaLista;

Após a criação do arquivo devemos importá-lo no componente Home.jsx e substituir a frase pela implementação do componente de lista dentro de um container:


import "./Home.css";
import PaletaLista from "PaletaLista";

function Home() {
  return (
    <div className="Home">
      <div className="Home__container">
        <PaletaLista />
      </div>
    </div>
  );
}

export default Home;

Caso dê algum erro de execução, dê um Ctrl+C no terminal de execução do projeto e execute novamente o npm start. Tal erro pode ocorrer devido à nova definição do jsconfig.json que antes da criação não havia sido criado, e mesmo após a criação as definições padrão ainda estavam em execução em cache.


Adicionaremos ao nosso componente PaletaLista.jsx a estrutura HTML para renderizar um item da lista com dados estáticos.


function PaletaLista() {
  return (
    <div className="PaletaLista">
      <div className="PaletaListaItem">
        <div>
          <div className="PaletaListaItem__titulo">
            {" "}
            Doce de Leite com Doce de Leite{" "}
          </div>
          <div className="PaletaListaItem__preco">R$ 10,00</div>
          <div className="PaletaListaItem__descricao">
            {" "}
            Quam vulputate dignissim suspendisse in est ante in nibh mauris.{" "}
          </div>
          <div className="PaletaListaItem__acoes Acoes">
            <button className="Acoes__adicionar Acoes__adicionar--preencher">
              adicionar
            </button>
          </div>
        </div>
        <img
          className="PaletaListaItem__foto"
          src={require("assets/images/doce-de-leite-com-doce-de-leite.png")}
          alt="Paleta de Doce de Leite"
        />
      </div>
    </div>
  );
}

export default PaletaLista;


Não está aparentemente agradável, vamos adicionar o estilo ao container em Home.css:

/* ... */
/* NOVO TRECHO */
.Home__container {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 350px) {
  .Home__container {
    justify-content: unset;
  }
}


Ainda é necessário estilizar o item da lista antes de prosseguirmos. Crie o arquivo PaletaLista.css dentro de src:


.PaletaLista {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px 50px;
}

@media (max-width: 1220px) {
  .PaletaLista {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 840px) {
  .PaletaLista {
    grid-template-columns: 1fr;
  }
}

.PaletaListaItem {
  font-family: "Exo";
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  padding: 10px;
  width: 315px;
  display: flex;
  justify-content: space-around;
}

@media (max-width: 400px) {
  .PaletaListaItem {
    width: 210px;
    height: 180px;
  }
}

.PaletaListaItem > div {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.PaletaListaItem__titulo {
  font-size: 1.5em;
  font-weight: 700;
  line-height: 100%;
}

.PaletaListaItem__descricao {
  font-size: 0.85em;
}

.PaletaListaItem__preco {
  color: darkviolet;
}

.Acoes {
  display: flex;
  justify-content: space-between;
}

.Acoes__adicionar,
.Acoes__remover {
  border: none;
  color: white;
  border-radius: 5px;
  font-family: "Exo", sans-serif;
  padding: 5px;
  max-width: 280px;
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  width: 48%;
}

.Acoes__remover {
  background-color: red;
}

.Acoes__adicionar {
  background-color: darkviolet;
}

.Acoes__adicionar--preencher {
  width: 100%;
}

.PaletaListaItem__foto {
  height: 150px;
  margin-right: -60px;
}

E Assim como fizemos nos componentes anteriores, importaremos esse estilo dentro de PaletaLista.js

import "PaletaLista.css";

/* ... */

Bom, para começarmos a renderizar a listafaremosnte, vamos fazer o import da lista paletas.js no componente PaletaLista.jsx:

import "PaletaLista.css"
import { paletas } from "mocks/paletas.js";

/* ... */


Logo em seguida devemos realizar a substituição dos dados estáticos pelos da lista. Para que cada objeto seja retratado como um item na tela, devemos iterar a lista, ou seja, executar laços de repetição* até que todos os objetos sejam exibidos.

Laços de repetição, também conhecidos como loops, são comandos que permitem iteração de código, ou seja, que comandos presentes no bloco sejam repetidos diversas vezes.

No React exibimos uma coleção de dados utilizando map*, método nativo do JS. Para isso devemos inseri-lo entre chaves {} dentro do JSX.

O método map invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.

Callback é uma rotina/função que é passada como parâmetro para outro método.

Dito isto, podemos prosseguir com a implementação do método map no arquivo PaletaLista.jsx:

/* ... */

/* NOVO TRECHO */
<div className="PaletaLista">
    {paletas.map((paleta, index) => (
    <div className="PaletaListaItem">
        <div>
        <div className="PaletaListaItem__titulo">
            {" "}
            Doce de Leite com Doce de Leite{" "}
        </div>
        <div className="PaletaListaItem__preco">R$ 10,00</div>
        <div className="PaletaListaItem__descricao">
            {" "}
            Quam vulputate dignissim suspendisse in est ante in nibh mauris.{" "}
        </div>
        <div className="PaletaListaItem__acoes Acoes">
            <button className="Acoes__adicionar Acoes__adicionar--preencher">
            adicionar
            </button>
        </div>
        </div>
        <img
        className="PaletaListaItem__foto"
        src={require("assets/images/doce-de-leite-com-doce-de-leite.png")}
        alt="Paleta de Doce de Leite"
        />
    </div>
    ))}
</div>
/* FIM NOVO TRECHO */

/* ... */


Observe que agora aparece o número de objetos existentes na lista, porém todos iguais à estrutura inicial e queremos que sejam renderizados dinamicamente.


Para isso, devemos realizar a substituição dos dados por {variavelComDados}, contendo os dados de cada objeto para exibirmos em tela, da seguinte forma:


/* ... */

/* NOVO TRECHO */
<div className="PaletaLista">
    {paletas.map((paleta, index) => (
    <div className="PaletaListaItem">
        <div>
        <div className="PaletaListaItem__titulo"> {paleta.titulo} </div>
        <div className="PaletaListaItem__preco">
            {" "}
            R$ {paleta.preco.toFixed(2)}{" "}
        </div>
        <div className="PaletaListaItem__descricao">
            {" "}
            {paleta.descricao}{" "}
        </div>
        <div className="PaletaListaItem__acoes Acoes">
            <button className="Acoes__adicionar Acoes__adicionar--preencher">
            adicionar
            </button>
        </div>
        </div>
        <img
        className="PaletaListaItem__foto"
        src={paleta.foto}
        alt={`Paleta de ${paleta.sabor}`}
        />
    </div>
    ))}
</div>
/* FIM NOVO TRECHO */

/* ... */

Mas antes de comemorar, como dizem as boas práticas, é interessante sempre visualizar as saídas no console, clicando nas três bolinhas de opções do navegador > Mais ferramentas > Ferramentas do desenvolvedor.

Será possível notar um Warning em vermelho, como aviso do próprio React de que ao criar uma Será possível notar um Warning em vermelho, como aviso do próprio React de que ao criar uma lista na UI (User Interface ou Interface de Usuário) a partir de um array com JSX, você deve adicionar uma propriedade key para cada filho e qualquer um de seus filhos na árvore de elementos.

O React usa a propriedade key para criar um relacionamento entre o componente e o elemento DOM. Se o atributo key não for adusaremos React ficará confuso e renderizará novamente o elemento incorreto.

Visto isso, vamos usar o index da lista seguido do nome da classe que demos a estrutura para criar uma chave única:


/* ... */
{paletas.map((paleta, index) => (
  <div className="PaletaListaItem" key={`PaletaListaItem-${index}`}>
/* ... */

ele atribui a cada elemento que está sendo renderizado na tela um id uma identificação 
agora o react concegue mapear este elemento


Hooks são funções que permitem que você "se conecte" aos recursos de state e ciclo de vida do React a partir de componentes funcionais. Hooks não funcionam dentro de classes — eles permitem que você use React sem classes.


Na próxima seção veremos o uso do hook useState.


Utilização do useState

O useState é um hook que permite ter variáveis de estado em componentes funcionais. Você passa o estado inicial para esta função e ela retorna uma variável com o valor do estado atual (não necessariamente o estado inicial) e outra função para atualizar este valor.

const [valorAtual, setarNovoValor] = useState(valorInicial);

Para melhor compreensão, implementaremos a funcionalidade de adição do produto, com um contador indicando o número de itens selecionados.

Adicione o logo da Paleteria e o ícone de sacola que darão identidade ao nosso cardápio. Insira o logo.svg na pasta src/assets e para o ícone sacola.svg crie a pasta icons dentro de src/assets e insira o ícone dentro da pasta src/assets/icons.

https://drive.google.com/file/d/1R1yFHs99nn-H98nsDbRcFg6rWvhFKRFH/view?usp=sharing

https://drive.google.com/file/d/1iycOcV9b18TBRDFVn2ARWlmyvt8-fji4/view?usp=sharing

Começaremos com a inclusão dos imports no arquivo Home.jsx:

/* ... */
import sacola from "assets/icons/sacola.svg";
import logo from "assets/logo.svg";
/* ... */

A seguir adicione somente a estrutura que receberá a lógica no arquivo Home.jsx entre as tags no espaço indicado:


/* ... */

<div className="Home">

{/* NOVO TRECHO */}

<div className="Home__header Header">
  <div className="row">
      <div className="Header__logo Logo">
      <img
          src={logo}
          width="70px"
          alt="Logo El Geladon"
          className="Logo__icone"
      />
      <span className="Logo__titulo"> El Geladon </span>
      </div>
      <div className="Header__opcoes Opcoes">
      <div className="Opcoes__sacola Sacola">
          <img
          src={sacola}
          width="40px"
          className="Sacola__icone"
          alt="Sacola de compras"
          />
      </div>
      </div>
  </div>
</div>

{/* FIM DO NOVO TRECHO */}

<div className="Home__container">

/* ... */



Veremos o seguinte resultado:


É necessário adicionar os estilos. Insira em Home.css:

.Header {
  max-width: 1110px;
  margin: 0 auto 25px auto;
  position: relative;
}

.row {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 20px 0 35px 0;
}

.Logo {
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.3);
  width: 340px;
  height: 45px;
}

.Logo__titulo {
  position: absolute;
  left: 55px;
  font-family: "Exo";
  font-weight: 700;
  font-size: 2.5em;
}

.Logo__icone {
  position: absolute;
  left: -20px;
  top: -15px;
}

.Sacola {
  position: relative;
}

.Sacola__icone {
  cursor: pointer;
}

.Sacola__badge {
  background-color: red;
  width: 20px;
  height: 20px;
  text-align: center;
  vertical-align: middle;
  position: absolute;
  color: white;
  font-size: 0.9em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  bottom: 0;
  right: 0;
}

@media (max-width: 1220px) {
  .Header {
    max-width: 720px;
  }
}

@media (max-width: 840px) {
  .Header {
    max-width: 320px;
  }
}

@media (max-width: 400px) {
  .Header {
    max-width: 250px;
  }

  .row {
    column-gap: 20px;
  }

  .Logo__titulo {
    font-size: 1.5em;
  }
}

Estilo preparado, implementaremos a lógica. Neste momento, o contador de itens selecionados será indicado no próprio item do cardápio.

Comecemos com a desconstrução do retorno do useState({}). Para o estado inicial adicionaremos um objeto vazio, que guardará as informações de quais itens da lista foram selecionados. Observe que ele nos devolve como primeiro parâmetro o objeto contendo o estado de paletasSelecionadas, sendo um objeto no qual a chave é o índex de qual paleta/sabor está adicionada e como valor a quantidade de paletas daquele sabor que foram selecionadas.

Em seguida criaremos a função adicionarItem, ela recebe como parâmetro o index de qual paleta foi adicionada e a partir disso cria um objeto {[index]: quantidade}. O index é utilizado como chave e o valor é atribuído utilizando um pré-existente no objeto, ou 0 caso não exista, somando mais 1.

Após esta criação podemos utilizar o método setQuantidade, onde fará a atualização do estado recebendo como parâmetro um novo objeto criado a partir do objeto de estado atual e o novo objeto de paleta a ser incluso/sobrescrito no estado atual.

Este novo objeto é criado utilizando o Spread Operator ... que obtém somente as propriedades e valores dos objetos anteriores.

Insira a lógica a seguir no arquivo PaletaLista.jsx.

/* ... */
function PaletaLista() {
  // NOVO TRECHO

  const [paletaSelecionada, setPaletaSelecionada] = useState({});

  const adicionarItem = (paletaIndex) => {
          const paleta = { [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) +1 }
          setPaletaSelecionada({ ...paletaSelecionada, ...paleta});
  }

  // FIM DO NOVO TRECHO

  return (
/* ... */

Lembrando que o useState é uma funcionalidade existente na biblioteca do React. Logo, para que funcione, é necessário importá-la no componente.


/* NOVO TRECHO */
import { useState } from "react";
/* FIM NOVO TRECHO */

import "PaletaLista.css";
import { paletas } from "mock/paletas";

/* ... */

Preparada a lógica, devemos implementá-la no componente. Adicione no botão a chamada da função adicionarItem como retorno de um callback após adicionar o atributo onClick.

Observe e implemente no arquivo PaletaLista.jsx.

/* ... */
<button className=onClick={() => "Acoes__adicionar Acoes__adicionar--preencher" adicionarItem(index)}>adicionar</button>
/* ... */

É preciso visualizar o resultado através de um contador. Vamos incluí-lo criando um badge, que utilizará o objeto de estado atual pegando a quantidade através de seu index ou inferindo 0 caso essa chave não exista no objeto, no arquivo PaletaLista.js no trecho indicado:

...
<div className="PaletaListaItem" key={`PaletaListaItem-${index}`}>
	{/* NOVO TRECHO  */}

	<span className="PaletaListaItem__badge"> {paletaSelecionada[index] || 0} </span>

	{/* FIM DO NOVO TRECHO  */}

	<div>
		<div className="PaletaListaItem__titulo"> { paleta.titulo } </div>
...

Em seguida adicione o estilo do contador no arquivo PaletaLista.css:

/* ... */
.PaletaListaItem__badge {
  background-color: greenyellow;
  width: 20px;
  height: 20px;
  text-align: center;
  vertical-align: middle;
  position: relative;
  color: black;
  font-size: .8em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  top: -9px;
  left: -9px;
}
/* ... */


O uso do useState pode parecer complexo, mas é questão de prática e teremos muitas utilidades para ele, por enquanto iremos nos conter a essas atribuições.

Até agora só é possível adicionar itens sem podermos removê-los e não há centralização das informações na sacola. Nossa aplicação tem excelentes pontos a serem melhorados e possíveis features a serem implementadas, mas este é o momento de absorver o conteúdo e se preparar para as demais aulas.

Conclusão


Com isso, finalizamos a nossa primeira aula sobre o ReactJS! Espero que você tenha curtido esse primeiro overview e essa primeira experiência construindo uma versão mais bonita do frontend que consumirá a API que utilizamos anteriormente

Não se esqueça de praticar! É muito importante que você utilize os próximos Codelabs e invista tempo para aprimorar suas habilidades com HTML, CSS, JavaScript e, principalmente, ReactJS!




Versionamneto é enviar para o github


