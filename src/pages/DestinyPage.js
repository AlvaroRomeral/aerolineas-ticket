import "../Theme.css";
import { useParams } from "react-router-dom";
import BotonDestino from "../components/BotonDestino";

function DestinyPage(props) {
  const { origen } = useParams();

  return (
    <div className="Cabezera">
      <div>
        <h1>Seleccione un destino del vuelo</h1>
      </div>
      <div>
        <BotonDestino id="1" destino="Roma" origen={origen}/>
        <BotonDestino id="1" destino="Florencia" origen={origen} />
        <BotonDestino id="1" destino="venecia" origen={origen} />
        <BotonDestino id="1" destino="Padua" origen={origen} />
        <BotonDestino id="1" destino="Sicilia" origen={origen} />
      </div>
    </div>
  );
}

export default DestinyPage;