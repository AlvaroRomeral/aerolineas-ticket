import { useParams } from "react-router-dom";
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
    </div>
  );
}

export default VueloForm;
