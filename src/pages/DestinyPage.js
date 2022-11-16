import "../Theme.css";
import BotonDestino from "../components/BotonDestino";

function DestinyPage(props) {
  return (
    <div className="Cabezera">
      <div>
        <h1>Seleccione un destino del vuelo</h1>
      </div>
      <div>
        <BotonDestino id="1" destino="Roma" />
        <BotonDestino id="1" destino="Florencia" />
        <BotonDestino id="1" destino="venecia" />
        <BotonDestino id="1" destino="Padua" />
        <BotonDestino id="1" destino="Sicilia" />
      </div>
    </div>
  );
}

export default DestinyPage;