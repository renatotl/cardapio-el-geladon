import "./PaletaListaItem.css";


//com o  clickItem, podemos abrir o modal com as informações desse modal
function PaletaListaItem({ paleta, quantidadeSelecionada, index ,onRemove, onAdd,  clickItem, }) {


  // função com 2 params o 1º é a condição o 2º a paleta selecionada
  // se a condição de baixo for verdadeira ele vai renderizar o span
  const badgeCounter = (canRender, index) =>
    Boolean(canRender) && (
      <span className="PaletaListaItem__badge">
        {" "}
        {quantidadeSelecionada}{" "}
      </span>
    );



    //add o evento no botão abaixo com o "e" no onClick
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



  return (//função de click para pegar os informações 
    <div className="PaletaListaItem" onClick={() => clickItem(paleta.id)}>
      {badgeCounter(quantidadeSelecionada, index)}
      <div>
        <div className="PaletaListaItem__titulo"> {paleta.titulo} </div>
        <div className="PaletaListaItem__preco">
          R$ {paleta.preco.toFixed(2)}
        </div>
        <div className="PaletaListaItem__descricao"> {paleta.descricao} </div>
        <div className="PaletaListaItem__acoes Acoes">
        <button
            className={`Acoes__adicionar ${ !quantidadeSelecionada && "Acoes__adicionar--preencher" }`}
            onClick={(e) => { e.stopPropagation(); onAdd(index); }} >
            adicionar
          </button>{/* add o stopPropagation*/}
          /{removeButton(quantidadeSelecionada, index)}
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
