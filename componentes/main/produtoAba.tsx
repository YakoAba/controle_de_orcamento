import { Button } from "react-bootstrap";
import ProdutoInput from "../inputNomeProduto";

export default function AbaProduto() {
    return (
        <fieldset className="mt-3 mb-3 text-white">
            <legend style={{ fontSize: 'large', color: 'white' }}>Cadastro de Produtos</legend>
            <ProdutoInput />
            <Button variant="primary" className="btn btn-primary mt-3 mx-1" >Adicionar</Button>
        </fieldset>
    );
}