import { useState } from "react";
import "./Home.css"; // trazendo o arquivo estilizado pra cá
import PaletaLista from "components/PaletaLista/PaletaLista";
import NavBar from "components/NavBar/NavBar";
import "./Home.css";
import AdicionaPaletaModal from "components/AdicionaPaletaModal/adicionaPaletaModal";

function Home() {
  // o segundo parametro altera o primeiro o false dentro do useState é pra começar fechado
  const [canShowAdicionaPaletaModal, setCanShowAdicionaPaletaModal] =
    useState(false);
  const [paletaParaAdicionar, setPaletaParaAdicionar] = useState();

  return (
    //
    <div className="Home">
      <NavBar
        createPaleta={() => setCanShowAdicionaPaletaModal(true)}
        onCreatePaleta={(paleta) => setPaletaParaAdicionar(paleta)}
      />
      {/*FUNÇÃO que ativa o }
    <NavBar createPaleta={() => setCanShowAdicionaPaletaModal(true)} />{/*FUNÇÃO que ativa o s*/}
      <div className="Home__container">
        <PaletaLista paletaCriada={paletaParaAdicionar}/>

        {
          // se for verdadairo ele renderiza o modal se for falso ele não renderiza o modal
          canShowAdicionaPaletaModal && (
            <AdicionaPaletaModal
              closeModal={() => setCanShowAdicionaPaletaModal(false)}
            />
          )
        }
        <AdicionaPaletaModal />
      </div>
    </div>
  );
}
// o atributo class do html é esse classname no jsx
export default Home; // exportand
// todos os componente precisam ser exportados
// no exemplo do professor o component Home será exportado no index.jsx
