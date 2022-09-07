import "./Home.css"; // trazendo o arquivo estilizado pra cá
import PaletaLista from "components/PaletaLista/PaletaLista";
import NavBar from "components/NavBar/NavBar"
import "./Home.css"

function Home() {
  return (
    //
    <div className="Home">
      
    <NavBar/>
      <div className="Home__container">
        <PaletaLista />
      </div>
    </div>
  );
}
// o atributo class do html é esse classname no jsx
export default Home; // exportand
// todos os componente precisam ser exportados
// no exemplo do professor o component Home será exportado no index.jsx
