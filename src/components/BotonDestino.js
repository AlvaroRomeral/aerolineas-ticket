import "../Theme.css";
import { Link } from "react-router-dom";

function BotonDestino(props) {
  return (
    <div className="botonDestino">
      <h1 className="text1">{props.destino}</h1>
      <h2 className="text2">
        <Link to={`/clienteform/${props.destino}`}>Confirmar Vuelo</Link>
      </h2>
    </div>
  );
}

export default BotonDestino;
