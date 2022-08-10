import "./PaletaLista.css";
import { paletas } from "../mocks/paletas";// trazendo milha lista de objetos pra car
import React, {useState} from 'react';

// é aqui que vamos renderizar na tela a nossa lista mockada
function PaletaLista() {
  const [paletaSelecionada, setPaletaSelecionada] = useState({});

  const adicionarItem = (paletaIndex) => {
          const paleta = { [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) +1 }
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
//no botão adicionar tem duas ações. Uma é a função do botão e a outra pra estilizar no css
export default PaletaLista;

// antigo
// src={require("assets/images/doce-de-leite-com-doce-de-leite.png")}
// para a foto pegar foi necessário remover o default lá me paletas.js


// o metod require retorna um objeto e dentro desse objete exite uma propriedade defoult e dentro de defalut existe o caminha, mas asveses ele não acha então a gente remove o .defoult 
