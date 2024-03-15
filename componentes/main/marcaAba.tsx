import { Button } from "react-bootstrap";
import MarcaInput from "../inputNomeMarca";

export default function AbaMarca() {
  return (
    <fieldset className="mt-3 mb-3 text-white">
      <legend style={{ fontSize: 'large', color: 'white' }}>Cadastro de Marcas</legend>
      <MarcaInput />
      <Button variant="primary" className="btn btn-primary mt-3 mx-1" >Cadastrar</Button>
    </fieldset>
  );
}