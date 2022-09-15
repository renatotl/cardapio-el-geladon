import "./adicionaPaletaModal.css";

import { useState, useEffect } from "react";
import Modal from "components/Modal/Modal";
import { PaletaService } from "services/PaletaService";



function AdicionaPaletaModal({ closeModal, onCreatePaleta }) {
    const form = {
    preco: "",
    sabor: "",
    recheio: "",
    descricao: "",
    foto: "",
  };

  // o setState que altera o state
  // nosso hook useState começa vazio porque forma está vazio
  const [state, setState] = useState(form);

  //manipula o state amedida das alteraçoes nos INPUTS
  const handleChange = (e, name) => {
    //o primeiro é o evento"e" a segunda que da nome a cada uk dos inputs

    //sempre que houver uma mudança do campo dos input ele aciona o SETSTATE  que aciona o useState

    //o primeiro spredoperation espalha os valores no state

    //vinculando o valor digitado a propriedade name
    setState({ ...state, [name]: e.target.value });
  };

  const [canDisable, setCanDisable] = useState(true); // é verdadeiro que o botão está desabilidato

  // ela pode desabilitar o botão de enviar e verifica os comapos
  const canDisableSendButton = () => {
    const response = !Boolean(
      state.descricao.length &&
        state.foto.length &&
        state.sabor.length && // as habilidades estão vinculadas com o state
        state.preco.length
    );

    setCanDisable(response); // o response do vai ser verdadeiro se toodas os compos forem verdadeiros
  };
  useEffect(() => {
    canDisableSendButton();
  });



  
  const createPaleta = async () => {
      const renomeiaCaminhoFoto = (fotoPath) => fotoPath.split('\\').pop();
  
      const { sabor, recheio, descricao, preco, foto } = state;
  
      const titulo = sabor + (recheio && ' com ' + recheio);
  
      const paleta = {
          sabor: titulo,
          descricao,
          preco,
          foto: `assets/images/${renomeiaCaminhoFoto(foto)}`
      }
  
      const response = await PaletaService.create(paleta);
      onCreatePaleta(response);

      closeModal();
  }




  return (
    //essa propriedade closeModal é para fechar o modal MAS a gente importou o modal para ca
    <Modal closeModal={closeModal}>
      <div className="AdicionaPaletaModal">
        <form autoComplete="off">
          {/*ele tira a sujestão de desto dentro do formulário*/}
          <h2> Adicionar ao Cardápio </h2>
          <div>
            <label className="AdicionaPaletaModal__text" htmlFor="preco">
              {" "}
              {/*nossa propriedade o preco */}Preco:{" "}
            </label>
            <input
              id="preco"
              placeholder="10,00"
              type="text"
              value={state.preco} // atribuindo o value deste campo a propriedade preco do state
              onChange={(e) => handleChange(e, "preco")}
              required
            />
          </div>
          <div>
            <label className="AdicionaPaletaModal__text" htmlFor="sabor">
              {" "}
              Sabor:{" "}
            </label>
            <input
              id="sabor"
              placeholder="Chocolate"
              type="text"
              value={state.sabor}
              onChange={(e) => handleChange(e, "sabor")}
              required
            />
          </div>
          <div>
            <label className="AdicionaPaletaModal__text" htmlFor="recheio">
              {" "}
              Recheio:{" "}
            </label>
            <input
              id="recheio"
              placeholder="Banana"
              type="text"
              value={state.recheio}
              onChange={(e) => handleChange(e, "recheio")}
            />
          </div>
          <div>
            <label className="AdicionaPaletaModal__text" htmlFor="descricao">
              {" "}
              Descricao:{" "}
            </label>
            <input
              id="descricao"
              placeholder="Detalhe o produto"
              type="text"
              value={state.descricao}
              onChange={(e) => handleChange(e, "descricao")}
              required
            />
          </div>
          <div>
            <label
              className="AdicionaPaletaModal__text  AdicionaPaletaModal__foto-label"
              htmlFor="foto"
            >
              {/*se não houver uma foto TAMAMHO*/}
              {!state.foto.length ? "Selecionar Imagem" : state.foto}
            </label>
            <input
              className=" AdicionaPaletaModal__foto"
              id="foto"
              type="file"
              accept="image/png, image/gif, image/jpeg"
              value={state.foto}
              onChange={(e) => handleChange(e, "foto")}
              required
            />
          </div>

          <button
            className="AdicionaPaletaModal__enviar"
            type="button"
            disabled="{canDisable}"// propriedade que chama o canDisable
            onClick="{createPaleta}"
          >
            Enviar
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default AdicionaPaletaModal;
