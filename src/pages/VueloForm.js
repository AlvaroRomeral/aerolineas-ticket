import { useParams } from "react-router-dom";
import botonDestino from "../components/BotonDestino";
import "../Theme.css";

function VueloForm(props) {
  const { origen } = useParams();

  return (
    <div className="form">
      <h1>Vuelo desde {origen}</h1>
      <form>
        {/* <label>
                    Name:
                    <input type='text' name="name" />
                </label>
                <br/>
                <label>
                    Surname:
                    <input type='text' name="apellido" />
                </label>
                <br/>
                <label>
                    Second Surname:
                    <input type='text' name="apellido2" />
                </label>
                <br/> */}
        <br />
        <label>
          Luggage:
          <input type="checkbox" name="equipaje" />
        </label>
        <br />
        <label>
          No return:
          <input type="checkbox" name="sinvuelta" />
        </label>
        <br />
        {/* <label>
                    Age:
                    <input type='number' name="edad" />
                </label> */}
        <br />
        <input type="submit" value="Submit" />
      </form>
      <botonDestino destino="Roma" />
      <botonDestino destino="Venecia" />
      <botonDestino destino="Destino 3" />
      <botonDestino destino="Destino 4" />
    </div>
  );
}

export default VueloForm;
