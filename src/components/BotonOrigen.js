import "../Theme.css";
import { Link } from "react-router-dom";


function BotonOrigen(props) {

  return (
    <div className="BotonOrigen">
      <h1 className="text1">{props.origen}</h1>
      <h2 className="text2">
        <Link to={`/origen/${props.origen}`}>Reservar Vuelo</Link>
      </h2>
    </div>
  );
}

export default BotonOrigen;
