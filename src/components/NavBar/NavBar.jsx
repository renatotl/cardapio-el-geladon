import "./NavBar.css"// trazendo nossa NavBar.css

import sacola from "assets/icons/sacola.svg";// trazendo a sacola pra ca
import logo from "assets/logo.svg";// trazendo o logo pra cá

function NavBar(){
    return (
        <div className="Home__header Header">
        <div className="row">
        <div className="Header__logo Logo">
          <img
            src={logo} // importamos o logo assim
            width="70px" //defindo largula
            alt="Logo El Geladon" // nome pro logo
            className="Logo__icone" // será usada no css
          />
          <span className="Logo__titulo"> El Geladon </span>
        </div>
        <div className="Header__opcoes Opcoes">
          <div className="Opcoes__sacola Sacola">
            <img
              src={sacola}
              width="40px"
              className="Sacola__icone"
              alt="Sacola de compras"
            />
          </div>
        </div>
      </div>
    </div>
    );
};

export default NavBar;