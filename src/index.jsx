import React from "react";// biblioteca react. Apartir da versao 16, esta linha n e obri...// biblioteca dom que renderiza os componentes em tela
import ReactDOM from "react-dom";

import Home from "./components/Home"// trazendo para Home o nosso Home lá em componentes


import './index.css';


//renderiza o conteúdo abaixo
ReactDOM.render(
  <React.StrictMode>
   <Home/>
  </React.StrictMode>,//teg que emite alertas casos de erro
  document.getElementById("root")
);

//no código acima não pode ter espaço!. Foi dessa forma que imprimimos o Home na tela.


