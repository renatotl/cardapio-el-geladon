import "./adicionaPaletaModal.css"

import { useState } from "react";
import Modal from "components/Modal/Modal";

function AdicionaPaletaModal({ closeModal }) {
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
        setState({ ...state, [name]: e.target.value, });
    };

    return (
        //essa propriedade closeModal é para fechar o modal MAS a gente importou o modal para ca
        <Modal closeModal={closeModal}>
            <div className="AdicionaPaletaModal">
                <form autocomplete="off">{/*ele tira a sujestão de desto dentro do formulário*/}
                    <h2> Adicionar ao Cardápio </h2>
                    <div>
                        <label className="AdicionaPaletaModal__text" htmlFor="preco"> {/*nossa propriedade o preco */ }Preco: </label>
                        <input
                            id="preco"
                            placeholder="10,00"
                            type="text"
                            value={state.preco}// atribuindo o value deste campo a propriedade preco do state
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

                            {/*se não houver uma foto TAMAMHO*/}
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

                    <input
                        className="AdicionaPaletaModal__enviar"
                        type="submit"
                        value="Enviar" />
                </form>
            </div>
        </Modal>
    );
}

export default AdicionaPaletaModal;