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


Recapitulando
Antes de darmos início a próxima aula, iremos relembrar os itens aprendidos na aula anterior:
Conhecemos o conceito de uso e aplicabilidade do React;
Aprendemos a instalar a extensão do React no VSCode, tanto pelo site como diretamente pelo editor;
Aprendemos a instalar a extensão React Developer Tools no Google Chrome;
Realizamos a criação do projeto com o npx;
Observamos algumas saídas de erro no terminal e no console, durante a edição do projeto, e como corrigi-las;
Estruturamos a forma básica de imports para a criação de nossos componentes;
Estilizamos o projeto;
Criamos e renderizamos uma lista de objetos em memória;
Aprendemos a utilizar o useState.
A aplicação ficou com a seguinte aparência:


Em uma aplicação, é comum precisarmos exibir ou esconder um elemento, conforme certa condição. Pode ser uma interação do usuário, presença OU ausência de dados vindos em uma request, ou até mesmo níveis de permissão de usuário. Esse é o conceito de renderização condicional e abordaremos mais a seguir.
Daremos início com os badges, que não devem renderizar quando zerados, mas sim, renderizar somente quando os itens forem selecionados.
Iniciando com a criação de uma função chamada badgeCounter que recebe dois parâmetros, sendo o primeiro a condição de renderização, que vamos chamá-la canRender.
O segundo parâmetro é o index, representando o número do item que está sendo selecionado (onde será renderizado o contador).
Assim há uma verificação: quando o canRender for true o operador && renderiza o badge naquele index. Caso o canRender seja false o operador && também torna a renderização falsa, portanto não aparece na tela.
Insira o seguinte trecho na função PaletaLista() no arquivo PaletaLista.jsx:
...
const badgeCounter = (canRender, index) =>
	Boolean(canRender) && (<span className="PaletaListaItem__badge"> {paletaSelecionada[index]} </span>);
