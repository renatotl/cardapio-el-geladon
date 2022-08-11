import "./PaletaLista.css";
import { paletas } from "../mocks/paletas";// trazendo milha lista de objetos pra car
import React, {useState} from 'react';// trazendo o useState para dentro do nosso projeto. Esse cara é um HOOK. Qunado clicar dentro de uma plaeta ela será selecionada

// é aqui que vamos renderizar na tela a nossa lista mockada
function PaletaLista() {
  //o 1º parametro é p selecionado o 2º é a função que vai alterar esse valor atual
  const [paletaSelecionada, setPaletaSelecionada] = useState({});// o useState({}) está vazio porque quero que ele começe vazio. O valor do meu objeto inicalmente é vazio

  const adicionarItem = (paletaIndex) => {// reebendo o paletaIndex que foi clicada
    // paleta é um objeto { [paletaIndex]: é a minha chaves a paleta selecionada Number(paletaSelecionada[paletaIndex] é o número de vezes que ela foi selecionada 
          const paleta = { [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) +1 }// incremendando o numero 1 a cada click, se não tiver nada ele coloca 0
          // passando 2 paramntro o paletaSelecionada pode começar em 0 e paleta} é o click que foi dado que passa para dentro de paletaSelecionada
          setPaletaSelecionada({ ...paletaSelecionada, ...paleta});
  }
  return (
    <div className="PaletaLista">
      {paletas.map((paleta, index) => (//funão que vai interar ou varrer milha lista de objetos // a key é o index da lista e el vai atribuir um id a cada elemento renderizado na tela
        <div className="PaletaListaItem" key={`PaletaListaItem-${index}`}>
          <span className="PaletaListaItem__badge"> {paletaSelecionada[index] || 0} </span>
          <div>
            <div className="PaletaListaItem__titulo"> {paleta.titulo} </div>
            <div className="PaletaListaItem__preco">
              R$ {paleta.preco.toFixed(2)}
            </div>
            <div className="PaletaListaItem__descricao">
              {" "}
              {paleta.descricao}{" "}
            </div>
            <div className="PaletaListaItem__acoes Acoes">
              
              <button className="Acoes__adicionar Acoes__adicionar--preencher"onClick={() => adicionarItem(index)}>
                adicionar
              </button>/
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
  );
}
// o onClick ativa o evento de click
//no botão adicionar tem duas ações. Uma é a função do botão e a outra pra estilizar no css
export default PaletaLista;

// antigo
// src={require("assets/images/doce-de-leite-com-doce-de-leite.png")}
// para a foto pegar foi necessário remover o default lá me paletas.js


// o metod require retorna um objeto e dentro desse objete exite uma propriedade defoult e dentro de defalut existe o caminha, mas asveses ele não acha então a gente remove o .defoult 
