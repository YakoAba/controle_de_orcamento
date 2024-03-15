import { Button } from "react-bootstrap";
import ProdutoInput from "../inputNomeProduto";
import ComboBoxMarcas from "../comboboxMarcas";


export default function AbaProduto() {
    return (
        <fieldset className="mt-3 mb-3 text-white">
            <legend style={{ fontSize: 'large', color: 'white' }}>Cadastro de Produtos</legend>
            <ComboBoxMarcas />
            <ProdutoInput />
            <Button variant="primary" className="btn btn-primary mt-3 mx-1" >Cadastrar</Button>
        </fieldset>
    );
}