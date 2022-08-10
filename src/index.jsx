import React from "react";// biblioteca react. Apartir da versao 16, esta linha n e obri...// biblioteca dom que renderiza os componentes em tela
import ReactDOM from "react-dom";

import Home from "./components/Home"// trazendo para Home o nosso index.jsx lá em componentes


import './index.css';// trazendo o arquivo estilizado do index.css pra cá

// o componete Home virou uma TAG
//renderiza o conteúdo abaixo
ReactDOM.render(// método render
  <React.StrictMode>
   <Home/>
  </React.StrictMode>,//teg que emite alertas casos de erro
  document.getElementById("root")// apontando para um id chamado root. Se referan a pasta public, index.html, dentro do body possui uma div com o id chamado root  é dentro desta div que todos os componentes são renderizados, entaõ apontamos para essa div que tudo será renderizado dentro dela
);

//no código acima não pode ter espaço!. Foi dessa forma que imprimimos o Home na tela.


