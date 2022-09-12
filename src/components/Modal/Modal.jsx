import "./Modal.css";
import Overlay from "components/Overlay/Overlay";

function Modal({ children, closeModal }) {
  // o medoto hadleClick vai dizer se o modal vai ser fechado ou não


  // recebe 2 valores . primeiro é o evento de click o segundo o metodod stopPropagation que está sendo acionado pelo evento ele para a proagaçao do evento 
  const handleClick = (e, canClose) => {
    e.stopPropagation();
    if (canClose) closeModal();
  };

  return (
    <Overlay overlayClick={closeModal}>{/*o overlayClick ativa o closeModal */}
      <div className="Modal" onClick={handleClick}>
        <span className="Modal__close" onClick={(e) => handleClick(e, true)}>{/*ativado por um evento e ativa o handleClick */}
          +
        </span>
        <div className="Modal__body">{children}</div>
      </div>
    </Overlay>
  );
}
export default Modal;