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

Primeiramente, o que ?? o React?

O React ?? uma biblioteca JavaScript para criar interfaces de usu??rio e nos permite compor interfaces complexas a partir de trechos isolados de c??digo, chamados componentes.

Esses componentes, mais do que trechos de c??digo, s??o fragmentos da interface completa, cada um com seu pr??prio gerenciamento da l??gica de intera????o entre a estrutura, o estilo e os dados, tornando simples a constru????o, reutiliza????o e manuten????o deles em uma aplica????o.

Um bom exemplo mostrado na imagem acima ?? o componente de capa, reutilizado em partes diferentes da mesma aplica????o.

?? mais simples do que parece! Mas vamos por partes. Come??ando pela instala????o de algumas extens??es que auxiliar??o o nosso desenvolvimento.


Quando trabalhamos com React, temos muitos trechos estruturais e de sintaxe do c??digo que se repetem v??rias vezes. Eventualmente, voc?? come??a a pensar: ???poderia ter uma forma melhor de fazer isso???, mas n??o se preocupe, podemos otimizar isso atrav??s de uma extens??o.

As extens??es do VSCode s??o muito ??teis para auxiliar com o desenvolvimento de qualquer linguagem, exibindo erros, automatizando tarefas, nos mostrando possibilidades de melhorias.

Observaremos a extens??o ???ES7+ React/Redux/React-Native snippets???. Sim, ?? um nome enorme, mas ela nos d?? um conjunto completo de snippets* ao escrever um c??digo React.

*snippets s??o blocos de c??digo reutiliz??veis

Existem duas formas de instalar a extens??o, a seguir:


Instalar extens??o do React Developer Tools no Google Chrome


Durante o desenvolvimento ?? necess??rio validar e debugar o funcionamento do c??digo, e essa tarefa pode ser feita de v??rias formas, como logs no projeto, extens??es no editor, testes unit??rios e de integra????o e at?? mesmo extens??es no browser utilizado para processar a aplica????o. Esta ??ltima ?? a forma mais interativa e neste caso demonstraremos como instalar no Google Chrome.

debugar ?? o nome dado ao processo de identificar e remover qualquer tipo de erro existente no c??digo-fonte de um programa.

A partir da loja de extens??es do Google Chrome podemos realizar a busca pelo nome React Developer Tools ou seguir da maneira mais simples, clicando no link seguinte, que o redireciona diretamente para a p??gina da extens??o.

Cria????o do Projeto


Assumindo que voc?? j?? tem o Node.JS instalado no seu computador, utilizaremos o npx para criar nossa aplica????o React.

npx ?? uma ferramenta destinada a realizar a execu????o de pacotes hospedados no registro do npm, sem necessariamente esses pacotes estarem instalados localmente.

npm ?? um gerenciador de pacotes para o Node.JS, isso significa que o npm far?? o download e gerenciamento das bibliotecas a serem utilizadas em um projeto Javascript.


Nosso projeto consistir?? na cria????o do card??pio da paleteria El Geladon.

Para criar um projeto, em seu terminal execute o seguinte comando:

npx create-react-app cardapio-el-geladon

Note que o ??ltimo par??metro ?? o nome da nossa aplica????o.

Em seguida, entraremos na pasta do projeto e iniciar a aplica????o executando os comandos respectivamente:

cd cardapio-el-geladon
npm start

O navegador abrir?? uma nova aba durante o processo e em seu terminal ser?? provisionado um servidor local.

Em seu terminal aparecer?? a URL utilizada para acessar a nossa aplica????o em ambiente de desenvolvimento local, neste caso a URL http://localhost:3000.

Abrindo essa URL no browser teremos a seguinte vis??o:


Bom! Precisamos conhecer a arquitetura da nossa aplica????o e come??ar a desenvolver os nossos pr??prios componentes do projeto.


Para abrir o projeto dentro do Visual Studio Code devemos seguir o seguinte caminho de menus clicando em Arquivo > Abrir Pasta, ser?? aberto uma janela do explorador de arquivos do seu sistema operacional, encontre a pasta do projeto e clique em Selecionar pasta.

Com o projeto aberto em seu editor, visualizamos a seguinte tela:


Note que do lado esquerdo h?? uma estrutura das pastas do projeto, por esse explorador do Visual Studio Code poderemos navegar entre os arquivos do projeto de forma intuitiva, abrindo-os diretamente no editor.

O create-react-app gera para n??s um projeto b??sico, contendo em sua raiz os arquivos .gitignore, package.json, README.md, yarn.lock ou package-lock.json, e tamb??m gera as pastas public e src, onde manteremos o c??digo-fonte da nossa aplica????o.

Dito isto, para simplificar nossa compreens??o, vamos deletar todos os arquivos dentro da pasta src e criarmos os nossos pr??prios componentes.

Seu navegador apresentar?? um erro de compila????o e seu terminal tamb??m acusar?? o mesmo problema, mas n??o se preocupe, ?? assim que aprenderemos a corrigir os diversos erros que o React identifica.

O erro descreve que houve uma falha de compila????o devido ?? aus??ncia do arquivo index.js ou index.jsx. Ent??o, criaremos este arquivo.

ENOENT ?? uma abreviatura de Error NO ENTry (ou Error NO ENTity) e pode ser usado para mais do que arquivos/diret??rios. ?? abreviado porque os compiladores da linguagem de programa????o C, no in??cio dos tempos, n??o suportavam mais de 8 caracteres e s??mbolos, da?? vem essa nomenclatura.

Selecione a pasta src com o cursor do mouse e clique no ??cone de Novo Arquivo destacado na imagem abaixo, em seguida vamos nome??-lo de index.js (posteriormente alteraremos para a extens??o .jsx).

A partir desse ponto, provavelmente o erro no terminal ser?? substitu??do por um aviso de sucesso de compila????o e o navegador ficar?? em branco.

Para dar continuidade adicionaremos a estrutura b??sica de imports e preparar nossa aplica????o para receber novos componentes.

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <React.StrictMode></React.StrictMode>,
  document.getElementById("root")
);

Os imports React e ReactDom s??o respectivamente a pr??pria importa????o da biblioteca React e a importa????o de um DOM* referenciado por ela. Assim, o React mant??m uma representa????o mais leve do DOM em mem??ria referido como virtual DOM sendo leve e f??cil de criar.


*DOM (Document Object Model): O Modelo de Documento por Objetos ?? uma conven????o multiplataforma e independente de linguagem de programa????o, fiscalizada pela entidade World Wide Web Consortium, para representa????o e intera????o com objetos em documentos HTML, XHTML e, XML.

A seguir tem a declara????o do que ser?? renderizado no documento com a chamada ReactDOM.render() recebendo como primeiro par??metro os componentes a serem renderizados, neste caso o <React.StrictMode />*, e como segundo par??metro, em qual elemento HTML o conte??do da nossa aplica????o ser?? anexado, neste caso o elemento com o atributo id root localizado em public/index.html.

*O modo estrito (<React.StrictMode />) ?? uma ferramenta para sinalizar potenciais problemas em uma aplica????o. O StrictMode n??o renderiza nenhum elemento vis??vel na interface. Ele ativa verifica????es e avisos adicionais para os seus descendentes.

Como todo tutorial, neste n??o poderia faltar o conhecido Hello World para iniciarmos de forma adequada. Insira a frase entre as tags <React.StrictMode>.

/* ... */
<React.StrictMode>Hello World</React.StrictMode>
/* ... */

Ap??s recarregar a p??gina, teremos a seguinte sa??da no navegador:

Agora que fizemos o ritual de inicia????o e compreendemos como analisar erros, renderizar e criar a estrutura b??sica, podemos dar sequ??ncia com a cria????o de nossos componentes.

Assim como uma p??gina web ?? constitu??da pela ??rvore de elementos do DOM, uma aplica????o React ?? essencialmente uma ??rvore constitu??da de componentes.

Criaremos o componente inicial da aplica????o, o Home.jsx, dentro da pasta src.

Atente-se em nomear os componentes com um padr??o de escrita para diferenci??-los como componentes s?? de v??-los na lista de arquivos, existem uma s??rie de conven????es de nomenclaturas utilizadas por desenvolvedores, mas utilizarei aqui o padr??o PascalCase, que consiste na primeira letra de cada palavra como mai??scula.

Os componentes s??o fun????es encapsulando e retornando o conte??do a ser renderizado, que quando exportadas podem ser utilizadas em outros locais de forma simples e intuitiva.

Cada fun????o recebe o nome do componente/nome do arquivo com a seguinte estrutura:

function Home() {
  return <div className="Home">Este ?? o componente Home</div>;
}

export default Home;

Note que o retorno ?? uma estrutura HTML, assim como escrever??amos para a cria????o de uma p??gina web comum, por??m ?? percept??vel que o atributo className n??o existe na sintaxe HTML e isso ?? exclusivo do virtual DOM implementado pelo React.

Assim, todas as propriedades e atributos, incluindo manipuladores de eventos, devem estar em camelCase. Tendo como exemplo, o atributo HTML tabindex corresponde ao atributo tabIndex no React. As exce????es s??o os atributos aria-* e data-*, os quais devem estar em lowercase, por exemplo, voc?? pode manter aria-label como aria-label.

Os casos que diferem da regra como o className, utilizado semelhantemente ao atributo class no HTML, ser??o apresentados ao decorrer do nosso desenvolvimento.

Para podermos ver o nosso componente renderizado ?? necess??rio import??-lo e adicion??-lo no arquivo index.jsx.

import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);


?? interessante que quando n??o h?? conte??do a ser inserido entre as tags de componente, podemos usar a sintaxe de self-closing tags. ou seja, <Home></Home> ?? igual a <Home />.

Obteremos a seguinte sa??da:

Agora que sabemos componentizar estruturas, avan??aremos com algumas altera????es de estilo.

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

E adicionaremos algumas estiliza????es globais criando o arquivo index.css na pasta src:

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

Sinta-se livre para estilizar da maneira que quiser, ou alterar propriedades dos elementos, nosso objetivo ?? instruir o aprendizado do React, por??m nossa aplica????o necessita ser visualmente agrad??vel. Dado esse disclaimer podemos continuar, se voc?? estilizou conforme os arquivos acima exibidos, obteremos o seguinte resultado:


Com a p??gina inicial preparada para receber novos componentes, podemos dar sequ??ncia com a renderiza????o de dados.


Para podermos renderizar dados de forma din??mica, ou seja, manter o estilo e usabilidade padronizado com a altern??ncia de conte??do, precisaremos de uma lista de objetos, que ?? normalmente recebida atrav??s de uma API*, mas no momento ser?? simulada atrav??s de um arquivo criado por n??s utilizando a lista em mem??ria.

*API (Application Programming Interface ou Interface de Programa????o de Aplicativos) ?? um conjunto de rotinas e padr??es de programa????o para acesso a um aplicativo de software ou plataforma baseado na Web.

Devemos definir as propriedades dos objetos da lista. O produto do card??pio ?? a Paleta Mexicana e apresentaremos sabor, pre??o, foto, t??tulo, descri????o e a possibilidade de recheio.

Crie uma pasta dentro de src chamada mocks e adicione o arquivo paletas.js:

