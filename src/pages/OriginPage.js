import "../Theme.css";
import BotonOrigen from "../components/BotonOrigen";

function OriginPage(props) {
  return (
    <div className="Cabezera">
      <div>
        <h1>Seleccione un origen del vuelo</h1>
      </div>
      <div>
        <BotonOrigen id="1" origen="Sevilla" />
        <BotonOrigen id="1" origen="Madrid" />
        <BotonOrigen id="1" origen="Barcelona" />
        <BotonOrigen id="1" origen="Santander" />
        <BotonOrigen id="1" origen="Malaga" />
      </div>
    </div>
  );
}

export default OriginPage;