...
Função criada, vamos nos atentar em adicionar a renderização no código que fará a exibição do template:
...
{paletas.map((paleta, index) =>
	<div className="PaletaListaItem" key={`PaletaListaItem-${index}`}>
​
	{/* NOVO TRECHO */}
  {badgeCounter(paletaSelecionada[index], index)}
​
	{/* FIM DO NOVO TRECHO */}
​
		<div>
			<div className="PaletaListaItem__titulo"> { paleta.titulo } </div>
...


Agora que não há mais badges sendo exibidos, vamos adicionar o item Chocolate Belga, no nosso caso o terceiro item da lista:

Perceba que agora somente os itens adicionados irão receber o badge com o contador, assim tudo se torna visualmente limpo e de fácil identificação.
Agora que já conhecemos o conceito de renderização condicional, podemos adicionar a 
funcionalidade de remover alguns itens que foram adicionados.



A estilização condicional nos permite transitar entre propriedades de estilo conforme dada condição através de classes css.
Primeiro precisamos editar o modificador de estilo no botão de adicionar no arquivo PaletaLista.jsx:
Antes:

...
<button className="Acoes__adicionar Acoes__adicionar--preencher" onClick={() => adicionarItem(index)}>adicionar</button>
...

...
<button className={`Acoes__adicionar ${!paletaSelecionada[index] && "Acoes__adicionar--preencher"}`} onClick={() => adicionarItem(index)}>adicionar</button>
...

As estilizações css já foram apresentadas na aula passada, mas basicamente, este conceito segue o comportamento de toggle* das classes no elemento, neste caso adicionando ou removendo a classe de preenchimento.

* toggle, switch (do inglês: interruptor), ou comutador, é um elemento/comportamento de interação alternando através de uma ação entre dois valores.

Após essa edição não será visível nenhuma mudança perceptível, exceto quando acionamos o botão de adicionar algum item:

Feito isto, agora temos o espaço para adicionar o botão de remover, mas antes precisamos adicionar a lógica de remoção, muito semelhante à de adição apresentada na aula passada.

Adicione dentro da função PaletaLista():

const removerItem = (paletaIndex) => {
        const paleta = { [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) -1 }
        setPaletaSelecionada({...paletaSelecionada, ...paleta});
}

Observe que a única diferença está na subtração.
Agora sobre o aprendizado de renderização condicional poderemos implementar o botão de remover somente quando houver item adicionado.
Iniciaremos com a criação da função removeButton que fará a devolução condicional do botão renderizado.
Adicione dentro da função PaletaLista()

const removeButton = (canRender, index) =>
	Boolean(canRender) && (<button className="Acoes__remover" onClick={() => removerItem(index)}>remover</button>);
...


Observe que a única diferença está na subtração.
Agora sobre o aprendizado de renderização condicional poderemos implementar o botão de remover somente quando houver item adicionado.
Iniciaremos com a criação da função removeButton que fará a devolução condicional do botão renderizado.
Adicione dentro da função PaletaLista():

const removeButton = (canRender, index) =>
	Boolean(canRender) && (<button className="Acoes__remover" onClick={() => removerItem(index)}>remover</button>);


Agora podemos implementar a renderização no código que fará a exibição do template:


<div className="PaletaListaItem__acoes Acoes">
	<button className={`Acoes__adicionar ${!paletaSelecionada[index] && "Acoes__adicionar--preencher"}`} onClick={() => adicionarItem(index)}>adicionar</button>

	{/* NOVO TRECHO */}

	{removeButton(paletaSelecionada[index], index)}

	{/* FIM DO NOVO TRECHO */}

</div>


Note que, ao removermos todos os itens selecionados através do botão remover, os estilos são resetados e tanto o badge quanto o botão remover não são renderizados:

Nossa aplicação parece funcional, porém vamos organizar as coisas por aqui e tratar de Arquitetura de pastas


Arquitetura de pastas

Está na hora de organizarmos os arquivos apresentados, pois um dos pilares para o desenvolvimento de código é a manutenibilidade e para ser mantido de forma organizada, utilizaremos padrões de arquitetura para auxiliar no desenvolvimento.

A manutenibilidade, é o conceito que busca contemplar os três tipos de manutenção já existentes: corretiva, preditiva e preventiva. Resumidamente, é uma dinâmica que visa o melhoramento contínuo da manutenção.

Provavelmente seu projeto se encontrará disposto da seguinte forma:

Cuidamos de organizar a pasta assets e mocks dentro de src, porém todos os componentes e seus estilos estão "soltos" na pasta principal.

Primeiro vamos segregá-los por pastas contendo o nome do componente como nome da pasta que agregará seus arquivos de lógica e estilo, exceto pelos arquivos de index.

Teremos algo com o seguinte aspecto:

Lembre-se de que ao criar e mover os arquivos de lugar é necessário atualizar os imports, mas vamos cuidar disso por último.

Agora devemos compreender quais componentes são páginas da aplicação e quais são trechos dela e podem ser reutilizáveis. Neste caso temos como página principal o componente Home e como reutilizável o componente PaletaLista.

Feito esta análise, vamos prosseguir com a criação de duas pastas em src, sendo elas as pastas, components e views.

Vamos mover o componente de Home para a pasta views e o componente PaletaLista para a pasta components.

Obteremos o seguinte resultado:

Responsabilidades separadas, vamos renomear o arquivo index.css para main.css e movê-lo para uma nova pasta que criaremos dentro de src/assets chamada styles.

Ficará assim:

Agora que nossa arquitetura de pastas está organizada, poderemos dar sequência com a atualização dos imports de arquivos em nossos componentes.

Dentro do arquivo index.jsx o import do componente Home e o novo arquivo de estilo principal, chamado main.css, serão feitos da seguinte forma:

...
import Home from "./views/Home/Home";
​
import "assets/styles/main.css";

E dentro do arquivo Home.jsx o import do componente PaletaLista será feito da seguinte forma:

import PaletaLista from "components/PaletaLista/PaletaLista";

Se em seu componente PaletaLista.jsx o import do estilo estiver:

import "PaletaLista.css";

Provavelmente seu compilador acusará erro para encontrar o arquivo de estilo, pois está tentando encontrar o arquivo na raiz de src, apenas altere para:

import "./PaletaLista.css";


E então reinicie em seu terminal o servidor local, parando-o com o atalho CTRL + C e executando o comando npm start.


Ajustes realizados, podemos notar que os componentes que temos criados são consideravelmente grandes e possíveis de serem subdivididos. Realizaremos essa subdivisão no assunto seguinte.


Subdivisão de componentes


Subdividir componentes faz parte do processo de criação e construção de projetos, analisar e perceber partes que podem ser reutilizáveis ou mais bem compreendidas, se separadas em trechos menores.

Componentes view, particularmente são estruturas que fazem a composição da página e devem separar apenas estruturalmente seus componentes.

Vamos observar o componente Home da nossa aplicação, localizado em src/views/Home/Home.jsx:

import "./Home.css";
import PaletaLista from "components/PaletaLista/PaletaLista";
​
import sacola from "assets/icons/sacola.svg";
import logo from "assets/logo.svg";
​
function Home() {
  return (
    <div className="Home">
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
      <div className="Home__container">
        <PaletaLista />
      </div>
    </div>
  );
}

export default Home;

Neste caso é possível notar que há somente a separação do componente PaletaLista e toda a estrutura de header da página está adicionada na view, podendo ser componentizada.


Iremos remover os seguintes trechos para um novo componente chamado Navbar, que será adicionado em src/components/Navbar/Navbar.jsx:

...
import sacola from "assets/icons/sacola.svg"
import logo from "assets/logo.svg"
...
...
<div className="Header">
	<div className="row">
		<div className="Header__logo Logo">
			<img src={logo} width="70px" alt="Logo El Geladon" className="Logo__icone" />
			<span className="Logo__titulo"> El Geladon </span>
		</div>
		<div className="Header__opcoes Opcoes">
			<div className="Opcoes__sacola Sacola">
				<img src={sacola} width="40px" className="Sacola__icone" alt="Sacola de compras" />
			</div>
		</div>
	</div>
</div>
...
Para subdividir completamente, é necessário separar a parte da folha de estilos correspondente em src/components/Navbar/Navbar.css e já importá-lo em nosso componente correspondente:
.Header {
  max-width: 1110px;
  margin: 0 auto 25px auto;
  position: relative;
}
​
.row {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 20px 0 35px 0;
}
​

.Logo {
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.3);
  width: 340px;
  height: 45px;
}
​
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
​
.Sacola {
  position: relative;
}
​
.Sacola__icone {
  cursor: pointer;
}
​
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
​
@media (max-width: 1220px) {
  .Header {
    max-width: 720px;
  }
}
​
@media (max-width: 840px) {
  .Header {
    max-width: 320px;
  }
}
​
@media (max-width: 400px) {
  .Header {
    max-width: 250px;
  }
​
  .row {
    column-gap: 20px;
  }
​
  .Logo__titulo {
    font-size: 1.5em;
  }
}

Para evitarmos confusões, irei mostrar como ficaram os arquivos.

Assim ficou nosso componente Navbar:

import "./Navbar.css";
​
import sacola from "assets/icons/sacola.svg";
import logo from "assets/logo.svg";
​
function Navbar() {
  return (
    <div className="Header">
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
  );
}
​
export default Navbar;
No arquivo Home.jsx já iremos adicionar o import de Navbar.jsx e implementá-lo no trecho removido, ficando assim:

import "./Home.css";
import PaletaLista from "components/PaletaLista/PaletaLista";
import Navbar from "components/Navbar/Navbar";
​
function Home() {
  return (
    <div className="Home">
      <Navbar />
      <div className="Home__container">
        <PaletaLista />
      </div>
    </div>
  );
}
​
export default Home;

E para finalizar, assim ficou a folha de estilos Home.css:

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
​
.Home__container {
  display: flex;
  align-items: center;
  justify-content: center;
}
​
@media (max-width: 350px) {
  .Home__container {
    justify-content: unset;
  }
}

Estrutura de página separada, há mais uma subdivisão possível no componente que faz a renderização da lista de paletas. No componente PaletaLista vamos remover os seguintes trechos para um novo componente que será adicionado em src/components/PaletaListaItem/PaletaListaItem.jsx, lembrando de não copiar a propriedade key, pois ela pertence à lista:


...
const removeButton = (canRender, index) =>
	Boolean(canRender) && (<button className="Acoes__remover" onClick={() => removerItem(index)}>remover</button>);
​

const badgeCounter = (canRender, index) =>
	Boolean(canRender) && (<span className="PaletaListaItem__badge"> {paletaSelecionada[index]} </span>);

...
<div className="PaletaListaItem">
	{badgeCounter(paletaSelecionada[index], index)}
	<div>
		<div className="PaletaListaItem__titulo"> { paleta.titulo } </div>
		<div className="PaletaListaItem__preco">R$ { paleta.preco.toFixed(2) }</div>
		<div className="PaletaListaItem__descricao"> { paleta.descricao }  </div>
		<div className="PaletaListaItem__acoes Acoes">
			<button className={`Acoes__adicionar ${!paletaSelecionada[index] && "Acoes__adicionar--preencher"}`} onClick={() => adicionarItem(index)}>adicionar</button>
	javas		{removeButton(paletaSelecionada[index], index)}
		</div>
	</div>
	<img className="PaletaListaItem__foto" src={paleta.foto} alt={`Paleta de ${paleta.sabor}`} />
</div>
...

Não vamos esquecer de mover o trecho de estilos necessários de PaletaLista.css para src/components/PaletaListaItem/PaletaListaItem.css:


.PaletaListaItem {
  font-family: "Exo";
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  padding: 10px;
  width: 315px;
  display: flex;
  justify-content: space-around;
  position: relative;
}
​
@media (max-width: 400px) {
  .PaletaListaItem {
    width: 210px;
    height: 180px;
  }
}
​
.PaletaListaItem__badge {
  background-color: greenyellow;
  width: 20px;
  height: 20px;
  text-align: center;
  vertical-align: middle;
  position: absolute;
  color: black;
  font-size: 0.8em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  top: -9px;
  left: -9px;
}
​
.PaletaListaItem > div {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
​
.PaletaListaItem__titulo {
  font-size: 1.5em;
  font-weight: 700;
  line-height: 100%;
}
​
.PaletaListaItem__descricao {
  font-size: 0.85em;
}
​
.PaletaListaItem__preco {
  color: darkviolet;
}
​
.Acoes {
  display: flex;
  justify-content: space-between;
}
​
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
​
.Acoes__remover {
  background-color: red;
}
​
.Acoes__adicionar {
  background-color: darkviolet;
}
​
.Acoes__adicionar--preencher {
  width: 100%;
}
​
.PaletaListaItem__foto {
  height: 150px;
  margin-right: -60px;
}
Edições realizadas, hora de conferir como ficaram os arquivos.
Assim ficou o componente PaletaListaItem:
import "./PaletaListaItem.css";
​
function PaletaListaItem() {
  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button className="Acoes__remover" onClick={() => removerItem(index)}>
        remover
      </button>
    );
​
  const badgeCounter = (canRender, index) =>
    Boolean(canRender) && (
      <span className="PaletaListaItem__badge">
        {" "}
        {paletaSelecionada[index]}{" "}
      </span>
    );
​
  return (
    <div className="PaletaListaItem">
      {badgeCounter(paletaSelecionada[index], index)}
      <div>
        <div className="PaletaListaItem__titulo"> {paleta.titulo} </div>
        <div className="PaletaListaItem__preco">
          R$ {paleta.preco.toFixed(2)}
        </div>
        <div className="PaletaListaItem__descricao"> {paleta.descricao} </div>
        <div className="PaletaListaItem__acoes Acoes">
          <button
            className={`Acoes__adicionar ${
              !paletaSelecionada[index] && "Acoes__adicionar--preencher"
            }`}
            onClick={() => adicionarItem(index)}
          >
            adicionar
          </button>
          {removeButton(paletaSelecionada[index], index)}
        </div>
      </div>
      <img
        className="PaletaListaItem__foto"
        src={paleta.foto}
        alt={`Paleta de ${paleta.sabor}`}
      />
    </div>
  );
}
​
export default PaletaListaItem;
No arquivo PaletaLista.jsx já iremos adicionar o import de PaletaListaItem.jsx e implementá-lo no lugar antes ocupado pelo trecho removido, lembrando de adicionar a propriedade key, ficando assim:
import { paletas } from "mocks/paletas.js";
import "./PaletaLista.css";
import { useState } from "react";
import PaletaListaItem from "components/PaletaListaItem/PaletaListaItem";
​
function PaletaLista() {
  const [paletaSelecionada, setPaletaSelecionada] = useState({});
​
  const adicionarItem = (paletaIndex) => {
    const paleta = {
      [paletaIndex]: (paletaSelecionada[paletaIndex] || 0) + 1}
    setPaletaSelecionada({ ...paletaSelecionada, ...paleta });
  };
​
  const removerItem = (paletaIndex) => {
    const paleta = {
      [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) - 1}
    setPaletaSelecionada({ ...paletaSelecionada, ...paleta });
  };
​
  return (
    <div className="PaletaLista">
      {paletas.map((paleta, index) => (
        <PaletaListaItem key={`PaletaListaItem-${index}`} />
      ))}
    </div>
  );
}
​
export default PaletaLista;
E por último, assim ficou a folha de estilos PaletaLista.css:
.PaletaLista {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px 50px;
}
​
@media (max-width: 1220px) {
  .PaletaLista {
    grid-template-columns: repeat(2, 1fr);
  }
}
​
@media (max-width: 840px) {
  .PaletaLista {
    grid-template-columns: 1fr;
  }
}
Ufa, agora podemos ver nosso trabalho:
Exibição de erro no navegador
Parece que não ficou como esperávamos. Isso ocorreu devido aos componentes tratarem seu conteúdo através de escopos e obviamente separamos lógicas que estavam intrinsecamente ligadas para o funcionamento correto.
Mas isso não significa que devemos atrelá-los novamente, perdendo o benefício de componentes pequenos e reutilizáveis. Vamos, por hora, apenas criar mocks* provisórios para simular os escopos.
* mocks, são objetos simulados ou simplesmente mock em desenvolvimento de software são objetos que simulam o comportamento de objetos reais de forma controlada. Normalmente criados para testar o comportamento de outros objetos.
Todos os erros de escopo estão presentes no componente PaletaListaItem. vamos adicionar os mocks necessários e inexistentes no escopo do nosso componente:
...
function PaletaListaItem() {
​
	{/* NOVO TRECHO */}
​
	const removerItem = (i) => console.log('remover' + i);
	const adicionarItem = (i) => console.log('adicionar' + i);
	const paletaSelecionada = [0];
	const index = 0;
	const paleta = {
		titulo: "Açaí com Leite Condensado",
		descricao:
		"Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
		foto: require("assets/images/acai-com-leite-condensado.png"),
		preco: 10.0,
		sabor: "Açaí",
		recheio: "Leite Condensado",
		possuiRecheio: true,
	};
​
	{/* FIM DO NOVO TRECHO */}
​
	const removeButton = (canRender, index) =>
...
Logo a aplicação volta a renderizar nossa lista:
Exibição da aplição sem o erro no navegador
Porém, só nos é exibido um único objeto, neste caso, o que escolhemos para servir de mock o Açaí com Leite Condensado.
Para obtermos novamente uma renderização dinâmica em nosso componente, se faz necessário conhecer o conceito de propriedades parametrizáveis para realizar data binding, a ser explicado no próximo tópico.
* Data Binding é uma técnica geral que une duas fontes de dados/informações e as mantém em sincronia em um processo que estabelece uma conexão entre interface de usuário da aplicação e a lógica de negócio.


Propriedades parametrizáveis (PAI P/FILHO)



Para implementar em nossa aplicação é necessário parametrizar na assinatura de método da função principal de nosso componente os dados que substituirão nossos mocks.


Basicamente temos 3 propriedades a serem utilizadas no componente PaletaListaItem, sendo eles o objeto de paleta a ser renderizado, quantidade de paletas selecionadas e o index.

Não iremos tratar neste tópico os mocks de funções.

Dito isto vamos remover o seguinte trecho:


...
const paletaSelecionada = [0];
const index = 0;
const paleta = {
    titulo: "Açaí com Leite Condensado",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: require("assets/images/acai-com-leite-condensado.png").default,
    preco: 10.0,
    sabor: "Açaí",
    recheio: "Leite Condensado",
    possuiRecheio: true,
  };
...

Em seguida adicionar os parâmetros, na assinatura de método de forma desconstruída:

function PaletaListaItem({ paleta, quantidadeSelecionada, index }) {

Note que ao fazer isto devemos substituir em todos os locais onde aparece paletaSelecionada[index] por quantidadeSelecionada, ficando assim o arquivo PaletaListaItem.jsx:


import "./PaletaListaItem.css";

function PaletaListaItem({ paleta, quantidadeSelecionada, index }) {
  const removerItem = (i) => console.log("remover" + i);
  const adicionarItem = (i) => console.log("adicionar" + i);

  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button className="Acoes__remover" onClick={() => removerItem(index)}>
        {" "}
        remover{" "}
      </button>
    );

  const badgeCounter = (canRender) =>
    Boolean(canRender) && (
      <span className="PaletaListaItem__badge"> {quantidadeSelecionada} </span>
    );

  return (
    <div className="PaletaListaItem">
      {badgeCounter(quantidadeSelecionada, index)}
      <div>
        <div className="PaletaListaItem__titulo"> {paleta.titulo} </div>
        <div className="PaletaListaItem__preco">
          R$ {paleta.preco.toFixed(2)}
        </div>
        <div className="PaletaListaItem__descricao"> {paleta.descricao} </div>
        <div className="PaletaListaItem__acoes Acoes">
          <button
            className={`Acoes__adicionar ${
              !quantidadeSelecionada && "Acoes__adicionar--preencher"
            }`}
            onClick={() => adicionarItem(index)}
          >
            adicionar
          </button>
          {removeButton(quantidadeSelecionada, index)}
        </div>
      </div>
      <img
        className="PaletaListaItem__foto"
        src={paleta.foto}
        alt={`Paleta de ${paleta.sabor}`}
      />
    </div>
  );
}

export default PaletaListaItem;

Agora devemos passar os parâmetros no componente PaletaLista:

...
{paletas.map((paleta, index) =>
	<PaletaListaItem
		key={`PaletaListaItem-${index}`}
		paleta={paleta}
		quantidadeSelecionada={paletaSelecionada[index]}
		index={index} />
	)
}
...

E voilá:


Ainda temos de resolver a comunicação de ações a serem efetuadas entre componentes filhos para componentes pai.


Propriedades parametrizáveis (FILHO P/PAI)



Através das propriedades parametrizáveis foi possível transmitir dados entre componentes pais para filhos, já para realizar a transmissão de um componente filho para um componente pai é similar.
Remova o trecho correspondente às funções de mock:
...
const removerItem = (i) => console.log('remover' + i);
const adicionarItem = (i) => console.log('adicionar' + i);
...
Em seguida adicione as propriedades onRemove e onAdd na assinatura de método de forma desconstruída no componente PaletaListaItem:


...
function PaletaListaItem({ paleta, quantidadeSelecionada, index, onRemove, onAdd }) {
...

Então substitua as chamadas de removerItem e adicionarItem pelos parâmetros que criamos respectivamente:
...
const removeButton = (canRender, index) =>
	Boolean(canRender) && (<button className="Acoes__remover" onClick={() => onRemove(index)}>remover</button>);
...
...
<button className={`Acoes__adicionar ${!quantidadeSelecionada && "Acoes__adicionar--preencher"}`} onClick={() => onAdd(index)}>adicionar</button>
...
Feito isto, iremos adicionar as manipulações de dados no componente pai, neste caso PaletaLista:
...
<div className="PaletaLista">
	{paletas.map((paleta, index) =>
		<PaletaListaItem
			key={`PaletaListaItem-${index}`}
			paleta={paleta}
			quantidadeSelecionada={paletaSelecionada[index]}
			index={index}
			onAdd={index => adicionarItem(index)}
			onRemove={index => removerItem(index)} />
		)
	}
</div>
...
Pronto, nossa aplicação continua funcional e igual antes de todas as modificações realizadas.


Para finalizar, vamos tratar de observar o funcionamento da extensão React Developer Tools.


Ao desenvolver uma aplicação React, durante o processo de debug a extensão do React Developer Tools nos auxilia de uma forma prática e simples.
Após a instalação obteremos duas novas guias em nosso Chrome DevTools, as abas ⚛️ Components e ⚛️ Profiler.
A guia ⚛️ Components mostra os componentes em estrutura de árvore de elementos React que foram renderizados na página, bem como os subcomponentes que eles acabaram por renderizar.
Ao selecionar um dos componentes na árvore, você pode inspecionar e editar seus atributos e estado atuais.
A guia ⚛️ Profiler permite registrar informações de desempenho.

Próximos passos
Até o momento a aplicação parece bem robusta e cumpre a maioria de suas funções propostas, como cardápio, porém, seria interessante haver centralização das informações na sacola e possivelmente uma funcionalidade para realizar filtros ou buscas pelos itens desejados. Nossa aplicação tem features a serem implementadas e possíveis integrações a serem adicionadas, mas é o momento de absorver o conteúdo da aula atual e se preparar para as demais aulas.


SEMANA 2


Recapitulando
Antes de darmos início a próxima aula, iremos relembrar os itens aprendidos na aula anterior:
Conhecemos e aplicamos o conceito de renderização condicional;
Implementamos estilização condicional;
Organizamos o projeto e sua arquitetura de pastas;
Realizamos a subdivisão de componentes maiores;
Aprendemos a parametrizar dados entre componentes de filho p/ pais e vice-versa;
Observamos brevemente algumas utilidades do React Developer Tools;
Dito isto, vamos dar sequência com algumas funcionalidades interessantes para a nossa aplicação.


Integração de dados

Toda aplicação React, que realiza a comunicação e transferência de dados de forma dinâmica entre plataformas, necessita fazer a integração com uma aplicação backend carinhosamente chamada de API.
Atualmente estamos utilizando o arquivo paletas.js para fazer a renderização de conteúdo e ser exibido em nossa aplicação. Mas precisamos fazer a conexão entre sistemas para que isso seja realizado de forma dinâmica.
Considerando o conhecimento e construção prévia do backend desenvolvido ao decorrer do curso, iremos realizar a integração através de serviços para utilizar esses dados.

API helper

Antes de qualquer coisa, sabemos que para realizar as integrações e chamadas para a API são necessárias diferentes URL's*, para a obtenção de dados, que ao decorrer do desenvolvimento do projeto podem ser alteradas, sendo desta maneira necessário cuidado e centralização destas URL's em um único lugar/arquivo da aplicação, para possibilitar facilidade de manutenção e evitar a repetição de edição do mesmo dado

* URL (Uniform Resource Locator) é a forma padronizada de representação de diferentes documentos, mídia e serviços de rede na internet, capaz de fornecer a cada documento um endereço único.

Sendo assim, precisamos de um helper* que fará a centralização e gerenciamento de URL's da aplicação. Se chamará Api.js e será adicionado dentro de uma nova pasta chamada helpers dentro de src:

* helpers são métodos recomendados a serem utilizados quando é necessário realizar a mesma tarefa em várias páginas da mesma aplicação. Esses métodos especiais permitem a utilização de um bloco comum de código entre diferentes arquivos

Observe que o objeto Api retorna funções que farão a composição do endereço/recurso desejado a ser utilizado nas requisições HTTP*.
* HTTP Hypertext Transfer Protocol (Protocolo de transferência de Hipertexto) é um protocolo cliente-servidor para obtenção de recursos/arquivos.
Atualmente este arquivo possui os endereços de:

 baseUrl: URL Base da da aplicação, ou seja, o endereço principal de onde será executado o serviço de API/ Back end, neste caso a aplicação a ser usada para demonstrar seu uso será executada na porta 4000;

paletaEndpoint: Função utilizada para separar o recurso e módulo de paletas dentro da API.

paletaLista: Retorna a coleção de paletas a serem renderizadas em tela;

paletaById: Retorna uma única paleta especificada por sua propriedade id;

createPaleta: Adiciona uma nova paleta à coleção de dados já existente, através da API;

updatePaletaById: Atualiza uma paleta existente especificada por sua propriedade id e

Estes endereços e funcionalidades serão implementados gradativamente em nosso projeto.


Criação de serviço


Agora que temos um gerenciador para todos os endereços de requisição para a integração das aplicações, podemos criar o serviço PaletaService.js dentro de uma nova pasta de services a ser incluída em src, o qual ficará responsável pela execução das requisições de API referente às Paletas:

import { Api } from "helpers/Api";
​
const parseResponse = (response) => response.json();
​
export const PaletaService = {
  getLista: () =>
    fetch(Api.paletaLista(), { method: "GET" }).then(parseResponse),
  getById: (id) =>
    fetch(Api.paletaById(id), { method: "GET" }).then(parseResponse),
  create: () =>
    fetch(Api.createPaleta(), { method: "POST" }).then(parseResponse),
  updateById: (id) =>
    fetch(Api.updatePaletaById(id), { method: "PUT" }).then(parseResponse),
  deleteById: (id) =>
    fetch(Api.deletePaletaById(id), { method: "DELETE" }).then(parseResponse),
};

Para realizar as requests estamos utilizando o método global fetch que nos devolve uma Promise* e realizamos o parse da resposta para json.

* Promise é um objeto usado para processamento assíncrono. Um Promise (em português "promessa") representa um valor que pode estar disponível agora, no futuro ou nunca.

Serviço criado, agora é necessário realizar a integração entre os dados da requisição e a interface de usuário.

Implementação da integração

Para realizar integração certifique-se de que o projeto de backend esteja em execução, que a conexão com o banco de dados esteja funcionando e que existam paletas disponíveis no banco para compor a nossa aplicação.

Consideramos para esta etapa o aprendizado e acompanhamento das aulas anteriores de backend que serão fundamentais para realizar o processo de integração.
Vamos iniciar REMOVENDO o import das paletas utilizadas para mock no arquivo PaletaLista.jsx em src/components, no caso esta linha:


import { paletas } from "mocks/paletas.js";

Em seguida obteremos alguns erros no console do navegador e no terminal de execução da aplicação:

Mas não se preocupe, é fácil de corrigir e pode ser feito adicionando uma constante chamada paletas dentro do escopo do componente recebendo um array vazio, porém já irei demonstrar o exemplo utilizando o hook useState, pois iremos atualizar essa variável com os dados da requisição para a API e isso deve refletir como atualização na view:

function PaletaLista() {
​
        {/* NOVO TRECHO */}
        const [paletas, setPaletas] = useState([]);
        {/* FIM DO NOVO TRECHO */}
​
        const [paletaSelecionada, setPaletaSelecionada] = useState({});
…

Logo nosso terminal voltará a executar a aplicação:

Porém em nosso browser teremos um cardápio completamente vazio:

É nesse momento que entra a inclusão das chamadas/requisição de dados para a API.

Adicione o import do service:

import { PaletaService } from "services/PaletaService";

Crie uma função assíncrona dentro do escopo do componente PaletaLista.jsx chamada getLista:

const getLista = async () => {
  const response = await PaletaService.getLista();
  setPaletas(response);
};

Note que para chamar uma função assíncrona é necessário adicionar o prefixo async antes de sua declaração e o prefixo await onde a execução em sequência do método atual será esperada até que haja o retorno do dado desejado pelo serviço assíncrono.
Como este método não pode ser executado sem ser chamado, é necessário adicionarmos ele no fluxo do ciclo de vida de renderização do componente, neste caso estamos usando componentes funcionais e uma forma de realizar isso é utilizando o hook useEffect dentro do escopo do componente PaletaLista.jsx:

useEffect(() => {
  getLista();
}, []);

* Usando o hook useEffect informamos ao React que o componente precisa executar algo apenas após sua renderização. O React irá se encarregar de chamar a função passada a ele depois de realizar as atualizações do DOM.

Observe que como segundo parâmetro passamos um array vazio e é importante informar este parâmetro ao useEffect pois sem ele a aplicação entraria em looping infinito, dado que sempre que há uma atualização em um hook de useState que faz alterações no template/ view será acionado o hook de useEffect, que neste caso fará a chamada da requisição de dados para a API e assim por diante.

Para normalizarmos as instruções passadas com os arquivos manipulados, segue um exemplo de como ficou o arquivo PaletaLista.jsx

import "./PaletaLista.css";
import { useState, useEffect } from "react";
import PaletaListaItem from "components/PaletaListaItem/PaletaListaItem";
import { PaletaService } from "services/PaletaService";
​
function PaletaLista() {
  const [paletas, setPaletas] = useState([]);
​
  const [paletaSelecionada, setPaletaSelecionada] = useState({});
​
  const adicionarItem = (paletaIndex) => {
    const paleta = {
      [paletaIndex]: (paletaSelecionada[paletaIndex] || 0) + 1,
    };
    setPaletaSelecionada({ ...paletaSelecionada, ...paleta });
  };
​
  const removerItem = (paletaIndex) => {
    const paleta = {
      [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) - 1,
    };
    setPaletaSelecionada({ ...paletaSelecionada, ...paleta });
  };
​
  const getLista = async () => {
    const response = await PaletaService.getLista();
    setPaletas(response);
  };
​
  useEffect(() => {
    getLista();
  }, []);
​
  return (
    <div className="PaletaLista">
      {paletas.map((paleta, index) => (
        <PaletaListaItem
          key={`PaletaListaItem-${index}`}
          paleta={paleta}
          quantidadeSelecionada={paletaSelecionada[index]}
          index={index}
          onAdd={(index) => adicionarItem(index)}
          onRemove={(index) => removerItem(index)}
        />
      ))}
    </div>
  );
}
​
export default PaletaLista;
Será visualizado algo semelhante a imagem:


Alguns dados estão aparecendo, algumas informações estão faltando e isso é comum de toda integração entre sistemas, já que preparamos nosso componente PaletaListaItem.jsx para receber título, preco, descricao, foto e sabor, mas a API nos retorna um objeto com _id, descricao, foto, preco e sabor.
Logo percebemos que não temos o título e que também é necessário ajustar a renderização das imagens.
Para resolver esses problemas é comum utilizarmos uma função auxiliar que fará o mapeamento dos dados advindos da API e estruturar em um formato utilizado na aplicação Frontend. Não é a solução ideal, pois tem custo de processamento, mas evita alterações nos projetos e cria uma camada de proteção e prevenção de erros.

Mapeamento de dados

Crie no arquivo PaletaService.js as funções, que substituirão o parseResponse na requisição de obtenção da lista e mapeamento de estrutura de dados, chamadas transformPaleta e parseTransformLista respectivamente:

const transformPaleta = (paleta) => {
  const [sabor, recheio] = paleta.sabor.split(" com ");
​
  return {
    ...paleta,
    id: paleta._id,
    titulo: paleta.sabor,
    sabor,
    ...(recheio && { recheio }),
    possuiRecheio: Boolean(recheio),
  };
};
​
const parseTransformLista = (response) =>
  parseResponse(response).then((paletas) => paletas.map(transformPaleta));


A função transformPaleta faz o mapeamento descrito anteriormente, criando um objeto compatível com o componente atual. Note que a propriedade recheio só é criada se a paleta realmente tem em seu título uma descrição após a preposição "com", que é usada para realizar a separação entre recheio e sabor permitindo a adição de novas propriedades que futuramente utilizaremos para manipular filtros.
Já a função parseTransformLista é a junção de parseResponse e transformPaleta. Lembre-se de substituir parseResponse por parseTransformLista dentro do método getLista:


getLista: () => fetch(Api.paletaLista(), { method: "GET" }).then(parseTransformLista),


A título de esclarecimentos, vamos exibir como ficou o arquivo PaletaService.js:


import { Api } from "helpers/Api";
​
const parseResponse = (response) => response.json();
​
const transformPaleta = (paleta) => {
  const [sabor, recheio] = paleta.sabor.split(" com ");
​
  return {
    ...paleta,
    id: paleta._id,
    titulo: paleta.sabor,
    sabor,
    ...(recheio && { recheio }),
    possuiRecheio: Boolean(recheio),
  };
};
​
const parseTransformLista = (response) =>
  parseResponse(response).then((paletas) => paletas.map(transformPaleta));
​
export const PaletaService = {
  getLista: () =>
    fetch(Api.paletaLista(), { method: "GET" }).then(parseTransformLista),
  getById: (id) =>
    fetch(Api.paletaById(id), { method: "GET" }).then(parseResponse),
  create: () =>
    fetch(Api.createPaleta(), { method: "POST" }).then(parseResponse),
  updateById: (id) =>
    fetch(Api.updatePaletaById(id), { method: "PUT" }).then(parseResponse),
  deleteById: (id) =>
    fetch(Api.deletePaletaById(id), { method: "DELETE" }).then(parseResponse),
    };

    Nossa aplicação no browser parece ter agora todas as suas propriedades em seus devidos lugares:


Exceto pelas imagens.
Mas o que está ocorrendo para haver essa divergência? Isso será explicado no tópico seguinte.
Estrutura e funcionamento de assets
As imagens e assets que ficam disponibilizados dentro da pasta src fazem parte da aplicação e necessitam ser compilados previamente à sua execução.
Quando escolhemos criar o arquivo paletas.js em src/mocks, consideramos que as informações fariam parte da aplicação e os endereços de imagem das paletas seriam fixos, diferente do que acontece no formato de espera da resposta e entrega dos dados pela API que é executada após a renderização e compilação da aplicação, trazendo endereços dinâmicos.
Desta maneira não há como acessar em tempo de execução arquivos com endereços no contexto 

fonte da aplicação, mas é possível se eles estiverem disponibilizados de forma pública.
A real necessidade do projeto é conter as imagens dinâmicas fora da aplicação, ou seja, dados mutáveis e manipuláveis por fontes externas devem ser armazenados e distribuídos em serviços externos, porém para fins didáticos utilizaremos as imagens dentro do projeto, de forma a simular que as URL's devolvidas pela API no atributo foto.
Mas como fazer isso? Simples, apenas moveremos a pasta imagens para uma nova pasta chamada assets que criaremos dentro da pasta public na raíz do projeto:



Assim ficou a pasta src:


Note que só de realizar essa transferência de imagens entre pastas o projeto volta a funcionar como anteriormente:


Para evitarmos confusões futuras, vamos aproveitar e ajustar também o arquivo src/mocks/paletas.js:


export const paletas = [
  {
    titulo: "Açaí com Leite Condensado",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "assets/images/acai-com-leite-condensado.png",
    preco: 10.0,
    sabor: "Açaí",
    recheio: "Leite Condensado",
    possuiRecheio: true,
  },
  {
    titulo: "Banana com Nutella",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "assets/images/banana-com-nutella.png",
    preco: 10.0,
    sabor: "Banana",
    recheio: "Nutella",
    possuiRecheio: true,
  },
  {
    titulo: "Chocolate Belga",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "assets/images/chocolate-belga.png",
    preco: 7.0,
    sabor: "Chocolate Belga",
    possuiRecheio: false,
  },
  {
    titulo: "Chocolate Belga com Brigadeiro",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "assets/images/chocolate-belga-com-brigadeiro.png",
    preco: 10.0,
    sabor: "Chocolate Belga",
    recheio: "Brigadeiro",
    possuiRecheio: true,
  },
  {
    titulo: "Chocolate Branco",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "assets/images/chocolate-branco.png",
    preco: 7.0,
    sabor: "Chocolate Branco",
    possuiRecheio: false,
  },
  {
    titulo: "Coco",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "assets/images/coco.png",
    preco: 7.0,
    sabor: "Coco",
    possuiRecheio: false,
  },
  {
    titulo: "Coco com Doce de Leite",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "assets/images/coco-com-doce-de-leite.png",
    preco: 10.0,
    sabor: "Coco",
    recheio: "Doce de Leite",
    possuiRecheio: true,
  },
  {
    titulo: "Cookies",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "assets/images/cookies.png",
    preco: 7.0,
    sabor: "Cookies",
    possuiRecheio: false,
  },
  {
    titulo: "Doce de Leite com Doce de Leite",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "assets/images/doce-de-leite-com-doce-de-leite.png",
    preco: 10.0,
    sabor: "Doce de Leite",
    recheio: "Doce de Leite",
    possuiRecheio: true,
  },
  {
    titulo: "Limão",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "assets/images/limao.png",
    preco: 7.0,
    sabor: "Limão",
    possuiRecheio: false,
  },
  {
    titulo: "Maracujá",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "assets/images/maracuja.png",
    preco: 7.0,
    sabor: "Maracujá",
    possuiRecheio: false,
  },
  {
    titulo: "Maracujá com Leite Condensado",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "assets/images/maracuja-com-leite-condensado.png",
    preco: 10.0,
    sabor: "Maracujá",
    recheio: "Leite Condensado",
    possuiRecheio: true,
  },
  {
    titulo: "Milho Verde",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "assets/images/milho-verde.png",
    preco: 7.0,
    sabor: "Milho Verde",
    possuiRecheio: false,
  },
  {
    titulo: "Morango",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "assets/images/morango.png",
    preco: 7.0,
    sabor: "Morango",
    possuiRecheio: false,
  },
  {
    titulo: "Morango com Leite Condensado",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "assets/images/morango-com-leite-condensado.png",
    preco: 10.0,
    sabor: "Morango",
    recheio: "Leite Condensado",
    possuiRecheio: true,
  },
  {
    titulo: "Morango com Nutella",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "assets/images/morango-com-nutella.png",
    preco: 10.0,
    sabor: "Morango",
    recheio: "Nutella",
    possuiRecheio: true,
  },
  {
    titulo: "Ninho com Nutella",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "assets/images/ninho-com-nutella.png",
    preco: 10.0,
    sabor: "Ninho",
    recheio: "Nutella",
    possuiRecheio: true,
  },
  {
    titulo: "Ninho com Ovomaltine",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "assets/images/ninho-com-ovomaltine.png",
    preco: 10.0,
    sabor: "Ninho",
    recheio: "Ovomaltine",
    possuiRecheio: true,
  },
  {
    titulo: "Uva",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "assets/images/uva.png",
    preco: 7.0,
    sabor: "Uva",
    possuiRecheio: false,
  },
];


Agora que finalizamos a integração de sistemas e realizamos seus devidos ajustes, vamos dar sequência com a implementação de uma requisição parametrizável para obter detalhes de um único item.
Mas antes é necessário adicionar a estrutura que receberá esses dados. Vamos criar um modal.

Criação de modal


Antes de prosseguir é interessante dar os esclarecimentos técnicos sobre a palavra modal:
Modal é basicamente uma janela que abre sobre o conteúdo da página sem se desfazer dele. É utilizado com o intuito de passar algum aviso ou informação extra para dar suporte ao conteúdo da página principal.
Conhecimento passado, vamos iniciar com a criação dos arquivos necessários para deixá-lo dinâmico.
Para dar início é necessário entender que o modal se sobrepõe acima da camada chamada overlay que, por sua vez é uma sobreposição sobre a janela de conteúdo principal parece confuso, mas na prática é bem simples. Assim vamos começar criando o componente e sua folha de estilos, respectivamente Overlay.jsx e Overlay.css, dentro de uma nova pasta Overlay para gerenciar seu conteúdo em src/components. A seguir será exibido o arquivo Overlay.jsx:

Para este componente é necessário que ele seja genérico, afinal pode ser utilizado por inúmeros outros componentes que não só o modal como uma barra lateral etc. Desta maneira, obtemos um click a ser emitido na propriedade overlayClick e um componente filho na propriedade children.
Não podemos esquecer também da folha de estilos Overlay.css:

Não é necessário adicionar este componente sobre a aplicação ainda, mas se você adicionar terá algo como

Com a primeira dependência criada, agora podemos partir para a criação da estrutura de modal que, por sua vez, também será genérico para ser reutilizado na aplicação.
Crie o componente e sua folha de estilos, respectivamente Modal.jsx e Modal.css, dentro de uma nova pasta Modal para gerenciar seu conteúdo em src/components. A seguir será exibido o arquivo Modal.jsx

import "./Modal.css";
import Overlay from "components/Overlay/Overlay";
​
function Modal({ children, closeModal }) {
  const handleClick = (e, canClose) => {
    e.stopPropagation();
    if (canClose) closeModal();
  };
​
  return (
    <Overlay overlayClick={closeModal}>
      <div className="Modal" onClick={handleClick}>
        <span className="Modal__close" onClick={(e) => handleClick(e, true)}>
          +
        </span>
        <div className="Modal__body">{children}</div>
      </div>
    </Overlay>
  );
}
​
export default Modal;

Também é necessário que ele seja genérico, afinal pode ser utilizado para diferentes finalidades e contextos. Desta maneira, obtemos um click a ser emitido na propriedade closeModal e um componente filho na propriedade children.
Nele também contém uma função que faz o gerenciamento dos eventos de click, para evitar o efeito de event bubbling.
* Event bubbling relaciona-se com a ordem na qual os manipuladores de eventos são chamados quando um elemento está aninhado dentro de um segundo elemento e ambos os elementos registram um ouvinte para o mesmo evento, como o de clique.
Não podemos esquecer também da folha de estilos Modal.css:

.Modal {
  padding: 30px 80px 20px 20px;
  min-width: 300px;
  min-height: 200px;
  max-width: 700px;
  max-height: 450px;
  background: #50c5ee;
  position: relative;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.6);
}
​
.Modal__close {
  font-size: 2em;
  position: absolute;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  top: 20px;
  right: 20px;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  color: white;
  transform: rotate(45deg);
  transition: all 1s;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
}
​
.Modal__close:hover {
  background-color: rgba(0, 0, 0, 0.4);
}
​
.Modal__body {
  border-radius: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
​
@media (max-width: 400px) {
  .Modal {
    padding: 15px 70px 15px 15px;
  }
}



Como citado anteriormente, não é necessário adicionar este componente na aplicação ainda, mas se você adicionar terá algo como:


Agora poderemos criar o componente de conteúdo que receberá uma única paleta da requisição detalhada por id.
O componente será PaletaDetalhesModal com seu arquivo de lógica PaletaDetalhesModal.jsx e seu arquivo de estilo PaletaDetalhesModal.css dentro da nova pasta PaletaDetalhesModal a ser criada em src/components.
Para idealizar o layout podemos utilizar uma constante auxiliar contendo as informações de uma paleta e utilizar seus dados para realizar o processo de data binding no template, mas lembre-se de deletar posteriormente a criação do componente.


const paleta = {
  titulo: "Açaí com Leite Condensado",
  descricao: "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
  foto: "assets/images/acai-com-leite-condensado.png",
  preco: 10.0,
  sabor: "Açaí",
  recheio: "Leite Condensado",
  possuiRecheio: true,
}

Como as demonstrações seguintes consistem na estruturação de componentes ensinados nas aulas anteriores, serão apresentados os arquivos dos componentes e sua respectiva aparência como aplicação renderizada no navegador.
Conteúdo do arquivo PaletaDetalhesModal.jsx:

Conteúdo do arquivo PaletaDetalhesModal.jsx:
import "./PaletaDetalhesModal.css";
import Modal from "components/Modal/Modal";
​
function PaletaDetalhesModal({ paleta, closeModal }) {
  return (
    <Modal closeModal={closeModal}>
      <div className="PaletaDetalhesModal">
        <div>
          <div className="PaletaDetalhesModal__titulo"> {paleta.titulo} </div>
          <div className="PaletaDetalhesModal__preco">
            {" "}
            R$ {Number(paleta.preco).toFixed(2)}{" "}
          </div>
          <div className="PaletaDetalhesModal__descricao">
            {" "}
            <b>Sabor:</b> {paleta.sabor}{" "}
          </div>
          {paleta.recheio && (
            <div className="PaletaDetalhesModal__descricao">
              {" "}
              <b>Recheio:</b> {paleta.recheio}{" "}
            </div>
          )}
          <div className="PaletaDetalhesModal__descricao">
            {" "}
            <b>Descrição:</b> {paleta.descricao}{" "}
          </div>
        </div>
        <img
          className="PaletaDetalhesModal__foto"
          src={paleta.foto}
          alt={`Paleta de ${paleta.sabor}`}
        />
      </div>
    </Modal>
  );
}
​
export default PaletaDetalhesModal;


Note que o componente PaletaDetalhesModal importa e faz uso do componente Modal que, por sua vez, também faz uso da camada de Overlay. Desta forma temos funcionalidades básicas customizáveis e reutilizáveis para todo o projeto.
A seguir sua respectiva folha de estilos PaletaDetalhesModal.css:


Para visualizar a aparência da aplicação podemos importar e adicionar o componente PaletaDetalhesModal em nosso componente PaletaLista, lembrando de utilizar a constante auxiliar paleta demonstrada anteriormente

PaletaDetalhesModal em nosso componente PaletaLista, lembrando de utilizar a constante auxiliar paleta demonstrada anteriormente:
import "./PaletaLista.css";
import { useState, useEffect } from "react";
import PaletaListaItem from "components/PaletaListaItem/PaletaListaItem";
import { PaletaService } from "services/PaletaService";
​
{ /* NOVO TRECHO */ }
import PaletaDetalhesModal from "components/PaletaDetalhesModal/PaletaDetalhesModal";
{ /* FIM DO NOVO TRECHO */ }
​
function PaletaLista() {
  const [paletas, setPaletas] = useState([]);
​
  const [paletaSelecionada, setPaletaSelecionada] = useState({});
​
  { /* NOVO TRECHO */ }
  const paleta = {
    titulo: "Açaí com Leite Condensado",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "assets/images/acai-com-leite-condensado.png",
    preco: 10.0,
    sabor: "Açaí",
    recheio: "Leite Condensado",
    possuiRecheio: true,
  };
  { /* FIM DO NOVO TRECHO */ }
​
  const adicionarItem = (paletaIndex) => {
    const paleta = {
      [paletaIndex]: (paletaSelecionada[paletaIndex] || 0) + 1,
    };
    setPaletaSelecionada({ ...paletaSelecionada, ...paleta });
  };
​
  const removerItem = (paletaIndex) => {
    const paleta = {
      [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) - 1,
    };
    setPaletaSelecionada({ ...paletaSelecionada, ...paleta });
  };
​
  const getLista = async () => {
    const response = await PaletaService.getLista();
    setPaletas(response);
  };
​
  useEffect(() => {
    getLista();
  }, []);
​
  return (
    <div className="PaletaLista">
      {paletas.map((paleta, index) => (
        <PaletaListaItem
          key={`PaletaListaItem-${index}`}
          paleta={paleta}
          quantidadeSelecionada={paletaSelecionada[index]}
          index={index}
          onAdd={(index) => adicionarItem(index)}
          onRemove={(index) => removerItem(index)}
        />
      ))}
​
      {/* NOVO TRECHO */}
      <PaletaDetalhesModal paleta={paleta} />
      {/* FIM DO NOVO TRECHO */}
    </div>
  );
}
​
export default PaletaLista;


Com o seguinte resultado:


A partir deste ponto poderemos realizar o mecanismo de abertura e fechamento do modal.
Conseguiremos este feito com a implementação do já conhecido hook de useState do React e nele iremos transitar entre o valor booleano false e a própria paleta a ser exibida, desta forma eliminamos a necessidade de controlar somente a abertura e fechamento como também o conteúdo que deve ser passado e exibido dentro do modal.
Adicione o hook de useState dentro do escopo do componente PaletaLista recebendo as propriedades paletaModal e a função setPaletaModal:
const [paletaModal, setPaletaModal] = useState(false);
Lembre-se de inicializar com o valor false.
Logo em seguida já podemos substituir o trecho em PaletaLista onde está presente o componente PaletaDetalhesModal pela renderização condicional e passagem de dados com base na constante paletaModal e o mecanismo de fechamento do modal com base no evento closeModal atribuindo em setPaletaModal o valor false.
Também já é possível remover a constante paleta utilizada para idealizar a renderização do layout.
Substitua:


<PaletaDetalhesModal paleta={paleta} />

Por:


{paletaModal && <PaletaDetalhesModal paleta={paletaModal} closeModal={() => setPaletaModal(false)} />}

Configurações finais do Modal




