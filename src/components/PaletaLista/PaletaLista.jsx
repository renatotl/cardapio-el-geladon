import "./PaletaLista.css";

//useEffect ele controla todos os estados de um componente quando ele é montado ou desmontado na tela ele controla o ciclo de vida dos componentes quando meu component for renderizado na tela eu preciso ativar a função getLista porque essa função precisa ser invocada e não executada de qualquer jeito
import PaletaListaItem from "components/PaletaListaItem/PeletaListaItem";
//import { paletas } from "mocks/paletas";// trazendo milha lista de objetos pra car
import React, {useState,useEffect} from 'react';// trazendo o useState para dentro do nosso projeto. Esse cara é um HOOK. Qunado clicar dentro de uma plaeta ela será selecionada


import PaletaDetalhesModal from "components/PaletaDetalhesModal/PaletaDetalhesModal";



import {PaletaService} from "Services/PaletaService"

// é aqui que vamos renderizar na tela a nossa lista mockada
function PaletaLista() {

  //montamos este code depois que removemos os dados mocados

  const [paletas, setPaletas] = useState([]);
  //o 1º parametro é p selecionado o 2º é a função que vai alterar esse valor atual
  const [paletaSelecionada, setPaletaSelecionada] = useState({});// o useState({}) está vazio porque quero que ele começe vazio. O valor do meu objeto inicalmente é 
  

  const [paletaModal, setPaletaModal] = useState(false);//hook responsável por apri o modal


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

  const adicionarItem = (paletaIndex) => {// reebendo o paletaIndex que foi clicada
    // paleta é um objeto { [paletaIndex]: é a minha chaves a paleta selecionada Number(paletaSelecionada[paletaIndex] é o número de vezes que ela foi selecionada 
          const paleta = { [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) +1 }// incremendando o numero 1 a cada click, se não tiver nada ele coloca 0
          // passando 2 paramntro o paletaSelecionada pode começar em 0 e paleta} é o click que foi dado que passa para dentro de paletaSelecionada
          setPaletaSelecionada({ ...paletaSelecionada, ...paleta});
  }



  //essa função aje ao contrário do adicionarItem
  const removerItem = (paletaIndex) => {
    const paleta = { [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) -1 }
    setPaletaSelecionada({...paletaSelecionada, ...paleta});
}

//PaletaService camada de serviço o medoto getLista está lá vamos usala pelo hook useEffect. quando ele for renderizado em tela ele ativa essa function
const getLista = async () => {
  const response = await PaletaService.getLista();
  setPaletas(response);// fazendo a conexão com a api e esperar a lista de paletas ser retornada armazena essa lista de paletas dentro dessa constate response e envia para o useState


//USEEFFECT ele tem 2 parametros o primeiro é uma função e o segundo uma array
  useEffect(() => { // o primeiro parametro é nosso getLista
    getLista();// o segundo um array vazio e ele é obg se não fica em um loop infinito
  }, []);// no momento que ele for renderizado na tela ele ativa o getLista e 

};

  //a função de cima precisa ser antes do return de baixo
  return (
    <div className="PaletaLista">
      {paletas.map((paleta, index) => (//funão que vai interar ou varrer milha lista de objetos // a key é o index da lista e el vai atribuir um id a cada elemento renderizado na tela
      
      //pegamos a nossa PaletaListaItem que foi importada já com oscódigos
        <PaletaListaItem 
        key={`PaletaListaItem-${index}`} //valores que estão sendo passados como parametros de pai para filho
        paleta ={paleta}
        quantidadeSelecionada ={paletaSelecionada[index]}
        index={index} 
        onAdd={index => adicionarItem(index)}
			  onRemove={index => removerItem(index)} 
      />
      ))}
{paletaModal && <PaletaDetalhesModal paleta={paletaModal} closeModal={() => setPaletaModal(false)} />}

    </div>

// componente/PaletaLista = PAI
// componente PaletaListaItem = FILHO


  );
}
// o onClick ativa o evento de click
//no botão adicionar tem duas ações. Uma é a função do botão e a outra pra estilizar no css
export default PaletaLista;

// antigo
// src={require("assets/images/doce-de-leite-com-doce-de-leite.png")}
// para a foto pegar foi necessário remover o default lá me paletas.js


// o metod require retorna um objeto e dentro desse objete exite uma propriedade defoult e dentro de defalut existe o caminha, mas asveses ele não acha então a gente remove o .defoult 
