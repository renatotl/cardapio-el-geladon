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