export const paletas = [
  {
    titulo: "A??a?? com Leite Condensado",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: require("assets/images/acai-com-leite-condensado.png").default,
    preco: 10.0,
    sabor: "A??a??",
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
    titulo: "Lim??o",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: require("assets/images/limao.png").default,
    preco: 7.0,
    sabor: "Lim??o",
    possuiRecheio: false,
  },
  {
    titulo: "Maracuj??",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: require("assets/images/maracuja.png").default,
    preco: 7.0,
    sabor: "Maracuj??",
    possuiRecheio: false,
  },
  {
    titulo: "Maracuj?? com Leite Condensado",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: require("assets/images/maracuja-com-leite-condensado.png").default,
    preco: 10.0,
    sabor: "Maracuj??",
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


Antes de dar sequ??ncia devemos salvar as imagens do projeto, crie dentro de src a pasta assets e dentro dela crie a pasta images.

https://drive.google.com/file/d/1Go6j2Jx-eZa5bGmLUObRn1QTGFQne2Qf/view?usp=sharing

Lista criada, hora de renderizar na tela.


Antes de continuarmos, seria interessante adicionarmos um arquivo de configura????o chamado jsconfig.json. Nele podemos adicionar a op????o de import absoluto, que nos permite fazer o import de arquivos e pastas que estar??o a partir da pasta raiz escolhida como base, neste caso a src, sem a necessidade de realizar confusos imports com m??ltiplos pontos de retorno no diret??rio de arquivos.


Crie na raiz do projeto o arquivo jsconfig.json e adicione as seguintes linhas:

{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}

a past src es?? sendo inclu??mo como ra??s do pj

Agora podemos dar sequ??ncia com a leitura da lista. Para organizar melhor e semanticamente quanto a responsabilidade e reutiliza????o de cada componente, separaremos em um novo arquivo chamado PaletaLista.jsx na pasta src:


function PaletaLista() {
  return <div className="PaletaLista">Este ?? o componente PaletaLista</div>;
}

export default PaletaLista;

Ap??s a cria????o do arquivo devemos import??-lo no componente Home.jsx e substituir a frase pela implementa????o do componente de lista dentro de um container:


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

Caso d?? algum erro de execu????o, d?? um Ctrl+C no terminal de execu????o do projeto e execute novamente o npm start. Tal erro pode ocorrer devido ?? nova defini????o do jsconfig.json que antes da cria????o n??o havia sido criado, e mesmo ap??s a cria????o as defini????es padr??o ainda estavam em execu????o em cache.


Adicionaremos ao nosso componente PaletaLista.jsx a estrutura HTML para renderizar um item da lista com dados est??ticos.


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


N??o est?? aparentemente agrad??vel, vamos adicionar o estilo ao container em Home.css:

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


Ainda ?? necess??rio estilizar o item da lista antes de prosseguirmos. Crie o arquivo PaletaLista.css dentro de src:


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

Bom, para come??armos a renderizar a listafaremosnte, vamos fazer o import da lista paletas.js no componente PaletaLista.jsx:

import "PaletaLista.css"
import { paletas } from "mocks/paletas.js";

/* ... */


Logo em seguida devemos realizar a substitui????o dos dados est??ticos pelos da lista. Para que cada objeto seja retratado como um item na tela, devemos iterar a lista, ou seja, executar la??os de repeti????o* at?? que todos os objetos sejam exibidos.

La??os de repeti????o, tamb??m conhecidos como loops, s??o comandos que permitem itera????o de c??digo, ou seja, que comandos presentes no bloco sejam repetidos diversas vezes.

No React exibimos uma cole????o de dados utilizando map*, m??todo nativo do JS. Para isso devemos inseri-lo entre chaves {} dentro do JSX.

O m??todo map invoca a fun????o callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.

Callback ?? uma rotina/fun????o que ?? passada como par??metro para outro m??todo.

Dito isto, podemos prosseguir com a implementa????o do m??todo map no arquivo PaletaLista.jsx:

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


Observe que agora aparece o n??mero de objetos existentes na lista, por??m todos iguais ?? estrutura inicial e queremos que sejam renderizados dinamicamente.


Para isso, devemos realizar a substitui????o dos dados por {variavelComDados}, contendo os dados de cada objeto para exibirmos em tela, da seguinte forma:


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

Mas antes de comemorar, como dizem as boas pr??ticas, ?? interessante sempre visualizar as sa??das no console, clicando nas tr??s bolinhas de op????es do navegador > Mais ferramentas > Ferramentas do desenvolvedor.

Ser?? poss??vel notar um Warning em vermelho, como aviso do pr??prio React de que ao criar uma Ser?? poss??vel notar um Warning em vermelho, como aviso do pr??prio React de que ao criar uma lista na UI (User Interface ou Interface de Usu??rio) a partir de um array com JSX, voc?? deve adicionar uma propriedade key para cada filho e qualquer um de seus filhos na ??rvore de elementos.

O React usa a propriedade key para criar um relacionamento entre o componente e o elemento DOM. Se o atributo key n??o for adusaremos React ficar?? confuso e renderizar?? novamente o elemento incorreto.

Visto isso, vamos usar o index da lista seguido do nome da classe que demos a estrutura para criar uma chave ??nica:


/* ... */
{paletas.map((paleta, index) => (
  <div className="PaletaListaItem" key={`PaletaListaItem-${index}`}>
/* ... */

ele atribui a cada elemento que est?? sendo renderizado na tela um id uma identifica????o 
agora o react concegue mapear este elemento


Hooks s??o fun????es que permitem que voc?? "se conecte" aos recursos de state e ciclo de vida do React a partir de componentes funcionais. Hooks n??o funcionam dentro de classes ??? eles permitem que voc?? use React sem classes.


Na pr??xima se????o veremos o uso do hook useState.


Utiliza????o do useState

O useState ?? um hook que permite ter vari??veis de estado em componentes funcionais. Voc?? passa o estado inicial para esta fun????o e ela retorna uma vari??vel com o valor do estado atual (n??o necessariamente o estado inicial) e outra fun????o para atualizar este valor.

const [valorAtual, setarNovoValor] = useState(valorInicial);

Para melhor compreens??o, implementaremos a funcionalidade de adi????o do produto, com um contador indicando o n??mero de itens selecionados.

Adicione o logo da Paleteria e o ??cone de sacola que dar??o identidade ao nosso card??pio. Insira o logo.svg na pasta src/assets e para o ??cone sacola.svg crie a pasta icons dentro de src/assets e insira o ??cone dentro da pasta src/assets/icons.

https://drive.google.com/file/d/1R1yFHs99nn-H98nsDbRcFg6rWvhFKRFH/view?usp=sharing

https://drive.google.com/file/d/1iycOcV9b18TBRDFVn2ARWlmyvt8-fji4/view?usp=sharing

Come??aremos com a inclus??o dos imports no arquivo Home.jsx:

/* ... */
import sacola from "assets/icons/sacola.svg";
import logo from "assets/logo.svg";
/* ... */

A seguir adicione somente a estrutura que receber?? a l??gica no arquivo Home.jsx entre as tags no espa??o indicado:


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


?? necess??rio adicionar os estilos. Insira em Home.css:

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

Estilo preparado, implementaremos a l??gica. Neste momento, o contador de itens selecionados ser?? indicado no pr??prio item do card??pio.

Comecemos com a desconstru????o do retorno do useState({}). Para o estado inicial adicionaremos um objeto vazio, que guardar?? as informa????es de quais itens da lista foram selecionados. Observe que ele nos devolve como primeiro par??metro o objeto contendo o estado de paletasSelecionadas, sendo um objeto no qual a chave ?? o ??ndex de qual paleta/sabor est?? adicionada e como valor a quantidade de paletas daquele sabor que foram selecionadas.

Em seguida criaremos a fun????o adicionarItem, ela recebe como par??metro o index de qual paleta foi adicionada e a partir disso cria um objeto {[index]: quantidade}. O index ?? utilizado como chave e o valor ?? atribu??do utilizando um pr??-existente no objeto, ou 0 caso n??o exista, somando mais 1.

Ap??s esta cria????o podemos utilizar o m??todo setQuantidade, onde far?? a atualiza????o do estado recebendo como par??metro um novo objeto criado a partir do objeto de estado atual e o novo objeto de paleta a ser incluso/sobrescrito no estado atual.

Este novo objeto ?? criado utilizando o Spread Operator ... que obt??m somente as propriedades e valores dos objetos anteriores.

Insira a l??gica a seguir no arquivo PaletaLista.jsx.

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

Lembrando que o useState ?? uma funcionalidade existente na biblioteca do React. Logo, para que funcione, ?? necess??rio import??-la no componente.


/* NOVO TRECHO */
import { useState } from "react";
/* FIM NOVO TRECHO */

import "PaletaLista.css";
import { paletas } from "mock/paletas";

/* ... */

Preparada a l??gica, devemos implement??-la no componente. Adicione no bot??o a chamada da fun????o adicionarItem como retorno de um callback ap??s adicionar o atributo onClick.

Observe e implemente no arquivo PaletaLista.jsx.

/* ... */
<button className=onClick={() => "Acoes__adicionar Acoes__adicionar--preencher" adicionarItem(index)}>adicionar</button>
/* ... */

?? preciso visualizar o resultado atrav??s de um contador. Vamos inclu??-lo criando um badge, que utilizar?? o objeto de estado atual pegando a quantidade atrav??s de seu index ou inferindo 0 caso essa chave n??o exista no objeto, no arquivo PaletaLista.js no trecho indicado:

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


O uso do useState pode parecer complexo, mas ?? quest??o de pr??tica e teremos muitas utilidades para ele, por enquanto iremos nos conter a essas atribui????es.

At?? agora s?? ?? poss??vel adicionar itens sem podermos remov??-los e n??o h?? centraliza????o das informa????es na sacola. Nossa aplica????o tem excelentes pontos a serem melhorados e poss??veis features a serem implementadas, mas este ?? o momento de absorver o conte??do e se preparar para as demais aulas.

Conclus??o


Com isso, finalizamos a nossa primeira aula sobre o ReactJS! Espero que voc?? tenha curtido esse primeiro overview e essa primeira experi??ncia construindo uma vers??o mais bonita do frontend que consumir?? a API que utilizamos anteriormente

N??o se esque??a de praticar! ?? muito importante que voc?? utilize os pr??ximos Codelabs e invista tempo para aprimorar suas habilidades com HTML, CSS, JavaScript e, principalmente, ReactJS!




Versionamneto ?? enviar para o github


Recapitulando
Antes de darmos in??cio a pr??xima aula, iremos relembrar os itens aprendidos na aula anterior:
Conhecemos o conceito de uso e aplicabilidade do React;
Aprendemos a instalar a extens??o do React no VSCode, tanto pelo site como diretamente pelo editor;
Aprendemos a instalar a extens??o React Developer Tools no Google Chrome;
Realizamos a cria????o do projeto com o npx;
Observamos algumas sa??das de erro no terminal e no console, durante a edi????o do projeto, e como corrigi-las;
Estruturamos a forma b??sica de imports para a cria????o de nossos componentes;
Estilizamos o projeto;
Criamos e renderizamos uma lista de objetos em mem??ria;
Aprendemos a utilizar o useState.
A aplica????o ficou com a seguinte apar??ncia:


Em uma aplica????o, ?? comum precisarmos exibir ou esconder um elemento, conforme certa condi????o. Pode ser uma intera????o do usu??rio, presen??a OU aus??ncia de dados vindos em uma request, ou at?? mesmo n??veis de permiss??o de usu??rio. Esse ?? o conceito de renderiza????o condicional e abordaremos mais a seguir.
Daremos in??cio com os badges, que n??o devem renderizar quando zerados, mas sim, renderizar somente quando os itens forem selecionados.
Iniciando com a cria????o de uma fun????o chamada badgeCounter que recebe dois par??metros, sendo o primeiro a condi????o de renderiza????o, que vamos cham??-la canRender.
O segundo par??metro ?? o index, representando o n??mero do item que est?? sendo selecionado (onde ser?? renderizado o contador).
Assim h?? uma verifica????o: quando o canRender for true o operador && renderiza o badge naquele index. Caso o canRender seja false o operador && tamb??m torna a renderiza????o falsa, portanto n??o aparece na tela.
Insira o seguinte trecho na fun????o PaletaLista() no arquivo PaletaLista.jsx:
...
const badgeCounter = (canRender, index) =>
	Boolean(canRender) && (<span className="PaletaListaItem__badge"> {paletaSelecionada[index]} </span>);
...
Fun????o criada, vamos nos atentar em adicionar a renderiza????o no c??digo que far?? a exibi????o do template:
...
{paletas.map((paleta, index) =>
	<div className="PaletaListaItem" key={`PaletaListaItem-${index}`}>
???
	{/* NOVO TRECHO */}
  {badgeCounter(paletaSelecionada[index], index)}
???
	{/* FIM DO NOVO TRECHO */}
???
		<div>
			<div className="PaletaListaItem__titulo"> { paleta.titulo } </div>
...


Agora que n??o h?? mais badges sendo exibidos, vamos adicionar o item Chocolate Belga, no nosso caso o terceiro item da lista:

Perceba que agora somente os itens adicionados ir??o receber o badge com o contador, assim tudo se torna visualmente limpo e de f??cil identifica????o.
Agora que j?? conhecemos o conceito de renderiza????o condicional, podemos adicionar a 
funcionalidade de remover alguns itens que foram adicionados.



A estiliza????o condicional nos permite transitar entre propriedades de estilo conforme dada condi????o atrav??s de classes css.
Primeiro precisamos editar o modificador de estilo no bot??o de adicionar no arquivo PaletaLista.jsx:
Antes:

...
<button className="Acoes__adicionar Acoes__adicionar--preencher" onClick={() => adicionarItem(index)}>adicionar</button>
...

...
<button className={`Acoes__adicionar ${!paletaSelecionada[index] && "Acoes__adicionar--preencher"}`} onClick={() => adicionarItem(index)}>adicionar</button>
...

As estiliza????es css j?? foram apresentadas na aula passada, mas basicamente, este conceito segue o comportamento de toggle* das classes no elemento, neste caso adicionando ou removendo a classe de preenchimento.

* toggle, switch (do ingl??s: interruptor), ou comutador, ?? um elemento/comportamento de intera????o alternando atrav??s de uma a????o entre dois valores.

Ap??s essa edi????o n??o ser?? vis??vel nenhuma mudan??a percept??vel, exceto quando acionamos o bot??o de adicionar algum item:

Feito isto, agora temos o espa??o para adicionar o bot??o de remover, mas antes precisamos adicionar a l??gica de remo????o, muito semelhante ?? de adi????o apresentada na aula passada.

Adicione dentro da fun????o PaletaLista():

const removerItem = (paletaIndex) => {
        const paleta = { [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) -1 }
        setPaletaSelecionada({...paletaSelecionada, ...paleta});
}

Observe que a ??nica diferen??a est?? na subtra????o.
Agora sobre o aprendizado de renderiza????o condicional poderemos implementar o bot??o de remover somente quando houver item adicionado.
Iniciaremos com a cria????o da fun????o removeButton que far?? a devolu????o condicional do bot??o renderizado.
Adicione dentro da fun????o PaletaLista()

const removeButton = (canRender, index) =>
	Boolean(canRender) && (<button className="Acoes__remover" onClick={() => removerItem(index)}>remover</button>);
...


Observe que a ??nica diferen??a est?? na subtra????o.
Agora sobre o aprendizado de renderiza????o condicional poderemos implementar o bot??o de remover somente quando houver item adicionado.
Iniciaremos com a cria????o da fun????o removeButton que far?? a devolu????o condicional do bot??o renderizado.
Adicione dentro da fun????o PaletaLista():

const removeButton = (canRender, index) =>
	Boolean(canRender) && (<button className="Acoes__remover" onClick={() => removerItem(index)}>remover</button>);


Agora podemos implementar a renderiza????o no c??digo que far?? a exibi????o do template:


<div className="PaletaListaItem__acoes Acoes">
	<button className={`Acoes__adicionar ${!paletaSelecionada[index] && "Acoes__adicionar--preencher"}`} onClick={() => adicionarItem(index)}>adicionar</button>

	{/* NOVO TRECHO */}

	{removeButton(paletaSelecionada[index], index)}

	{/* FIM DO NOVO TRECHO */}

</div>


Note que, ao removermos todos os itens selecionados atrav??s do bot??o remover, os estilos s??o resetados e tanto o badge quanto o bot??o remover n??o s??o renderizados:

Nossa aplica????o parece funcional, por??m vamos organizar as coisas por aqui e tratar de Arquitetura de pastas


Arquitetura de pastas

Est?? na hora de organizarmos os arquivos apresentados, pois um dos pilares para o desenvolvimento de c??digo ?? a manutenibilidade e para ser mantido de forma organizada, utilizaremos padr??es de arquitetura para auxiliar no desenvolvimento.

A manutenibilidade, ?? o conceito que busca contemplar os tr??s tipos de manuten????o j?? existentes: corretiva, preditiva e preventiva. Resumidamente, ?? uma din??mica que visa o melhoramento cont??nuo da manuten????o.

Provavelmente seu projeto se encontrar?? disposto da seguinte forma:

Cuidamos de organizar a pasta assets e mocks dentro de src, por??m todos os componentes e seus estilos est??o "soltos" na pasta principal.

Primeiro vamos segreg??-los por pastas contendo o nome do componente como nome da pasta que agregar?? seus arquivos de l??gica e estilo, exceto pelos arquivos de index.

Teremos algo com o seguinte aspecto:

Lembre-se de que ao criar e mover os arquivos de lugar ?? necess??rio atualizar os imports, mas vamos cuidar disso por ??ltimo.

Agora devemos compreender quais componentes s??o p??ginas da aplica????o e quais s??o trechos dela e podem ser reutiliz??veis. Neste caso temos como p??gina principal o componente Home e como reutiliz??vel o componente PaletaLista.

Feito esta an??lise, vamos prosseguir com a cria????o de duas pastas em src, sendo elas as pastas, components e views.

Vamos mover o componente de Home para a pasta views e o componente PaletaLista para a pasta components.

Obteremos o seguinte resultado:

Responsabilidades separadas, vamos renomear o arquivo index.css para main.css e mov??-lo para uma nova pasta que criaremos dentro de src/assets chamada styles.

Ficar?? assim:

Agora que nossa arquitetura de pastas est?? organizada, poderemos dar sequ??ncia com a atualiza????o dos imports de arquivos em nossos componentes.

Dentro do arquivo index.jsx o import do componente Home e o novo arquivo de estilo principal, chamado main.css, ser??o feitos da seguinte forma:

...
import Home from "./views/Home/Home";
???
import "assets/styles/main.css";

E dentro do arquivo Home.jsx o import do componente PaletaLista ser?? feito da seguinte forma:

import PaletaLista from "components/PaletaLista/PaletaLista";

Se em seu componente PaletaLista.jsx o import do estilo estiver:

import "PaletaLista.css";

Provavelmente seu compilador acusar?? erro para encontrar o arquivo de estilo, pois est?? tentando encontrar o arquivo na raiz de src, apenas altere para:

import "./PaletaLista.css";


E ent??o reinicie em seu terminal o servidor local, parando-o com o atalho CTRL + C e executando o comando npm start.


Ajustes realizados, podemos notar que os componentes que temos criados s??o consideravelmente grandes e poss??veis de serem subdivididos. Realizaremos essa subdivis??o no assunto seguinte.


Subdivis??o de componentes


Subdividir componentes faz parte do processo de cria????o e constru????o de projetos, analisar e perceber partes que podem ser reutiliz??veis ou mais bem compreendidas, se separadas em trechos menores.

Componentes view, particularmente s??o estruturas que fazem a composi????o da p??gina e devem separar apenas estruturalmente seus componentes.

Vamos observar o componente Home da nossa aplica????o, localizado em src/views/Home/Home.jsx:

import "./Home.css";
import PaletaLista from "components/PaletaLista/PaletaLista";
???
import sacola from "assets/icons/sacola.svg";
import logo from "assets/logo.svg";
???
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

Neste caso ?? poss??vel notar que h?? somente a separa????o do componente PaletaLista e toda a estrutura de header da p??gina est?? adicionada na view, podendo ser componentizada.


Iremos remover os seguintes trechos para um novo componente chamado Navbar, que ser?? adicionado em src/components/Navbar/Navbar.jsx:

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
Para subdividir completamente, ?? necess??rio separar a parte da folha de estilos correspondente em src/components/Navbar/Navbar.css e j?? import??-lo em nosso componente correspondente:
.Header {
  max-width: 1110px;
  margin: 0 auto 25px auto;
  position: relative;
}
???
.row {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 20px 0 35px 0;
}
???

.Logo {
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.3);
  width: 340px;
  height: 45px;
}
???
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
???
.Sacola {
  position: relative;
}
???
.Sacola__icone {
  cursor: pointer;
}
???
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
???
@media (max-width: 1220px) {
  .Header {
    max-width: 720px;
  }
}
???
@media (max-width: 840px) {
  .Header {
    max-width: 320px;
  }
}
???
@media (max-width: 400px) {
  .Header {
    max-width: 250px;
  }
???
  .row {
    column-gap: 20px;
  }
???
  .Logo__titulo {
    font-size: 1.5em;
  }
}

Para evitarmos confus??es, irei mostrar como ficaram os arquivos.

Assim ficou nosso componente Navbar:

import "./Navbar.css";
???
import sacola from "assets/icons/sacola.svg";
import logo from "assets/logo.svg";
???
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
???
export default Navbar;
No arquivo Home.jsx j?? iremos adicionar o import de Navbar.jsx e implement??-lo no trecho removido, ficando assim:

import "./Home.css";
import PaletaLista from "components/PaletaLista/PaletaLista";
import Navbar from "components/Navbar/Navbar";
???
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
???
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
???
.Home__container {
  display: flex;
  align-items: center;
  justify-content: center;
}
???
@media (max-width: 350px) {
  .Home__container {
    justify-content: unset;
  }
}

Estrutura de p??gina separada, h?? mais uma subdivis??o poss??vel no componente que faz a renderiza????o da lista de paletas. No componente PaletaLista vamos remover os seguintes trechos para um novo componente que ser?? adicionado em src/components/PaletaListaItem/PaletaListaItem.jsx, lembrando de n??o copiar a propriedade key, pois ela pertence ?? lista:


...
const removeButton = (canRender, index) =>
	Boolean(canRender) && (<button className="Acoes__remover" onClick={() => removerItem(index)}>remover</button>);
???

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

N??o vamos esquecer de mover o trecho de estilos necess??rios de PaletaLista.css para src/components/PaletaListaItem/PaletaListaItem.css:


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
???
@media (max-width: 400px) {
  .PaletaListaItem {
    width: 210px;
    height: 180px;
  }
}
???
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
???
.PaletaListaItem > div {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
???
.PaletaListaItem__titulo {
  font-size: 1.5em;
  font-weight: 700;
  line-height: 100%;
}
???
.PaletaListaItem__descricao {
  font-size: 0.85em;
}
???
.PaletaListaItem__preco {
  color: darkviolet;
}
???
.Acoes {
  display: flex;
  justify-content: space-between;
}
???
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
???
.Acoes__remover {
  background-color: red;
}
???
.Acoes__adicionar {
  background-color: darkviolet;
}
???
.Acoes__adicionar--preencher {
  width: 100%;
}
???
.PaletaListaItem__foto {
  height: 150px;
  margin-right: -60px;
}
Edi????es realizadas, hora de conferir como ficaram os arquivos.
Assim ficou o componente PaletaListaItem:
import "./PaletaListaItem.css";
???
function PaletaListaItem() {
  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button className="Acoes__remover" onClick={() => removerItem(index)}>
        remover
      </button>
    );
???
  const badgeCounter = (canRender, index) =>
    Boolean(canRender) && (
      <span className="PaletaListaItem__badge">
        {" "}
        {paletaSelecionada[index]}{" "}
      </span>
    );
???
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
???
export default PaletaListaItem;
No arquivo PaletaLista.jsx j?? iremos adicionar o import de PaletaListaItem.jsx e implement??-lo no lugar antes ocupado pelo trecho removido, lembrando de adicionar a propriedade key, ficando assim:
import { paletas } from "mocks/paletas.js";
import "./PaletaLista.css";
import { useState } from "react";
import PaletaListaItem from "components/PaletaListaItem/PaletaListaItem";
???
function PaletaLista() {
  const [paletaSelecionada, setPaletaSelecionada] = useState({});
???
  const adicionarItem = (paletaIndex) => {
    const paleta = {
      [paletaIndex]: (paletaSelecionada[paletaIndex] || 0) + 1}
    setPaletaSelecionada({ ...paletaSelecionada, ...paleta });
  };
???
  const removerItem = (paletaIndex) => {
    const paleta = {
      [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) - 1}
    setPaletaSelecionada({ ...paletaSelecionada, ...paleta });
  };
???
  return (
    <div className="PaletaLista">
      {paletas.map((paleta, index) => (
        <PaletaListaItem key={`PaletaListaItem-${index}`} />
      ))}
    </div>
  );
}
???
export default PaletaLista;
E por ??ltimo, assim ficou a folha de estilos PaletaLista.css:
.PaletaLista {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px 50px;
}
???
@media (max-width: 1220px) {
  .PaletaLista {
    grid-template-columns: repeat(2, 1fr);
  }
}
???
@media (max-width: 840px) {
  .PaletaLista {
    grid-template-columns: 1fr;
  }
}
Ufa, agora podemos ver nosso trabalho:
Exibi????o de erro no navegador
Parece que n??o ficou como esper??vamos. Isso ocorreu devido aos componentes tratarem seu conte??do atrav??s de escopos e obviamente separamos l??gicas que estavam intrinsecamente ligadas para o funcionamento correto.
Mas isso n??o significa que devemos atrel??-los novamente, perdendo o benef??cio de componentes pequenos e reutiliz??veis. Vamos, por hora, apenas criar mocks* provis??rios para simular os escopos.
* mocks, s??o objetos simulados ou simplesmente mock em desenvolvimento de software s??o objetos que simulam o comportamento de objetos reais de forma controlada. Normalmente criados para testar o comportamento de outros objetos.
Todos os erros de escopo est??o presentes no componente PaletaListaItem. vamos adicionar os mocks necess??rios e inexistentes no escopo do nosso componente:
...
function PaletaListaItem() {
???
	{/* NOVO TRECHO */}
???
	const removerItem = (i) => console.log('remover' + i);
	const adicionarItem = (i) => console.log('adicionar' + i);
	const paletaSelecionada = [0];
	const index = 0;
	const paleta = {
		titulo: "A??a?? com Leite Condensado",
		descricao:
		"Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
		foto: require("assets/images/acai-com-leite-condensado.png"),
		preco: 10.0,
		sabor: "A??a??",
		recheio: "Leite Condensado",
		possuiRecheio: true,
	};
???
	{/* FIM DO NOVO TRECHO */}
???
	const removeButton = (canRender, index) =>
...
Logo a aplica????o volta a renderizar nossa lista:
Exibi????o da apli????o sem o erro no navegador
Por??m, s?? nos ?? exibido um ??nico objeto, neste caso, o que escolhemos para servir de mock o A??a?? com Leite Condensado.
Para obtermos novamente uma renderiza????o din??mica em nosso componente, se faz necess??rio conhecer o conceito de propriedades parametriz??veis para realizar data binding, a ser explicado no pr??ximo t??pico.
* Data Binding ?? uma t??cnica geral que une duas fontes de dados/informa????es e as mant??m em sincronia em um processo que estabelece uma conex??o entre interface de usu??rio da aplica????o e a l??gica de neg??cio.


Propriedades parametriz??veis (PAI P/FILHO)



Para implementar em nossa aplica????o ?? necess??rio parametrizar na assinatura de m??todo da fun????o principal de nosso componente os dados que substituir??o nossos mocks.


Basicamente temos 3 propriedades a serem utilizadas no componente PaletaListaItem, sendo eles o objeto de paleta a ser renderizado, quantidade de paletas selecionadas e o index.

N??o iremos tratar neste t??pico os mocks de fun????es.

Dito isto vamos remover o seguinte trecho:


...
const paletaSelecionada = [0];
const index = 0;
const paleta = {
    titulo: "A??a?? com Leite Condensado",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: require("assets/images/acai-com-leite-condensado.png").default,
    preco: 10.0,
    sabor: "A??a??",
    recheio: "Leite Condensado",
    possuiRecheio: true,
  };
...

Em seguida adicionar os par??metros, na assinatura de m??todo de forma desconstru??da:

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

Agora devemos passar os par??metros no componente PaletaLista:

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

E voil??:


Ainda temos de resolver a comunica????o de a????es a serem efetuadas entre componentes filhos para componentes pai.


Propriedades parametriz??veis (FILHO P/PAI)



Atrav??s das propriedades parametriz??veis foi poss??vel transmitir dados entre componentes pais para filhos, j?? para realizar a transmiss??o de um componente filho para um componente pai ?? similar.
Remova o trecho correspondente ??s fun????es de mock:
...
const removerItem = (i) => console.log('remover' + i);
const adicionarItem = (i) => console.log('adicionar' + i);
...
Em seguida adicione as propriedades onRemove e onAdd na assinatura de m??todo de forma desconstru??da no componente PaletaListaItem:


...
function PaletaListaItem({ paleta, quantidadeSelecionada, index, onRemove, onAdd }) {
...

Ent??o substitua as chamadas de removerItem e adicionarItem pelos par??metros que criamos respectivamente:
...
const removeButton = (canRender, index) =>
	Boolean(canRender) && (<button className="Acoes__remover" onClick={() => onRemove(index)}>remover</button>);
...
...
<button className={`Acoes__adicionar ${!quantidadeSelecionada && "Acoes__adicionar--preencher"}`} onClick={() => onAdd(index)}>adicionar</button>
...
Feito isto, iremos adicionar as manipula????es de dados no componente pai, neste caso PaletaLista:
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
Pronto, nossa aplica????o continua funcional e igual antes de todas as modifica????es realizadas.


Para finalizar, vamos tratar de observar o funcionamento da extens??o React Developer Tools.


Ao desenvolver uma aplica????o React, durante o processo de debug a extens??o do React Developer Tools nos auxilia de uma forma pr??tica e simples.
Ap??s a instala????o obteremos duas novas guias em nosso Chrome DevTools, as abas ?????? Components e ?????? Profiler.
A guia ?????? Components mostra os componentes em estrutura de ??rvore de elementos React que foram renderizados na p??gina, bem como os subcomponentes que eles acabaram por renderizar.
Ao selecionar um dos componentes na ??rvore, voc?? pode inspecionar e editar seus atributos e estado atuais.
A guia ?????? Profiler permite registrar informa????es de desempenho.

Pr??ximos passos
At?? o momento a aplica????o parece bem robusta e cumpre a maioria de suas fun????es propostas, como card??pio, por??m, seria interessante haver centraliza????o das informa????es na sacola e possivelmente uma funcionalidade para realizar filtros ou buscas pelos itens desejados. Nossa aplica????o tem features a serem implementadas e poss??veis integra????es a serem adicionadas, mas ?? o momento de absorver o conte??do da aula atual e se preparar para as demais aulas.


SEMANA 2


Recapitulando
Antes de darmos in??cio a pr??xima aula, iremos relembrar os itens aprendidos na aula anterior:
Conhecemos e aplicamos o conceito de renderiza????o condicional;
Implementamos estiliza????o condicional;
Organizamos o projeto e sua arquitetura de pastas;
Realizamos a subdivis??o de componentes maiores;
Aprendemos a parametrizar dados entre componentes de filho p/ pais e vice-versa;
Observamos brevemente algumas utilidades do React Developer Tools;
Dito isto, vamos dar sequ??ncia com algumas funcionalidades interessantes para a nossa aplica????o.


Integra????o de dados

Toda aplica????o React, que realiza a comunica????o e transfer??ncia de dados de forma din??mica entre plataformas, necessita fazer a integra????o com uma aplica????o backend carinhosamente chamada de API.
Atualmente estamos utilizando o arquivo paletas.js para fazer a renderiza????o de conte??do e ser exibido em nossa aplica????o. Mas precisamos fazer a conex??o entre sistemas para que isso seja realizado de forma din??mica.
Considerando o conhecimento e constru????o pr??via do backend desenvolvido ao decorrer do curso, iremos realizar a integra????o atrav??s de servi??os para utilizar esses dados.

API helper

Antes de qualquer coisa, sabemos que para realizar as integra????es e chamadas para a API s??o necess??rias diferentes URL's*, para a obten????o de dados, que ao decorrer do desenvolvimento do projeto podem ser alteradas, sendo desta maneira necess??rio cuidado e centraliza????o destas URL's em um ??nico lugar/arquivo da aplica????o, para possibilitar facilidade de manuten????o e evitar a repeti????o de edi????o do mesmo dado

* URL (Uniform Resource Locator) ?? a forma padronizada de representa????o de diferentes documentos, m??dia e servi??os de rede na internet, capaz de fornecer a cada documento um endere??o ??nico.

Sendo assim, precisamos de um helper* que far?? a centraliza????o e gerenciamento de URL's da aplica????o. Se chamar?? Api.js e ser?? adicionado dentro de uma nova pasta chamada helpers dentro de src:

* helpers s??o m??todos recomendados a serem utilizados quando ?? necess??rio realizar a mesma tarefa em v??rias p??ginas da mesma aplica????o. Esses m??todos especiais permitem a utiliza????o de um bloco comum de c??digo entre diferentes arquivos

Observe que o objeto Api retorna fun????es que far??o a composi????o do endere??o/recurso desejado a ser utilizado nas requisi????es HTTP*.
* HTTP Hypertext Transfer Protocol (Protocolo de transfer??ncia de Hipertexto) ?? um protocolo cliente-servidor para obten????o de recursos/arquivos.
Atualmente este arquivo possui os endere??os de:

 baseUrl: URL Base da da aplica????o, ou seja, o endere??o principal de onde ser?? executado o servi??o de API/ Back end, neste caso a aplica????o a ser usada para demonstrar seu uso ser?? executada na porta 4000;

paletaEndpoint: Fun????o utilizada para separar o recurso e m??dulo de paletas dentro da API.

paletaLista: Retorna a cole????o de paletas a serem renderizadas em tela;

paletaById: Retorna uma ??nica paleta especificada por sua propriedade id;

createPaleta: Adiciona uma nova paleta ?? cole????o de dados j?? existente, atrav??s da API;

updatePaletaById: Atualiza uma paleta existente especificada por sua propriedade id e

Estes endere??os e funcionalidades ser??o implementados gradativamente em nosso projeto.


Cria????o de servi??o


Agora que temos um gerenciador para todos os endere??os de requisi????o para a integra????o das aplica????es, podemos criar o servi??o PaletaService.js dentro de uma nova pasta de services a ser inclu??da em src, o qual ficar?? respons??vel pela execu????o das requisi????es de API referente ??s Paletas:

import { Api } from "helpers/Api";
???
const parseResponse = (response) => response.json();
???
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

Para realizar as requests estamos utilizando o m??todo global fetch que nos devolve uma Promise* e realizamos o parse da resposta para json.

* Promise ?? um objeto usado para processamento ass??ncrono. Um Promise (em portugu??s "promessa") representa um valor que pode estar dispon??vel agora, no futuro ou nunca.

Servi??o criado, agora ?? necess??rio realizar a integra????o entre os dados da requisi????o e a interface de usu??rio.

Implementa????o da integra????o

Para realizar integra????o certifique-se de que o projeto de backend esteja em execu????o, que a conex??o com o banco de dados esteja funcionando e que existam paletas dispon??veis no banco para compor a nossa aplica????o.

Consideramos para esta etapa o aprendizado e acompanhamento das aulas anteriores de backend que ser??o fundamentais para realizar o processo de integra????o.
Vamos iniciar REMOVENDO o import das paletas utilizadas para mock no arquivo PaletaLista.jsx em src/components, no caso esta linha:


import { paletas } from "mocks/paletas.js";

Em seguida obteremos alguns erros no console do navegador e no terminal de execu????o da aplica????o:

Mas n??o se preocupe, ?? f??cil de corrigir e pode ser feito adicionando uma constante chamada paletas dentro do escopo do componente recebendo um array vazio, por??m j?? irei demonstrar o exemplo utilizando o hook useState, pois iremos atualizar essa vari??vel com os dados da requisi????o para a API e isso deve refletir como atualiza????o na view:

function PaletaLista() {
???
        {/* NOVO TRECHO */}
        const [paletas, setPaletas] = useState([]);
        {/* FIM DO NOVO TRECHO */}
???
        const [paletaSelecionada, setPaletaSelecionada] = useState({});
???

Logo nosso terminal voltar?? a executar a aplica????o:

Por??m em nosso browser teremos um card??pio completamente vazio:

?? nesse momento que entra a inclus??o das chamadas/requisi????o de dados para a API.

Adicione o import do service:

import { PaletaService } from "services/PaletaService";

Crie uma fun????o ass??ncrona dentro do escopo do componente PaletaLista.jsx chamada getLista:

const getLista = async () => {
  const response = await PaletaService.getLista();
  setPaletas(response);
};

Note que para chamar uma fun????o ass??ncrona ?? necess??rio adicionar o prefixo async antes de sua declara????o e o prefixo await onde a execu????o em sequ??ncia do m??todo atual ser?? esperada at?? que haja o retorno do dado desejado pelo servi??o ass??ncrono.
Como este m??todo n??o pode ser executado sem ser chamado, ?? necess??rio adicionarmos ele no fluxo do ciclo de vida de renderiza????o do componente, neste caso estamos usando componentes funcionais e uma forma de realizar isso ?? utilizando o hook useEffect dentro do escopo do componente PaletaLista.jsx:

useEffect(() => {
  getLista();
}, []);

* Usando o hook useEffect informamos ao React que o componente precisa executar algo apenas ap??s sua renderiza????o. O React ir?? se encarregar de chamar a fun????o passada a ele depois de realizar as atualiza????es do DOM.

Observe que como segundo par??metro passamos um array vazio e ?? importante informar este par??metro ao useEffect pois sem ele a aplica????o entraria em looping infinito, dado que sempre que h?? uma atualiza????o em um hook de useState que faz altera????es no template/ view ser?? acionado o hook de useEffect, que neste caso far?? a chamada da requisi????o de dados para a API e assim por diante.

Para normalizarmos as instru????es passadas com os arquivos manipulados, segue um exemplo de como ficou o arquivo PaletaLista.jsx

import "./PaletaLista.css";
import { useState, useEffect } from "react";
import PaletaListaItem from "components/PaletaListaItem/PaletaListaItem";
import { PaletaService } from "services/PaletaService";
???
function PaletaLista() {
  const [paletas, setPaletas] = useState([]);
???
  const [paletaSelecionada, setPaletaSelecionada] = useState({});
???
  const adicionarItem = (paletaIndex) => {
    const paleta = {
      [paletaIndex]: (paletaSelecionada[paletaIndex] || 0) + 1,
    };
    setPaletaSelecionada({ ...paletaSelecionada, ...paleta });
  };
???
  const removerItem = (paletaIndex) => {
    const paleta = {
      [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) - 1,
    };
    setPaletaSelecionada({ ...paletaSelecionada, ...paleta });
  };
???
  const getLista = async () => {
    const response = await PaletaService.getLista();
    setPaletas(response);
  };
???
  useEffect(() => {
    getLista();
  }, []);
???
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
???
export default PaletaLista;
Ser?? visualizado algo semelhante a imagem:


Alguns dados est??o aparecendo, algumas informa????es est??o faltando e isso ?? comum de toda integra????o entre sistemas, j?? que preparamos nosso componente PaletaListaItem.jsx para receber t??tulo, preco, descricao, foto e sabor, mas a API nos retorna um objeto com _id, descricao, foto, preco e sabor.
Logo percebemos que n??o temos o t??tulo e que tamb??m ?? necess??rio ajustar a renderiza????o das imagens.
Para resolver esses problemas ?? comum utilizarmos uma fun????o auxiliar que far?? o mapeamento dos dados advindos da API e estruturar em um formato utilizado na aplica????o Frontend. N??o ?? a solu????o ideal, pois tem custo de processamento, mas evita altera????es nos projetos e cria uma camada de prote????o e preven????o de erros.

Mapeamento de dados

Crie no arquivo PaletaService.js as fun????es, que substituir??o o parseResponse na requisi????o de obten????o da lista e mapeamento de estrutura de dados, chamadas transformPaleta e parseTransformLista respectivamente:

const transformPaleta = (paleta) => {
  const [sabor, recheio] = paleta.sabor.split(" com ");
???
  return {
    ...paleta,
    id: paleta._id,
    titulo: paleta.sabor,
    sabor,
    ...(recheio && { recheio }),
    possuiRecheio: Boolean(recheio),
  };
};
???
const parseTransformLista = (response) =>
  parseResponse(response).then((paletas) => paletas.map(transformPaleta));


A fun????o transformPaleta faz o mapeamento descrito anteriormente, criando um objeto compat??vel com o componente atual. Note que a propriedade recheio s?? ?? criada se a paleta realmente tem em seu t??tulo uma descri????o ap??s a preposi????o "com", que ?? usada para realizar a separa????o entre recheio e sabor permitindo a adi????o de novas propriedades que futuramente utilizaremos para manipular filtros.
J?? a fun????o parseTransformLista ?? a jun????o de parseResponse e transformPaleta. Lembre-se de substituir parseResponse por parseTransformLista dentro do m??todo getLista:


getLista: () => fetch(Api.paletaLista(), { method: "GET" }).then(parseTransformLista),


A t??tulo de esclarecimentos, vamos exibir como ficou o arquivo PaletaService.js:


import { Api } from "helpers/Api";
???
const parseResponse = (response) => response.json();
???
const transformPaleta = (paleta) => {
  const [sabor, recheio] = paleta.sabor.split(" com ");
???
  return {
    ...paleta,
    id: paleta._id,
    titulo: paleta.sabor,
    sabor,
    ...(recheio && { recheio }),
    possuiRecheio: Boolean(recheio),
  };
};
???
const parseTransformLista = (response) =>
  parseResponse(response).then((paletas) => paletas.map(transformPaleta));
???
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

    Nossa aplica????o no browser parece ter agora todas as suas propriedades em seus devidos lugares:


Exceto pelas imagens.
Mas o que est?? ocorrendo para haver essa diverg??ncia? Isso ser?? explicado no t??pico seguinte.
Estrutura e funcionamento de assets
As imagens e assets que ficam disponibilizados dentro da pasta src fazem parte da aplica????o e necessitam ser compilados previamente ?? sua execu????o.
Quando escolhemos criar o arquivo paletas.js em src/mocks, consideramos que as informa????es fariam parte da aplica????o e os endere??os de imagem das paletas seriam fixos, diferente do que acontece no formato de espera da resposta e entrega dos dados pela API que ?? executada ap??s a renderiza????o e compila????o da aplica????o, trazendo endere??os din??micos.
Desta maneira n??o h?? como acessar em tempo de execu????o arquivos com endere??os no contexto 

fonte da aplica????o, mas ?? poss??vel se eles estiverem disponibilizados de forma p??blica.
A real necessidade do projeto ?? conter as imagens din??micas fora da aplica????o, ou seja, dados mut??veis e manipul??veis por fontes externas devem ser armazenados e distribu??dos em servi??os externos, por??m para fins did??ticos utilizaremos as imagens dentro do projeto, de forma a simular que as URL's devolvidas pela API no atributo foto.
Mas como fazer isso? Simples, apenas moveremos a pasta imagens para uma nova pasta chamada assets que criaremos dentro da pasta public na ra??z do projeto:



Assim ficou a pasta src:


Note que s?? de realizar essa transfer??ncia de imagens entre pastas o projeto volta a funcionar como anteriormente:


Para evitarmos confus??es futuras, vamos aproveitar e ajustar tamb??m o arquivo src/mocks/paletas.js:


export const paletas = [
  {
    titulo: "A??a?? com Leite Condensado",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "assets/images/acai-com-leite-condensado.png",
    preco: 10.0,
    sabor: "A??a??",
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
    titulo: "Lim??o",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "assets/images/limao.png",
    preco: 7.0,
    sabor: "Lim??o",
    possuiRecheio: false,
  },
  {
    titulo: "Maracuj??",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "assets/images/maracuja.png",
    preco: 7.0,
    sabor: "Maracuj??",
    possuiRecheio: false,
  },
  {
    titulo: "Maracuj?? com Leite Condensado",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "assets/images/maracuja-com-leite-condensado.png",
    preco: 10.0,
    sabor: "Maracuj??",
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


Agora que finalizamos a integra????o de sistemas e realizamos seus devidos ajustes, vamos dar sequ??ncia com a implementa????o de uma requisi????o parametriz??vel para obter detalhes de um ??nico item.
Mas antes ?? necess??rio adicionar a estrutura que receber?? esses dados. Vamos criar um modal.

Cria????o de modal


Antes de prosseguir ?? interessante dar os esclarecimentos t??cnicos sobre a palavra modal:
Modal ?? basicamente uma janela que abre sobre o conte??do da p??gina sem se desfazer dele. ?? utilizado com o intuito de passar algum aviso ou informa????o extra para dar suporte ao conte??do da p??gina principal.
Conhecimento passado, vamos iniciar com a cria????o dos arquivos necess??rios para deix??-lo din??mico.
Para dar in??cio ?? necess??rio entender que o modal se sobrep??e acima da camada chamada overlay que, por sua vez ?? uma sobreposi????o sobre a janela de conte??do principal parece confuso, mas na pr??tica ?? bem simples. Assim vamos come??ar criando o componente e sua folha de estilos, respectivamente Overlay.jsx e Overlay.css, dentro de uma nova pasta Overlay para gerenciar seu conte??do em src/components. A seguir ser?? exibido o arquivo Overlay.jsx:

Para este componente ?? necess??rio que ele seja gen??rico, afinal pode ser utilizado por in??meros outros componentes que n??o s?? o modal como uma barra lateral etc. Desta maneira, obtemos um click a ser emitido na propriedade overlayClick e um componente filho na propriedade children.
N??o podemos esquecer tamb??m da folha de estilos Overlay.css:

N??o ?? necess??rio adicionar este componente sobre a aplica????o ainda, mas se voc?? adicionar ter?? algo como

Com a primeira depend??ncia criada, agora podemos partir para a cria????o da estrutura de modal que, por sua vez, tamb??m ser?? gen??rico para ser reutilizado na aplica????o.
Crie o componente e sua folha de estilos, respectivamente Modal.jsx e Modal.css, dentro de uma nova pasta Modal para gerenciar seu conte??do em src/components. A seguir ser?? exibido o arquivo Modal.jsx

import "./Modal.css";
import Overlay from "components/Overlay/Overlay";
???
function Modal({ children, closeModal }) {
  const handleClick = (e, canClose) => {
    e.stopPropagation();
    if (canClose) closeModal();
  };
???
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
???
export default Modal;

Tamb??m ?? necess??rio que ele seja gen??rico, afinal pode ser utilizado para diferentes finalidades e contextos. Desta maneira, obtemos um click a ser emitido na propriedade closeModal e um componente filho na propriedade children.
Nele tamb??m cont??m uma fun????o que faz o gerenciamento dos eventos de click, para evitar o efeito de event bubbling.
* Event bubbling relaciona-se com a ordem na qual os manipuladores de eventos s??o chamados quando um elemento est?? aninhado dentro de um segundo elemento e ambos os elementos registram um ouvinte para o mesmo evento, como o de clique.
N??o podemos esquecer tamb??m da folha de estilos Modal.css:

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
???
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
???
.Modal__close:hover {
  background-color: rgba(0, 0, 0, 0.4);
}
???
.Modal__body {
  border-radius: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
???
@media (max-width: 400px) {
  .Modal {
    padding: 15px 70px 15px 15px;
  }
}



Como citado anteriormente, n??o ?? necess??rio adicionar este componente na aplica????o ainda, mas se voc?? adicionar ter?? algo como:


Agora poderemos criar o componente de conte??do que receber?? uma ??nica paleta da requisi????o detalhada por id.
O componente ser?? PaletaDetalhesModal com seu arquivo de l??gica PaletaDetalhesModal.jsx e seu arquivo de estilo PaletaDetalhesModal.css dentro da nova pasta PaletaDetalhesModal a ser criada em src/components.
Para idealizar o layout podemos utilizar uma constante auxiliar contendo as informa????es de uma paleta e utilizar seus dados para realizar o processo de data binding no template, mas lembre-se de deletar posteriormente a cria????o do componente.


const paleta = {
  titulo: "A??a?? com Leite Condensado",
  descricao: "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
  foto: "assets/images/acai-com-leite-condensado.png",
  preco: 10.0,
  sabor: "A??a??",
  recheio: "Leite Condensado",
  possuiRecheio: true,
}

Como as demonstra????es seguintes consistem na estrutura????o de componentes ensinados nas aulas anteriores, ser??o apresentados os arquivos dos componentes e sua respectiva apar??ncia como aplica????o renderizada no navegador.
Conte??do do arquivo PaletaDetalhesModal.jsx:

Conte??do do arquivo PaletaDetalhesModal.jsx:
import "./PaletaDetalhesModal.css";
import Modal from "components/Modal/Modal";
???
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
            <b>Descri????o:</b> {paleta.descricao}{" "}
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
???
export default PaletaDetalhesModal;


Note que o componente PaletaDetalhesModal importa e faz uso do componente Modal que, por sua vez, tamb??m faz uso da camada de Overlay. Desta forma temos funcionalidades b??sicas customiz??veis e reutiliz??veis para todo o projeto.
A seguir sua respectiva folha de estilos PaletaDetalhesModal.css:


Para visualizar a apar??ncia da aplica????o podemos importar e adicionar o componente PaletaDetalhesModal em nosso componente PaletaLista, lembrando de utilizar a constante auxiliar paleta demonstrada anteriormente

PaletaDetalhesModal em nosso componente PaletaLista, lembrando de utilizar a constante auxiliar paleta demonstrada anteriormente:
import "./PaletaLista.css";
import { useState, useEffect } from "react";
import PaletaListaItem from "components/PaletaListaItem/PaletaListaItem";
import { PaletaService } from "services/PaletaService";
???
{ /* NOVO TRECHO */ }
import PaletaDetalhesModal from "components/PaletaDetalhesModal/PaletaDetalhesModal";
{ /* FIM DO NOVO TRECHO */ }
???
function PaletaLista() {
  const [paletas, setPaletas] = useState([]);
???
  const [paletaSelecionada, setPaletaSelecionada] = useState({});
???
  { /* NOVO TRECHO */ }
  const paleta = {
    titulo: "A??a?? com Leite Condensado",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "assets/images/acai-com-leite-condensado.png",
    preco: 10.0,
    sabor: "A??a??",
    recheio: "Leite Condensado",
    possuiRecheio: true,
  };
  { /* FIM DO NOVO TRECHO */ }
???
  const adicionarItem = (paletaIndex) => {
    const paleta = {
      [paletaIndex]: (paletaSelecionada[paletaIndex] || 0) + 1,
    };
    setPaletaSelecionada({ ...paletaSelecionada, ...paleta });
  };
???
  const removerItem = (paletaIndex) => {
    const paleta = {
      [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) - 1,
    };
    setPaletaSelecionada({ ...paletaSelecionada, ...paleta });
  };
???
  const getLista = async () => {
    const response = await PaletaService.getLista();
    setPaletas(response);
  };
???
  useEffect(() => {
    getLista();
  }, []);
???
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
???
      {/* NOVO TRECHO */}
      <PaletaDetalhesModal paleta={paleta} />
      {/* FIM DO NOVO TRECHO */}
    </div>
  );
}
???
export default PaletaLista;


Com o seguinte resultado:


A partir deste ponto poderemos realizar o mecanismo de abertura e fechamento do modal.
Conseguiremos este feito com a implementa????o do j?? conhecido hook de useState do React e nele iremos transitar entre o valor booleano false e a pr??pria paleta a ser exibida, desta forma eliminamos a necessidade de controlar somente a abertura e fechamento como tamb??m o conte??do que deve ser passado e exibido dentro do modal.
Adicione o hook de useState dentro do escopo do componente PaletaLista recebendo as propriedades paletaModal e a fun????o setPaletaModal:
const [paletaModal, setPaletaModal] = useState(false);
Lembre-se de inicializar com o valor false.
Logo em seguida j?? podemos substituir o trecho em PaletaLista onde est?? presente o componente PaletaDetalhesModal pela renderiza????o condicional e passagem de dados com base na constante paletaModal e o mecanismo de fechamento do modal com base no evento closeModal atribuindo em setPaletaModal o valor false.
Tamb??m j?? ?? poss??vel remover a constante paleta utilizada para idealizar a renderiza????o do layout.
Substitua:


<PaletaDetalhesModal paleta={paleta} />

Por:


{paletaModal && <PaletaDetalhesModal paleta={paletaModal} closeModal={() => setPaletaModal(false)} />}

Configura????es finais do Modal



Apesar de implementado a funcionalidade de fechar atualmente n??o temos como abrir o modal. ?? necess??rio implementar um evento de click sobre cada item renderizado na lista.
Para conseguirmos esse feito vamos adicionar no arquivo PaletaListaItem.jsx as altera????es necess??rias para a emiss??o/passagem de informa????es de um componente filho para um componente pai. Neste caso iremos adicionar como par??metro desconstru??do na assinatura de m??todo do componente a propriedade clickItem para realizar essa fun????o e em seguida adicionar o evento de onClick no elemento HTML raiz deste componente emitindo para o componente pai a propriedade de id da paleta para ser buscada de forma unit??ria e apresentada no modal.
Mas como neste card existem bot??es realizando a chamada de fun????es, precisamos adicionar nestes clicks a recep????o do evento de mouse e execu????o da fun????o stopPropagation() como forma de prevenir e evitar o efeito de event bubbling, caso contr??rio, todo click nestes bot??es acionariam tamb??m a emiss??o da passagem de dados/evento de clickItem que para nosso objetivo servir?? de gatilho para a chamada de dados da API e consequentemente a abertura do modal.
Assim obteremos a seguinte estrutura em PaletaListaItem.jsx:



import "./PaletaListaItem.css";
???
function PaletaListaItem({
  paleta,
  quantidadeSelecionada,
  index,
  onRemove,
  onAdd,
  clickItem,
}) {
  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button
        className="Acoes__remover"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(index);
        }}
      >
        remover
      </button>
    );
???
  const badgeCounter = (canRender) =>
    Boolean(canRender) && (
      <span className="PaletaListaItem__badge"> {quantidadeSelecionada} </span>
    );
???
  return (
    <div className="PaletaListaItem" onClick={() => clickItem(paleta.id)}>
      {badgeCounter(quantidadeSelecionada, index)}
      <div>
        <div className="PaletaListaItem__titulo"> {paleta.titulo} </div>
        <div className="PaletaListaItem__preco"> R$ {paleta.preco.toFixed(2)} </div>
        <div className="PaletaListaItem__descricao"> {paleta.descricao} </div>
        <div className="PaletaListaItem__acoes Acoes">
          <button
            className={`Acoes__adicionar ${ !quantidadeSelecionada && "Acoes__adicionar--preencher" }`}
            onClick={(e) => { e.stopPropagation(); onAdd(index); }} >
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
???
export default PaletaListaItem;


Como agora o componente PaletaListaItem ?? um elemento clic??vel precisamos adicionar em PaletaListaItem.css a altera????o de estilo do cursor:

???
.PaletaListaItem {
  cursor: pointer;
???

Para finalizar precisamos atribuir a abertura do modal ao evento de clickItem com a fun????o setPaletaModal passando a constante paleta no arquivo PaletaLista.jsx:

{
  paletas.map((paleta, index) => (
    <PaletaListaItem
      key={`PaletaListaItem-${index}`}
      paleta={paleta}
      quantidadeSelecionada={paletaSelecionada[index]}
      index={index}
      onAdd={(index) => adicionarItem(index)}
      onRemove={(index) => removerItem(index)}
      clickItem={(paletaId) => setPaletaModal(paleta)}
    />
  ));
}

Obteremos o seguinte resultado:


Apesar de estar funcional ?? interessante implementarmos a integra????o com o Backend buscando uma paleta por id, que em certos casos podem apresentar informa????es divergentes, j?? que em uma lista ?? necess??rio exibir menos informa????es que a vis??o detalhada.

Integra????o por id


A requisi????o por id normalmente ?? utilizada para obter mais detalhes de um item, no nosso caso ser?? utilizado de forma did??tica para fins de implementa????o.
Iniciando pela substitui????o de um parseResponse por uma nova fun????o chamada parseTransformItem fazendo a jun????o da fun????o que far?? a manipula????o da resposta com o mapeamento de dados no arquivo PaletaService.js

import { Api } from "helpers/Api";
???
const parseResponse = (response) => response.json();
???
const transformPaleta = (paleta) => {
  const [sabor, recheio] = paleta.sabor.split(" com ");
???
  return {
    ...paleta,
    id: paleta._id,
    titulo: paleta.sabor,
    sabor,
    ...(recheio && { recheio }),
    possuiRecheio: Boolean(recheio),
  };
};


const parseTransformLista = (response) => parseResponse(response).then(paletas => paletas.map(transformPaleta));
???
{/* NOVO TRECHO */}
const parseTransformItem = (response) => parseResponse(response).then(transformPaleta);
{/* FIM DO NOVO TRECHO */}
???
export const PaletaService = {
  getLista: () => fetch(Api.paletaLista(), { method: "GET" }).then(parseTransformLista),
???
  {/* NOVO TRECHO */}
  getById: (id) => fetch(Api.paletaById(id), { method: "GET" }).then(parseTransformItem),
  {/* FIM DO NOVO TRECHO */}
???
  create: () => fetch(Api.createPaleta(), { method: "POST" }).then(parseResponse),
  updateById: (id) => fetch(Api.updatePaletaById(id), { method: "PUT" }).then(parseResponse),
  deleteById: (id) => fetch(Api.deletePaletaById(id), { method: "DELETE" }).then(parseResponse),
};



Servi??o preparado, agora nos resta implementar a fun????o do service no componente.
Inicie com a adi????o da fun????o ass??ncrona getPaletaById que, ap??s a requisi????o, atribuir?? a resposta ?? constante paletaModal dentro do escopo do componente no arquivo PaletaLista.jsx:
const getPaletaById = async (paletaId) => {
  const response = await PaletaService.getById(paletaId);
  setPaletaModal(response);
};
Em sequ??ncia poderemos editar o escopo da propriedade clickItem no componente PaletaListaItem, para realizar a requisi????o da fun????o getPaletaById, dentro do arquivo PaletaLista.js:
{
  paletas.map((paleta, index) => (
    <PaletaListaItem
      key={`PaletaListaItem-${index}`}
      paleta={paleta}
      quantidadeSelecionada={paletaSelecionada[index]}
      index={index}
      onAdd={(index) => adicionarItem(index)}
      onRemove={(index) => removerItem(index)}
      clickItem={(paletaId) => getPaletaById(paletaId)}
    />
  ));
}
A t??tulo de esclarecimentos, vamos exibir como ficou o arquivo PaletaLista.jsx:
import "./PaletaLista.css";
import { useState, useEffect } from "react";
import PaletaListaItem from "components/PaletaListaItem/PaletaListaItem";
import { PaletaService } from "services/PaletaService";
import PaletaDetalhesModal from "components/PaletaDetalhesModal/PaletaDetalhesModal";
???
function PaletaLista() {
  const [paletas, setPaletas] = useState([]);
???
  const [paletaSelecionada, setPaletaSelecionada] = useState({});
???
  const [paletaModal, setPaletaModal] = useState(false);
???
  const adicionarItem = (paletaIndex) => {
    const paleta = {
      [paletaIndex]: (paletaSelecionada[paletaIndex] || 0) + 1,
    };
    setPaletaSelecionada({ ...paletaSelecionada, ...paleta });
  };
???
  const removerItem = (paletaIndex) => {
    const paleta = {
      [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) - 1,
    };
    setPaletaSelecionada({ ...paletaSelecionada, ...paleta });
  };
???
  const getLista = async () => {
    const response = await PaletaService.getLista();
    setPaletas(response);
  };
???
  const getPaletaById = async (paletaId) => {
    const response = await PaletaService.getById(paletaId);
    setPaletaModal(response);
  };
???
  useEffect(() => {
    getLista();
  }, []);
???
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
          clickItem={(paletaId) => getPaletaById(paletaId)}
        />
      ))}
      {paletaModal && ( <PaletaDetalhesModal paleta={paletaModal} closeModal={() => setPaletaModal(false)} />)}
    </div>
  );
}
???
export default PaletaLista;
E por ??ltimo, mas n??o menos importante, a exibi????o do resultado no navegador:



Adi????o de itens ao card??pio
Seguindo o processo de integra????o das aplica????es, iremos preparar a tela que ir?? solicitar a adi????o de uma paleta ao sistema.
Cria????o da tela de adi????o


Iniciaremos com a inclus??o de um novo bot??o no componente Navbar que far?? a chamada de um modal para a inclus??o de uma nova paleta no sistema.
Comece salvando o ??cone de adi????o em src/assets/icons e importe-o em Navbar.jsx:

import paleta from "assets/icons/paleta.svg"


Em seguida vamos adicionar ao layout a estrutura que comportar?? o bot??o:


...
{/* NOVO TRECHO */}

function Navbar({ createPaleta }) {

{/* FIM DO NOVO TRECHO */}

    return (
        <div className="Header">
            <div className="row">
                <div className="Header__logo Logo">
                    <img src={logo} width="70px" alt="Logo El Geladon" className="Logo__icone" />
                    <span className="Logo__titulo"> El Geladon </span>
                </div>
                <div className="Header__opcoes Opcoes">

                    {/* NOVO TRECHO */}

                    <button type="button" className="Opcoes__paleta Paleta" onClick={() => createPaleta() }>
                        <img src={paleta} width="40px" className="Paleta__icone" alt="Adiconar paleta" />
                    </button>

                    {/* FIM DO NOVO TRECHO */}

                    <div className="Opcoes__sacola Sacola">
                        <img src={sacola} width="40px" className="Sacola__icone" alt="Sacola de compras" />
                    </div>
                </div>
            </div>
        </div>
    );
}
...



Sua aplica????o no navegador ter?? a seguinte apar??ncia:


Sabemos que ?? necess??rio adicionar a estiliza????o. Segue os exemplos em Navbar.css:

...
.Opcoes {
  display: flex;
}

.Paleta {
  background: none;
  border: none;
}

.Paleta__icone {
  cursor: pointer;
}
...


Adicione tamb??m os trechos que realizar??o a customiza????o do layout baseada na largura da janela do navegador, conhecidos como media queries:

...
@media (max-width: 840px) {
  .Header {
    max-width: 320px;
  }

  {/* NOVO TRECHO */}

  .row {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  }

  {/* FIM DO NOVO TRECHO */}
}

@media (max-width: 400px) {
  .Header {
    max-width: 250px;
  }

  .row {
    column-gap: 20px;
  }

  {/* NOVO TRECHO */}

  .Logo {
    width: 100%;
  }

  {/* FIM DO NOVO TRECHO */}

  .Logo__titulo {
    font-size: 1.5em;
  }
}
...

Ap??s estas adi????es obteremos o seguinte resultado:


Agora ?? o momento de criar um componente para adicionar o formul??rio que obter?? as informa????es para chamar o endpoint de cria????o/inser????o de paleta no sistema. Ser?? chamado AdicionaPaletaModal, criado em src/components, que far?? o reuso do componente Modal semelhante ao PaletaDetalhesModal

import { useState } from "react";
import Modal from "components/Modal/Modal";
???
function AdicionaPaletaModal({ closeModal }) {
    const form = {
        preco: "",
        sabor: "",
        recheio: "",
        descricao: "",
        foto: "",
    };
???
    const [state, setState] = useState(form);
???
    const handleChange = (e, name) => {
        setState({ ...state, [name]: e.target.value, });
    };
???
    return (
        <Modal closeModal={closeModal}>
            <div className="AdicionaPaletaModal">
                <form autocomplete="off">
                    <h2> Adicionar ao Card??pio </h2>
                    <div>
                        <label className="AdicionaPaletaModal__text" htmlFor="preco"> Preco: </label>
                        <input
                            id="preco"
                            placeholder="10,00"
                            type="text"
                            value={state.preco}
                            onChange={(e) => handleChange(e, "preco")} />
                    </div>
                    <div>
                        <label className="AdicionaPaletaModal__text" htmlFor="sabor"> Sabor: </label>
                        <input
                            id="sabor"
                            placeholder="Chocolate"
                            type="text"
                            value={state.sabor}
                            onChange={(e) => handleChange(e, "sabor")} />
                    </div>
                    <div>
                        <label className="AdicionaPaletaModal__text" htmlFor="recheio"> Recheio: </label>
                        <input
                            id="recheio"
                            placeholder="Banana"
                            type="text"
                            value={state.recheio}
                            onChange={(e) => handleChange(e, "recheio")} />
                    </div>
                    <div>
                        <label className="AdicionaPaletaModal__text" htmlFor="descricao"> Descricao: </label>
                        <input
                            id="descricao"
                            placeholder="Detalhe o produto"
                            type="text"
                            value={state.descricao}
                            onChange={(e) => handleChange(e, "descricao")} />
                    </div>
                    <div>
                        <label className="AdicionaPaletaModal__text  AdicionaPaletaModal__foto-label" htmlFor="foto" >
                            {!state.foto.length ? "Selecionar Imagem" : state.foto}
                        </label>
                        <input
                            className=" AdicionaPaletaModal__foto"
                            id="foto"
                            type="file"
                            accept="image/png, image/gif, image/jpeg"
                            value={state.foto}
                            onChange={(e) => handleChange(e, "foto")} />
                    </div>
???
                    <input
                        className="AdicionaPaletaModal__enviar"
                        type="submit"
                        value="Enviar" />
                </form>
            </div>
        </Modal>
    );
}
???
export default AdicionaPaletaModal;
Note que utilizamos todos os recursos ensinados nas aulas anteriores. Aplicando a atribui????o de valor a partir de um objeto state aos inputs do formul??rio e ao ocorrer mudan??as em cada input ?? reatribu??do o novo valor obtido pelo input ao objeto state.
Repare tamb??m que como estamos usando a sintaxe JSX alguns atributos t??m seu nome de chave alterado, que ?? o caso do htmlFor conhecido como atributo for no HTML convencional.
Para obter uma visualiza????o de como est?? a estrutura, ?? necess??rio importar o componente em Home.jsx:
...
import AdicionaPaletaModal from "components/AdicionaPaletaModal/AdicionaPaletaModal";
...
Em seguida adicione o componente AdicionaPaletaModal abaixo do uso de PaletaLista:
...
<div className="Home__container">
    <PaletaLista />
???
    {/* NOVO TRECHO */}
???
    <AdicionaPaletaModal />
???
    {/* FIM DO NOVO TRECHO */}
</div>
...
Observe o componente antes de sua estiliza????o:
formul??rio estruturado sem estiliza????o
Adicione o arquivo de estilos AdicionaPaletaModal.css em src/components/AdicionaPaletaModal:
.AdicionaPaletaModal {
  font-family: "Exo";
  border-radius: 10px;
  max-height: 350px;
  box-sizing: border-box;
  width: 325px;
  display: flex;
  position: relative;
  transform: translateY(-15px);
  margin-right: -45px;
}
???
.AdicionaPaletaModal form div {
  display: flex;
  margin: 15px 0;
}
???
.AdicionaPaletaModal form {
  width: 100%;
}
???
.AdicionaPaletaModal div input {
  border: none;
  background: rgba(255, 255, 255, 0.3);
  width: 100%;
  margin-left: 15px;
  border-radius: 5px;
  height: 20px;
  padding: 2px 10px;
}
???
.AdicionaPaletaModal__text {
  font-size: 1em;
  line-height: 100%;
}
???
.AdicionaPaletaModal__foto-label {
  display: flex;
  justify-content: center;
  width: 100%;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  color: darkviolet;
  cursor: pointer;
  padding: 5px 10px;
}
???
.AdicionaPaletaModal__foto {
  display: none;
}
???
.AdicionaPaletaModal__enviar {
  background-color: darkviolet;
  cursor: pointer;
  color: white;
  width: 100%;
  border-radius: 5px;
  border: none;
  padding: 5px;
}
???
.AdicionaPaletaModal__enviar:disabled {
  background-color: gray;
}
Agora devemos importar o arquivo AdicionaPaletaModal.css em AdicionaPaletaModal.jsx:
...
import "./AdicionaPaletaModal.css";
...
E ent??o poderemos visualizar como ficou:
formul??rio estruturado com estiliza????o
Parece que a estrutura est?? pronta, mas ao tentar fechar o modal vemos a seguinte tela de erro:


?? necess??rio gerenciar o estado de exibi????o do modal.


Para que seja poss??vel, devemos fazer algumas edi????es em Home.jsx:
import "./Home.css";
import PaletaLista from "components/PaletaLista/PaletaLista";
import AdicionaPaletaModal from "components/AdicionaPaletaModal/AdicionaPaletaModal";
import Navbar from "components/Navbar/Navbar";
???
{ /* NOVO TRECHO */ }
???
import { useState } from "react";
???
{ /* FIM DO NOVO TRECHO */ }
???
function Home() {
???
    { /* NOVO TRECHO */ }
???
    const [canShowAdicionaPaletaModal, setCanShowAdicionaPaletaModal] = useState(false);
???
    { /* FIM DO NOVO TRECHO */ }
???
    return (
        <div className="Home">
???
            {/* NOVO TRECHO */}
???
            <Navbar createPaleta={() => setCanShowAdicionaPaletaModal(true)} />
???
            {/* FIM DO NOVO TRECHO */}
???
            <div className="Home__container">
                <PaletaLista />
???
                {/* NOVO TRECHO */}
???
                {
                    canShowAdicionaPaletaModal &&
                    (<AdicionaPaletaModal closeModal={() => setCanShowAdicionaPaletaModal(false)} />)
                }
???
                {/* FIM DO NOVO TRECHO */}
???
            </div>
        </div>
    );
}
???
export default Home;
Agora podemos testar e comprovar sua funcionalidade:
modal com gerenciamento de exibi????o funcionando
Para evitar erros vamos incluir o atributo required em todos os inputs, exceto o input de "recheio", que ?? n??o obrigat??rio, e o de realizar o envio em AdicionaPaletaModal.jsx.
Vamos preparar as fun????es para realizar o gerenciamento de estado para a habilita????o do bot??o de envio do formul??rio.
Iremos usar o hook de useState para gerenciar o estado e refletir as mudan??as, como tamb??m criar uma fun????o que ser?? chamada quando houver mudan??as no state de dados do formul??rio.
Segue as sugest??es de implementa????o em AdicionaPaletaModal.jsx:
...
const [canDisable, setCanDisable] = useState(true);
???
const canDisableSendButton = () => {
    const response = !Boolean(
        state.descricao.length
        && state.foto.length
        && state.sabor.length
        && state.preco.length
    );
???
    setCanDisable(response);
};
...
Repare que para habilitar o bot??o precisamos que os campos que cont??m o atributo required estejam preenchidos.
Agora que j?? podemos realizar o gerenciamento de estado ?? necess??rio observar quando h?? mudan??as no formul??rio e realizar a chamada da fun????o canDisableSendButton. O hook useEffect far?? isso perfeitamente, pois j?? identifica essas mudan??as.
Lembre-se de realizar a importa????o do useEffect junto a importa????o do useState antes de us??-lo em AdicionaPaletaModal.jsx:
...
import { useState, useEffect } from "react";
...
Ap??s isto implemente a chamada da fun????o em AdicionaPaletaModal.jsx:
...
useEffect(() => {
    canDisableSendButton();
})
...
Em seguida precisamos substituir o input de envio do formul??rio por um elemento button em AdicionaPaletaModal.jsx para que o HTML compreenda, simule seu comportamento como um bot??o. Vejamos o antes e o depois:
Antes:
...
<input className="AdicionaPaletaModal__enviar" type="submit" value="Enviar" />
...
Depois:
...
<button
    className="AdicionaPaletaModal__enviar"
    type="button"
    disabled="{canDisable}" >
    Enviar
</button>
...
Note que j?? associamos a propriedade disable ao retorno do useState canDisable.
Nossa aplica????o ter?? o seguinte comportamento:
formul??rio com gerenciamento de habilita????o para envio
Com a estrutura e estilos prontos, podemos prosseguir com o processo de integra????o do sistema.
Integra????o com endpoint de cria????o
Como j?? deixamos anteriormente os endpoints adicionados na aplica????o, utilizaremos os m??todos prontos no arquivo PaletaService.js, se atentando somente a adi????o dos headers e de um mapeamento entre os objetos devolvidos pelo frontend e o envio para a API, como tamb??m seu retorno.
Iremos come??ar pela edi????o do m??todo create no service PaletaService.js, ficando da seguinte maneira:
...
create: (paleta) => fetch(Api.createPaleta(), { method: "POST", body: JSON.stringify(paleta), mode: "cors", headers: {
    "Content-Type": "application/json",
} }).then(parseTransformItem),
...
Agora podemos realizar a importa????o do service PaletaService.js em AdicionaPaletaModal.jsx:
...
import { PaletaService } from "services/PaletaService";
...
Para integrar os sistemas, precisamos enviar os dados do formul??rio para o endpoint de cria????o atrav??s do service chamando o m??todo create.
Comece com a cria????o de uma fun????o ass??ncrona chamada createPaleta que far?? o mapeamento e valida????o dos dados necess??rios a serem enviados para a API, a implementa????o da integra????o e emiss??o de fechamento do modal em AdicionaPaletaModal.jsx:
...
const createPaleta = async () => {
    const renomeiaCaminhoFoto = (fotoPath) => fotoPath.split('\\').pop();
???
    const { sabor, recheio, descricao, preco, foto } = state;
???
    const titulo = sabor + (recheio && ' com ' + recheio);
???
    const paleta = {
        sabor: titulo,
        descricao,
        preco,
        foto: `assets/images/${renomeiaCaminhoFoto(foto)}`
    }
???
    const response = await PaletaService.create(paleta);
    closeModal();
}
...
Para explicarmos os conceitos aqui utilizados:
Observe que criamos uma fun????o dentro desta chamada renomeiaCaminhoFoto que para o nosso caso, a t??tulo de exemplo, simula o processo de armazenamento local dos arquivos e pega somente o nome da imagem e faz a jun????o deste ao caminho/nome da pasta indicada onde est??o armazenadas as demais fotos.
Tamb??m h?? a l??gica que constr??i o t??tulo baseado se h?? ou n??o recheio, caso s?? haja sabor somente ele ser?? adicionado ao t??tulo, mas caso possua recheio a valida????o ser?? true e em seguida concatenar?? a preposi????o com ao sabor, juntando o recheio ao t??tulo.
Esta l??gica ?? mostrada no seguinte trecho:
...
const titulo = sabor + (recheio && ' com ' + recheio);
...
H?? o processo de desconstru????o de um objeto, onde, em vez de pegarmos o caminho completo da informa????o utilizamos somente a propriedade propriamente dita.
Segue como exemplo que para pegarmos a propriedade descricao ir??amos seguir com state.descricao, mas ao desconstruirmos em const { descricao } = state obteremos o mesmo resultado, por??m desta vez somente utilizando a constante descricao.
Nesta fun????o ocorre a constru????o do objeto que ser?? enviado ao backend, chamamos de paleta e ele recebe uma estrutura espec??fica com sabor, descricao e preco, foto. Em seguida h?? o envio do objeto paleta ao service que far?? o envio como m??todo POST para a API indicando a cria????o/inser????o/envio de dados ao sistema.
Este par??grafo descreve o seguinte trecho:
...
const response = await PaletaService.create(paleta);
...
Ao fim da espera pelo retorno da cria????o/inser????o desta paleta ?? aplica????o necessitamos fechar o modal, ent??o emitimos o seu fechamento realizando a chamada de closeModal();.
J?? que criamos esta fun????o, precisamos cham??-la, n??o ?? mesmo?
Adicione sua chamada via evento de click no bot??o que faz o envio de dados do formul??rio:
...
<button
    className="AdicionaPaletaModal__enviar"
    type="button"
    disabled="{canDisable}"
    onClick="{createPaleta}" >
  Enviar
</button>
...
Com isto teremos o seguinte comportamento:
envio de dados funcionando com refresh
A integra????o ocorre, por??m ainda ?? necess??rio realizar o recarregamento da p??gina, mesmo com a integra????o acontecendo.
Precisamos preparar um evento que ser?? disparado ao receber o retorno da adi????o de uma paleta no sistema. Vamos cham??-lo de onCreatePaleta e adicion??-lo na assinatura de m??todo do componente AdicionaPaletaModal:
...
function AdicionaPaletaModal({ closeModal, onCreatePaleta }) {
...
Em seguida adicione a chamada desta propriedade em AdicionaPaletaModal.jsx ap??s o recebimento da resposta retornada pelo endpoint:
...
const response = await PaletaService.create(paleta);
???
{/* NOVO TRECHO */}
???
onCreatePaleta(response);
???
{/* FIM DO NOVO TRECHO */}
???
closeModal();
...
Mas somente isto n??o basta, precisamos informar aos demais componentes essas mudan??as.
Um n??vel acima ser?? recebido no componente Home, ent??o vamos precisar de um hook de useState para atualizar os dados na tela.
Adicione no escopo do componente em Home.jsx:
...
const [paletaParaAdicionar, setPaletaParaAdicionar] = useState();
...
Agora podemos implementar a passagem e atualiza????o desse evento no mesmo arquivo:
...
{
    canShowAdicionaPaletaModal &&
    <AdicionaPaletaModal
        closeModal={() => setCanShowAdicionaPaletaModal(false)}
        onCreatePaleta={(paleta) => setPaletaParaAdicionar(paleta)}
        />
}
...
Antes de passar este retorno para o componente PaletaLista, precisamos prepar??-lo para receb??-lo como evento em PaletaLista.jsx:
import "./PaletaLista.css";
import { useState, useEffect } from "react";
import PaletaListaItem from "components/PaletaListaItem/PaletaListaItem";
import { PaletaService } from "services/PaletaService";
import PaletaDetalhesModal from "components/PaletaDetalhesModal/PaletaDetalhesModal";
???
{ /* NOVO TRECHO */ }
???
function PaletaLista({ paletaCriada }) {
???
{ /* FIM DO NOVO TRECHO */ }
???
    const [paletas, setPaletas] = useState([]);
???
    const [paletaSelecionada, setPaletaSelecionada] = useState({});
???
    const [paletaModal, setPaletaModal] = useState(false);
???
    const adicionarItem = (paletaIndex) => {
        const paleta = {
            [paletaIndex]: (paletaSelecionada[paletaIndex] || 0) + 1,
        };
???
        setPaletaSelecionada({ ...paletaSelecionada, ...paleta });
    };
???
    const removerItem = (paletaIndex) => {
        const paleta = {
            [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) - 1,
        };
???
        setPaletaSelecionada({ ...paletaSelecionada, ...paleta });
    };
???
    const getLista = async () => {
        const response = await PaletaService.getLista();
        setPaletas(response);
    };
???
    const getPaletaById = async (paletaId) => {
        const response = await PaletaService.getById(paletaId);
        setPaletaModal(response);
    };
???
    { /* NOVO TRECHO */ }
???
    const adicionaPaletaNaLista = (paleta) => {
        const lista = [...paletas, paleta];
        setPaletas(lista);
    };
???
    useEffect(() => {
        if (paletaCriada) adicionaPaletaNaLista(paletaCriada);
    }, [paletaCriada]);
???
    { /* FIM DO NOVO TRECHO */ }
???
    useEffect(() => {
        getLista();
    }, []);
???
    return (
        <div className="PaletaLista">
            {
                paletas.map((paleta, index) => (
                    <PaletaListaItem
                        key={`PaletaListaItem-${index}`}
                        paleta={paleta}
                        quantidadeSelecionada={paletaSelecionada[index]}
                        index={index}
                        onAdd={(index) => adicionarItem(index)}
                        onRemove={(index) => removerItem(index)}
                        clickItem={(paletaId) => getPaletaById(paletaId)} />
                ))
            }
            {
                paletaModal && (
                <PaletaDetalhesModal
                    paleta={paletaModal}
                    closeModal={() => setPaletaModal(false)} />
                )
            }
        </div>
    );
}
???
export default PaletaLista;
Agora, toda vez que uma paleta for criada poderemos adicion??-la ?? lista de forma simples, gerenciando atrav??s dos hooks que j?? aplicamos diversas vezes.
Falta somente realizar a passagem adicionando em Home.jsx a paleta propriamente dita, passando no atributo paletaCriada o hook paletaParaAdicionar:
import "./Home.css";
import PaletaLista from "components/PaletaLista/PaletaLista";
import AdicionaPaletaModal from "components/AdicionaPaletaModal/AdicionaPaletaModal";
import Navbar from "components/Navbar/Navbar";
import { useState } from "react";
???
function Home() {
    const [canShowAdicionaPaletaModal, setCanShowAdicionaPaletaModal] = useState(false);
    const [paletaParaAdicionar, setPaletaParaAdicionar] = useState();
???
    return (
        <div className="Home">
            <Navbar createPaleta={() => setCanShowAdicionaPaletaModal(true)} />
            <div className="Home__container">
???
                {/* NOVO TRECHO */}
???
                <PaletaLista paletaCriada={paletaParaAdicionar} />
                {
                    canShowAdicionaPaletaModal && (
                    <AdicionaPaletaModal
                        closeModal={() => setCanShowAdicionaPaletaModal(false)}
                        onCreatePaleta={(paleta) => setPaletaParaAdicionar(paleta)} />
                    )
                }
???
                {/* FIM DO NOVO TRECHO */}
???
            </div>
        </div>
    );
}
???
export default Home;
Para evitarmos desencontros, assim ficou o componente AdicionaPaletaModal:
import "./AdicionaPaletaModal.css";
import { useState, useEffect } from "react";
import Modal from "components/Modal/Modal";
import { PaletaService } from "services/PaletaService";
???
function AdicionaPaletaModal({ closeModal, onCreatePaleta }) {
    const form = {
        preco: "",
        sabor: "",
        recheio: "",
        descricao: "",
        foto: "",
    };
???
    const [state, setState] = useState(form);
    const [canDisable, setCanDisable] = useState(true);
???
    const canDisableSendButton = () => {
        const response = !Boolean(
            state.descricao.length &&
            state.foto.length &&
            state.sabor.length &&
            state.preco.length
        );
???
        setCanDisable(response);
    };
???
    const handleChange = (e, name) => {
        setState({ ...state, [name]: e.target.value });
    };
???
    useEffect(() => {
        canDisableSendButton();
    });
???
    const createPaleta = async () => {
        const renomeiaCaminhoFoto = (fotoPath) => fotoPath.split("\\").pop();
???
        const { sabor, recheio, descricao, preco, foto } = state;
???
        const titulo = sabor + (recheio && " com " + recheio);
???
        const paleta = {
            sabor: titulo,
            descricao,
            preco,
            foto: `assets/images/${renomeiaCaminhoFoto(foto)}`,
        };
???
        const response = await PaletaService.create(paleta);
        onCreatePaleta(response);
        closeModal();
    };
???
    return (
        <Modal closeModal={closeModal}>
            <div className="AdicionaPaletaModal">
                <form autocomplete="off">
                    <h2> Adicionar ao Card??pio </h2>
                    <div>
                        <label className="AdicionaPaletaModal__text" htmlFor="preco"> Preco: </label>
                        <input
                            id="preco"
                            placeholder="10,00"
                            type="text"
                            value={state.preco}
                            required
                            onChange={(e) => handleChange(e, "preco")} />
                    </div>
                    <div>
                        <label className="AdicionaPaletaModal__text" htmlFor="sabor"> Sabor: </label>
                        <input
                            id="sabor"
                            placeholder="Chocolate"
                            type="text"
                            value={state.sabor}
                            required
                            onChange={(e) => handleChange(e, "sabor")} />
                    </div>
                    <div>
                        <label className="AdicionaPaletaModal__text" htmlFor="recheio"> Recheio: </label>
                        <input
                            id="recheio"
                            placeholder="Banana"
                            type="text"
                            value={state.recheio}
                            onChange={(e) => handleChange(e, "recheio")} />
                    </div>
                    <div>
                        <label className="AdicionaPaletaModal__text" htmlFor="descricao"> Descricao: </label>
                        <input
                            id="descricao"
                            placeholder="Detalhe o produto"
                            type="text"
                            value={state.descricao}
                            required
                            onChange={(e) => handleChange(e, "descricao")} />
                    </div>
                    <div>
                        <label className="AdicionaPaletaModal__text  AdicionaPaletaModal__foto-label" htmlFor="foto" >
                            {!state.foto.length ? "Selecionar Imagem" : state.foto}
                        </label>
                        <input
                            className=" AdicionaPaletaModal__foto"
                            id="foto"
                            type="file"
                            accept="image/png, image/gif, image/jpeg"
                            value={state.foto}
                            required
                            onChange={(e) => handleChange(e, "foto")} />
                    </div>
???
                    <button
                        className="AdicionaPaletaModal__enviar"
                        type="button"
                        disabled={canDisable}
                        onClick={createPaleta} >
                        Enviar
                    </button>
                </form>
            </div>
        </Modal>
    );
}
???
export default AdicionaPaletaModal;
Com esta parte realizada, podemos observar o comportamento final:
envio de dados funcionando normalmente
Pr??ximos passos
Adi????o implementada, poderemos prosseguir com a atualiza????o de dados e dele????o de itens na pr??xima aula, como tamb??m corre????es finais do projeto. Aplique e absorva o conhecimento passado se preparando para a pr??xima aula.



