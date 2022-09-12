import "./Overlay.css";
 
// a primeira propriedade vai ser renderixado aqui a segunda é um click
function Overlay({ children, overlayClick }) {
  return (
    <div className="Overlay" onClick={() => overlayClick()}>
      {children}
    </div>
  );
}
 
export default Overlay;